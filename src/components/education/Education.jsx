import React from 'react'
import './education.css'
import '../workExperience/workexperience.css'

//Material Icons
import SchoolIcon from '@mui/icons-material/School';

import { TimelineBlock } from '..';


function Education() {
    return (
        <div className='education workexperience'>
            <div className='education-heading workexperience-heading'>
                <h2>Education</h2>
            </div>
            <div className='timeline-container'>
                <TimelineBlock icon={<SchoolIcon fontSize='large' />} title='Bachelor Degree' duration='sep 2024 - Present' company='K.S.R COLLEGE OF ENGINEERING, Tiruchencode( Anna University of Chennai )' text="Currently pursuing Undergraduate degree in Computer science and Engineering." />

                <TimelineBlock icon={<SchoolIcon fontSize='large' />} title='Higher Secondary' duration='June 2023 - March 2024' company='Raj Vidya Bhavan Matric H.R. Sec.School, Thuraiyur-Trichy 621010' text="Completed Higher Secondary education in Computer Science stream with an overall grade of 82%" />

                <TimelineBlock icon={<SchoolIcon fontSize='large' />} title='High School' duration='June 2021 - May 2022' company='Raj Vidya Bhavan Matric H.R. Sec.School, Thuraiyur-Trichy 621010' text="Passed out Secondary School Leaving Certificate(SSLC) in 2022 at 70%." />
            </div>
        </div>
    )
}

export default Education
