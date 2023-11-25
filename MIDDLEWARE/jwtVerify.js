const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifyJWT = (req,res,next)=>{
    try {
        const authHeaders = req.headers['authorization']
    if(!authHeaders){
        res.sendStatus(401)
    }
    const token = authHeaders.split(' ')[1]
    jwt.verify(
        token, 
        process.env.ACCESS_TOKEN,
        (err,decode)=>{
            if(err){
                res.sendStatus(403)
            }
            else{
                next()
            }
        }
    )
    } catch (error) {
        res.status(400).json({"message":`${error.message}`})
    }
}

module.exports = verifyJWT