const JWT=require('jsonwebtoken')

exports.verifyToken=(req,res,next)=>{
    //res.json(req.headers.authorization);
    try {
        let token=req.headers.authorization
        if(!token){
            res.json({
                message:'token not found'
            })
        }
        token=token.split(' ')[1]
        const verifytoken=JWT.verify(token,process.env.SECRET_KEY)
        
        if(verifytoken){
            req.admin=verifytoken
            next()
        } else{
           res.json({
            error:true,
            message:'Token is not verify...'
           })  
        }
    } catch (error) {
        res.json(error)
    }
}

exports.isAdmin=(req,res,next)=>{
    try {
        const {role}=req.admin
        // if(!role){
        //     res.json({
        //         error:true,
        //         message:"You are not authorise..."
        //     })
        // }
        if(role===1){
            next()
        } else {
            if(!role){
                res.json({
                    error:true,
                    message:"You are not admin..."
                })
            }
        }
    } catch (error) {
        res.json(error)
    }
}

exports.isUser=(req,res,next)=>{
    try {
        const {role}=req.admin
        // if(!role){
        //     res.json({
        //         error:true,
        //         message:"You are not authorise..."
        //     })
        // }
        if(role===0){
            next()
        } else {
            if(!role){
                res.json({
                    error:true,
                    message:"You are not user..."
                })
            }
        }
    } catch (error) {
        res.json(error)
    }
}
