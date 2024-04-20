import Conversation from "../models/conversation.js";
import Message from "../models/message.model.js";
export const sendMessage=async(req,res)=>{
    try{
        
        const { message } = req.body;
		const { id: receiverId } = req.params;
        const user=req.user;
        console.log(user)
		const senderId = (req.user._id).toString();
        console.log(message," id ",receiverId," senderId ",senderId)
        
       
        if(!senderId){
            console.log("erro in found ing user id ")
            res.status(400).json({error: "user id not found"})
        }
        console.log("passes")

		let conversation = await Conversation.findOne({
			participants: { $all: [senderId, receiverId] },
		});
        console.log("paswes2 sd")

		if (!conversation) {
			conversation = await Conversation.create({
				participants: [senderId, receiverId],
			});
		}

		const newMessage = new Message({
			senderId,
			receiverId,
			message,
		});

		if (newMessage) {
			conversation.message.push(newMessage._id);
		}
        await Promise.all([conversation.save(), newMessage.save()]);
    res.status(201).json(newMessage)
    console.log("message sent ")
}catch(e){
    console.log("error in message.controller send:id " ,e.message )
    res.status(500).json({error:"Internal server error "})

}
}

export const getMesssage=async(req,res)=>{
    try{
    const receiverId=req.param.id;
    const senderId=(req.user._id).toString()
    const conversation=new Conversation({
        participants:[senderId,receiverId]

    }).populate("message");//Not reference but actual messages
    if(!conversation){
        res.status(200).json([])
    }
    const messages=conversation.message;
    console.log( conversation, messages)
    res.status(200).json(messages);
    }   
    catch(e){
        console.log("error in message.controller send:id " ,e.message )
        res.status(500).json({error:"Internal server error "})
    }
}
