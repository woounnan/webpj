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
		console.log('r: ', JSON.stringify(r))
		console.log('r.comu: ', JSON.stringify(r.comu))
		for(x in r.comu){
			console.log('x.with: ', x.with)
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
		console.log('getUser - before:::: ', newComu)
		newComu.convs.push(newConvs)
		console.log('getUser:::: ', newComu)
		User.update({
				position : from
			}, {
			$set : {
				comu: {
					with: to, 
					convs: {
						id: newConvs.id, 
						position: newConvs.position, 
						date: newConvs.date, 
						imageUrl: newConvs.imageUrl, 
						contents: newConvs.contents, 
						works: newConvs.works
					} 
				} 
			} 
		},
		(e, r) => {
			if(e)
				console.error('getUser Error:::::', e)
			else
				console.log('getUser succeeded::::', r)
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
