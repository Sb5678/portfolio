import React from 'react'
import ProjectItem from './ProjectItem'
import p1 from '../src/assests/p1.jpg'
import p2 from '../src/assests/p2.jpg'
import './Project.css'
import { ProjectList } from './ProjectList'

const Project = () => {
  return (
    <div className='projects'>  
      <h1>My Personal Projects</h1>
      <div className='projectList'>
       {
        ProjectList.map((project,idx)=>{
          return <ProjectItem id={idx} name={project.name} image={project.image}/>
        })
       }
      </div>
    </div>
  )
}

export default Project
