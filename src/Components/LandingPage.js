import React from 'react'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Home from './Home'
import Projects from './Projects'


function LandingPage() {
    return (
        <div>
            <Home/>
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default LandingPage
