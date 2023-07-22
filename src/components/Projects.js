import React from 'react'
import { ProjectList } from '../helpers/ProjectList'
import ProjectCard from '../components/ProjectCard'

const Projects = ({ projectsRef }) => {
  return (
    <div className="projects-container" ref={projectsRef}>
        <div className="project-title">
          <h2>Here are some of my Projects!</h2>
        </div>
          <div className="projects-list">
            {ProjectList.map((project, key) => {
              return (
                <ProjectCard 
                key={key}
                source={project.source}
                preview={project.preview}
                stack={project.stack}
                title={project.title}
                info={project.info}
                img={project.img}
                hover={project.hover} />
              )
            })}
          </div>
    </div>
  )
}

export default Projects