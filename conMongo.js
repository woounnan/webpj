const express =require('express')
const mongoose = require('mongoose')

var con = mongoose.connect('mongodb://192.168.132.129:27017/users', {useNewUrlParser: true}, (err) =>{
	if(err) return console.error('connection error occured in test_mg.js + ['+err + ']')
	console.log('mongo connection succeeded!')
});


module.exports = con