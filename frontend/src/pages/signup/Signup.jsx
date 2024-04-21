import React from 'react'
import Gendercheckbox from './Gendercheckbox'

export default function Signup() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      
      <div className='w-full p-6 rounded-lg shadow-md bg-grey-400 bg-clip-padding backdrop:filter backdrop-blur-lg bg-opacity-0 '>
        <h1 className='text-center font-semibold text-3xl text-grey-300 '>Signup 
      <span className='text-blue-500'>Chatapp</span></h1>
      <form action="">

        <div>
            <label htmlFor="" className='label p-2'>
              <span className='text-base lable-text'>username</span>
            </label>
            <input type="text"  placeholder='enter Username' className='w-full input input-bordered h-10'/>
        </div>
        <div>
        <label htmlFor="" className='label p-2'>
            <span className='text-base lable-text'>Password</span>
        </label>
         <input type="password"  placeholder='enter Password' className='w-full input input-bordered h-10'/>
        </div>

        <div>
            <label htmlFor="" className='label p-2'>
              <span className='text-base lable-text'>Confirm Password</span>
            </label>
            <input type="password"  placeholder='confirm password' className='w-full input input-bordered h-10'/>
        </div>
        <a href="#" className='text-sm hover:underline hover:text-blue-500 mt-2 '>
          alerady have an account?
        </a>
        <Gendercheckbox></Gendercheckbox>
        <div>
            <button className='btn btn-block btn-sm mt-2 py-2'>Login</button>
        </div>


                  
      </form>
        

      </div>
        
    </div>
  )
}
