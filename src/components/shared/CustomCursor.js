import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const cursorX = useSpring(0, { damping: 20, stiffness: 200 });
    const cursorY = useSpring(0, { damping: 20, stiffness: 200 });

    // Trail dots
    const trail = [
        { x: useSpring(0, { damping: 15, stiffness: 100 }), y: useSpring(0, { damping: 15, stiffness: 100 }) },
        { x: useSpring(0, { damping: 25, stiffness: 80 }), y: useSpring(0, { damping: 25, stiffness: 80 }) },
        { x: useSpring(0, { damping: 35, stiffness: 60 }), y: useSpring(0, { damping: 35, stiffness: 60 }) },
    ];

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            trail.forEach((t) => {
                t.x.set(e.clientX);
                t.y.set(e.clientY);
            });
        };

        const handleHover = (e) => {
            if (e.target.closest('a, button, .card, .clickable, .nav-link')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleHover);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleHover);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            <motion.div
                className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                }}
            />
            {trail.map((t, i) => (
                <motion.div
                    key={i}
                    className="cursor-trail"
                    style={{
                        translateX: t.x,
                        translateY: t.y,
                        opacity: 0.4 - (i * 0.1),
                        scale: 1 - (i * 0.2)
                    }}
                />
            ))}
        </>
    );
};

export default CustomCursor;
