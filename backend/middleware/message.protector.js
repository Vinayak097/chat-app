import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const protectRouter = async (req, res, next) => {
    console.log('Enter protectRouter');
    try {
        const token = req.cookies.jwt;
        console.log(req.cookies)
        console.log('Token:', token);

        if (!token) {
            return res.status(401).json({ error: "Unauthorized, no token provided" });
        }

        let payload;
        try {
            payload = jwt.verify(token, process.env.JWT_SECRET);
        } catch (err) {
            console.log("Error verifying token:", err.message);
            return res.status(401).json({ error: "Unauthorized, invalid token" });
        }

        if (!payload) {
            return res.status(401).json({ error: "Unauthorized request" });
        }

        console.log("Token passed verification:", payload.userId);

        const user = await User.findById(payload.userId).select("-password");
        if (!user) {
            return res.status(401).json({ error: "Unauthorized, user not found" });
        }

        req.user = user;
        next();
    } catch (e) {
        console.log("Error in protectRouter middleware:", e.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
