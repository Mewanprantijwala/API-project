const bcrypt=require('bcryptjs')
exports.plainToHash=async(password)=>{
    const salt=await bcrypt.genSalt(10)
    const hassPass=await bcrypt.hash(password,salt)
    return hassPass
}
exports.hashToPlain=async(password,hass_pass)=>{
    const match_pass=await bcrypt.compare(password,hass_pass)
    return match_pass
}
