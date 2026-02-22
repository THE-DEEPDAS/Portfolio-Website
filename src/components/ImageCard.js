import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ImageCard.css';

const ImageCard = ({ image, title, description, defaultRevealed = false }) => {
    const [isRevealed, setIsRevealed] = useState(defaultRevealed);
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Update state if prop changes (optional but good for consistency)
    React.useEffect(() => {
        if (defaultRevealed) setIsRevealed(true);
    }, [defaultRevealed]);

    // Generate a unique gradient for the unrevealed state
    const [gemStyle] = useState(() => {
        const colors = [
            'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
            'linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)',
            'linear-gradient(135deg, #f43f5e 0%, #fb923c 100%)',
            'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
            'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)'
        ];
        return { background: colors[Math.floor(Math.random() * colors.length)] };
    });

    const handleCardClick = () => {
        if (!isRevealed) {
            setIsRevealed(true);
        } else {
            setIsOpen(true);
            setCurrentImageIndex(0);
        }
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
            <motion.div
                className={`image-card ${isRevealed ? 'revealed' : 'locked'}`}
                onClick={handleCardClick}
                layout
                whileHover={{ y: -10, scale: 1.02 }}
            >
                {!isRevealed ? (
                    <div className="card-gem" style={gemStyle}>
                        <div className="gem-pulse" />
                    </div>
                ) : (
                    <>
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
                    </>
                )}
            </motion.div>

            {isOpen && (
                <div className="image-overlay" onClick={closeImage}>
                    <div className="image-enlarged" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeImage}>
                            <i className="fas fa-times"></i>
                        </button>
                        {isMultipleImages ? (
                            <div className="enlarged-content">
                                <button className="prev-button" onClick={prevImage}>
                                    <i className="fas fa-chevron-left"></i>
                                </button>
                                <img
                                    src={image[currentImageIndex]}
                                    alt={title}
                                    className="enlarged-img"
                                />
                                <button className="next-button" onClick={nextImage}>
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                            </div>
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
