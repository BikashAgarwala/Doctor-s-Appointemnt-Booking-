import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Doctors from './components/Doctors/Doctors.jsx'
import Medicines from './components/Medicines/Medicines.jsx'
import Tests from './components/Tests/Tests.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='about' element = {<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='doctors' element={<Doctors />} />
      <Route path='medicines' element={<Medicines />} />
      <Route path='tests' element={<Tests />} />
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
