var mongoose = require('mongoose')
var express = require('express')
var router = express.Router()
var createError = require('http-errors')
var Company = require('./models/model_company')

router.get('/', (req, res, next) => {
	res.send('Here is at db_utils.js')
	next()
})
/*
router.get('/addCp', (req, res, next) => {
	var name = req.body
	console.log
})
*/
router.post('/getCp', (req, res, next) => {
	console.log(Company.find((e, cps) => {
		if(e) res.send('error!!: ' + e)
		console.log(cps)
		res.json(cps)
	}))
})

module.exports = router