const { Admin } = require("../models/admin.model")
const { plainToHash, hashToPlain } = require("../utilis/password")
const JWT=require('jsonwebtoken')
const checkEmail=async(a_email)=>{
    const existAdmin=await Admin.findOne({a_email})
    if(existAdmin){
        return true
    }
}
exports.signup=async(req,res)=>{
  try {
      const {a_username,a_email,a_password}=req.body
  
      /////////exist email or not /////
      const existAdmin=await checkEmail(a_email)
      if (existAdmin) {
          res.status(403).json({
              message:"Your Email Id is Already Exist"
          })
      } else {
          const hass_pass=await plainToHash(a_password)
          const admin=await Admin.create({
              a_username,a_email,a_password:hass_pass
          })
          if(admin){
              res.status(201).json({
                  success:true,
                  message :"Signup Successfully..."
              })
          }
      }
  } catch (error) {
    res.status(500).json(error)
  }
}

exports.login=async(req,res)=>{
    const {a_email,a_password}=req.body
    const existAdmin=await checkEmail(a_email)
    if(existAdmin){
    const admin=await Admin.findOne({a_email })
    const match=await hashToPlain(a_password,admin.a_password)
    if(match){
        const payload={
            id:admin._id,
            role:admin.a_roll_id
        }
        const token=JWT.sign(payload,process.env.SECRET_KEY,{expiresIn:'1h'})
        res.header({token}).status(200).json({
            success:true,
            message:"login sucessfully......"
        })
    }

    }else{
        res.status(403).json({
            message:"Your Email Id not Exist"
        })
    }
}