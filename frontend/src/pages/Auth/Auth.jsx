import React from 'react'

export default function Auth({label}) {

  return (
    <div className='flex flex-col items-center min-w-96 '>
        <h1 className=''>{label==="Signup" ? "Signup" :"Login"} </h1>
    </div>
    
  )
}
