import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css';
import Video from './Assets/Deep das.gif';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const links = document.querySelectorAll('.dropdown-menu nav ul li a');
        let index = 0;

        const interval = setInterval(() => {
            if (isOpen && index < links.length) {
                links[index].classList.add('hover-effect');
                setTimeout(() => {
                    links[index].classList.remove('hover-effect');
                    index++;
                }, 1000); // Duration of hover effect
            } else if (!isOpen) {
                clearInterval(interval); // Stop if the menu is closed
                index = 0; // Reset index when menu is closed
            }
        }, 2000); // Change every 2 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [isOpen]); // Run effect when isOpen changes

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
