import User from "../models/user.model.js";
import bcrypt from 'bcrypt';
import generateTokenSetToken from "../utils/generateTokens.js";


const boyprofiele= "https://avatar.iran.liara.run/public/41"
const girlprofile="https://avatar.iran.liara.run/public/73"
export const signup=async(req,res)=>{
    console.log("entered i nsignup ")

    try{
    const {fullName,username,password,gender,confirmPassword}=await req.body;
    if(!password==confirmPassword){
        return res.status(400).json({error:"password don't match"})
    }
    const user=await User.findOne({
        username
    })
    if(user){
        return res.status(400).json({error:"user alerady exist"})
    }
    const salt= await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt)
    const newuser =new User({
        fullName,
        username,
        password: hashedPassword,
        gender,

        profilePic: gender === "male" ? boyprofiele : girlprofile
    })
    if(newuser){
        
        await newuser.save()
        generateTokenSetToken(newuser._id, res);
        
        res.status(201).json({
            _id:newuser._id,
            fullName:newuser.fullName,
            username:newuser.username,
            profilePic:newuser.profilePic,
        })
    }else{
        res.status(400).json("invalid user data")
    }
}catch(e) {
    console.log("error in signup controller ",e.message)
    res.status(500).json({
        error:"internal server error "
    })
   
}
}

export const login=async(req,res)=>{
    try{
    const {password,username}=req.body;
    const user= await User.findOne({
        username:username
    })
   
    const correctpassword= await bcrypt.compare(password,user?.password||"")
    if(!correctpassword){
        res.status(411).json({error : "invalid username/password"})
    }
 
        generateTokenSetToken(user._id,res);
        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            username:user.username,
            profilePic:user.profilePic,
        })

}catch(e) {
    console.log("error in login controller ",e.message)
    res.status(500).json({
        error:"internal server error "
    })
   
}

}
export const logout=(req,res)=>{
    try{
    res.cookie("jwt","",{maxAge:0})
    res.status(200).json({message:"logout successfully"})
    }catch(e){
        console.log("error in login controller ",e.message)
        res.status(500).json({
            error:"internal server error "
        })
    }
    
}
