const mongoose = require('mongoose')
const con = require('../../conMongo')

const companySchema = new mongoose.Schema({
	name: { type: String, required: true, unique: true, trim: true, index: true},
	division: [String],
	user: [String]
})

var Company = mongoose.model('Company', companySchema, 'list_company')


var cp = {
	name : '',
	division : ['체계운용과', '계획운용과', '인사과', '군수과', '본부중대', '지원1중대', '지원2중대'],
	user: []
}

con.db.list_company((e, collection) =>{
	if(!collection){
		list_add = ['2div', '21div', '12div']
		list_add.forEach(x => {
			cp.name = x

			var company = new Company(cp)
			company.save( (e, cp) =>{
				if(cp)
					console.log('save data in collection of list_company')
				else
					console.error('save company in model_company.js:::', e)
			})
		})
	}
})


module.exports = Company