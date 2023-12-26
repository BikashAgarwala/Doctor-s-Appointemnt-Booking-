import React from 'react'
import { NavLink , Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='h-[100px] w-full bg-white border-b-2 border-b-slate-300 overflow-hidden text-xl font-headingFont fixed top-0 z-50'>
        <div className='flex flex-row p-7 mr-10 ml-10 justify-between '> 
       
            <div className=' flex font-logoFont font-bold tracking-wide text-3xl'>
            <img src='https://s3.amazonaws.com/ionic-marketplace/nearby-doctor-app-online-medicine-doctor-appointment-booking-app-android-ios-template-ionic-5/icon.jpg' alt='company logo' className='h-10 w-10 rounded-full pr-2'/>

                <Link to="/" className=''>niyukti</Link>
            </div>
            <div className='flex gap-[150px] text-gray-500'>
            <NavLink to="/doctors"> Find Doctors</NavLink>
            <NavLink to= '/tests'>Lab Tests</NavLink>
            <NavLink to= "/medicines">Medicines</NavLink>
        </div>
        <div className='p-2 px-5 flex gap-[80px] text-gray-500 font-sans border-2 rounded-3xl'>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/about" >About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
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