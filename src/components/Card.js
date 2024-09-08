import React, { useEffect, useRef } from 'react';
import './Card.css'; 

const Card = ({ title, description, color, icon, onClick }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!cardRef.current) return;

            const rect = cardRef.current.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

            if (isVisible) {
                cardRef.current.style.animation = "cardScroll 0.5s ease-out forwards";
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger the animation on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div 
            className={`card ${color}`} 
            onClick={onClick}
            ref={cardRef}
        >
            <div className="card-content">
                <i className={`fas ${icon} icon`}></i> {/* Using FontAwesome icon */}
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;
