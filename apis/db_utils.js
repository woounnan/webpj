var mongoose = require('mongoose')
var express = require('express')
var router = express.Router()
var createError = require('http-errors')
var models = require('./model')

router.get('/', (req, res, next) => {
	res.send('Here is at db_utils.js')
	next()
})
router.get('/getCompanys', (req, res, next) => {
	console.log(models)
})

module.exports = router