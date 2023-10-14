import React from 'react'
import { skills } from '../../data/constant'
import "./Skills.css"


function Skills() {
    return (
        <div className='container' id="skills">
            <div className='wrapper'>
                <div className="title">Skills</div>
                <div className="desc">
                    Here are some of my skills on which I have been working on for the past 2 years.
                </div>
                <div className='skillsContainer'>
                    {skills.map((skill, index) => (
                        <div className='skill' key={index}>
                            <h2 className='skillTitle'>{skill.title}</h2>
                            <div className='skillList'>
                                {skill.skills.map((item, itemIndex) => (
                                    <div className='skillItem' key={itemIndex}>
                                        <img className='skillImage' src={item.image} alt={item.name} />
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Skills