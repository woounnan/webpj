const express = require('express')
const router = express.Router()
const createError = require('http-errors')

console.log('Here is at index.js in apis')


var app = express();

const server = app.listen(8082, () => {
	console.log('server running on port 8082')
})
const flowCS = undefined
const flowSC = undefined

const io = require('socket.io')(server)
io.on('connection', function(socket){
	console.log('id: ' + socket.id)
	flowCS = io.of('/CS')
	flowSC = io.of('/SC')

	setInterval(() =>{
	console.log('send msg to client!')
	flowSC.emit('msg', 'Hi!! Im a server')
}, 3000)
})



router.get('/', (req, res, next) => {
	res.send('Here is at index.js in apis')
})

router.use('/login', require('./login'))
router.use('/db', require('./db_utils'))
router.use('/files', require('./files'))
router.use('/chat', require('./chat'))
module.exports = router
