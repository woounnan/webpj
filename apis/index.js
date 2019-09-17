const express = require('express')
const router = express.Router()
const createError = require('http-errors')

console.log('Here is at index.js in apis')

router.get('/', (req, res, next) => {
	res.send('Here is at index.js in apis')
})

router.use('/login', require('./login'))
router.use('/db', require('./db_utils'))
router.use('/files', require('./files'))
router.use('/chat', require('./chat'))
module.exports = router
