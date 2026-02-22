import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css';
import Video from './Assets/Deep das.gif';
import ResumePDF from './Assets/Resume.pdf';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
            </div>
            <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
                <div className="profile">
                    <img src={Video} alt="Profile" className="profile-pic" />
                    <h2>Deep Das</h2>
                    <p>Creative Developer</p>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                        <li><Link to="/academic" onClick={toggleMenu}>Academic</Link></li>
                        <li><Link to="/technical" onClick={toggleMenu}>Technical</Link></li>
                        <li><Link to="/cocurricular" onClick={toggleMenu}>Co-Curriculars</Link></li>
                        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                        <li><Link to="/testimonials" onClick={toggleMenu}>Testimonials</Link></li>
                    </ul>
                </nav>
                <a href={ResumePDF} download className="resume-btn" style={{ marginTop: 'auto' }}>Download Resume</a>
            </div>
        </>
    );
};

export default HamburgerMenu;
