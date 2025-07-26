import React from "react";
import ImageCard from "./ImageCard";
import "./Technical.css";
import "./shared/BackgroundAnimation.css";

const Technical = () => {
  // Experience data (grouped like projects)
  const experiences = [
    // Reverse chronological by resume dates
    {
      image: ["https://via.placeholder.com/300?text=L%26T+Tech+Services"],
      title: "L&T Technology Services — AI Intern",
      description:
        "Automated interpretation of P&ID diagrams and developed relation extraction pipelines for engineering schematics using AI and computer vision.",
    },
    {
      image: ["https://via.placeholder.com/300?text=SVNIT+Surat"],
      title: "SVNIT Surat — Research Intern",
      description:
        "Conducted research under Dr. Rahul Dixit on multi-modal, audio, and explainable AI, contributing to five research papers.",
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
      description:
        "Designed, developed, and deployed a dynamic website from the ground up, ensuring robust functionality and scalability.",
    },
    {
      image: ["https://via.placeholder.com/300?text=PhysicsWallah"],
      title: "PhysicsWallah — Subject Matter Expert (Physics)",
      description:
        "Curated high-quality physics content and developed comprehensive academic resources for enhanced student learning.",
    },
  ];

  // Other projects
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
      description:
        "Excited to share that we secured 3rd runners up position in a national level GeeksForGeeks powered Avishkaar hackathon in season 2 at AITAM.",
    },
    {
      image: [
        require("./Assets/Drone (1).jpg"),
        require("./Assets/Drone (2).jpg"),
        require("./Assets/Drone (3).jpg"),
        require("./Assets/Drone (4).jpg"),
      ],
      title: "ADDC 2025 AIR 2",
      description:
        "🏅 Won the 2nd prize overall and 2nd prize in safe design at SAEISS organised ADDC 2025 competition. 💡",
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
      description:
        "🌐 Showcased my web development skills with a fully responsive and interactive portfolio website. Built with React and EmailJs. 🚀",
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
      description:
        "📊 Developed a finance management tool to track expenses and investments. Implemented real-time data visualization using React and Chart.js. 💹 capify.vercel.app",
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
      description:
        "🌱 Created a platform to support agricultural development by providing tools for crop management, soil analysis, and weather forecasting. Built using HTML CSS and JS. 🌾 wegrow.vercel.app",
    },
    {
      image: require("./Assets/Codex.png"),
      title: "CODEX",
      description:
        "🏆 Ranked 5th in the Codex Contest 1, demonstrating a strong profile in competitive program",
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
          <a
            href="https://codeforces.com/profile/The_DeepDas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Codeforces for latest info
          </a>
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
          💻 LeetCode profile highlighting my practice and progress in solving
          coding problems. Includes various difficulty levels and problem types.
          📈
          <a
            href="https://leetcode.com/u/THE_DEEP_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit LeetCode for latest info
          </a>
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
      description:
        "🏅 Participated in HackOut, a hackathon organized by DAIICT. Collaborated with a team to develop an innovative solution to a real-world problem. 💡",
    },
    {
      image: require("./Assets/Web Wonders finalists.jpg"),
      title: "WEB WONDERS FINALISTS",
      description:
        "🌟 Recognized as a finalist in the Web Wonders competition for creating a standout web application with cutting-edge design and functionality. 🏅",
    },
    {
      image: [
        require("./Assets/Drone_Workshop1.jpg"),
        require("./Assets/Drone_Workshop2.jpg"),
        require("./Assets/Drone_Workshop3.jpg"),
      ],
      title: "Drone Workshop",
      description:
        "🏅 Attended a workshop by SAE India Southern Section at Vellamal College, Chennai. Got hands-on experience and made a drone from scratch. 💡",
    },
    {
      image: require("./Assets/Gandhian_Idea_Competition.jpg"),
      title: "Ideathon Competition Finalists",
      description:
        "🌟 We participated in the Gandhian Idea Competition held by auro university and cleared the round 1 and reached the final where we presented the project to the panel. 🏅",
    },
    {
      image: require("./Assets/acm_summer.png"),
      title: "ACM SUMMER CHALLENGE",
      description:
        "🌞 Took part in the ACM Summer Challenge, where I tackled complex algorithmic problems and improved my coding skills. 🏆",
    },
    {
      image: [
        require("./Assets/linefollower2.png"),
        require("./Assets/linefollower.jpg"),
        require("./Assets/linefollower1.jpg"),
      ],
      title: "Line Follower, Path Finder and Harbour Hustle(Boat)",
      description:
        "🤖 Built a line-following robot for automation and robotics competitions. Designed and programmed using Arduino and sensors for precise movement and task execution. Built an RC controlled boat. 🛠️",
    },

    {
      image: [
        require("./Assets/Website (2).png"),
        require("./Assets/Website (3).png"),
        require("./Assets/Website (4).png"),
        require("./Assets/Website (5).png"),
        // require('./Assets/Website (6).png'),
        // require('./Assets/Website (7).png'),
        // require('./Assets/Website (8).png'),
        // require('./Assets/Website (9).png'),
        // require('./Assets/Website (10).png'),
        // require('./Assets/Website (11).png'),
        // require('./Assets/Website (12).png'),
        // require('./Assets/Website (13).png'),
        // require('./Assets/Website (14).png'),
        // require('./Assets/Website (15).png'),
      ],
      title: "Eco Brew: AI powered Sustainability Platform",
      description: (
        <span>
          🌱 Developed an AI-powered platform to reduce paper cup waste and
          promote sustainability.
          <a
            href="https://ecobrew.highintoxic.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>{" "}
          |
          <a
            href="https://github.com/THE-DEEPDAS/Eco-Brew"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </span>
      ),
    },
    {
      image: [
        require("./Assets/pulse360 (1).png"),
        require("./Assets/pulse360 (2).png"),
        require("./Assets/pulse360 (3).png"),
      ],
      title: "Pulse360: Smart Healthcare Platform",
      description: (
        <span>
          💻 Created a real-time health recommendation dashboard, updating every
          5 minutes based on Fitbit/smartwatch data.
          <a
            href="https://pulse360.highintoxic.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>{" "}
          |
          <a
            href="https://github.com/THE-DEEPDAS/Pulse-360"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </span>
      ),
    },
    {
      image: [
        require("./Assets/Gestures (1).png"),
        require("./Assets/Gestures (2).png"),
        require("./Assets/Gestures (3).png"),
      ],
      title: "Gesture Controlled Suite",
      description: (
        <span>
          🖐 Developed an AI-powered gesture recognition system enabling
          intuitive control over digital interfaces.
          <a
            href="https://github.com/THE-DEEPDAS/Gesture-Controlled-Suite"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </span>
      ),
    },
    {
      image: [
        require("./Assets/Wanderbot (1).png"),
        require("./Assets/Wanderbot (2).png"),
        require("./Assets/Wanderbot (3).png"),
        require("./Assets/Wanderbot (4).png"),
        require("./Assets/Wanderbot (5).png"),
        require("./Assets/Wanderbot (6).png"),
      ],
      title: "WanderBot",
      description: (
        <span>
          🌍 Built an AI-powered travel assistant using Gemini Pro to generate
          personalized travel itineraries.
          <a
            href="https://wanderbot.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>{" "}
          |
          <a
            href="https://github.com/THE-DEEPDAS/WanderBot"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </span>
      ),
    },
    {
      image: [
        require("./Assets/placeholder1.png"),
        require("./Assets/placeholder2.png"),
        require("./Assets/placeholder3.png"),
      ],
      title: "Task Manager Application",
      description: (
        <span>
          📋 Developed a React Native task manager enabling users to create,
          update, delete, and organize tasks.
          <a
            href="https://github.com/THE-DEEPDAS/Task-Manager-Application"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </span>
      ),
    },
  ];

  // Research work
  const research = [
    {
      image: require("./Assets/scopus.png"),
      title: "Detecting Audio Forgery using Deep Learning Techniques",
      description: (
        <span>
          Proposed a deep-learning pipeline for audio deepfake detection with multi-scale feature fusion and attention.{" "}
          <a
            href="https://link.springer.com/article/10.1007/s11760-025-04521-w"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Paper
          </a>
        </span>
      ),
    },
    {
      image: require("./Assets/scopus.png"),
      title: "Kantika — RAG Pipeline for Dermatology",
      description:
        "Developed a dermatology-specific RAG pipeline combining IR-CoT, RAPTOR, and CRAG for clinical QA and reasoning.",
    },
    {
      image: require("./Assets/scopus.png"),
      title: "Explainable AI — A Unique and Innovative Method",
      description:
        "Proposed a novel framework improving interpretability of black-box models, outperforming SHAP and LIME.",
    },
    {
      image: require("./Assets/scopus.png"),
      title: "UniFaceForge — Unified Face Forgery Detection System",
      description:
        "Built a large-scale dataset (300k fake, 100k real) and unified model achieving state-of-the-art forgery detection.",
    },
    {
      image: require("./Assets/scopus.png"),
      title: "C-Mind — Cross-modal Inference for Misinformation Detection",
      description:
        "Developed a contrastive vision-language framework for fact-checking image-text pairs on social media.",
    },
    {
      image: require("./Assets/scopus.png"),
      title: "Voice Encoding and Codec Detection",
      description:
        "Proposed a supervised pipeline with PANNS CNN ensemble for classifying audio encoding formats.",
    },
  ];

  return (
    <div className="technical-page">
      <div className="technical-background">
        <div className="technical-matrix"></div>
        <div className="technical-grid"></div>
        <div className="neon-circles">
          <div className="neon-circle"></div>
          <div className="neon-circle"></div>
          <div className="neon-circle"></div>
        </div>
      </div>
      <h1>Welcome to my technical portfolio</h1>
      <p>
        Explore a comprehensive overview of my technical skills, projects, and
        achievements. Here, you can delve into the details of each project and
        gain insights into the work I have accomplished. Discover how I apply my
        knowledge and expertise to create impactful solutions.
      </p>

      {/* Experiences Section */}
      <section className="experiences-section">
        <h2>Experiences</h2>
        <div className="technical-gallery">
          {experiences.map((exp, index) => (
            <ImageCard
              key={index}
              image={Array.isArray(exp.image) ? exp.image : [exp.image]}
              title={exp.title}
              description={exp.description}
            />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2>Projects</h2>
        <div className="technical-gallery">
          {projects.map((project, index) => (
            <ImageCard
              key={index}
              image={
                Array.isArray(project.image) ? project.image : [project.image]
              }
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </section>

      {/* Research Section */}
      <section className="research-section">
        <h2>Research Work</h2>
        <div className="technical-gallery">
          {research.map((paper, index) => (
            <ImageCard
              key={index}
              image={Array.isArray(paper.image) ? paper.image : [paper.image]}
              title={paper.title}
              description={paper.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Technical;
