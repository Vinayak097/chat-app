import mongoose, { connect } from "mongoose";

const connectToMongoDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://vinay20:rootvi@cluster0.paauwgs.mongodb.net/chat-app")
    }catch(e){
        console.log("failed to connect mongodb " ,e)
    }
}
export default connectToMongoDB;