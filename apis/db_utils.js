var mongoose = require('mongoose')
var express = require('express')
var router = express.Router()
var createError = require('http-errors')
var Company = require('./models/model_company')
var User = require('./models/model_user')
var multer  = require('multer')
var upload = multer({ dest: 'public/' })


router.post('/getWorks', (req, res, next) =>{
	var myId = req.body.id
	console.log('myId ::::', myId)
	User.findOne({id: myId}, (e, r) =>{
		if(!e){
			list_check = []
			//works를 제외한 나머지 일반 메시지 제거
			for(var i = 0; i< r.comu.length; i++){
				for(var j = 0; j < r.comu[i].convs.length; j++){
					if(r.comu[i].convs[j].works.notice == undefined){
						r.comu[i].convs.splice(r.comu[i].convs.indexOf(r.comu[i].convs[j]), 1)
						j--
					}
				}
			}

			
			res.status(200).send({list_works: r.comu})
		}else{
			console.error('/getWorks error occurred::::', e)
			res.status(500).send()
		}
	})
})

router.get('/', (req, res, next) => {
	res.send('Here is at db_utils.js')
})

router.post('/work', upload.single('bin'), function (req, res, next) {
  // req.file is the `avatar` file
  	var works = {
		title : req.body.title,
		selects : req.body.selects.split(','),
		contents : req.body.contents,
		startDate : req.body.startDate,
		endDate : req.body.endDate,
		notice : req.body.notice,
		state_work: req.body.state_work,
		state_notice: req.body.state_notice,
		file_s_real: req.file.originalfilename,
		file_s_save: req.file.filename,
	}
	works.append('flag_expired', new Date().valueOf() < new Date(this.v_work.endDate).valueOf())
    setTimeOut((works)=>{console.log('here is in /work callback function ::::')}, 1000, works)
	res.status(200).send({works: works})
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
	console.log(srcId)
	console.log(to)
	User.findOne({id: srcId}, (e, r) => {
		if(!e){
			for(var x in r.comu){
				console.log('r.comu[x].with::::', r.comu[x].with)
				if(r.comu[x].with === to){
					console.log('found data!!!')
					res.send({code: 1, convs: r.comu[x].convs, test:'tests'})
					return true
				}
			}
			console.log('failed search')
			res.send({code: -1, convs: []})
			return false

		}
		else{
			console.log('getChat::failed')
			console.error(e)
			res.send({code: -1})
			return false
		}
	})
})

router.post('/addUser', (req, res, next) => {
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