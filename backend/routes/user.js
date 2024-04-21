import e from "express";
import { getUsers } from "../controllers/user.controller.js";
const router=e.Router()

router.get('/get/bulk',getUsers);
router.get('/',(req,res)=>{
    res.send({msg:"this get user home router"})
})

export default router;