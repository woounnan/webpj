var express = require('express')
var router = express.Router()
var createError = require('http-errors')


router.post('/fileSave', (req, res, next) => {
	var recv = res.body
	console.log('call fileSave on server')
	res.send(JSON.stringify(recv))
})