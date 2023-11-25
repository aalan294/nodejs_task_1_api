const express = require('express')
const router = express.Router()
const Users = require('../MODELS/UserSchema')
require('dotenv').config()
var nodemailer = require('nodemailer');

router.route('/')
    .post(require('../MIDDLEWARE/jwtVerify'),require('../CONTROLLERS/sendMail'))

module.exports = router