import React from 'react';
import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import "./ProjectDetails.css";

function ProjectDetails({ openModal, setOpenModal }) {
    const projectData = openModal?.project;

    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
            <div className="projDetailsContainer">
                <div className="projDetailsWrapper">
                    <CloseRounded
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "20px",
                            cursor: "pointer",
                        }}
                        onClick={() => setOpenModal({ state: false, project: null })}
                    />
                    <img src={projectData?.image} alt="" className="projDetailsImage" />
                    <div className="projDetailsTitle">
                        {projectData?.title}
                    </div>
                    <div className="projDetailsDate">
                        {projectData?.date}
                    </div>
                    <div className='projDetailsTags'>
                        {projectData?.tags.map((tag, index) => (
                            <div className='projDetailsTag' key={index}>{tag}</div>
                        ))}
                    </div>
                    <div className="projDetailsDesc">
                        {projectData?.description}
                    </div>
                    <div className="projDetailsButtonGroup">
                        <a href={projectData?.github} className="projDetailsButton" target='new'>View Code</a>
                        <a href={projectData?.webapp} className="projDetailsButton" target='new'>View Live App</a>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default ProjectDetails;
