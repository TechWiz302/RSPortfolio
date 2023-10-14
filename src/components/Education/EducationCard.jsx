import React from 'react'
import "./EducationCard.css"

function EducationCard({ education }) {
    return (
        <div className="eduCard">
            <div className="eduCardTop">
                <img src={education.img} alt="" className="eduCardImage" />
                <div className="eduCardBody">
                    <div className="eduCardName">{education.school}</div>
                    <div className="eduCardDegree">{education.degree}</div>
                    <div className="eduCardDate">{education.date}</div>
                </div>
            </div>
            <div className="eduCardGrade"><b>Grade: </b>{education.grade}</div>
            <div className="eduCardDesc">
                <div className="eduCardSpan">
                    {education.desc}
                </div>
            </div>
        </div>
    )
}

export default EducationCard