const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	id: { type: String, required: true, unique: true, trim: true, index: true},
	password: { type: String, required: true, unique: true, trim: true },
	key: { type: String, required: true, unique: true, default: Date.now},
	name: { type: String, required: true, trim: true},
	company: { type: String, required: true, trim: true}
})


const companySchema = new mongoose.Schema({
	name: { type: String, required: true, unique: true, trim: true, index: true}
})

var User = mongoose.model('User', userSchema, 'list_user')
var Company = mongoose.model('Company', companySchema, 'list_company')

module.exports = User
module.exports = Company