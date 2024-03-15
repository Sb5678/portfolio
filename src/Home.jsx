import React from 'react'
import { LinkedIn } from '@mui/icons-material'
import { Email } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My name is Sakshi Bhise</h2>
        <div className='prompt'> <p>A software developer with a passion for learning and creating.</p> 
        <LinkedIn/>
        <Email/>
        <GitHub/>
        </div>
      </div>
      <div className='skills'>
        <ol className='list'>
        <li className='item'>
          <h2>Front-End</h2>
          <span>HTML, CSS, ReactJS, BootStrap</span>
        </li>
        <li className='item'>
          <h2>Back-End</h2>
          <span>Java, Spring, MS SQL, J2EE</span>
        </li>
        <li className='item'>
          <h2>Languages</h2>
          <span>JavaSript, Java, C, C++</span>
        </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
