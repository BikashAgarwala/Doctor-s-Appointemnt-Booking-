import React from 'react'
import majorCatagoriesData from '../jsonFiles/MajorCatagoriesData'
import MajorCatatories from './MajorCatagories'
import ProblemSlider from './ProblemSlider'
import ClinicSlider from './ClinicSlider'




const Catagories = () => {
  return(
    <div className='w-[85vw] mx-auto'>
    <div className='flex justify-around '>
      {majorCatagoriesData.map((majorCatagory) => (
          <MajorCatatories 
            key={majorCatagory.id}
            image = {majorCatagory.image}
            heading={majorCatagory.heading}
            body={majorCatagory.body}
          />
      ))}
      </div>
      
      <div className='mt-10 ml-10'>
      <div className='flex flex-wrap relative'>
        <div>
        <div className='text-4xl font-headingFont '>
          Consult top doctors online for any health concern
          </div>
        <div className='text-2xl font-contentFont text-slate-500 font-extralight tracking-wide'>
          Private online consultations with verified doctors in all specialists
          </div>
          </div>
          <div className='absolute right-20 text-2xl text-blue-600 font-bold p-3 px-5 border-2 border-blue-600 rounded-3xl'>
           <a href="">View all</a> 
        </div>
        </div>
      <ProblemSlider />
      </div>
           
      <div className='mt-10 ml-10'>
    
      <div className='mb-10'>
        <div className='text-4xl font-headingFont'>
        Book an appointment for an in-clinic consultation
          </div>
        <div className='text-2xl font-contentFont text-slate-500 font-thin tracking-wide'>
        Find experienced doctors across all specialties
          </div>
          </div>
      <ClinicSlider />
      </div>
      </div>

  )
}

export default Catagories