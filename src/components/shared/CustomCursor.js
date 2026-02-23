import React, { useEffect, useState, useMemo } from 'react';
import { motion, useSpring } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const cursorX = useSpring(0, { damping: 20, stiffness: 200 });
    const cursorY = useSpring(0, { damping: 20, stiffness: 200 });

    const trail1X = useSpring(0, { damping: 15, stiffness: 100 });
    const trail1Y = useSpring(0, { damping: 15, stiffness: 100 });
    const trail2X = useSpring(0, { damping: 25, stiffness: 80 });
    const trail2Y = useSpring(0, { damping: 25, stiffness: 80 });
    const trail3X = useSpring(0, { damping: 35, stiffness: 60 });
    const trail3Y = useSpring(0, { damping: 35, stiffness: 60 });

    // Trail dots
    const trail = useMemo(() => [
        { x: trail1X, y: trail1Y },
        { x: trail2X, y: trail2Y },
        { x: trail3X, y: trail3Y },
    ], [trail1X, trail1Y, trail2X, trail2Y, trail3X, trail3Y]);

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
    }, [cursorX, cursorY, trail]);

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
