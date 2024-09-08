import React, { useState } from 'react';
import './ImageCard.css';

const ImageCard = ({ image, title, description }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openImage = () => {
        setIsOpen(true);
        setCurrentImageIndex(0); 
    };

    const closeImage = () => {
        setIsOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % image.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + image.length) % image.length);
    };

    const isMultipleImages = Array.isArray(image);

    return (
        <>
            <div className="image-card" onClick={openImage}>
                {isMultipleImages ? (
                    <div className="image-gallery">
                        {image.map((img, index) => (
                            <img key={index} src={img} alt={title} className="image-card-img" />
                        ))}
                    </div>
                ) : (
                    <img src={image} alt={title} className="image-card-img" />
                )}
                <div className="image-card-title">{title}</div>
            </div>

            {isOpen && (
                <div className="image-overlay">
                    <div className="image-enlarged">
                        <button className="close-button" onClick={closeImage}>X</button>
                        {isMultipleImages ? (
                            <>
                                <button className="prev-button" onClick={prevImage}>Previous</button>
                                <img
                                    src={image[currentImageIndex]}
                                    alt={title}
                                    className="enlarged-img"
                                />
                                <button className="next-button" onClick={nextImage}>Next</button>
                            </>
                        ) : (
                            <img src={image} alt={title} className="enlarged-img" />
                        )}
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
