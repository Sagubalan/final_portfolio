import React from 'react'

//Custom components
import { Footer, Works, Services, Hero, Resume, SocialMedias } from './containers'
import { Contact, Navbar  } from './components'
import MouseGlitter from './MouseGlitter'

import './App.css'

const App = () => {
    return (
        <div className='App'>
            {/* Mouse Glitter Star Effect */}
            <MouseGlitter />
            <div className="floating-dots-container">
                <div className="floating-dot"></div>
                <div className="floating-dot"></div>
                <div className="floating-dot"></div>
                <div className="floating-dot"></div>
                <div className="floating-dot"></div>
                <div className="floating-dot"></div>
                <div className="floating-dot"></div>
                <div className="floating-dot"></div>
                <div className="floating-dot"></div>
                <div className="floating-dot"></div>
            </div>

            {/* Shooting Stars Background */}
            <div className="shooting-stars-container">
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
            </div>

            {/* Animated dots background */}
            <div className="background-bubbles">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
            </div>
            
            <div className='gradient-bg'>
                <Navbar />
                <Hero />
            </div>
            <SocialMedias />
            <Services />
            <Resume />
            <Works />
            <Contact />
            <Footer />

        </div>
    )
}

export default App
