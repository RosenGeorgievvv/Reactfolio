import React from 'react'
import '../styles/Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <YouTubeIcon className='youtube'/>
            <GitHubIcon className='github'/>
            <LinkedInIcon className='linkedin'/>
            <TwitterIcon className='twitter'/>
        </div>
    </div>
  )
}

export default Footer