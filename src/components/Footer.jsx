import React from 'react'
import '../styles/Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <Link to="https://www.youtube.com/@rosengeorgiew"><YouTubeIcon className='youtube' /></Link>
        <Link to="https://github.com/RosenGeorgievvv"><GitHubIcon className="github" /></Link>
        <Link to="https://www.linkedin.com/in/rosen-georgiev-253611180"><LinkedInIcon className='linkedin' /></Link>
        <Link to="https://twitter.com/RosenGe0rgiev"><TwitterIcon className='twitter' /></Link>
      </div>
    </div>
  )
}

export default Footer;