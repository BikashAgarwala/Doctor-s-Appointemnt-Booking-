import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Catagories from './components/Catagories/Catagories'
import About from './components/About'
import Testimonals from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
// import './styles.css'
import ProblemSlider from './components/Catagories/ProblemSlider'
function App() {
  

  return (
    <>
      <Navbar/>
      <Hero />
      <Catagories />
      <About />
      <Testimonals />
      <Contact />
      <Footer/> 

    </>
  )
}

export default App
