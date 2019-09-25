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
  console.log(req.file.originalname)
  console.log(req.file.filename)
  console.log(req.file.path)
  console.log(req.body)
  res.status(204).send()
  // req.body will hold the text fields, if there were any
})

router.post('/addUser', (req, res, next) => {
	var user = req.body
	console.log('@@@@@@@@@@@@@@')
	console.log(JSON.stringify(user))
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