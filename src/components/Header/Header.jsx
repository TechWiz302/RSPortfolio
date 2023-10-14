import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import "./Header.css"
import logo from "../../assets/logo.png"

function Header() {

    const [toggleMenu, setToggleMenu] = useState(false)

    const Menu = () => {
        return (
            <>
                <p>
                    <a href="/">About Me</a>
                </p>
                <p>
                    <a href="#skills">Skills</a>
                </p>
                <p>
                    <a href="#experience">Experience</a>
                </p>
                <p>
                    <a href="#projects">Projects</a>
                </p>
                <p>
                    <a href="#education">Education</a>
                </p>
            </>
        )
    }

    return (
        <div className="navbar">
            <div className="navbar-links">
                <div className="navbar-links_logo">
                    <img src={logo} alt="logo" className='w-16 h-16' />
                </div>
                <div className="navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="navbar-sign">
                <a href="#contact"><button type='button'>Contact Me</button></a>
            </div>
            <div className="navbar-menu">
                {toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={() => { setToggleMenu(false) }} /> : <RiMenu3Line color='#fff' size={27} onClick={() => { setToggleMenu(true) }} />}
                {toggleMenu && (
                    <div className="navbar-menu_container scale-up-center">
                        <div className="navbar-menu_container-links">
                            <Menu />
                        </div>
                        <div className="navbar-menu_container-links-sign">
                        <a href="#contact"><button type='button'>Contact Me</button></a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header