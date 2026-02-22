import React, { useEffect, useRef } from 'react';
import './SpotlightMask.css';

const SpotlightMask = () => {
    const maskRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (maskRef.current) {
                maskRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
                maskRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div ref={maskRef} className="spotlight-mask" />
    );
};

export default SpotlightMask;
