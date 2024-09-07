import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import About from './components/About';
import Technical from './components/Technical';
import Creative from './components/Creative';
import Contact from './components/Contact';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/technical" element={<Technical />} />
                    <Route path="/creative" element={<Creative />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
