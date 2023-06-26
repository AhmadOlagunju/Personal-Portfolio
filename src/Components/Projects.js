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
                  imgSrc="assets/picar.jpg"
                  imgAlt="Picar using Raspberry Pi"
                  title="Picar using Raspberry Pi"
                  description="I assembled a robotic car with an ultrasonic sensor that is able to detect and avoid obstacles using raspberry Pi and Python. I am currently working on making this car self-driving using machine learning so that it can navigate various courses."
                  buttonText="Source Code"
                  link="https://github.com/AhmadOlagunju/picar-tests"
                   
                   
                />
                
                <ProjectCard
                  imgSrc="assets/rogue.png"
                  imgAlt="Roguelike Project Image"
                  title="Roguelike Project"
                  description="Designed a rogue-like game using C++, captivating players with challenging enemies and obstacles. Implemented the library ncurses to create an immersive and visually engaging interface."
                  buttonText="Source Code"
                  link="https://github.com/AhmadOlagunju/RogueLikeProject"
                   
                   
                />
              
                <span className="stretch"></span>
  
        </div>
        </div>
    )
}

export default Projects