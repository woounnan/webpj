var mongoose = require('mongoose')
var express = require('express')
var router = express.Router()
var createError = require('http-errors')
var Company = require('./models/model_company')
var User = require('./models/model_user')

router.get('/', (req, res, next) => {
	res.send('Here is at db_utils.js')
	next()
})

router.post('/addCp', (req, res, next) => {
	var user = {}
	user = req.body
	var ret = 0
	//find a user
	User.findOne({id: user.id}, (e, r) =>{
		if(e){
			res.send({code:-1})
			return console.error(e)
		}
		if(!r){
			console.log('Can create!')
			var users = new User(user)
			users.save( (e, users) =>{
				if(e){
					res.send({code: -1})
					return console.error('login.js::10....occurred at users.save')
				}
					console.log('User created')
			})
			res.send({code: 1})
		}
		else{
			console.log('Cant create T.t')
			res.send({code: -1})
			return 
		}
	})
})

router.post('/getCp', (req, res, next) => {
	Company.find((e, cps) => {
		if(e) res.send('error!!: ' + e)
		res.json(cps)
	})
})

module.exports = router