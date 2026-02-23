import React, { useEffect, useRef } from "react";
import "./InteractiveBackground.css";

const InteractiveBackground = ({ type = 'home' }) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFrameIdRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouse = { x: null, y: null, radius: 150 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = (Math.random() - 0.5) * 1.5;
        this.color = type === 'academic' ? 'rgba(0, 229, 255, 0.8)' : 'rgba(179, 136, 255, 0.8)';
      }

      update() {
        if (type === 'academic') {
          this.y += this.size * 2;
          if (this.y > canvas.height) this.y = -10;
        } else if (type === 'about') {
          const time = Date.now() * 0.001;
          this.speedX = Math.sin(time + this.y * 0.01) * 0.5;
          this.x += this.speedX;
          this.y += this.speedY;
        } else {
          this.x += this.speedX;
          this.y += this.speedY;
        }

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;

        // Mouse interaction
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          if (mouse.x < this.x && this.x < canvas.width - this.size * 10) this.x += 10;
          if (mouse.x > this.x && this.x > this.size * 10) this.x -= 10;
          if (mouse.y < this.y && this.y < canvas.height - this.size * 10) this.y += 10;
          if (mouse.y > this.y && this.y > this.size * 10) this.y -= 10;
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particlesRef.current = [];
      const count = type === 'technical' ? 80 : 120;
      for (let i = 0; i < count; i++) {
        particlesRef.current.push(new Particle());
      }
    };

    const connect = () => {
      if (type === 'academic') return; // Matrix rain doesn't connect
      let maxDistance = type === 'technical' ? 200 : 150;
      for (let a = 0; a < particlesRef.current.length; a++) {
        for (let b = a; b < particlesRef.current.length; b++) {
          let dx = particlesRef.current[a].x - particlesRef.current[b].x;
          let dy = particlesRef.current[a].y - particlesRef.current[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            let opacity = 1 - (distance / maxDistance);
            ctx.strokeStyle = type === 'about' ? `rgba(0, 229, 255, ${opacity * 0.15})` : `rgba(179, 136, 255, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesRef.current[a].x, particlesRef.current[a].y);
            ctx.lineTo(particlesRef.current[b].x, particlesRef.current[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesRef.current.length; i++) {
        particlesRef.current[i].draw();
        particlesRef.current[i].update();
      }
      connect();
      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameIdRef.current);
    };
  }, [type]);

  return (
    <div className={`interactive-background biome-${type}`}>
      <canvas ref={canvasRef} />
      <div className="gradient-overlay" />
    </div>
  );
};

export default InteractiveBackground;
