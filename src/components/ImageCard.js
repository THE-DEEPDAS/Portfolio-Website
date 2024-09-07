import React, { useState } from 'react';
import './ImageCard.css';

const ImageCard = ({ image, title, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openImage = () => {
        setIsOpen(true);
    };

    const closeImage = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className="image-card" onClick={openImage}>
                <img src={image} alt={title} className="image-card-img" />
                <div className="image-card-title">{title}</div>
            </div>

            {isOpen && (
                <div className="image-overlay">
                    <div className="image-enlarged">
                        <button className="close-button" onClick={closeImage}>X</button>
                        <img src={image} alt={title} className="enlarged-img" />
                        <div className="image-description">
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageCard;
