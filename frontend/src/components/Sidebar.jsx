import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import Conversation from './Conversation'
import Logoutbutton from './Logoutbutton'


export  function Sidebar() {
  return (
    <div className=' '>
            <SearchInput>
            </SearchInput>
            <div>
            <Conversations/>
          
            <Logoutbutton></Logoutbutton>
      

            </div>
            
    </div>
  )
}
