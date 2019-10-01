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
		newComu.convs.push(newConvs)
		console.log('getUser:::: ', newComu)
		db.list_user.update({
				position : "군수과장"
			}, {
			$set : {
				comu: {
					with: "정보보호병", 
					convs: {
						id: "test", 
						position: "정보보호병", 
						date: "11:00:11", 
						imageUrl: "", 
						contents: "제발!!!!!!!!!!!!!", 
						works: undefined
					} 
				} 
			} 
		})
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
