import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./Footer.css"
import { Details } from '../../data/constant';

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerWrapper">
        <h1 className="footerLogo gradient__text">Rushikesh Shinde</h1>
        <nav className="footerNav">
          <a className='footerNavLink' href="#about">About</a>
          <a className='footerNavLink' href="#skills">Skills</a>
          <a className='footerNavLink' href="#experience">Experience</a>
          <a className='footerNavLink' href="#projects">Projects</a>
          <a className='footerNavLink' href="#education">Education</a>
        </nav>
        <div className="footerSocialMediaIcons">
          <a href={Details.facebook} className="footerSocialMediaIcon" target="display"><FacebookIcon sx={{ fontSize: 40 }}/></a>
          <a href={Details.github} className="footerSocialMediaIcon" target="display"><GitHubIcon sx={{ fontSize: 40 }}/></a>
          <a href={Details.linkedin} className="footerSocialMediaIcon" target="display"><LinkedInIcon sx={{ fontSize: 40 }}/></a>
          <a href={Details.insta} className="footerSocialMediaIcon" target="display"><InstagramIcon sx={{ fontSize: 40 }}/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer