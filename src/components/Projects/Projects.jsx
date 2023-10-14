import React, { useState } from 'react'
import "./Projects.css"
import ProjectCard from './ProjectCard'
import { projects } from '../../data/constant'

function Projects({ openModal, setOpenModal }) {
  const [toggle, setToggle] = useState('all');
  return (
    <div className='projContainer' id="projects">
      <div className='projWrapper'>
        <div className='projTitle'>Projects</div>
        <div className='projDesc'>
          I have worked on a wide range of projects. Here are some of my projects.
        </div>
        <div className='projCardContainer'>
          {toggle === 'all' && projects
            .map((project, index) => (
              <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project, index) => (
              <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Projects