// src/components/home/Home.jsx (Example structure)

import React from 'react';
import './home.css'; // Don't forget to import your CSS!
// import profile_picture from '../../assets/your-profile-pic.png'; // Example for an image

function Home() {
  return (
    <div className='portfolio-home' id='home'> {/* Make sure it has the ID for Navbar links */}
      <div className='portfolio-home-content'>
        <p className='portfolio-home-intro'>Hello, I'm</p>
        <h1 className='portfolio-home-title'>[Your Name Here]</h1>
        <h2 className='portfolio-home-subtitle'>A Passionate [Your Profession]</h2>
        <p className='portfolio-home-description'>
          Brief, engaging summary about yourself and what you do.
          Let's create something amazing together!
        </p>
        <div className='portfolio-home-buttons'>
          <a href='#contact' className='portfolio-home-cta-primary'>Hire Me</a>
          <a href='#works' className='portfolio-home-cta-secondary'>View My Work</a>
        </div>
      </div>
      
      {/* Optional: Profile picture or illustration */}
      <div className='portfolio-home-image'>
        {/* <img src={profile_picture} alt="Your Profile" /> */}
        {/* Or a cool animated SVG/Lottie file here */}
      </div>
    </div>
  );
}

export default Home;