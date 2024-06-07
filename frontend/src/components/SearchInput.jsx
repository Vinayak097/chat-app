import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import useConversation from '../zustand/useConversation';


import toast from 'react-hot-toast';
import useGetConversations from '../hooks/getConversation';
function SearchInput() {
  const [search,setSearch]=useState();
  const {setSelectedConversation}=useConversation();
  const {conversations}=useGetConversations()
  const handleSubmit=()=>{
    e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
  }
  return (
    <form action="" onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input type="text" placeholder='Search..' className='input input-bordered rounded-full ' />
        <button type='submit' className='btn btn-circle bg-sky-500 text-whiter'>
            <IoIosSearch/>
        </button>
        <label htmlFor=""></label>
    </form>
  )
}

export default SearchInput