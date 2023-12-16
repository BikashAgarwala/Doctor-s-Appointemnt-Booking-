import React from 'react'
import Hero from '../Hero/Hero'
import Catagories from '../Catagories/Catagories'
import About from '../About/About'
import Contact from '../Contact/Contact'

function Home() {
  return (
    <div>
      <Hero />
      <Catagories />
      <About />
      <Contact />
    </div>
  )
}

export default Home