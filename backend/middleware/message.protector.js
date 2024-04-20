import mongoose from "mongoose";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken"

export const protectRouter=async(req,res,next)=>{
    try{
    const token=req.cookies.jwt;
   
    if(!token){
        res.status(401).json({error:"unathorize no token provided"})
    }
    

    const payload=jwt.verify(token,process.env.JWT_SECRET)
    if(!payload){
        res.status(401).json("unAthorized request ")
    }
    console.log("token passed verified",payload.userId)
    
    const user= await User.findOne({_id:payload.userId}).select("-password")
    req.user=user;
    
    next();
}catch(e){
    console.log("error in protectRouter middleware " , e.message)
    res.status(500).json({error:"Internal server Error"})
}
   


}
