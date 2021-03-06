const express = require('express')
const router = express.Router()
const createError = require('http-errors')
const User = require('./models/model_user')
var app = express();

console.log('Here is at index.js in apis')
var timeCount = 0
var getTimeCount = function(){
	timeCount += 15
	if(timeCount > 30)
		timeCount = 0

	return timeCount
}

var g_socket = undefined

const server = app.listen(8082, () => {
	console.log('server running on port 8082')
})

const io = require('socket.io')(server)
io.on('connection', function(socket){
	g_socket = socket
	console.log('id: ' + socket.id)

	socket.on('sock_initWorks', (data) =>{
		socket.broadcast.emit('sock_initWorks')
	})
	socket.on('msg', (data) =>{
		console.log('recv msg')
		console.log(data)
		saveMsg(data.header.to, data.header.from, data.msg)
		saveMsg(data.header.from, data.header.to, data.msg)
		//send all clients except for sender
		socket.broadcast.emit('msg', data)
	})
})


var diffSec = (endDate) => {
	var cur = new Date();
	var end = new Date(endDate); 
	cur = cur.getTime()
	end = end.getTime()
	diff= end - cur;
	return diff
}
var list_user = [{
	id:'',
	sock:undefined
}]
const msgPush = (to, from, newConvs)=>{
	User.findOne({position: from}, (e, r) => {
		if(e){
			console.error('findOne Error in index.js:::: ', e)
		}
		var flag = 0
		var idx = -1
		for(x in r.comu){
			if(r.comu[x].with === to){
				console.log('find idx ::')
				idx = x
				flag = 1
				break
			}
		}
		if(flag === 0){
			console.log('have not been chat with ', to)
			User.update({
					position : from
				}, {
				$push : {
					comu: {
						with: to,
						convs: newConvs
					}
				}
			},
			(e, r) => {
				if(e)
					console.error('findOne--non exist Error:::::', e)
			})
		}
		else{
			r.comu[idx].convs.push(newConvs)
			User.update({
					position : from
				}, {
				$set : {
					comu: r.comu
				} 
			},
			(e, r) => {
				if(e)
					console.error('findOne--exist  Error:::::', e)
			})
		}
	})
}

const msgSet = (to, from, newConvs, fieldName, value, sep)=>{
	User.findOne({position: from}, (e, r) => {
		if(e){
			console.error('findOne Error in index.js:::: ', e)
		}
		console.log('----------------------------',sep)
		var flag = 0
		var idx = -1
		var findDate = newConvs.works.flag_date
		console.log('findDate:::', findDate)
		for(x in r.comu){
			if(r.comu[x].with === to){
				console.log('find idx ::', r.comu[x].with)
				idx = x
				flag = 1
				break
			}
		}
		var i =0
		r.comu[idx].convs.forEach(x => {
			//해당 work 메시지를 검색				
			if(x.date == findDate){
				//x.works['fieldName'] = value
				//console.log('work 찾음!!!::::', r.comu[idx].convs[i])
				r.comu[idx].convs[i].works[fieldName] = value
				r.comu[idx].convs[i].works['favor'] = true
				//console.log('work 찾음2222!!!::::', x)		
			}
			else{
			}
			i++
		})
		console.log('----------------------------')
		//바꾼 값으로 update
		User.update({
				position : from
			}, {
			$set : {
				comu: r.comu
			} 
		},
		(e, r) => {
			if(e)
				console.error('findOne--exist  Error:::::', e)
		})
	})
}

var saveMsg = function (to, from, newConvs){
	//saveMsg에서 추가하는 속성 flag_expired, favor - Work.vue에서 제어하지 않는 값들
	//if 메시지가 work라면
	//expired callback을 걸어준다.

	//msg가 works면
	console.log('flag_sendDate :::', newConvs.works)
	if(newConvs.works != undefined){
		//처음 생성된 works면
		if((newConvs.works.flag_date == newConvs.date) && ((newConvs.works.state_s === "미제출") || (newConvs.works.state_s === "미확인"))){
			console.log('this is works that deadline has not yet passed!!!')
			newConvs.works['flag_expired'] = new Date().valueOf() > new Date(newConvs.works.endDate).valueOf()
			newConvs.works['favor'] = false

			setTimeout((newConvs)=>{
		    	newConvs.works.flag_expired = true
		    	//update db to set flag_expired value on true
		    	msgSet(to, from, newConvs, 'flag_expired', true)
			}, 1000 * 20, newConvs)
		}
		else{
			if(newConvs.works.flag_sender != 'checkPage') {
				//C, S가 보내는 모든 중간 작업 메시지
				//state_c만 변경된다
				console.log('받은 작업임 in index.js')
				console.log('1: ', newConvs.works.by_position)
				console.log('2: ', to)
				console.log('3: ', newConvs.position)
				//받은 작업이고 요청자에게 제출하는 메시지일 때, 요청자의 상태 변경
				setTimeout((to, from, newConvs, fieldName, value, sep)=>{msgSet(to, from, newConvs, fieldName, value, sep)}, getTimeCount(),to, from, newConvs, 'state_c', newConvs.works.state_c, '111111111111111111111111111111')	
			}
			else{
				//store.js에서 initWorks시 loop 돌면서 모든 c의 상태가 변경되었을 때 checkPage가 업데이트 보내면 실행되는 루프
				//state_s의 상태를 변경한다.
				console.log('요청 작업임 in index.js')
				console.log('1: ', newConvs.works.by_position)
				console.log('2: ', to)
				console.log('3: ', newConvs.position)
				//요청자, 수신자 상태 모두 변경
				setTimeout((to, from, newConvs, fieldName, value, sep)=>{msgSet(to, from, newConvs, fieldName, value,sep)}, getTimeCount(),to, from, newConvs, 'state_s', newConvs.works.state_s, '2222222222222222222222222222222')
			}
		}
	}
	//그 후 메시지를 저장한다.
	msgPush(to, from, newConvs)
}




router.get('/', (req, res, next) => {
	res.send('Here is at index.js in apis')
})

router.use('/login', require('./login'))
router.use('/db', require('./db_utils'))
router.use('/files', require('./files'))
router.use('/chat', require('./chat'))
module.exports = router
