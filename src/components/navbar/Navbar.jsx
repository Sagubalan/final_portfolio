import React, { useState, useEffect, useContext, useRef } from 'react'
import './navbar.css'

// Icons
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { BsSun, BsMoon } from 'react-icons/bs'
import { MdMusicNote, MdMusicOff } from 'react-icons/md'

// Theme Context
import { ThemeContext } from '../../ThemeContext'

// Note: You can uncomment the logo import if you use it later
// import logo from '../../assets/logo.svg' 

// Define the PUBLIC_URL for cleaner use in JSX
const PUBLIC_BASE_URL = process.env.PUBLIC_URL;

// Reusable component for the navigation links
const Menu = ({ activeSection }) => (
    <>
        {/* All anchor links now correctly point to the home page path with the hash */}
        <p><a href={`${PUBLIC_BASE_URL}#home`} className={activeSection === 'home' ? 'active' : ''}>Home</a></p>
        <p><a href={`${PUBLIC_BASE_URL}#services`} className={activeSection === 'services' ? 'active' : ''}>Skills</a></p>
        <p><a href={`${PUBLIC_BASE_URL}#about`} className={activeSection === 'about' ? 'active' : ''}>About</a></p>
        <p><a href={`${PUBLIC_BASE_URL}#works`} className={activeSection === 'works' ? 'active' : ''}>Project</a></p>
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
    // Theme context
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    
    // State to manage the visibility of the mobile menu
    const [toggleMenu, setToggleMenu] = useState(false);
    // State to track the active section
    const [activeSection, setActiveSection] = useState('home');
    // State for music player
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    // Define the Contact CTA link once
    const contactLink = `${PUBLIC_BASE_URL}#contact`;

    // Toggle music play/pause
    const toggleMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(err => {
                    console.log('Error playing audio:', err);
                });
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Handle audio end - loop the music
    const handleAudioEnd = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };

    // Track which section is currently in view
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'services', 'about', 'works', 'contact'];
            
            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Check if section is in the upper half of the viewport
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='portfolio-navbar'>
            <div className='portfolio-navbar-links'>
                {/* <div className='portfolio-navbar-links-logo'>
                    <img src={logo} alt="Logo" />
                </div> */}
                
                {/* Desktop Menu */}
                <div className='portfolio-navbar-links-container'>
                    <Menu activeSection={activeSection} />
                </div>
                
                {/* Desktop CTA Button */}
                <div className='portfolio-navbar-ctabtn'>
                    {/* Fixed CTA to use the PUBLIC_BASE_URL prefix */}
                    <a href={contactLink}>Get in touch</a>
                </div>

                {/* Theme Toggle Button */}
                <button 
                    className='theme-toggle-btn' 
                    onClick={toggleTheme}
                    title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                >
                    {isDarkMode ? <BsSun size={22} /> : <BsMoon size={22} />}
                </button>

                {/* Music Player Button */}
                <button 
                    className='music-toggle-btn' 
                    onClick={toggleMusic}
                    title={isPlaying ? 'Stop Music' : 'Play Music'}
                >
                    {isPlaying ? <MdMusicNote size={22} /> : <MdMusicOff size={22} />}
                </button>

                {/* Hidden Audio Element */}
                <audio 
                    ref={audioRef}
                    onEnded={handleAudioEnd}
                    loop
                >
                    {/* Add your music file URL here */}
                    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                </audio>
                
                {/* Mobile Menu Icon and Logic */}
                <div className='portfolio-navbar-menu'>
                    {toggleMenu 
                        ? <RiCloseLine className='navbar-menu-icon' size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line className='navbar-menu-icon' size={27} onClick={() => setToggleMenu(true)} />
                    }
                    
                    {/* Mobile Menu Dropdown */}
                    {toggleMenu && (
                        <div className='portfolio-navbar-menu-container scale-up-tr'>
                            <div className='portfolio-navbar-menu-container-links'>
                                <Menu activeSection={activeSection} />
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