import React from 'react'

const Navbar = ({ aboutRef, contactRef, projectsRef }) => {
  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="navbar">
        <a href="#"><img src='assets/logo.png' /></a>
        <div className="navbar-links">
          <a className="basic" onClick={() => {handleScroll(aboutRef.current)}}>About</a>
          <a className="basic" onClick={() => {handleScroll(projectsRef.current)}}>Projects</a>
          <a className="basic" onClick={() => {handleScroll(contactRef.current)}}>Contact</a>
          <a className="resume" href="assets/230721 Resume.pdf">Resume</a>
        </div>
    </div>
  )
}

export default Navbar