import React, { useState } from "react";
import "./CoCurricular.css";
import { motion } from "framer-motion";
import ImageCard from "./ImageCard";
import InteractiveBackground from "./shared/InteractiveBackground";
import NeuralHandshake from "./shared/NeuralHandshake";

const CoCurricular = () => {
  const [isDecoded, setIsDecoded] = useState(false);
  const images = [
    {
      image: require("./Assets/tabla.jpg"),
      title: "Skilled Tabla Player",
      description: "🎶 Mastery in playing the tabla, showcasing rhythmic precision and cultural depth.",
    },
    {
      image: require("./Assets/taekwondo.jpg"),
      title: "Trained in Taekwondo",
      description: "🥋 Completed rigorous Taekwondo training, demonstrating discipline and martial skill.",
    },
    {
      image: require("./Assets/karate_medals.jpg"),
      title: "State Level Karate Medals",
      description: "🏅 Achieved top honors in state-level karate competitions, reflecting dedication and excellence.",
    },
    {
      image: require("./Assets/skating.jpg"),
      title: "Skating Competitions",
      description: "⛸️ Participated in various skating competitions, showcasing agility and competitive spirit.",
    },
    {
      image: require("./Assets/debate.jpg"),
      title: "Debate winner",
      description: "🏆 Recognized for eloquence and argumentation skills in multiple debate contests.",
    },
    {
      image: require("./Assets/cricket.png"),
      title: "Multi-Sport Enthusiast",
      description: "🏏 Actively involved in a range of sports, from cricket and badminton to tug of war.",
    },
    {
      image: [require("./Assets/chess1.png"), require("./Assets/chess2.png")],
      title: "Passionate Chess Player",
      description: "♟️ On the Champions league on chess.com .",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="CoCurricular-page">
      <InteractiveBackground type="academic" />

      {!isDecoded && (
        <NeuralHandshake
          title="SECTOR: CO-CURRICULAR"
          onComplete={() => setIsDecoded(true)}
        />
      )}

      <motion.div
        initial={{ opacity: 0, filter: "blur(20px)" }}
        animate={isDecoded ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="cocurricular-content"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Life Beyond Academics
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Exploring diverse interests through sports, arts, and competitive pursuits.
        </motion.p>
        <motion.div
          className="CoCurricular-gallery"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {images.map((img, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ImageCard
                image={img.image}
                title={img.title}
                description={img.description}
                defaultRevealed={true}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CoCurricular;
