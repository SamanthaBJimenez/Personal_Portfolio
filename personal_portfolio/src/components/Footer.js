import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
// import '../css/Footer.css';

const Footer = () => {
    return (
        <div className='FooterDiv'>
            <nav class='navbar navbar-expand-lg sticky-top' /*style={{"justify-content": "flex-end"}}*/>
                <a className='FooterA' href='https://github.com/SamanthaBJimenez'>
                    <FaGithubSquare/>
                </a>
                <a className='FooterA' href='https://www.linkedin.com/in/samantha-jimenez-8335076a/'>
                    <FaLinkedin/>
                </a>
            </nav>
        </div>
    )
}

export default Footer;