import React from 'react'

function Gendercheckbox() {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label htmlFor="" className='label p-2 cursor-pinter'>
                <span className='label-text px-1'>Male</span>
                <input type="checkbox" className='checkbox border-slate-900' />
            </label>
        </div>
        
            <div className='form-control'>
            <label htmlFor="" className='label p-2 cursor-pinter'>
                <span className='label-text px-1'>Female</span>
                <input type="checkbox" className='checkbox border-slate-900' />
            </label>
            </div>
        
    </div>
    
  )
}

export default Gendercheckbox   