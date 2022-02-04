import React from 'react';
import '../Assates/Style/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='icons'>
                    <FontAwesomeIcon icon={faLinkedin} className='icon' />
                    <FontAwesomeIcon icon={faInstagram} className='icon' />
                    <FontAwesomeIcon icon={faYoutube} className='icon' />
                    <FontAwesomeIcon icon={faFacebook} className='icon' />
                </div>
                <p>Copyright © Robotics Club, RTU Kota</p>
            </div>
        </>
    )
};

export default Footer;
