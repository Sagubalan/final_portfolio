import React from 'react'
import './workexperience.css'

//Material Icons
import WorkIcon from '@mui/icons-material/Work';
import { TimelineBlock } from '..';

function WorkExperience() {
    return (
        <div className='workexperience'>
            <div className='workexperience-heading'>
                <h2>My Knowledge</h2>
            </div>
            <div className='timeline-container'>
                <TimelineBlock icon={<WorkIcon fontSize='large' />} title='Web Developer' duration='Jan 2025 - Present' company='HTML,CSS,JS, REACT JS ,JSON' text="I'm currently Web develop a frontend Mini project" />

                <TimelineBlock icon={<WorkIcon fontSize='large' />} title='cloud computing' duration='oct 2025 - Present' company='AWS' text="Learning a cloud AWS in our college google developers group (GDG)." />

                <TimelineBlock icon={<WorkIcon fontSize='large' />} title='Generative AI' duration='Feb 2024 - Present' company='Generative AI' text="Attending a Generative AI workshop to master prompt engineering and GenAI application." />

                <TimelineBlock icon={<WorkIcon fontSize='large' />} title='UI/UX Designer' duration='sep 2025 - Present' company='UI/UX' text="Building foundational knowledge in UI/UX design, focusing on practical application and best practices learned through a GDG-led workshop." />

            
            </div>
        </div>
    )
}

export default WorkExperience
