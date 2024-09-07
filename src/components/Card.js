import React from 'react';
import './Card.css';

const Card = ({ title, description, color }) => {
    return (
        <div className={`card ${color}`}>
            <div className="card-content">
                <h3>{description}</h3>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default Card;
