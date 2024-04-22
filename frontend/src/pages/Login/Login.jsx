import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';
export default function Login() {
  const {loading,login}=useLogin()
  const [username,setUsername]=useState(null);
  const [password,setPassword]=useState(null);
  const inputs={username,password}
  const handleSubmit=async(e)=>{
    e.preventDefault();
    await login(username, password);
    
  }
  return (
    <div className='flex flex-col items-center  justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-grey-400 bg-clip-padding bakdrop-filter 
        backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-grey-300'>Login
            <span className='text-blue-500'>Chatapp</span></h1>
            <form action="" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="" className='label p-2'>
                  <span className='text-base lable-text'>username</span>
                </label>
                <input type="text"  onChange={(e)=>{setUsername(e.target.value)}} placeholder='enter Username' className='w-full input input-bordered h-10'/>
              </div>
              <div>
              <label htmlFor="" className='label p-2'>
                  <span className='text-base lable-text'>Password</span>
                </label>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}}  placeholder='enter Password' className='w-full input input-bordered h-10'/>
              </div>
            
              <Link to="/signup" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
              Don't have an account?
              </Link>
              <div>
                <button type='submit' className='btn btn-block btn-sm mt-2'>{loading?
                <span className='loading loading-spinner '> </span>:"Login"}</button>
              </div>
              
            </form>

        </div>
    </div>
  )
}
