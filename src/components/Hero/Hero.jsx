import React from 'react'

function Hero() {
  return (
    <>
    <div className='w-[85vw] mx-auto flex  justify-center items-center mt-[15vh] mb-16  overflow-hidden '> 
   
    {/* bg-[url(src/assets/bookBg.png)] bg-cover */}

      <div className=' leading-relaxed sticky text-black p-4 m-4  flex justify-center items-center  text-5xl h-[700px] w-[1600px] font-heroFont shadow-md shadow-teal-600 drop-shadow rounded-3xl tracking-wider text-left overflow-hidden'>
        <div className='flex flex-col pl-10'>
          <div className='flex flex-col mb-10'>
      <span >Time for a Health Upgrade? </span><span className='flex  text-teal-600 text-3xl h-fit w-fit border-4 border-teal-600 p-3 px-4 rounded-3xl font-heroFont ml-[25%] mb-6'>Book</span><span className='text-4xl mb-6'>Your Doctor's Appointment Online, </span><span className='text-teal-600 text-3xl ml-[25%] '> Anytime</span>
      </div>
    <div className='mb-2 font-contentFont text-lg w-[850px] leading-snug tracking-normal text-slate-500'>
    Discover a new era of healthcare where convenience meets quality. Our platform connects you with trusted healthcare professionals, making it easy to prioritize your well-being. Start your journey to better health today.

    </div>
      <div>
        <div className='mb-10'>
          <button className='p-3 px-8 mx-6 rounded-3xl bg-teal-500 border-2 border-teal-800 text-lg font-headingFont shadow-sm shadow-teal-600 text-white'>Make an appointment</button>
          <button className='p-3 px-8 rounded-3xl border-2 bg-slate-200 border-teal-800 text-lg font-headingFont shadow-sm shadow-slate-600 drop-shadow'>Online Consultation</button>
        </div>
      <input className='rounded-xl m-3 p-2 px-4 w-[750px] font-titleFont text-lg font-medium   bg-teal-50 shadow-sm shadow-teal-300 bg-[url(src/assets/magnifying-glass.png)] bg-[length:20px_20px] bg-no-repeat bg-left bg-origin-content text-black text-center' placeholder='       Search for doctors , clinics , hospitals , etc'/>
      <button className='bg-gradient-to-r from-teal-200 to-teal-500 rounded-3xl text-green-950 px-4 p-2 font-headingFont border-2 border-cyan-800 shadow-md shadow-green-700 text-lg'>Search</button>
      </div>
      </div>
      <div>
        <img className='drop-shadow-md' src="https://demo.tagdiv.com/newspaper_doctors_pro/wp-content/uploads/2022/07/hero-graphic.png" alt="" />
      </div>
      </div>

     
    </div>
     
     </>
  )
}

// 


export default Hero