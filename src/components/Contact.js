import React from 'react'
import { MdEmail } from 'react-icons/md'

const Contact = ({ contactRef }) => {
  return (
    <div className='contact' ref={contactRef}>
      <h2>
        Contact me!
      </h2>
      <div className='contact-box'>
        <a onClick={() =>  navigator.clipboard.writeText('elizabethhoang99@gmail.com')}>elizabethhoang99@gmail.com</a>
        <a href="mailto:elizabethhoang99@gmail.com"><MdEmail size={42} /></a>
      </div>
    </div>
  )
}

export default Contact