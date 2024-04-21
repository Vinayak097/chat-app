import React from 'react'
import { IoIosSearch } from "react-icons/io";
function SearchInput() {
  return (
    <form action="" className='flex items-center gap-2'>
        <input type="text" placeholder='Search..' className='input input-bordered rounded-full ' />
        <button type='submit' className='btn btn-circle bg-sky-500 text-whiter'>
            <IoIosSearch/>
        </button>
        <label htmlFor=""></label>
    </form>
  )
}

export default SearchInput