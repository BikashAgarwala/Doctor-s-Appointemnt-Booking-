import React from 'react'

function ClinicCatagories({image , clinicType , description}) {
  return (
      
    <div className='h-[300px] w-[400px] shadow-md shadow-slate-900 bg-white z-10 rounded-3xl overflow-hidden leading-tight text-sm mb-14 '>
      <img className='h-[70%] w-[100%] rounded-t-3xl' src={image} alt={clinicType} />
      <div className='font-sans text-base font-bold tracking-wide p-2'>
        {clinicType}
      </div>
      <div className='font-titleFont text-gray-500 pl-2'>
        {description}
      </div>
      
    </div>
)
}

export default ClinicCatagories