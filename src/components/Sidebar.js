import React from 'react';
import { Link } from 'react-router-dom';  
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="profile">
                <img src="profile.jpg" alt="Profile" className="profile-pic" />
                <h2>Deep Das</h2>
                <p>Creative Developer</p>
            </div>
            <nav>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/technical">Technical</Link></li>
                    <li><Link to="/creative">Creative</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
