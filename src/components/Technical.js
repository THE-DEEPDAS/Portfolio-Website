import React, { useState } from "react";
import { motion } from "framer-motion";
import ImageCard from "./ImageCard";
import InteractiveBackground from "./shared/InteractiveBackground";
import NeuralHandshake from "./shared/NeuralHandshake";
import "./Technical.css";
import "./shared/BackgroundAnimation.css";

const Technical = () => {
  const [isDecoded, setIsDecoded] = useState(false);

  const experiences = [
    {
      image: "https://via.placeholder.com/300?text=L%26T+Tech+Services",
      title: "L&T Technology Services — AI Intern",
      description: "Automated interpretation of P&ID diagrams and developed relation extraction pipelines for engineering schematics using AI and computer vision.",
    },
    {
      image: "https://via.placeholder.com/300?text=SVNIT+Surat",
      title: "SVNIT Surat — Research Intern",
      description: "Conducted research under Dr. Rahul Dixit on multi-modal, audio, and explainable AI, contributing to five research papers.",
    },
    {
      image: [
        require("./Assets/greatnotes1.png"),
        require("./Assets/greatnotes2.png"),
        require("./Assets/greatnotes3.png"),
        require("./Assets/greatnotes4.png"),
        require("./Assets/greatnotes5.png"),
        require("./Assets/greatnotes6.png"),
      ],
      title: "GreatNotes — Full Stack Developer",
      description: "Designed, developed, and deployed a dynamic website from the ground up, ensuring robust functionality and scalability.",
    },
    {
      image: "https://via.placeholder.com/300?text=PhysicsWallah",
      title: "PhysicsWallah — Subject Matter Expert (Physics)",
      description: "Curated high-quality physics content and developed comprehensive academic resources for enhanced student learning.",
    },
  ];

  const projects = [
    {
      image: [
        require("./Assets/Avishkaar1.png"),
        require("./Assets/Avishkaar2.png"),
        require("./Assets/Avishkaar3.png"),
        require("./Assets/Avishkaar4.jpg"),
        require("./Assets/Avishkaar5.jpg"),
      ],
      title: "GeeksForGeeks Hackathon",
      description: "Excited to share that we secured 3rd runners up position in a national level GeeksForGeeks powered Avishkaar hackathon in season 2 at AITAM.",
    },
    {
      image: [
        require("./Assets/Drone (1).jpg"),
        require("./Assets/Drone (2).jpg"),
        require("./Assets/Drone (3).jpg"),
        require("./Assets/Drone (4).jpg"),
      ],
      title: "ADDC 2025 AIR 2",
      description: "🏅 Won the 2nd prize overall and 2nd prize in safe design at SAEISS organised ADDC 2025 competition. 💡",
    },
    {
      image: [
        require("./Assets/portfolio1.png"),
        require("./Assets/portfolio2.png"),
        require("./Assets/portfolio3.png"),
        require("./Assets/portfolio4.png"),
        require("./Assets/portfolio5.png"),
        require("./Assets/portfolio6.png"),
      ],
      title: "PORTFOLIO WEBSITE",
      description: "🌐 Showcased my web development skills with a fully responsive and interactive portfolio website. Built with React and EmailJs. 🚀",
    },
    {
      image: [
        require("./Assets/capify1.png"),
        require("./Assets/capify2.png"),
        require("./Assets/capify3.png"),
        require("./Assets/capify4.png"),
        require("./Assets/capify5.png"),
        require("./Assets/capify6.png"),
        require("./Assets/capify7.png"),
        require("./Assets/capify8.png"),
      ],
      title: "CAPIFY FINANCE PROJECT",
      description: "📊 Developed a finance management tool to track expenses and investments. Implemented real-time data visualization using React and Chart.js. 💹 capify.vercel.app",
    },
    {
      image: [
        require("./Assets/agrowe1.png"),
        require("./Assets/agrowe2.png"),
        require("./Assets/agrowe3.png"),
        require("./Assets/agrowe4.png"),
        require("./Assets/agrowe5.png"),
        require("./Assets/agrowe6.png"),
      ],
      title: "Agro We AGRICULTURAL PROJECT",
      description: "🌱 Created a platform to support agricultural development by providing tools for crop management, soil analysis, and weather forecasting. Built using HTML CSS and JS. 🌾 wegrow.vercel.app",
    },
    {
      image: require("./Assets/Codex.png"),
      title: "CODEX",
      description: "🏆 Ranked 5th in the Codex Contest 1, demonstrating a strong profile in competitive programming.",
    },
    {
      image: [
        require("./Assets/codeforces1.png"),
        require("./Assets/codeforces2.png"),
        require("./Assets/codeforces3.png"),
      ],
      title: "CODEFORCES PROFILE",
      description: (
        <span>
          🏆 Profile showcasing my competitive programming achievements and
          problem-solving skills on Codeforces. Focused on algorithmic
          challenges and contests. 💡
          <a href="https://codeforces.com/profile/The_DeepDas" target="_blank" rel="noopener noreferrer">Visit Info</a>
        </span>
      ),
    },
    {
      image: [
        require("./Assets/leetcode1.png"),
        require("./Assets/leetcode2.png"),
      ],
      title: "LEETCODE PROFILE",
      description: (
        <span>
          💻 LeetCode profile highlighting progress in solving
          coding problems. Includes various difficulty levels.
          📈
          <a href="https://leetcode.com/u/THE_DEEP_/" target="_blank" rel="noopener noreferrer">Visit Info</a>
        </span>
      ),
    },
    {
      image: [
        require("./Assets/hackout1.jpg"),
        require("./Assets/hackout2.jpg"),
        require("./Assets/hackout3.jpg"),
      ],
      title: "HACKOUT, DAIICT HACKATHON",
      description: "🏅 Participated in HackOut at DAIICT. Collaborated with a team on innovative solutions. 💡",
    },
    {
      image: require("./Assets/Web Wonders finalists.jpg"),
      title: "WEB WONDERS FINALISTS",
      description: "🌟 Finalist in Web Wonders for creating a standout web application with cutting-edge design. 🏅",
    },
    {
      image: [
        require("./Assets/Drone_Workshop1.jpg"),
        require("./Assets/Drone_Workshop2.jpg"),
        require("./Assets/Drone_Workshop3.jpg"),
      ],
      title: "Drone Workshop",
      description: "🏅 Hands-on drone workshop by SAE India. Built a drone from scratch. 💡",
    },
    {
      image: require("./Assets/Gandhian_Idea_Competition.jpg"),
      title: "Ideathon Finalists",
      description: "🌟 Reach final round of Ideathon by Auro University. presented project to panel. 🏅",
    },
    {
      image: require("./Assets/acm_summer.png"),
      title: "ACM SUMMER CHALLENGE",
      description: "🌞 Improved coding skills through ACM Summer Challenge algorithm problems. 🏆",
    },
    {
      image: [
        require("./Assets/linefollower2.png"),
        require("./Assets/linefollower.jpg"),
        require("./Assets/linefollower1.jpg"),
      ],
      title: "Robotics & RC Control",
      description: "🤖 Built line-following robots and RC boats for automation competitions. 🛠️",
    },
    {
      image: [
        require("./Assets/Website (2).png"),
        require("./Assets/Website (3).png"),
        require("./Assets/Website (4).png"),
        require("./Assets/Website (5).png"),
      ],
      title: "Eco Brew Platform",
      description: (
        <span>
          🌱 Sustainability platform to reduce waste.
          <a href="https://ecobrew.highintoxic.tech/" target="_blank" rel="noopener noreferrer">Link</a>
        </span>
      ),
    },
    {
      image: [
        require("./Assets/pulse360 (1).png"),
        require("./Assets/pulse360 (2).png"),
        require("./Assets/pulse360 (3).png"),
      ],
      title: "Pulse360 Healthcare",
      description: (
        <span>
          💻 Smart healthcare prediction using Fitbit data.
          <a href="https://pulse360.highintoxic.tech/" target="_blank" rel="noopener noreferrer">Link</a>
        </span>
      ),
    },
  ];

  const research = [
    {
      image: require("./Assets/scopus.png"),
      title: "Audio Forgery Detection",
      description: "Proposed multi-scale feature fusion for audio deepfake detection. Published in Springer.",
    },
    {
      image: require("./Assets/scopus.png"),
      title: "Kantika (RAG / Dermatology)",
      description: "Advanced RAG pipeline for clinical reasoning in skin health.",
    },
  ];

  return (
    <div className="technical-page">
      <InteractiveBackground type="technical" />

      {!isDecoded && (
        <NeuralHandshake
          title="SECTOR: TECHNICAL"
          onComplete={() => setIsDecoded(true)}
        />
      )}

      <motion.div
        className="technical-container"
        initial={{ opacity: 0, filter: "blur(20px)" }}
        animate={isDecoded ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Technical Universe</h1>
          <p>Navigating through development, research, and innovation.</p>
        </motion.header>

        <motion.section className="technical-section kinetic-layer-1">
          <h2><i className="fas fa-briefcase"></i> Experience</h2>
          <div className="technical-gallery grid-layout">
            {experiences.map((exp, index) => (
              <ImageCard key={index} {...exp} />
            ))}
          </div>
        </motion.section>

        <motion.section className="technical-section kinetic-layer-2">
          <h2><i className="fas fa-project-diagram"></i> Projects</h2>
          <div className="technical-gallery flex-scroll">
            {projects.map((proj, index) => (
              <ImageCard key={index} {...proj} />
            ))}
          </div>
        </motion.section>

        <motion.section className="technical-section kinetic-layer-3">
          <h2><i className="fas fa-microscope"></i> Research</h2>
          <div className="technical-gallery staggered-grid">
            {research.map((res, index) => (
              <ImageCard key={index} {...res} />
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Technical;
