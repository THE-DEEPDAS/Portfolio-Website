import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "./components/Navigation";
import MainContent from "./components/MainContent";
import About from "./components/About";
import Academic from "./components/Academic";
import Technical from "./components/Technical";
import CoCurricular from "./components/CoCurricular";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import LoaderVideo from "./components/Assets/loader.mp4";
import FloatingElements from "./components/shared/FloatingElements";
import SpotlightMask from "./components/shared/SpotlightMask";
import "./App.css";

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)", z: -500 }}
    animate={{ opacity: 1, scale: 1, filter: "blur(0px)", z: 0 }}
    exit={{ opacity: 0, scale: 1.5, filter: "blur(20px)", z: 500 }}
    transition={{
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96],
      opacity: { duration: 0.5 }
    }}
    style={{
      width: "100%",
      height: "100%",
      perspective: "1000px",
      transformStyle: "preserve-3d"
    }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><MainContent /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/academic" element={<PageWrapper><Academic /></PageWrapper>} />
        <Route path="/technical" element={<PageWrapper><Technical /></PageWrapper>} />
        <Route path="/cocurricular" element={<PageWrapper><CoCurricular /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/testimonials" element={<PageWrapper><Testimonials /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

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
        <div className="grain-overlay" />
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>
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
            <Navigation />
            <FloatingElements />
            <SpotlightMask />
            <AnimatedRoutes />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
