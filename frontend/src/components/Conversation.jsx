import React from 'react'
// "https://avatar.iran.liara.run/public/41"
// const girlprofile="https://avatar.iran.liara.run/public/73"
function Conversation() {
  return (
    <div>
        <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer '>
            <div className='avatar online'>
                <div className='w-12 rounded-full'>
                    <img src="https://avatar.iran.liara.run/public/41" alt="user avatar" />
                </div>
            </div>
            <div className='flex  flex-col flex-1'>
                <div className='flex gap-2 justify-between'>
                    <p className=''>John doc</p>
                    <span className='text-xl'>img</span>                    
                </div>

            </div>
            <div className='divider my-0 py-0 h-1'></div>

        </div>
    </div>
  )
}

export default Conversation