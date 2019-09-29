const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
	name: { type: String, required: true, unique: true, trim: true, index: true},
	division: [String],
	user: [String]
})

var Company = mongoose.model('Company', companySchema, 'list_company')



module.exports = Company