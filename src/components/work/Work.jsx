import React, { useState } from 'react'
import './work.css'

function Work({ image, title, subTitle, text, codeLink, liveLink }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div 
            className='work-card'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='work-image-container'>
                <img src={image} alt={title} className='work-image' />
                
                {/* Overlay on hover */}
                <div className={`work-overlay ${isHovered ? 'active' : ''}`}>
                    <div className='overlay-content'>
                        <h3>{title}</h3>
                        <p className='overlay-description'>{text}</p>
                        
                        <div className='overlay-actions'>
                            {codeLink && (
                                <a href={codeLink} target="_blank" rel="noopener noreferrer" className='btn-primary'>
                                    View Code
                                </a>
                            )}
                            {liveLink && (
                                <a href={liveLink} target="_blank" rel="noopener noreferrer" className='btn-secondary'>
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Card info below image */}
            <div className='work-info'>
                <h4 className='work-title'>{title}</h4>
                <p className='work-category'>{subTitle}</p>
            </div>
        </div>
    )
}

export default Work
