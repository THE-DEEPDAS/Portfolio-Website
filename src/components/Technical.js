import React from 'react';
import ImageCard from './ImageCard';

const Technical = () => {
    const images = [
        {
            image: 'https://via.placeholder.com/600',
            title: 'Technical Image 1',
            description: 'Description of the first technical image.',
        },
        {
            image: 'https://via.placeholder.com/600',
            title: 'Technical Image 2',
            description: 'Description of the second technical image.',
        },
        {
            image: 'https://via.placeholder.com/600',
            title: 'Technical Image 3',
            description: 'Description of the third technical image.',
        },
    ];

    return (
        <div
            className="technical-page"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            <h1
                style={{
                    fontWeight: 'bold',
                    fontSize: '2rem',
                    marginBottom: '20px',
                }}
            >
                Technical Section
            </h1>
            <div
                className="technical-gallery"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '20px',
                }}
            >
                {images.map((img, index) => (
                    <ImageCard
                        key={index}
                        image={img.image}
                        title={img.title}
                        description={img.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Technical;
