import React from 'react'

function Navbar() {
  return (
    <div className='h-[100px] w-full bg-white border-b-2 border-b-slate-300 overflow-hidden text-xl font-headingFont'>
        <div className='flex flex-row p-7 mr-10 ml-10 justify-between '> 
       
            <div className=' flex font-logoFont font-bold tracking-wide text-3xl'>
            <img src='https://s3.amazonaws.com/ionic-marketplace/nearby-doctor-app-online-medicine-doctor-appointment-booking-app-android-ios-template-ionic-5/icon.jpg' alt='company logo' className='h-10 w-10 rounded-full pr-2'/>

                <a href='' className=''>niyukti</a>
            </div>
            <div className='flex gap-[150px] text-gray-500'>
            <a href={'#doctors'} > Find Doctors</a>
            <a href={'#tests'}>Lab Tests</a>
            <a href={'#medicines'}>Medicines</a>
        </div>
        <div className='p-2 px-5 flex gap-[80px] text-gray-500 font-sans border-2 rounded-3xl'>
            <a href='' >Home</a>
            <a href={'#about'}>About</a>
            <a href={'#contact'}>Contact</a>
        </div>
        <div className='flex'>
        
        <a href={'#login'} className=' tracking-wide p-2 h-fit w-fit border-2 border-teal-600 ml-2 rounded-xl text-teal-600 shadow-sm drop-shadow'>
            Login / Signup
        </a>
        </div>
        </div>
    
     
    </div>
  )
}

export default Navbar