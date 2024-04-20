import mongoose from "mongoose";



import connectToMongoDB from "../db/connect.Mongodb.js";

const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        minlength:6
    },
    gender:{
        type:String,
        require:true,
        enum:["male" ,"female"]
    },
    profilePic:{
        type:String,
        default:""
    }
});
const boyprofiele= "https://avatar.iran.liara.run/public/41"
const girlprofile="https://avatar.iran.liara.run/public/73"
const User= mongoose.model("chatUser",userSchema);


export default User;
