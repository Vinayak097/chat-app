import e from "express";
import { sendMessage } from "../controllers/message.controller.js";
import { getMesssage } from "../controllers/message.controller.js";
import { protectRouter } from "../middleware/message.protector.js";

const router=e.Router();
router.get('/',(req,res)=>{
    console.log("message router")
    res.send({Msg: "message router "})
})
router.get('/getConversations',GetConversations)


export default router;