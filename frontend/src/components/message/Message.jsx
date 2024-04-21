import React from 'react'

function Message() {
  return (
    <div className=' chat chat-end '>
        <div className='chat-image avatar '>
            <div className='w-10 rounded-full'>
                <img src="https://avatar.iran.liara.run/public/41" alt="avatars" />

            </div>
        </div>
        <div className='chat-bubble text-white bg-blue-500'> hi What is upp </div>
        <div className='chat-filder opacity-50 text-xs flex gap-1 items-center'></div>

        
    </div>
  )
}

export default Message