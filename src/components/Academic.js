import React from 'react';
import ImageCard from './ImageCard';
import './Academic.css'; 

const Academic = () => {
    const images = [
        {
            image: require('./Assets/sem1_result.jpg'),
            title: 'SEMESTER 1 RESULT',
            description: '📊 Semester 1 Results: CGPA 9.30, SGPA 9.30. The hard work paid off! 🎓',
        },
        {
            image: require('./Assets/sem2_result.jpg'),
            title: 'SEMESTER 2 RESULT',
            description: '📊 Semester 2 Results: CGPA 9.42, SGPA 9.52. Keeping up the momentum! 📈',
        },
        {
            image: require('./Assets/NSEP.png'),
            title: 'NSEP CENTER TOPPER',
            description: '🏅 Proud to be the Center Topper in NSEP Olympiad by IAPT! Ranked 1st in my center! 🥇',
        },
        {
            image: require('./Assets/NSEC.png'),
            title: 'NSEC CENTER TOPPER',
            description: '🏅 Center Topper in NSEC Olympiad! Secured 1st place at my center, conducted by IAPT and ACT! 🌟',
        },
        {
            image: require('./Assets/acad_medals.jpg'),
            title: 'OLYMPIAD MEDALS',
            description: '🏆 A collection of medals from various Olympiads, UCMAS, and inter-school competitions! 🥇🥈🥉',
        },
        {
            image: require('./Assets/Technothlon.png'),
            title: 'TECHNOTHLON AIR 60',
            description: '🥈 Achieved All India Rank 60 in Technothlon, organized by IIT Guwahati. A proud moment! 🇮🇳',
        },
        {
            image: require('./Assets/city topper.jpg'),
            title: 'TECHNOTHLON CITY TOPPER',
            description: '🏅 City Topper in Technothlon! Secured All India Rank 60 in a prestigious competition by IIT Guwahati. 📜',
        },
        {
            image: require('./Assets/12_marksheet.jpg'),
            title: 'CLASS 12 RESULT',
            description: '🎓 Class 12 Results: Achieved a stellar 99.7 percentile. Hard work and dedication! 💪',
        },
        {
            image: require('./Assets/10_marksheet.jpg'),
            title: 'CLASS 10 RESULT',
            description: '🎓 Class 10 Results: Grade A1. Mass promotion but still a proud moment! 😊',
        },
        {
            image: require('./Assets/zonal.png'),
            title: 'UCMAS ZONAL COMPETITION',
            description: '🏆 1st Runner-Up in the UCMAS Zonal Level Competition! A fantastic achievement in mental arithmetic! 🧠',
        },
        {
            image: require('./Assets/state.png'),
            title: 'UCMAS STATE COMPETITION',
            description: '🏅 Received the Merit Award in the UCMAS State Level Competition. Proud to represent my state! 🌍',
        },
        {
            image: require('./Assets/national.png'),
            title: 'UCMAS NATIONAL COMPETITION',
            description: '🏅 Merit Award winner at the UCMAS National Level Competition! A remarkable national achievement! 🇮🇳',
        },
    ];
    

    return (
        <div className="academic-page" >
            <h1 >Academic Page</h1>
            <p >
                This page is dedicated to my Academic Background so Far, forgive my photography skills 📸
            </p>
            <div className="academic-gallery">
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

export default Academic;
