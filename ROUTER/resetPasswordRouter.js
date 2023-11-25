const express = require('express')
const router = express.Router()
const Users = require('../MODELS/UserSchema')

router.route('/')
    .post(require('../MIDDLEWARE/jwtVerify'),require('../CONTROLLERS/resetPassword'))

module.exports = router