import React, { useState } from 'react'

const ProjectCard = ( { source, preview, stack, title, info, img, hover } ) => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    }
    const handleMouseLeave = () => {
        setIsHover(false);
    }

  return (
    <div className='project-cards'>
        <div className='project-img'>
            {hover ? <img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={isHover ? hover : img} /> : <img src={img} />}
        </div>
        <div className='project-info'>
            <div className='project-header'>
                <h3 className="project-title">{title}</h3>
                <div className='project-links'>
                    {source ? <a href={source}>Github</a> : null}
                    {preview ? <a href={preview}>Demo →</a> : null}
                </div>
            </div>
            <p>{info}</p>
            <ul className='project-stack'>
                {stack.map((type, key) => {
                    return (
                    <li><a key={key}>{type}</a></li>)
                })}
            </ul>
        </div>
    </div>
  )
}

export default ProjectCard