var mongoose = require('mongoose')
var express = require('express')
var router = express.Router()
var createError = require('http-errors')
var models = require('./model')

router.get('/getCompanys', (req, res, next) => {
	res.send(models)
})

module.exports = router