import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import About from './components/About';
import Academic from './components/Academic';
import Technical from './components/Technical';
import CoCurricular from './components/CoCurricular';
import Contact from './components/Contact';
import './App.css';
import LoaderVideo from './components/Assets/loader.mp4'; 

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); 

        return () => clearTimeout(timer); 
    }, []);

    return (
        <Router>
            <div className="app-container">
                {loading ? (
                    <div className="loader-container">
                        <video
                            src={LoaderVideo}
                            autoPlay
                            loop
                            muted
                            className="loader-video"
                        />
                    </div>
                ) : (
                    <>
                        <Sidebar />
                        <Routes>
                            <Route path="/" element={<MainContent />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/academic" element={<Academic />} />
                            <Route path="/technical" element={<Technical />} />
                            <Route path="/cocurricular" element={<CoCurricular />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </>
                )}
            </div>
        </Router>
    );
};

export default App;
