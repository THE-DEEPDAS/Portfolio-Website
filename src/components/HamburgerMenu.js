import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css';
import Video from './Assets/Deep das.gif';

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
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default HamburgerMenu;
