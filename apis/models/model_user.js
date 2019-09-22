const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	id: { type: String, required: true, unique: true, trim: true, index: true},
	password: { type: String, required: true, trim: true },
	key: { type: String, required: true, unique: true, default: Date.now},
	division: { type: String, required: true, trim: true},
	company: { type: String, required: true, trim: true},
	chatRoom: [String],
	comu: [{
		with: String, convs: {
			author: String,
			date: String,
			imageUrl: String,
			contents: String,
			work: {
				title: String,
				contents: String,
				startDate: String,
				endDate: String,
				file_save: String,
				file_real: String,
				notice: Number //1: notice 0: work(required to ack)
			}
		}
	}]
})


var User = mongoose.model('User', userSchema, 'list_user')

module.exports = User