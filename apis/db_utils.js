var mongoose = require('mongoose')
var express = require('express')
var router = express.Router()
var createError = require('http-errors')
var Company = require('./models/model_company')
var User = require('./models/model_user')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
 


router.get('/', (req, res, next) => {
	res.send('Here is at db_utils.js')
})

router.post('/saveWork', upload.single('myFile'), function (req, res, next) {
  // req.file is the `avatar` file
  console.log(JSON.stringify(req.file))
  console.log(req.body)
  // req.body will hold the text fields, if there were any
})

router.post('/addUser', (req, res, next) => {
	var user = {
		id: req.body.id,
		password: req.body.pw,
		division: req.body.div,
		company: req.body.cp
	}
	var code = -1
	var ret = 0
	//find a user
	User.findOne({id: user.id}, (e, r) =>{
		if(!r){
			ret = 1
		}
		else{
			ret = -1
		}
	})
	if(ret == 1){
		Company.findOne({name: user.company}, (e, r) =>{
			if(r){
				console.log('Can create!')
				var users = new User(user)
				users.save( (e, users) =>{
					if(user){
						console.log('User created')
						code = 1
						ret = 1
					}
					else{
						ret = -1
					}
				})
			}
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