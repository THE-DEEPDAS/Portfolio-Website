import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import './Card.css';

const Card = ({ title, description, icon, onClick }) => {
    return (
        <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1200}
            scale={1.05}
            transitionSpeed={1500}
            gyroscope={true}
            className="tilt-wrapper"
        >
            <motion.div
                className="card"
                initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{
                    boxShadow: "0 0 40px rgba(179, 136, 255, 0.3)",
                    borderColor: "rgba(179, 136, 255, 0.8)",
                    y: -10
                }}
                viewport={{ once: true }}
                onClick={onClick}
            >
                <div className="card-glow" />
                <div className="card-icon">
                    <i className={icon}></i>
                </div>
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </motion.div>
        </Tilt>
    );
};

export default Card;
