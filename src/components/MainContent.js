import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import './MainContent.css';

const MainContent = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="main-content">
            <h1>👋 Hello, I'm Deep Das–Turning Coffee and Code into AI Magic!</h1>
            <p>
                As a creative developer, I blend code and design to build unique, user-centric
                experiences with best possible functionalities. Let's turn your ideas into a dynamic and engaging digital reality!
            </p>
            <div className="cards">
                <Card 
                    title="A Peek into My Creative Journey" 
                    description="About" 
                    color="orange" 
                    onClick={() => handleNavigation('/about')}
                />
                <Card 
                    title="Top Work and Technical Projects" 
                    description="Technical" 
                    color="red" 
                    onClick={() => handleNavigation('/technical')}
                />
                <Card 
                    title="Creative Solutions to Meet Your Goals" 
                    description="Creative" 
                    color="green" 
                    onClick={() => handleNavigation('/creative')}
                />
                <Card 
                    title="Let's Start a Conversation" 
                    description="Contact" 
                    color="blue" 
                    onClick={() => handleNavigation('/contact')}
                />
            </div>
        </div>
    );
};

export default MainContent;
