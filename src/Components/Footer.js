import React from 'react'
import './Footer.css'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-social">
                <a href="https://www.linkedin.com/in/ahmad-olagunju/" className="footer-icon"><LinkedInIcon/></a>
                <a href="https://github.com/AhmadOlagunju" className="footer-icon"><GitHubIcon/></a>
            </div>
            <p className='footer-copyright'>Copyright &#169; 2023  All rights reserved.</p>
        </div>
    )
}

export default Footer
