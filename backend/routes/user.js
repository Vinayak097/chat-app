import e from "express";
import { getUsers } from "../controllers/user.controller.js";
import { protectRouter } from "../middleware/message.protector.js";
const router=e.Router()

router.get('/get/bulk',protectRouter,getUsers);
router.get('/',(req,res)=>{
    res.send({msg:"this get user home router"})
})

export default router;