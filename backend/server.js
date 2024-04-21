import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.js"
import connectToMongoDB from "./db/connect.Mongodb.js";
import messageRoutes from "./routes/message.js"
import cookieParser from "cookie-parser";
import { protectRouter } from "./middleware/message.protector.js";
import userRoutes from "./routes/user.js"

const app=express()
dotenv.config();

app.use(cookieParser())
app.use(express.json())
app.use('/api/user',protectRouter,userRoutes);
app.use('/api/auth' ,authRoutes)
app.use('/api/message',protectRouter,messageRoutes);


app.get('/' ,(req,res)=>{
    res.send('hello') 
})
app.listen(process.env.PORT|| 8000,()=>{
    connectToMongoDB();

    console.log("server running on port " , 5000);
})

