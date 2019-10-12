const express = require('express')
const router = express.Router()
const createError = require('http-errors')
const User = require('./models/model_user')

console.log('Here is at index.js in apis')

const sendMsg = function(data){

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

const msgSet = (to, from, newConvs)=>{
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
		r.comu[idx].convs.forEach(x => {
			//해당 work 메시지를 검색
			if(x.date == newConvs.date){
				console.log('work 찾음!!!::::', JSON.stringify(x))
				x.works.flag_expired = true
			}
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
	//if 메시지가 work라면
	//expired callback을 걸어준다.
	if((newConvs.works.notice != undefined) && (newConvs.works.flag_expired == false)){
		console.log('this is works and deadline has not yet passed!!!')
		console.log('새로 works 가 등록되었을 때  flag_expired 값은::::', newConvs.works.flag_expired)
		setTimeout((works)=>{
	    	console.log('diffSec::::', diffSec(newConvs.endDate))
	    	newConvs.works.flag_expired = true
	    	//update db to set flag_expired value on true
	    	msgSet(to, from, newConvs)
		}, 1000 * 30, works)
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
		console.log(JSON.stringify(data))
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
