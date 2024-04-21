import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import {TiMessages} from "react-icons/ti"
function MessageContainer() {
  const noChatselected =true;

  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {noChatselected? <NoChatselected/>:
        <>
        <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text'>To:</span><span className='text-grey-900 font-bold'>Sam Edwards</span>

        </div>
        <Messages/>
        <MessageInput></MessageInput>

        </> 
}
    </div>
  )
}
const NoChatselected=()=>{
  return (
    <div className='flex flex-col gap-2 items-center justify-center text-2xl text-white h-screen'>
      <p>welcom john Doe </p>
      <p>Select a chat to start messaging</p>
      <div className='text-xl md:text-5xl text-blue-300'><TiMessages/></div>
    </div>
    
  )
}

export default MessageContainer