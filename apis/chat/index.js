var express = require('express')
var router = express.Router()
var createError = require('http-errors')


router.get('/', (req, res, next ) =>{
	res.send('Here is in apis/chat')
})



module.exports = router

