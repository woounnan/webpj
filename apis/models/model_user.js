const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	id: { type: String, required: true, unique: true, trim: true, index: true},
	password: { type: String, required: true, trim: true },
	key: { type: String, required: true, unique: true, default: Date.now},
	position: { type: String, unique: true, required: true, trim: true},
	division: { type: String, required: true, trim: true},
	company: { type: String, required: true, trim: true},
	image : {type: String, required: true, trim: true},
	leave : {type: Number, required: true}, //if value is 1, user leave work, else do not
	comu: [{
		with: String,
		convs: [{
			id: String,
			date: String,
			imageUrl: String,
			contents: String,
			position: String,
			image: String, //If works exists, then content must be empty.
			works: {
				title: String,
				contents: String,
				startDate: String,
				endDate: String,
				file_save: String,
				file_real: String,
				notice: Number, //1: notice 0: work(required to ack)
				to: Number //1: send 2:recv
			}
		}]
	}]
})


var User = mongoose.model('User', userSchema, 'list_user')

module.exports = User
