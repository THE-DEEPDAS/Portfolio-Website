import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import "./MainContent.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import InteractiveBackground from "./shared/InteractiveBackground";

import { motion } from "framer-motion";
import ScrambleText from "./shared/ScrambleText";
import CustomCursor from "./shared/CustomCursor";

import FloatingElements from "./shared/FloatingElements";

const MainContent = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="main-wrapper">
      <CustomCursor />
      <InteractiveBackground type="home" />
      <div className="main-content">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', zIndex: 10 }}
        >
          <ScrambleText text="Hi, I'm Deep Das" />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ position: 'relative', zIndex: 10 }}
        >
          As a creative developer, I blend code and design to build unique,
          user-centric experiences. Let's transform your ideas into dynamic digital solutions.
        </motion.p>

        <motion.div
          className="cards"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <Card
              title="My Story"
              description="About me, my background and passions."
              icon="fas fa-user-astronaut"
              onClick={() => handleNavigation("/about")}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card
              title="My Journey"
              description="Academic achievements and milestones."
              icon="fas fa-graduation-cap"
              onClick={() => handleNavigation("/academic")}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card
              title="My Work"
              description="Technical projects and professional experience."
              icon="fas fa-code-branch"
              onClick={() => handleNavigation("/technical")}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card
              title="Creative Lab"
              description="Explorations in design and co-curriculars."
              icon="fas fa-flask"
              onClick={() => handleNavigation("/cocurricular")}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card
              title="Testimonials"
              description="What others say about working with me."
              icon="fas fa-quote-left"
              onClick={() => handleNavigation("/testimonials")}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card
              title="Contact"
              description="Let's build something amazing together."
              icon="fas fa-paper-plane"
              onClick={() => handleNavigation("/contact")}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MainContent;
