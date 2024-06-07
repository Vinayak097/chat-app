import mongoose, { connect } from "mongoose";
console.log(process.env.MONGO_URL)
const connectToMongoDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://vinay20:rootvi@cluster0.paauwgs.mongodb.net/chat-app")
        console.log('db connected ')
    }catch(e){
        console.log("failed to connect mongodb " ,e)
    }
}
export default connectToMongoDB;