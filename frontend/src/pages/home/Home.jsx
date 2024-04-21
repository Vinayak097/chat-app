import React from 'react'

import MessageContainer from '../../components/message/MessageContainer'
import { Sidebar } from '../../components/Sidebar'

export default function Home() {
  return (
    <div className='flex ms:h-[450px] md:h-[550px]  rounded-lg overflow-hidden bg-grey-400 bg-clip-padding 
      bakdrop-filter  backdrop-blur-lg bg-opacity-0'>
        
      <Sidebar></Sidebar>
      <div className='divider px-3 h-2 w-2 text-blue-600'></div>
      <MessageContainer/>
        
        
    </div>
  )
}
