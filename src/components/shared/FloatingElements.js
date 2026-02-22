import React from 'react';
import { motion } from 'framer-motion';
import './FloatingElements.css';

const FloatingElements = () => {
    const elements = Array.from({ length: 15 });

    return (
        <div className="floating-elements-container">
            {elements.map((_, i) => (
                <motion.div
                    key={i}
                    className="floating-element"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        opacity: 0
                    }}
                    animate={{
                        y: [null, Math.random() * -100, Math.random() * 100],
                        x: [null, Math.random() * 50, Math.random() * -50],
                        opacity: [0.1, 0.3, 0.1],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 10 + Math.random() * 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        width: Math.random() * 100 + 20,
                        height: Math.random() * 2 + i % 2 === 0 ? 1 : 100,
                        background: i % 3 === 0 ? 'var(--accent-primary)' : 'var(--accent-secondary)',
                        filter: `blur(${Math.random() * 4 + 2}px)`,
                        left: 0,
                        top: 0
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingElements;
