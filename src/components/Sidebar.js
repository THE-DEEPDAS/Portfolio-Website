import React from 'react';
import { Link } from 'react-router-dom';
import Magnetic from './shared/Magnetic';
import './Sidebar.css';
import Video from './Assets/Deep das.gif';
import ResumePDF from './Assets/Resume.pdf';

const Sidebar = () => {
    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Academic", path: "/academic" },
        { name: "Technical", path: "/technical" },
        { name: "Co-Curriculars", path: "/cocurricular" },
        { name: "Contact", path: "/contact" },
        { name: "Testimonials", path: "/testimonials" },
    ];

    return (
        <div className="sidebar">
            <div className="profile">
                <img src={Video} alt="Profile" className="profile-pic" />
                <h2>Deep Das</h2>
                <p>Creative Developer</p>
            </div>
            <nav>
                <ul>
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Magnetic strength={0.2}>
                                <Link to={item.path}>{item.name}</Link>
                            </Magnetic>
                        </li>
                    ))}
                </ul>
            </nav>
            <Magnetic strength={0.3}>
                <a href={ResumePDF} download className="resume-btn">Download Resume</a>
            </Magnetic>
        </div>
    );
};

export default Sidebar;
