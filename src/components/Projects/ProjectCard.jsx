import React from 'react'
import "./ProjectCard.css"

function ProjectCard({project,setOpenModal}) {
    return (
        <div className='projCard' onClick={() => setOpenModal({state: true, project: project})}>
            <img className='projCardImage' src={project.image}/>
            <div className='projCardTags'>
                {project.tags?.map((tag, index) => (
                <span className='projCardSpanTag' key={index}>{tag}</span>
                ))}
            </div>
            <div className='projCardDetails'>
                <div className='projCardTitle'>{project.title}</div>
                <div className='projCardDate'>{project.date}</div>
                <div className='projCardDescription'>{project.description}</div>
            </div>
        </div>
    )
}

export default ProjectCard