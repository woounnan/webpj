var express = require('express')
var router = express.Router()
var createError = require('http-errors')


router.get('/', (req, res, next ) =>{
	res.send('Here is in apis/chat')
})



router.use('/con', (req, res, next) =>{
	res.send('You connected to a chat server')

	const app = express()
	const server = app.listen(8001, () => {
		console.log('server running on port 8001')
	})

	const io = require('socket.io')(server)
	io.on('connection', function(socket){
		console.log('id: ' + socket.id)
		socket.emit('sendMsg', 'Hi! im server!')
		socket.on('msg', (data) => {
			console.log('from client: ' + data)
		})
	})
})


module.exports = router

