import React, { useState } from "react";
import "./Academic.css";
import InteractiveBackground from "./shared/InteractiveBackground";
import { motion } from 'framer-motion';
import ImageCard from "./ImageCard";
import NeuralHandshake from "./shared/NeuralHandshake";

const Academic = () => {
  const [isDecoded, setIsDecoded] = useState(false);
  const details = [
    {
      image: require("./Assets/10_marksheet.jpg"),
      title: "Secondary School (X)",
      description: "🏫 Navrachana Higher Secondary School: Graduated with 87% (2018-2019).",
    },
    {
      image: require("./Assets/12_marksheet.jpg"),
      title: "Higher Secondary (XII)",
      description: "🏫 Navrachana Higher Secondary School: Completed CBSE with 82.2% in PCM (2020-2021).",
    },
    {
      image: require("./Assets/sem3_result.png"),
      title: "B.Tech in Artificial Intelligence",
      description: "🎓 Sardar Vallabhbhai National Institute of Technology (SVNIT): Pursuing AI specialization (2023-Present).",
    }
  ];

  return (
    <div className="academic-wrapper">
      <InteractiveBackground type="academic" />

      {!isDecoded && (
        <NeuralHandshake
          title="SECTOR: ACADEMIC"
          onComplete={() => setIsDecoded(true)}
        />
      )}

      <motion.div
        className="academic-page"
        initial={{ opacity: 0, filter: "blur(20px)" }}
        animate={isDecoded ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>Academic Journey</h1>
          <p>Educational milestones and certifications.</p>
        </motion.header>

        <div className="timeline-layout">
          <div className="timeline-connector"></div>
          <div className="academic-gallery">
            {details.map((item, index) => (
              <motion.div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="timeline-dot"></div>
                <ImageCard {...item} defaultRevealed={true} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Academic;
