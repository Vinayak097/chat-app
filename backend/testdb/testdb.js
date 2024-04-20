import mongoose from "mongoose";
import connectToMongoDB from "../db/connect.Mongodb.js";

// Connect to MongoDB
connectToMongoDB()

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
});

// Create the todo model
const todo = mongoose.model('culstod', todoSchema);



// import mongoose, { connect } from "mongoose";

// try{
//     await connect.mongoose("mongodb+srv://vinay20:rootvi@cluster0.paauwgs.mongodb.net/")
// }catch(e){
//     console.log("failed to connect mongodb " ,e)
// }
// const userSchema=mongoose.Schema({
//     fullName:{
//         type:String,
//         require:true
//     },
//     username:{
//         type:String,
//         require:true,
//         unique:true
//     },
//     password:{
//         type:String,
//         require:true,
//         minlength:6
//     },
//     gender:{
//         type:String,
//         require:true,
//         enum:["male" ,"female"]
//     },
//     profilePic:{
//         type:String,
//         default:""
//     }
// });
// const boyprofiele= "https://avatar.iran.liara.run/public/41"
// const girlprofile="https://avatar.iran.liara.run/public/73"

// const User= mongoose.model("chatUser",userSchema);

// const newuser =await User.create({
//     fullName,
//     username,
//     password,
//     gender,
//     confirmPassword,
//     profilePic:gender==="male" ?boyprofiele:girlprofile
// })
