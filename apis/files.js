var express = require('express')
var router = express.Router()
var createError = require('http-errors')


router.post('/save', (req, res, next) => {
	var recv = res.body
	console.log('call fileSave on server ::post')
	res.send(JSON.stringify(recv))
})
router.options('/save', (req, res, next) => {
	var recv = res.body
	console.log('call fileSave on server ::options')
	res.send(JSON.stringify(recv))
})

module.exports = router