const Users = require('../MODELS/UserSchema')
const bcrypt = require('bcrypt')

const resetPassword = async(req,res)=>{
    try {
        const {email,password} = req.body
        const user = await Users.findOne({email})
        if(!user || !email){
            return res.statusCode(401)
        }
        const hashedPassword  = await bcrypt.hash(password,10)
        await Users.findByIdAndUpdate(user._id,{password:hashedPassword}).then(()=>{
            res.status(200).json({"message":"successfully password updated"})
        })
    } catch (error) {
        res.json({"message" : "error accured in resetting password"})
    }
}
module.exports =resetPassword