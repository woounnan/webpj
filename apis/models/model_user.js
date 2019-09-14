const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	id: { type: String, required: true, unique: true, trim: true, index: true},
	password: { type: String, required: true, trim: true },
	key: { type: String, required: true, unique: true, default: Date.now},
	division: { type: String, required: true, trim: true},
	company: { type: String, required: true, trim: true}
})


var User = mongoose.model('User', userSchema, 'list_user')

module.exports = User