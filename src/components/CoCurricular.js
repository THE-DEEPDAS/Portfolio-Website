import React from "react";
import ImageCard from "./ImageCard";
import "./CoCurricular.css";
import "./shared/BackgroundAnimation.css";

const CoCurricular = () => {
  const images = [
    {
      image: require("./Assets/tabla.jpg"),
      title: "Skilled Tabla Player",
      description:
        "🎶 Mastery in playing the tabla, showcasing rhythmic precision and cultural depth.",
    },
    {
      image: require("./Assets/taekwondo.jpg"),
      title: "Trained in Taekwondo",
      description:
        "🥋 Completed rigorous Taekwondo training, demonstrating discipline and martial skill.",
    },
    {
      image: require("./Assets/karate_medals.jpg"),
      title: "Won Medals at State Level",
      description:
        "🏅 Achieved top honors in state-level karate competitions, reflecting dedication and excellence.",
    },
    {
      image: require("./Assets/skating.jpg"),
      title: "Competed in Skating Competitions",
      description:
        "⛸️ Participated in various skating competitions, showcasing agility and competitive spirit.",
    },
    {
      image: require("./Assets/debate.jpg"),
      title: "Winner of Various Debate Competitions",
      description:
        "🏆 Recognized for eloquence and argumentation skills in multiple debate contests.",
    },
    {
      image: require("./Assets/cricket.png"),
      title: "Enthusiast in Cricket, Badminton, Tug of War, and More",
      description:
        "🏏 Actively involved in a range of sports, from cricket and badminton to tug of war, highlighting versatility and teamwork.",
    },
    {
      image: [require("./Assets/chess1.png"), require("./Assets/chess2.png")],
      title: "Passionate Chess Player",
      description: "♟️ On the Champions league on chess.com .",
    },
  ];

  return (
    <div className="CoCurricular-page">
      <div className="CoCurricular-background">
        <div className="CoCurricular-matrix"></div>
        <div className="CoCurricular-grid"></div>
        <div className="neon-circles">
          <div className="neon-circle"></div>
          <div className="neon-circle"></div>
          <div className="neon-circle"></div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontWeight: "bold",
            fontSize: "2rem",
            marginBottom: "20px",
          }}
        >
          Co-Curricular Activities Portfolio
        </h1>
        <p>
          Explore a selection of my co-curricular activities that illustrate my
          engagement in diverse interests and pursuits outside the classroom.
        </p>
        <div
          className="CoCurricular-gallery"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {images.map((img, index) => (
            <ImageCard
              key={index}
              image={img.image}
              title={img.title}
              description={img.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoCurricular;
