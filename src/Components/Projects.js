import {React} from 'react'
import ProjectCard from './ProjectCard';
import './Projects.css'

function Projects() {
    
    return (
    <div className='projects' id='projects'>
        <p className='projects-label'>Projects</p>
        <div className='projects-container'>
  
                <ProjectCard 
                  imgSrc="assets/portfolioPic.png"
                  imgAlt="Portfolio Project Image"
                  title="Personal Portolio"
                  description="Created with the power of React, this website showcases my skills and experience in an engaging and interactive manner. It also provides a clean interface equipped with dark mode and routing."
                  buttonText="Source Code"
                  link="https://github.com/AhmadOlagunju/Personal-Portfolio"
                   
                   
                />
                <ProjectCard
                  imgSrc="assets/rogue.png"
                  imgAlt="Roguelike Project Image"
                  title="Roguelike Project"
                  description="Designed a rogue-like game using C++, captivating players with challenging enemies and obstacles. Implemented the library ncurses to create an immersive and visually engaging interface."
                  buttonText="Source Code"
                  link="https://github.com/AhmadOlagunju/RogueLikeProject"
                   
                   
                />
                <ProjectCard
                  imgSrc="assets/clockPic.jpeg"
                  imgAlt="World Clock Project Image"
                  title="World Clock Chrome Extension"
                  description="A chrome extension that displays the time for the selected countries by accessing an API. Mostly programmed using JavaScript and HTML."
                  buttonText="Source Code"
                  link="https://github.com/AhmadOlagunju/World-Clock-Extension"
                   
                   
                />
                <span className="stretch"></span>
  
        </div>
        </div>
    )
}

export default Projects