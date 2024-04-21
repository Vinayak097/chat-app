import cookieParser from "cookie-parser"
import User from "../models/user.model.js"

export const getUsers=async(req,res)=>{
    console.log("getuser start  ")
    try{
        const userId=(req.user._id).toString()
        console.log(userId, userId)
        console.log("userid got ")

        const users=await User.find({_id:{$ne:userId}}).select("-password")
        res.status(200).json(users)
        
    }catch(e){
        console.log("erro in getUsers ",e.message)
        res.status(500).json("Internal server error ")

    }
}