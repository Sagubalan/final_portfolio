import React, { useState } from 'react'
import './navbar.css'

// Icons
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

// Note: You can uncomment the logo import if you use it later
// import logo from '../../assets/logo.svg' 

// Define the PUBLIC_URL for cleaner use in JSX
const PUBLIC_BASE_URL = process.env.PUBLIC_URL;

// Reusable component for the navigation links
const Menu = () => (
    <>
        {/* All anchor links now correctly point to the home page path with the hash */}
        <p><a href={`${PUBLIC_BASE_URL}#home`}>Home</a></p>
        <p><a href={`${PUBLIC_BASE_URL}#services`}>Skills</a></p>
        <p><a href={`${PUBLIC_BASE_URL}#about`}>About</a></p>
        <p><a href={`${PUBLIC_BASE_URL}#works`}>Project</a></p>
        <p>
            {/* Added noreferrer for security when using target="_blank" */}
            <a 
                href='https://drive.google.com/file/d/1MShaGwkHYzyW4wClO3vFxI52Mt-zXUZQ/view?usp=drivesdk' 
                target="_blank" 
                rel="noopener noreferrer"
            >
                Download CV
            </a>
        </p>
    </>
)

function Navbar() {
    // State to manage the visibility of the mobile menu
    const [toggleMenu, setToggleMenu] = useState(false);

    // Define the Contact CTA link once
    const contactLink = `${PUBLIC_BASE_URL}#contact`;

    return (
        <div className='portfolio-navbar'>
            <div className='portfolio-navbar-links'>
                {/* <div className='portfolio-navbar-links-logo'>
                    <img src={logo} alt="Logo" />
                </div> */}
                
                {/* Desktop Menu */}
                <div className='portfolio-navbar-links-container'>
                    <Menu />
                </div>
                
                {/* Desktop CTA Button */}
                <div className='portfolio-navbar-ctabtn'>
                    {/* Fixed CTA to use the PUBLIC_BASE_URL prefix */}
                    <a href={contactLink}>Get in touch</a>
                </div>
                
                {/* Mobile Menu Icon and Logic */}
                <div className='portfolio-navbar-menu'>
                    {toggleMenu 
                        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                    }
                    
                    {/* Mobile Menu Dropdown */}
                    {toggleMenu && (
                        <div className='portfolio-navbar-menu-container scale-up-tr'>
                            <div className='portfolio-navbar-menu-container-links'>
                                <Menu />
                                <div className='portfolio-navbar-menu-container-links-ctabtn'>
                                    {/* Fixed Mobile CTA to use the PUBLIC_BASE_URL prefix */}
                                    <a className='portfolio-navbar-menu-ctabtn' href={contactLink}>Get in touch</a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar