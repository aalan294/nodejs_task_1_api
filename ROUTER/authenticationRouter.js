const express = require('express')
const router = express.Router()
const Users = require('../MODELS/UserSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

router.route('/register')
    .post(async(req,res)=>{
        try {
            const {username,password,email,firstname,lastname,phone} = req.body
            if(!username || !password || !email){
                throw new Error("fill all the fields")
            }
            const user = await Users.findOne({username})
            if(user){
                throw new Error("username already exists")
            }
            const hashedPassword  = await bcrypt.hash(password,10)
            const newUser = {username,password:hashedPassword,email}
            await Users.create(newUser)
            res.status(200).json({message:"user created"})
        } catch (error) {
            res.status(400).json({"message" :"eroor accured in creating user"})
        }
    })

router.route('/login')
    .post(async(req,res)=>{
        try {
            const {username,password} = req.body
            if(!username || !password){
                throw new Error("please enter all the field")
            }
            const user = await Users.findOne({username})
            if(!user){
                throw new Error("user not found")
            }
            const isValid = await bcrypt.compare(password,user.password)
            if(!isValid){
                throw new Error("password is not valid")
                }
            const accessToken = jwt.sign(
                {"username" : user.username},
                process.env.ACCESS_TOKEN,
                {expiresIn : '1d'}
                )
            res.status(200).json({accessToken})
        } catch (error) {
            res.status(400).json({"message": "error accured while logging in"})
        }
    })

    module.exports = router