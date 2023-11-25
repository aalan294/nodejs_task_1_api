const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const port = process.env.PORT || 3400

const main = async()=>{
    try {
        app.listen(port,()=>{
            console.log(`app listening on port ${port}`)
        })
        mongoose.connect(process.env.DB_URL).then(()=>{
            console.log('succesfully connected to the database')
        })
    } catch (error) {
        console.log(error.message)
    }
}
main()

app.use(express.json())
app.use('/auth',require('./ROUTER/authenticationRouter'))
app.use('/forget-password',require('./ROUTER/forgetPasswordRouter'))
app.use('/reset-password',require('./ROUTER/resetPasswordRouter'))