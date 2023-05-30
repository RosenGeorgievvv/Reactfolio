import React from 'react'
import '../styles/Home.css'
import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My name is Rosen</h2>
        <div className='prompt'>
          <p>
            A software developer with a passion for learning and creating
          </p>
          <Link to="https://www.linkedin.com/in/rosen-georgiev-253611180"><LinkedInIcon /></Link>
          <Link to="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCJFLZKlFcStMRqPlzWMmWCDSzXBMPHcmJcnfccvSSBPFDzBCDbvHpBfKkzLqWsCNPLffg"><EmailIcon /></Link>
          <Link to="https://github.com/RosenGeorgievvv"><GithubIcon /></Link>
        </div>
      </div>
      <div className='skills'>
        <h1>Tech Stack</h1>
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