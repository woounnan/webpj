var express = require('express')
var router = express.Router()
var createError = require('http-errors')


router.get('/', (req, res, next ) =>{
	res.send('Here is in apis/chat')
})

router.get('/con', (req, res, next) =>{
var app = express();

const server = app.listen(8081, () => {
	console.log('server running on port 8081')
})

const io = require('socket.io')(server)
io.on('connection', function(socket){
	console.log('id: ' + socket.id)
	socket.on('sendMsg', function(data){
		console.log('from client: ' + data)
	})
	res.send(socket.emit('test', 'Hi ! im server')
	)
	socket.interval = setInterval(() => {
		console.log('send msg to client')
	}, 1000)
})
})


module.exports = router

