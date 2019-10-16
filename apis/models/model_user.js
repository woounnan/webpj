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
				by : String, //sender's id
				by_position : String,
				title: String,
				contents: String,
				startDate: String,
				endDate: String,
				flag_expired: Boolean,
				flag_onlyView: Boolean, //true면 채팅창에 표시만 하는용도, workslist에 포함시키지 않음.
				flag_date: String,				
				flag_c_upload: Boolean,
				flag_s_upload: Boolean,
				file_s_save: String,
				file_s_real: String,
				file_c_save: String,
				file_c_real: String,
				state_s: String, //"미제출", "승인대기", "승인거절", "승인완료"
				state_c: String,//알림시 "미확인", "확인"
				notice: Boolean, //true: notice false: work(required to ack)
				favor: Boolean,
			}
		}]
	}]
})


var User = mongoose.model('User', userSchema, 'list_user')

module.exports = User
