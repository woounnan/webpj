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

router.post('/getUsers', (req, res, next) => {
	//get other users except for own
	var id = req.body.id
	User.find((e, r) => {
		if(r.length > 0 ){
			console.log('getUsers::successed')
			for(var i = 0; i<r.length; i++){
				if(r[i].id == id){
					r.splice(i, 1)
					break;
				}
			}
			console.log(JSON.stringify(r))
			res.send({code: 1, users: r, test:'tests'})
		}
		else{
			console.log('getUsers::failed\n', e)
			res.send({code: -1})
		}
	})
})

router.post('/getChat', (req, res, next) => {
	var srcId = req.body.srcId
	var to = req.body.to
	console.log('getChat::::srcId :', srcId)
	console.log('getChat::::to :', to)
	User.findOne({id: srcId}, (e, r) => {
		if(!e){
			console.log('getChat::successed')
			r.comu.forEach(x =>{
				if(x.with === to){
					console.log('found data!!!')
					console.log(JSON.stringify(x.convs))
					res.send({code: 1, conv: r, test:'tests'})
				}
				else{
					console.log('failed search')
					res.send({code: -1})
				}
			})
		}
		else{
			console.log('getChat::failed')
			console.error(e)
			res.send({code: -1})
		}
	})
})

router.post('/addUser', (req, res, next) => {
	console.log(req.body)
	var user = {
		id : req.body.id,
		password : req.body.pw,
		position : req.body.pos,
		company : req.body.cp,
		division : req.body.div,
		leave: 0,
		image : 'https://cdn.vuetifyjs.com/images/lists/'+String(parseInt((Math.random()*1000)%6)+1)+'.jpg'
	}
	var code = 0
	//find a user
	User.findOne({id: user.id}, (e, r) =>{
		if(r!=null){
			code = -1
	res.send({code: code})
		}
		else{
			Company.findOne({name: user.company}, (e, r) =>{
				if(r){
					console.log('Can create!')
					var users = new User(user)
					users.save( (e, users) =>{
						if(user){
							console.log('User created')
							code = 1
							res.send({code: code})
						}
						else{
							console.error(e)
							code = -1
	res.send({code: code})
						}
					})
				}
				else{
					console.error(e)
					code=-1
					res.send({code: code})
				}
			})
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