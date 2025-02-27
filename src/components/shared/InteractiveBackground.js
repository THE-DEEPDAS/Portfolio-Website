import React, { useEffect, useRef, useState } from "react";
import "./InteractiveBackground.css";

const InteractiveBackground = () => {
  const backgroundRef = useRef(null);
  const [mouseSpeed, setMouseSpeed] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const lastMousePos = useRef({ x: 0, y: 0 });
  const lastMouseTime = useRef(Date.now());

  useEffect(() => {
    const background = backgroundRef.current;

    const calculateMouseSpeed = (e) => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastMouseTime.current;

      const deltaX = e.clientX - lastMousePos.current.x;
      const deltaY = e.clientY - lastMousePos.current.y;

      const speed = Math.sqrt(deltaX * deltaX + deltaY * deltaY) / deltaTime;

      lastMousePos.current = { x: e.clientX, y: e.clientY };
      lastMouseTime.current = currentTime;

      return Math.min(speed * 100, 50); // Cap the maximum speed
    };

    const handleMouseMove = (e) => {
      const speed = calculateMouseSpeed(e);
      setMouseSpeed(speed);
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="interactive-background" ref={backgroundRef}>
      {[...Array(15)].map((_, index) => (
        <div
          key={index}
          className={`floating-ball ball-${index + 1}`}
          style={{
            width: `${Math.random() * 60 + 20}px`,
            height: `${Math.random() * 60 + 20}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `translate(${
              mousePos.x * (0.02 + Math.random() * 0.08)
            }px, ${mousePos.y * (0.02 + Math.random() * 0.08)}px) scale(${
              1 + mouseSpeed * 0.01
            })`,
            background: `radial-gradient(circle at center, 
              hsl(${Math.random() * 360}, 80%, 70%), 
              hsl(${Math.random() * 360}, 80%, 50%))`,
            opacity: 0.8,
          }}
        />
      ))}
      <div className="gradient-overlay"></div>
    </div>
  );
};

export default InteractiveBackground;
