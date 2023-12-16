import React, { useState } from 'react'

function Contact() {
  const [name , setName] =useState('')
  const [email , setEmail] = useState('')
  const [message , setMessage] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className='flex justify-center '>
    <div className='m-10 p-10 w-[60%] shadow-md shadow-teal-500 drop-shadow rounded-3xl overflow-clip'>
      <div className=''>
      <div className='text-5xl font-headingFont border-b-2 '>
        Contact us
      </div>
      <div className='flex justify-center items-center'>
      <div className='p-5 flex flex-col justify-center items-center w-[90%] '>
        
        <input className='p-2 pl-4 m-4 w-96 bg-blue-50 rounded-2xl bg-[url(src/assets/user.png)] bg-[length:20px_20px] bg-no-repeat bg-left bg-origin-content text-center' placeholder='       Name' type="text" value={name} onChange={(e) => setName(e.target.value)} name='' id=''/> 
        
        <input className='m-4 p-2 pl-4 w-96 bg-blue-50 rounded-2xl bg-[url(src/assets/email.png)] bg-[length:23px_23px] bg-no-repeat bg-left bg-origin-content text-center' placeholder="        Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="" id="" />
        <input className='m-4 p-2 pl-4 w-96 bg-blue-50 rounded-3xl h-24 bg-[url(src/assets/messenger.png)] bg-[length:20px_20px] bg-no-repeat bg-left bg-origin-content text-center' placeholder='       Message' type="text" value={message} onChange={(e) => setMessage(e.target.value)} name="" id="" />

        <button className='text-lg bg-gradient-to-tr from-teal-200 to-teal-600 w-48 rounded-3xl p-3 m-3 mt-10 text-teal-950 font-headingFont border-2 border-teal-700 shadow-sm shadow-teal-600 overflow-hidden' type="submit" onClick={(e) => {
           e.preventDefault()
           setName('')
           setEmail('')
           setMessage('')
        }} >Send Message</button>
        </div>
        <div className='h-full w-full'>
      <img  className=' h-full w-11/12 rounded-3xl mt-2' src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=900&t=st=1701661812~exp=1701662412~hmac=2c1e9e8be632513919b124f0916c5dd3ebd1076eb22d27805323b35c11768a87" alt="contact" />
    </div>
      </div>
      </div>
    </div>

    </div>
  )
}

export default Contact