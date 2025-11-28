import React from 'react'
import { SocialMedia } from '../../components'
import './footer.css'

//Material Icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

function Footer() {
    return (
        <div className='footer section-padding'>
            <div className='contact-details'>
                <div className='contact-details-wrapper'>
                    <div className='address contact-details-child'>
                        <LocationOnIcon fontSize='large' sx={{color: '#fff'}} />
                        <p>6/16A,Nadu street velayudhampalayam, kannanur PO, <br /> Thuraiyur,Trichy, 621206</p>
                    </div>
                    <div className='email contact-details-child'>
                        <EmailIcon fontSize='large' sx={{color: '#fff'}} />
                        <p>sagubalan4807@gmail.com <br /> sagubalan4807cse24_27@ksrce.ac.in</p>
                    </div>
                    <div className='phone contact-details-child'>
                        <CallIcon fontSize='large' sx={{color: '#fff'}} />
                        <p>+91 9047944069</p>
                    </div>
                </div>

            </div>
            <SocialMedia />
            <div className='footer-copyright'>
                <p>© 2025 SAGUBALAN. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
