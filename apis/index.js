const express = require('express')
const router = express.Router()
const createError = require('http-errors')

console.log('Here is at index.js in apis')

const sendMsg = function(data){

}

var app = express();

const server = app.listen(8082, () => {
	console.log('server running on port 8082')
})

const io = require('socket.io')(server)
io.on('connection', function(socket){
	console.log('id: ' + socket.id)
	/*
	flowCS = io.of('/CS')
	flowSC = io.of('/SC')
	
	flowCS.on('msg', (data) => {
	
	})
	*/
	socket.on('msg', (data) =>{
		console.log('recv msg, so send msg')
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
