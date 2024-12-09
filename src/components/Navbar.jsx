import React from 'react';
import logo from '../assets/kevinRushLogo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <img className='logo' src={logo} alt="logo" />
            </div>

            <div className='social-icons'>
                <FaLinkedin />
                <FaGithub />
                <FaInstagram />
                <FaSquareTwitter />
            </div>
        </nav>
    );
}

export default Navbar;
