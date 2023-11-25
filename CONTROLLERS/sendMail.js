var nodemailer = require('nodemailer');
const Users = require('../MODELS/UserSchema')
require('dotenv').config()
const jwt = require('jsonwebtoken')

const sendOTP = async(req,res)=>{

    const {email} = req.body
    const user = await Users.findOne({email})
    if(!email || !user ){
        res.sendStatus(401)
    }
    const accessToken = jwt.sign(
      {"username" : user.username},
      process.env.ACCESS_TOKEN,
      {expiresIn : '60s'}
      )
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'aalansasonsingarayan@gmail.com',
          pass: 'opid nkqb fquq bkxr'
        }
      });
      
      var mailOptions = {
        from: 'aalansasonsingarayan@gmail.com',
        to: email,
        subject: 'to reset password',
        text: `URL for the reset Component in frontend with the created token eith short expireIn time ${accessToken}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          res.status(200).json({"message" : "link sent to the email"})
        }
      });
}

module.exports = sendOTP
