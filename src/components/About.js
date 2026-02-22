import React, { useState } from "react";
import "./About.css";
import myImage from "./Assets/my_img.jpg";
import InteractiveBackground from "./shared/InteractiveBackground";
import { motion } from 'framer-motion';
import SkillOrbit from "./shared/SkillOrbit";
import NeuralHandshake from "./shared/NeuralHandshake";

const About = () => {
  const [isDecoded, setIsDecoded] = useState(false);
  const skills = [
    "Artificial Intelligence", "Machine Learning", "Deep Learning",
    "NLP", "Computer Vision", "LLMs", "Python", "TypeScript",
    "React", "Node.js", "Express.js", "MongoDB", "C++",
    "Competitive Programming", "Drone Autonomy"
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const infoItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="about-wrapper">
      <InteractiveBackground type="about" />
      {!isDecoded && (
        <NeuralHandshake
          title="SECTOR: ABOUT ME"
          onComplete={() => setIsDecoded(true)}
        />
      )}
      <motion.div
        className="about-page"
        initial={{ opacity: 0, filter: "blur(20px)" }}
        animate={isDecoded ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="about-content-wrapper">
          <motion.header
            className="about-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <div className="profile-image-container">
              <img src={myImage} alt="Profile" className="profile-image" />
            </div>
            <div className="header-text">
              <h1>About Me</h1>
              <p>
                I am a dedicated B.Tech student specializing in Artificial Intelligence at SVNIT.
                I am passionate about advancing technology and applying my skills to real-world
                challenges, particularly in the fields of AI development and drone autonomy.
              </p>
            </div>
          </motion.header>

          <motion.section
            className="about-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h2><i className="fas fa-user"></i> Personal Details</h2>
            <motion.div
              className="personal-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
            >
              <motion.div className="info-item" variants={infoItemVariants}>
                <strong>Name</strong>
                <span>Deep Das</span>
              </motion.div>
              <motion.div className="info-item" variants={infoItemVariants}>
                <strong>Email</strong>
                <span>u23ai052@coed.svnit.ac.in</span>
              </motion.div>
              <motion.div className="info-item" variants={infoItemVariants}>
                <strong>Location</strong>
                <span>Surat, India</span>
              </motion.div>
              <motion.div className="info-item" variants={infoItemVariants}>
                <strong>Education</strong>
                <span>B.Tech in AI, SVNIT</span>
              </motion.div>
            </motion.div>
          </motion.section>

          <motion.section
            className="about-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h2><i className="fas fa-tools"></i> Core Expertise</h2>
            <SkillOrbit skills={skills} />
          </motion.section>

          <motion.section
            className="about-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h2><i className="fas fa-link"></i> Professional Profiles</h2>
            <div className="links-grid">
              <a href="https://www.linkedin.com/in/deep-das-4b5aa527b/" target="_blank" rel="noopener noreferrer" className="profile-link">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="https://github.com/THE-DEEPDAS" target="_blank" rel="noopener noreferrer" className="profile-link">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="https://drive.google.com/drive/folders/11ybo9GmoD9yyJ38wun3tILKJjWsy6mEn?usp=sharing" target="_blank" rel="noopener noreferrer" className="profile-link">
                <i className="fas fa-file-pdf"></i> Resume
              </a>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
