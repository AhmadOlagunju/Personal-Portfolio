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
            <div className='loc-icon'>
                <i className="fa fa-map-location-dot fa-2xl"></i>
            </div>
            <div className='loc-info'>
                <p className="info-label">Location </p>
                <p>Alberta, Canada </p>
            </div>
            
            <div className='mail-icon'>
                <i className="fa-solid fa-envelope fa-2xl"></i>
            </div>
            <div className='mail-info'>
                <p className="info-label">Email </p>
                <p> ahmad.olagunju17@gmail.com</p>
            </div>
        </div>
    )
}

export default Contact