import React from 'react'
import "./ExperienceCard.css"

function ExperienceCard({ experience }) {
    return (
        <div className="card">
            <div className="top">
                <img className='imageExperienceCard' src={experience.img} alt="" />
                <div className="bodyExperienceCard">
                    <div className="role">
                        {experience.role}
                    </div>
                    <div className="company">
                        {experience.company}
                    </div>
                    <div className="date">
                        {experience.date}
                    </div>
                </div>
            </div>
            <div className="description">
                {experience?.desc && (
                    <span className="spanExperienceCard" key="desc">
                        {experience?.desc}
                    </span>
                )}
                {experience?.skills && (
                    <>
                        <br />
                        <div className='skills'>
                            <b>Skills:</b>
                            <div className='itemWrapper'>
                                {experience?.skills?.map((skill, index) => (
                                    <div className='experienceSkills' key={index}>
                                        • {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>

            {experience.doc &&
                <a href={experience.doc} target="new">
                    <img className='experienceDocument' src={experience.doc} />
                </a>
            }
        </div>
    )
}

export default ExperienceCard