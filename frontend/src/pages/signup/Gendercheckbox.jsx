import React from 'react'

function Gendercheckbox( {onCheckboxChange,selectedGender}) {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label htmlFor="" className={`label p-2 cursor-pinter ${selectedGender==="male"? "selected" :""}`}>
                <span className='label-text px-1'>Male</span>
                <input checked={selectedGender==="male"}
                onChange={()=>onCheckboxChange("male")} type="checkbox" className='checkbox border-slate-900' />
            </label>
        </div>
        
            <div className='form-control'>
            <label htmlFor="" className={`label p-2 cursor-pinter ${selectedGender==="male"? "selected" :""}`}>
                <span className='label-text px-1'>Female</span>
                <input checked={selectedGender==="female"}
                onChange={()=>onCheckboxChange("female")} type="checkbox" className='checkbox border-slate-900' />
            </label>
            </div>
        
    </div>
    
  )
}

export default Gendercheckbox   