var mongoose = require('mongoose')
var express = require('express')
var router = express.Router()
var createError = require('http-errors')
var Company = require('./models/model_company')

router.get('/', (req, res, next) => {
	res.send('Here is at db_utils.js')
	next()
})
router.get('/getCompanys', (req, res, next) => {
	console.log(Company.find())
})

module.exports = router