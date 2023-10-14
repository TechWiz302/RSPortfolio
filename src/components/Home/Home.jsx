import React from 'react'
import dp from "../../assets/dp.png"
import heroImage from "../../assets/heroImage.png"
import Typewriter from 'typewriter-effect';
import "./Home.css"
import HeroBgAnimation from '../Animation/Animation';
import { Details } from '../../data/constant';

function Home() {

  const data = {
    roles: [
      "Full Stack Developer",
      "UI/UX Designer",
      "Programmer",
      "Team Player",
      "Enthusiast"
    ],
  }

  return (
    <div className="header section__padding" id="home">


      <div className="header-content">
        <h1 className="gradient__text">
          Hi, I am <br /> Rushikesh Shinde
        </h1>

        <div className="textLoop">
          <div className="textLoop-p">
            I'm a
          </div>
          <div className="typewrite-text gradient__text">
            <Typewriter
              options={{
                strings: data.roles,
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>

        <p>
          {Details.description}
        </p>

        <div className="header-content__input">
          <a href={Details.resume} target='display'><button type='button'>Download Resume</button></a> 
          {/* <button type='button'>Download Resume</button> */}
        </div>
      </div>
      <div className="header-image">
        <img src={heroImage} alt='' />
        {/* <img src={dp} alt=''/>  */}
        <HeroBgAnimation className="animated-div" />
      </div>

    </div>
  )
}

export default Home