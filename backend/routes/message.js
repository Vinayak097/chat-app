import e from "express";
import { sendMessage } from "../controllers/message.controller.js";
import { getMesssage } from "../controllers/message.controller.js";


const router=e.Router();
router.get('/',(req,res)=>{
    console.log("message router")
    res.send({Msg: "message router "})
})
router.post('/send/:id',sendMessage);
router.get('/get/:id',getMesssage);


export default router;