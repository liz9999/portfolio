import React from 'react'
import { Stack } from '../helpers/Stack'

const About = ({ aboutRef }) => {
  return (
    <div className='about-container' ref={aboutRef}>
      <h2>A little about me..</h2>
      <div className='about'>
        <span>
          Hello, my name is Elizabeth but everyone calls me Liz! 
          I graduated from the University of Georgia with a BBA in Management Information Systems and International Business. 
          I am a 24 year old frontend developer with aspirations to become a full stack developer. 
          I'm passionate about designing and building captivating websites. 
          I am constantly learning and developing my skills in this ever-evolving digital landscape.  

        </span>
        <div className="stack-container">
          {Stack.map((i, key) => {
            return (
              <div className="stack-lang" key={key}>
                <i.icon size={42}/>
                <p>{i.lang}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default About