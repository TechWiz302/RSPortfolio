import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header, Footer, Home } from './components'
import Skills from './components/Skills/Skills'
import { skills } from './data/constant.js'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import ProjectDetails from './components/Projects/ProjectDetails'


function App() {

  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <>
      <div className="gradient__bg">
        <Header />
        <Home />
      </div>
      <div className='gradient__bgNew'>
        <Skills />
        <Experience />
      </div>
      <Projects openModal={openModal} setOpenModal={setOpenModal} />
      <Education />
      <Contact />
      <Footer />
      {openModal.state &&
        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
      }
    </>
  )
}

export default App
