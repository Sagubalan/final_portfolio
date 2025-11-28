import React from 'react'

//Custom components
import { Footer, Works, Services, Hero, Resume, SocialMedias } from './containers'
import { Contact, Navbar  } from './components'

import './App.css'

const App = () => {
    return (
        <div className='App'>
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
