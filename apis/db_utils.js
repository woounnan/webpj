var mongoose = require('mongoose')
var express = require('express')
var router = express.Router()
var createError = require('http-errors')
var Company = require('./models/model_company')
var User = require('./models/model_user')
var multer  = require('multer')
var upload = multer({ dest: 'public/' })



router.get('/', (req, res, next) => {
	res.send('Here is at db_utils.js')
})

router.post('/save', upload.single('bin'), function (req, res, next) {
  // req.file is the `avatar` file
  res.status(204).send()
  // req.body will hold the text fields, if there were any
})

router.post('/addUser', (req, res, next) => {
	console.log(req.body)
	var user = {
		id : req.body.id,
		password : req.body.pw,
		position : req.body.pos,
		company : req.body.cp,
		division : req.body.div
	}
	var code = -1
	var ret = 0
	//find a user
	User.findOne({id: user.id}, (e, r) =>{
		if(!r){
			ret = 1
			console.log(JSON.stringify(r))
			console.log('111111111111')
		}
		else{
			ret = -1
			console.error(e)
		}
	})
	if(ret == -1){
		Company.findOne({name: user.company}, (e, r) =>{
			if(r){
				console.log('Can create!')
				var users = new User(user)
				users.save( (e, users) =>{
					if(user){
						console.log('User created')
						code = 1
						ret = 1
						console.log('2222222222')
					}
					else{
						ret = -1
						console.error(e)
					}
				})
			}
			else
				console.error(e)
		})
	}
	console.log('error')
	return res.send({code: code})
})


router.post('/getCp', (req, res, next) => {
	Company.find((e, cps) => {
		if(e) res.send('error!!: ' + e)
		res.json(cps)
	})
})

module.exports = router