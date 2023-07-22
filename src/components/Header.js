import React from 'react'
import Navbar from './Navbar'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Header = ( {aboutRef, contactRef, projectsRef} ) => {
  return (
    <>
    <div className="header">
        <Navbar aboutRef={aboutRef} contactRef={contactRef} projectsRef={projectsRef} />
        <div className="header-text">
            <h1>Hi, I'm Liz!</h1>
            <h3>Front End Developer</h3>
            <h4>I design and code websites!</h4>
        </div>
        <div className="header-links">
          <a href="https://www.linkedin.com/in/elizabeth-hoang-8a83b5194/"><FaLinkedin size={42} /></a>
          <a href="https://github.com/liz9999/"><FaGithub size={42} /></a>
          <a href="mailto:elizabethhoang99@gmail.com"><MdEmail size={42} /></a>
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,85.3C384,128,480,224,576,224C672,224,768,128,864,112C960,96,1056,160,1152,165.3C1248,171,1344,117,1392,90.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </>
  )
}

export default Header