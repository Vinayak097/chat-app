import jwt from "jsonwebtoken"
const generateTokenSetToken=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"15d"});
    try{
    res.cookie("jwt",token,{
        maxAge:15*24*60*60*10000,
        httpOnly:true,//prevent XSS attacks cross-site scripting attacks
        sameSite:"strict", //CSRF attacks cross-site request forgery  attacks
        secure:process.env.NODE_ENV !== "development"
    })
}catch(e){
    res.status(400).json({error:"error in set cokkie ",})
    console.log(e)
}
    console.log("cookie setled")
}
export default generateTokenSetToken