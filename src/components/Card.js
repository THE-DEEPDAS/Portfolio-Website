import React from 'react';
import './Card.css'; 

const Card = ({ title, description, color, icon, onClick }) => {
    return (
        <div className={`card ${color}`} onClick={onClick}>
            <div className="card-content">
                <i className={`fas ${icon} icon`}></i> {/* Using FontAwesome icon */}
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;
