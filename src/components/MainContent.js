import React from 'react';
import Card from './Card';
import './MainContent.css';

const MainContent = () => {
    return (
        <div className="main-content">
            <h1>👋 Hello, I'm David – Crafting Creative Code!</h1>
            <p>
                As a creative developer, I blend code and design to build unique, user-centric
                experiences. Let's turn your ideas into a dynamic and engaging digital reality!
            </p>
            <div className="cards">
                <Card title="A Peek into My Creative Journey" description="About" color="orange" />
                <Card title="Top Work and Creative Projects" description="Portfolio" color="red" />
                <Card title="Solutions to Meet Your Goals" description="Services" color="green" />
                <Card title="Let's Start a Conversation" description="Contact" color="blue" />
            </div>
        </div>
    );
};

export default MainContent;
