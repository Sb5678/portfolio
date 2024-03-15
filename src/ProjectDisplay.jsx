import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from './ProjectList';
import { GitHub } from '@mui/icons-material';
import './ProjectDisplay.css'

const ProjectDisplay = () => {
    const {id}=useParams();
    const project= ProjectList[id];
  return (
    <div className='project'>
      <h1>{project.name}</h1>
      <img src={project.image} alt="" />
      <p><b>Skills : </b>{project.skills}</p>
      <GitHub/>
    </div>
  )
}

export default ProjectDisplay;
