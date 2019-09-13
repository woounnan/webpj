const express = require('express')
const router = express.Router()
const createError = require('http-errors')

console.log('Here is at index.js in apis')

router.get('/', (req, res, next) => {
	res.send('Here is at index.js in apis')
})
router.use('/login', require('./login'))

module.exports = router
