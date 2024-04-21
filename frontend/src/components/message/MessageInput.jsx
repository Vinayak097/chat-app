import React from 'react'
import {BsSend} from 'react-icons/bs'
function MessageInput() {
  return (
    <div className='px-4 my-3'>
        <div className='w-full relative'>
            <input type="text" 
            className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-grey-700 text-white'
            placeholder='send a message'/>
            <button type='submit' className='absolute inset-y-0 end-0 flex-center pe-3'>
            <BsSend></BsSend>
            </button>
        </div>
    </div>
  )
}

export default MessageInput
