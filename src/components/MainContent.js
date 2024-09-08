import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import './MainContent.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const MainContent = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="main-content">
            <h1>👋 Hi, I'm Deep Das – Crafting Code into Magic!</h1>
            <p>
                As a creative developer, I blend code and design to build unique, user-centric
                experiences with the best functionalities. Let’s transform your ideas into dynamic digital solutions!
            </p>
            <div className="cards">
                <Card 
                    title="My Story" 
                    description="About" 
                    color="blue" 
                    icon="fa-smile" 
                    onClick={() => handleNavigation('/about')}
                />
                <Card 
                    title="My Journey" 
                    description="Academic" 
                    color="blue" 
                    icon="fa-book" 
                    onClick={() => handleNavigation('/academic')}
                />
                <Card 
                    title="My Work" 
                    description="Technical" 
                    color="blue" 
                    icon="fa-briefcase" 
                    onClick={() => handleNavigation('/technical')}
                />
                <Card 
                    title="Creative Solutions" 
                    description="Co-Curriculars" 
                    color="blue" 
                    icon="fa-cogs" 
                    onClick={() => handleNavigation('/cocurricular')}
                />
                <Card 
                    title="Get in Touch" 
                    description="Contact" 
                    color="blue" 
                    icon="fa-envelope" 
                    onClick={() => handleNavigation('/contact')}
                />
            </div>
        </div>
    );
};

export default MainContent;
