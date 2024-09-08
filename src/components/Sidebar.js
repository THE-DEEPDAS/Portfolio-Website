import React from 'react';
import { Link } from 'react-router-dom';  
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="profile">
            <img src={require('./Assets/logo.png')} alt="Profile" className="profile-pic" />
                <h2>Deep Das</h2>
                <p>Creative Developer</p>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/academic">Academic</Link></li>
                    <li><Link to="/technical">Technical</Link></li>
                    <li><Link to="/cocurricular">Co-Curriculars</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
