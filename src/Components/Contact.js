import React from 'react'
import './Contact.css'
// import emailjs from 'emailjs-com';
// import Config from './Config.js';

function Contact() {

    // const {config} = Config();

    // const sendEmail = (e) => {
        
    //     e.preventDefault();
    //     emailjs.sendForm(config.SERVICE_ID, config.TEMPLATE_ID, e.target, config.SECRET_API_KEY)
    //         .then((result) => {
    //             console.log(result.text);
    //             alert("Your Message has been delivered");
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    //         e.target.reset();   
    // }

    return (
        <div className='contact' id='contact'>
            <h2 className='contact-title'>Contact Me</h2>
            <h2 className='contact-info'> Reach out! I Want To Hear From You</h2>
            <div className='container'>
                <div className='contact-box'>
                    <span>
                        <i className="fa-solid fa-map-location-dot"></i>
                    </span>
                    <div className='info'>
                        <h3> Location </h3>
                        <p>Alberta, Canada </p>
                    </div>
                </div>
                <div className='contact-box'>
                
                    <span>
                        <i className="fa-solid fa-envelope"></i>
                    </span>
                    <div className='info'>
                        <h3> Email </h3>
                        <p> ahmad.olagunju1@gmail.com </p>
            
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Contact