import React from 'react'

function About() {
  return (
    <div className='w-[85vw] mx-auto m-10 p-3 text-2xl tracking-wide font-contentFont leading-relaxed '>
      <div>
        <div className='text-4xl font-heroFont border-b-2' >
        🌟 Welcome to <span className='font-logoFont'>niyukti</span> - Your Health, Your Time!
        </div>
        <div className='flex m-3 p-3'>
          <div>
            <img className='m-2rounded-3xl aspect-[4/3] h-[500px] w-[4000px]' src="src/assets/one.jpg" alt="" />
          </div>
          <div className='flex items-center'>
            
          <div className='m-2 p-10 shadow-sm shadow-black bg-gradient-to-tr from-white to-teal-100 rounded-3xl'>
          At <span className='font-logoFont'>niyukti</span>, we understand that navigating the world of healthcare can sometimes feel like an intricate puzzle. We've been there – the endless phone calls, the waiting rooms, the uncertainty. That's why we're here to reshape your healthcare experience.
          </div>
          <span className=' text-9xl text-teal-500 flex self-start '>”</span>
          </div>
        </div>
        <div className='flex'>
          <div className='flex items-center'>
          <span className=' text-9xl text-teal-500 self-start'>“</span>
          <div className='m-10 p-10 shadow-sm shadow-black  bg-gradient-to-tl from-white to-teal-100 rounded-3xl'>
         
          Our journey began with a simple question: How can we make healthcare more accessible, efficient, and, most importantly, tailored to your needs? The answer led us to create a platform where booking a doctor's appointment is as easy as a few clicks.
          </div>
          </div>
          <div>
            <img className='rounded-3xl aspect-[4/3] w-[800px]' src="https://grazemarketing.com/wp-content/uploads/2019/02/no-click-image-google-blog-post-Graze.gif" alt="" />
          </div>
        </div>
        <div className='flex'>
          <div>
            <img className='rounded-3xl aspect-square w-[1000px]' src="https://img.freepik.com/free-vector/appointment-booking-calendar-concept_23-2148559940.jpg" alt="" />
          </div>
          <div className='flex items-center '>
          <div className='m-10 p-10 shadow-sm shadow-black  bg-gradient-to-tr from-white to-teal-100 rounded-3xl'>
          
          We get it. Your time is precious, and your health is paramount. That's why we've designed <span className='font-logoFont'>niyukti</span> to be more than just a booking tool; it's a health companion dedicated to simplifying your healthcare journey.
          
          </div>
          <span className=' text-9xl text-teal-500 self-start'>”</span>
          </div>
        </div>
        <div className='flex'>
          <div className='flex items-center'>
          <span className=' text-9xl text-teal-500 self-start'>“</span>
          <div className='m-10 p-10 shadow-sm shadow-black  bg-gradient-to-tl from-white to-teal-100 rounded-3xl'>
          As fellow healthcare seekers, we know the importance of trust, reliability, and convenience. That's why we've curated a team of passionate individuals committed to making your experience seamless and stress-free.
          </div>
          </div>
          <div>
            <img className='rounded-3xl aspect-[4/3] w-[1000px]' src="https://beyonddigital.co.in/wp-content/uploads/2022/03/about.png" alt="" />
          </div>
        </div>
        <div className='flex'>
          <div>
            <img className='rounded-3xl aspect-[4/3] w-[1000px]' src="https://images.squarespace-cdn.com/content/v1/5ec9789756804733b011b0f1/7b4a3a30-c49c-4528-9177-7a557cb189af/Girl+playing+game+on+computer.gif" alt="" />
          </div>
          <div className='flex items-center'>
          <div className='m-10 p-10 shadow-sm shadow-black  bg-gradient-to-tr from-white to-teal-100 rounded-3xl'>
          Join us in this mission to redefine healthcare accessibility. Whether you're a busy professional, a parent on the go, or simply someone who values their well-being, <span className='font-logoFont'>niyukti</span> is here for you.
          </div>
          <span className=' text-9xl text-teal-500 self-start'>”</span>
          </div>
        </div>
        <div className='flex'>
          <div className='flex items-center'>
          <span className=' text-9xl text-teal-500 self-start'>“</span>
            <div className='m-10 p-10 shadow-sm shadow-black  bg-gradient-to-tl from-white to-teal-100 rounded-3xl'>
            Let's embark on a journey where healthcare is personalized, appointments are effortless, and your well-being is prioritized. Welcome to a new era of healthcare – welcome to <span className='font-logoFont'>niyukti</span>.
            </div>
            </div>
            <div>
              <img className='rounded-3xl aspect-square w-[1200px]' src="https://cdni.iconscout.com/illustration/premium/thumb/man-booking-online-appointment-4207646-3485596.png" alt="" />
            </div>
        </div>
        <div className='text-center'>
        🌐 [<a href={'#signup'} className='text-teal-600 font-headingFont'>Sign Up Now</a>] or [<a href="" className='text-teal-600 font-headingFont'>Explore Our Services</a>]  to start your journey with us.
        </div>
      </div>
    </div>
  )
}

export default About