import React from 'react'
import { Work } from '../../components'
import './works.css'

//Images
import StudentsProfile from '../../assets/projects/studentprofile.jpeg'
import DiscordBot from '../../assets/projects/discord-bot.png'
import TimeTableApp from '../../assets/projects/Time-table-page.png'
import ProfileApp from '../../assets/projects/Home.png'
import ExpenseTracker from '../../assets/projects/expense-tracker.png'
import Poster from '../../assets/projects/eranadan_thakkaram_2.jpg'

function Works() {
    return (
        <div className='works section-margin' id='works'>
        <h1 className='gradient-text'>Project</h1>
        <h3>Check Out Some of My Projects.</h3>
            <div className='works-container'>
                <Work image={StudentsProfile} title="Students Profile" subTitle="Web Development" text="The student profile is a college management system. It works based on different user types and permissions. Filter users on certain conditions like by join year or department. The app is developed using the mern-stack." codeLink="https://github.com/tinkerhubemea/students-profile" />

                <Work image={DiscordBot} title="Veggie Mart" subTitle="Online Ordering App " text="The primary objective of this Veggie Mart mini-project is to develop a user-friendly, feature-rich platform that efficiently connects local vegetable vendors with consumers, allowing for easy browsing, ordering, and delivery of fresh produce, thereby modernizing the traditional vegetable purchasing experience." codeLink="C:\Users\SAGUBALAN\OneDrive\Desktop\vegmart\veg\index.html" />

                <Work image={TimeTableApp} title="Time Table App" subTitle="UI Design & Development" text="This is a basic web app developed in React.js which displays the time table of each and every department in EMEA College of Arts and Science, Kondotty." codeLink="https://github.com/tinkerhubemea/time-table-app" liveLink="https://emeatimetable.netlify.app/" />

                <Work image={ExpenseTracker} title="Expense Tracker" subTitle="UI/UX Design" text="This is a simple Expense Tracker design created for the React.js Bootcamp Held at EMEA College organized by TinkerHub EMEA. This was designed to give the participants a task for development." codeLink="https://www.figma.com/file/OpZVasP6AHifcys8CWcMPA/Expense-Tracker?node-id=2%3A2" />

               

            </div>
        </div>
    )
}

export default Works
