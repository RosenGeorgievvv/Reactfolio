import React from 'react'
import '../styles/Home.css'
import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My name is Rosen</h2>
        <div className='prompt'>
          <p>
            A software developer with a passion for learning and creating
          </p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              ReactJS, HTML, CSS, NPM, MaterialUI, TailwindCSS
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>
              NodeJS, MongoDB, Firebase
            </span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>
              Javascript
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home