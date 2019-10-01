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


var getUser = function (to, from, newConvs){
	User.findOne({position: from}, (e, r) => {
		if(e){
			console.error('getUser Error in index.js:::: ', e)
		}
		var idx = -1
		var i = 0
		for(x in r.comu){
			if(x.with === to){
				console.log('find idx ::', x.with)
				idx = i
			}
			i++
		}
		if(idx === -1){
			console.log('have not been chatting with ', to)
			var newComu = { with: to, convs: []
			}	
		}
		else{
			var newComu = r.comu[idx]
		}
		console.log('getUser:::: ', newComu)
		newComu.convs.push(newConvs)
		User.update({
			position : to
			},
			{ 
				comu: newComu
			},
			(e, r) => {
				if(!e){
					console.log('getUser in index.js::::: succeeded')
				}
				else{
					console.log('getUser in index.js::::: failed update')
				}
			}
		)
	})
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
		console.log('recv::save msg')
		console.log(JSON.stringify(data))
		getUser(data.header.to, data.header.from, data.msg)
		getUser(data.header.from, data.header.to, data.msg)
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
