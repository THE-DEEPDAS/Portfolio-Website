import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import "./MainContent.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import InteractiveBackground from "./shared/InteractiveBackground";

const MainContent = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="main-wrapper">
      <InteractiveBackground />
      <div className="main-content">
        <h1>👋 Hi, I'm Deep Das – Crafting Code into Magic!</h1>
        <h5>
          As a creative developer, I blend code and design to build unique,
          user-centric experiences with the best functionalities. Let’s
          transform your ideas into dynamic digital solutions!
        </h5>
        <div className="cards">
          <Card
            title="My Story"
            description="About"
            color="blue"
            icon="fas fa-smile" // Updated icon class for FontAwesome
            onClick={() => handleNavigation("/about")}
          />
          <Card
            title="My Journey"
            description="Academic"
            color="blue"
            icon="fas fa-book" // Updated icon class
            onClick={() => handleNavigation("/academic")}
          />
          <Card
            title="My Work"
            description="Technical"
            color="blue"
            icon="fas fa-briefcase" // Updated icon class
            onClick={() => handleNavigation("/technical")}
          />
          <Card
            title="Creative Solutions"
            description="Co-Curriculars"
            color="blue"
            icon="fas fa-cogs" // Updated icon class
            onClick={() => handleNavigation("/cocurricular")}
          />
          <Card
            title="Get in Touch"
            description="Contact"
            color="blue"
            icon="fas fa-envelope" // Updated icon class
            onClick={() => handleNavigation("/contact")}
          />
          <Card
            title="Reviews!"
            description="Testimonials"
            color="blue"
            icon="fas fa-comments" // Corrected icon class (fa-mail is not a FontAwesome icon)
            onClick={() => handleNavigation("/testimonials")}
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
