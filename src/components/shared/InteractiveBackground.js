import React, { useEffect, useRef, useState } from "react";
import "./InteractiveBackground.css";

const InteractiveBackground = () => {
  const requestRef = useRef();
  const [balls, setBalls] = useState(
    [...Array(30)].map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      speedX: (Math.random() - 0.5) * 1,
      speedY: (Math.random() - 0.5) * 1,
      size: Math.random() * 30 + 10,
      hue: Math.random() * 360,
    }))
  );

  const animate = () => {
    setBalls((prevBalls) =>
      prevBalls.map((ball) => {
        // Update position
        let newX = ball.x + ball.speedX;
        let newY = ball.y + ball.speedY;

        // Bounce off edges
        if (newX <= 0 || newX >= 100) {
          ball.speedX *= -1;
          newX = Math.max(0, Math.min(100, newX));
        }
        if (newY <= 0 || newY >= 100) {
          ball.speedY *= -1;
          newY = Math.max(0, Math.min(100, newY));
        }

        return {
          ...ball,
          x: newX,
          y: newY,
          hue: (ball.hue + 0.1) % 360,
        };
      })
    );

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div className="interactive-background">
      {balls.map((ball, index) => (
        <div
          key={index}
          className="floating-ball"
          style={{
            width: `${ball.size}px`,
            height: `${ball.size}px`,
            top: `${ball.y}%`,
            left: `${ball.x}%`,
            background: `radial-gradient(circle at center, 
              hsl(${ball.hue}, 80%, 70%), 
              hsl(${ball.hue}, 80%, 50%))`,
            opacity: 0.6,
            transform: `translate(-50%, -50%)`,
          }}
        />
      ))}
      <div className="gradient-overlay" />
    </div>
  );
};

export default InteractiveBackground;
