/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Navbar from './components/Nav/navbar'
import './App.css'
import Home from './components/home/homepage'
import Footer from './components/footer/footersection'
import About from './components/about/aboutpage'
import Skills from './components/skills/skillspage'
import Contact from './components/contact/contactpage'
import Achievements from './components/achievements/achievepage'
import Projects from './components/projects/projectspage'

const App = () => {
  return (
    <div className='App relative'>
      <Navbar/>
      <div className="relative w-full min-h-screen flex items-center bg-black overflow-hidden z-10">
        <div className="absolute inset-0 opacity-20 z-10">
          <div className="absolute w-[40rem] h-[40rem] bg-purple-500 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
          <div className="absolute w-[40rem] h-[40rem] bg-blue-500 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" />
        </div>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/stack' element={<Skills/>} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/achievements' element={<Achievements/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
        
      </div>
      <Footer/>
    </div>
  )
}

export default App
