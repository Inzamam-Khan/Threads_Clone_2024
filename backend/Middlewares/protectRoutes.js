const { validateToken } = require("../JWT/jwt");
const User = require("../Models/userModel");

const protectRoutes=async(req,res,next)=>{
    const token=req.cookies.token;
        if(!token) return res.status(401).json({messge:'Unauthorized'})
        
        const decoded=validateToken(token);

        const user=await User.findById(decoded._id).select(["-salt","-password"])
        

        req.user=user;
        next()
}

module.exports=protectRoutes