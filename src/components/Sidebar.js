import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="profile">
                <img src="profile.jpg" alt="Profile" className="profile-pic" />
                <h2>David Harrison</h2>
                <p>Creative Developer</p>
            </div>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
