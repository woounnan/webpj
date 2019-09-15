var express = require('express')
var router = express.Router()
var createError = require('http-errors')

router.get('/', (req, res, next) => {
	var recv = res.body
	res.send('hi! Im files.js')
})


router.post('/save', (req, res, next) => {
	var recv = res.body
	console.log('call fileSave on server ::post')
	res.send(JSON.stringify(recv))
	console.log(recv)
})
router.options('/save', (req, res, next) => {
	var recv = res.body
	console.log('call fileSave on server ::options')
	res.send(JSON.stringify(recv))
	console.log(recv)
})

module.exports = router