//Router dependencies
const auth = require('../middleware/auth')
const express = require('express');
const router = express.Router()
const {register, login, home} = require('../controller/controller')

router.post('/register', register)
router.post('/login', login)
router.get('/', auth, home)

//Routes

module.exports = router;

