import React from 'react'
import './About.css'

function About() {
  return (
    <div id="about">
      <div className="about-data">
        <div className="about-img">
          <img src="assets/about.jpeg" alt="" />
        </div>
        <div className='about-sections'>
          <h2 className="about-subtitle">I'm Ahmad</h2>
          <p className="about-text">
            I am currently pursuing a computer science major at the University of Alberta, immersing myself 
            in the ever-evolving world of technology and innovation. With a solid foundation in Python, C++, 
            and Java, I am eager to use my knowledge and skills to shape the future of technology. 
            Driven by a profound fascination with both software development and artificial intelligence, I am
            constantly seeking opportunities to explore and contribute to these dynamic fields of study.
                    </p>
            <br></br>
          <p><b>Languages and tools known:</b> </p>
          <p>
            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" alt='react'/>
            
            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt='javascript'/>
            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" alt='html'/>
            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" alt='css'/>
            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/5c058a388828bb5fde0bcafd4bc867b5bb3f26f3/topics/python/python.png" alt='python'/>
            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" alt="VS Code" />
            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" alt="git" />
            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/ubuntu/ubuntu.png" alt="ubuntu" />
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
