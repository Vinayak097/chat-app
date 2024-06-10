import jwt from "jsonwebtoken";

const generateTokenSetToken = (userId, res) => {
    try {
        const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "15d" });
        
        res.cookie("jwt", token, {
            maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
            httpOnly: true,                     // Prevent XSS attacks
            sameSite: "strict",                 // Prevent CSRF attacks
            secure: false
 // Secure flag for non-development environments
        });
        console.log("Cookie set successfully");
    } catch (e) {
        console.error("Error in setting cookie:", e);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export default generateTokenSetToken;
