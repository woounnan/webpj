const express = require('express')
const router = express.Router()
const createError = require('http-errors')
const User = require('./models/model_user')

console.log('Here is at index.js in apis')


var diffSec = (endDate) => {
	var cur = new Date();
	var end = new Date(endDate); 
	cur = cur.getTime()
	end = end.getTime()
	diff= end - cur;
	return diff
}
var app = express();
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

const msgSet = (to, from, newConvs, fieldName, value, test)=>{
	User.findOne({position: from}, (e, r) => {
		if(e){
			console.error('findOne Error in index.js:::: ', e)
		}
		console.log('----------------------------', test)
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
			console.log(x.date)
			if(x.date == findDate){
				//x.works['fieldName'] = value
				console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
				//console.log('x.date:::', x.date)
				//console.log('work 찾음!!!::::', r.comu[idx].convs[i])
				r.comu[idx].convs[i].works[fieldName] = value
				//console.log('work 찾음2222!!!::::', x)
				
			}
			else{
			}
			i++
		})
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
			}, 1000 * 10, newConvs)

		}
		else{
			if((newConvs.works.by_position != newConvs.position) && (newConvs.position === to)) {
				//승인 대기
				console.log('받은 작업임 in index.js')
				console.log('1: ', newConvs.works.by_position)
				console.log('2: ', to)
				console.log('3: ', newConvs.position)
				//받은 작업이고 요청자에게 제출하는 메시지일 때, 요청자의 상태 변경
				msgSet(to, from, newConvs, 'state_c', newConvs.works.state_c, '@@@@@@@@@@@@@')
				
			}
			else{
				//승인 완료, 승인거절
				console.log('요청 작업임 in index.js')
				console.log('1: ', newConvs.works.by_position)
				console.log('2: ', to)
				console.log('3: ', newConvs.position)
				//요청자, 수신자 상태 모두 변경
				msgSet(to, from, newConvs, 'state_s', newConvs.works.state_s)
				msgSet(to, from, newConvs, 'state_c', newConvs.works.state_c)
			}
		}
	}
	//그 후 메시지를 저장한다.
	msgPush(to, from, newConvs)
}


const server = app.listen(8082, () => {
	console.log('server running on port 8082')
})

const io = require('socket.io')(server)
io.on('connection', function(socket){
	console.log('id: ' + socket.id)

	socket.on('msg', (data) =>{
		console.log('recv msg')
		console.log(data)
		saveMsg(data.header.to, data.header.from, data.msg)
		saveMsg(data.header.from, data.header.to, data.msg)
		//send all clients except for sender
		socket.broadcast.emit('msg', data)
	})
})



router.get('/', (req, res, next) => {
	res.send('Here is at index.js in apis')
})

router.use('/login', require('./login'))
router.use('/db', require('./db_utils'))
router.use('/files', require('./files'))
router.use('/chat', require('./chat'))
module.exports = router
