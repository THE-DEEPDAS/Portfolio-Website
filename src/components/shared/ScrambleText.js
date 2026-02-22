import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrambleText = ({ text, delay = 0 }) => {
    const [displayText, setDisplayText] = useState('');
    const [isFinished, setIsFinished] = useState(false);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+';

    useEffect(() => {
        let timeout;
        let iteration = 0;

        const scramble = () => {
            const currentIteration = iteration;
            setDisplayText(
                text.split("")
                    .map((char, index) => {
                        if (index < Math.floor(currentIteration)) return text[index];
                        // Glitch effect: occasionally keep the original char even before currentIteration
                        if (Math.random() < 0.1 && index > currentIteration - 2) return text[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration < text.length) {
                iteration += 1 / 4;
                timeout = setTimeout(scramble, 25);
            } else {
                setDisplayText(text); // Force exact final text
                setIsFinished(true);
            }
        };

        const startDelay = setTimeout(scramble, delay);

        return () => {
            clearTimeout(timeout);
            clearTimeout(startDelay);
        };
    }, [text, delay]);

    return (
        <motion.span
            className={`scramble-text ${isFinished ? 'finished' : ''}`}
            animate={isFinished ? {
                textShadow: [
                    "0 0 5px rgba(179, 136, 255, 0)",
                    "0 0 20px rgba(179, 136, 255, 0.5)",
                    "0 0 5px rgba(179, 136, 255, 0)"
                ]
            } : {}}
            transition={isFinished ? { duration: 2, repeat: Infinity } : {}}
        >
            {displayText}
        </motion.span>
    );
};

export default ScrambleText;
