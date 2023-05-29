import React from 'react'
import ProjectItem from '../components/ProjectItem'
import '../styles/Projects.css'
import { ProjectList } from '../components/ProjectList'


function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        {ProjectList.map((project, index) =>{
          return <ProjectItem id={index} name={project.name} image={project.image} href={project.href}/>
        })}
      </div>
    </div>
  )
}

export default Projects