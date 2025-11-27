import React from 'react'
import './socialmedia.css'

//Material Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


function SocialMedia() {
    return (
        <div className='socialmedia'>
            <div className='socialmedia-icon' ><a href='https://www.linkedin.com/in/sagubalan-jayabalan-993bbb34a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank" ><LinkedInIcon sx={{ color: '#fff' }} fontSize='large' /></a></div>
            <div className='socialmedia-icon' ><a href='https://github.com/Sagubalan/saguportfilio.git' target="_blank" ><GitHubIcon sx={{ color: '#fff' }} fontSize='large' /></a></div>
            <div className='socialmedia-icon' ><a href='https://www.facebook.com/nahyan.konnalath/' target="_blank" ><FacebookIcon sx={{ color: '#fff' }} fontSize='large' /></a></div>
            <div className='socialmedia-icon' ><a href='https://www.instagram.com/mr_sagu_solaraja?igsh=OG52eXFnN293dG1h' target="_blank" ><InstagramIcon sx={{ color: '#fff' }} fontSize='large' /></a></div>
        </div>
    )
}

export default SocialMedia
