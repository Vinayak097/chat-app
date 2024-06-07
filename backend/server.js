import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import messageRoutes from "./routes/message.js";
import userRoutes from "./routes/user.js";
import connectToMongoDB from "./db/connect.Mongodb.js";

const app = express();
const PORT = 5000;
const allowedOrigins = ['http://localhost:3000']; // Your frontend URL

dotenv.config();

app.use(express.json());
app.use(cookieParser());

// CORS configuration
app.use(cors({
    origin: true,       // Allow any origin
    credentials: true   // Allow credentials (cookies, etc.)
}));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.get('/', (req, res) => {
    res.send("hello");
});

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
});
