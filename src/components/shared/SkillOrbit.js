import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SkillOrbit.css';

const SkillOrbit = ({ skills }) => {
    const [isDistributed, setIsDistributed] = React.useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const skillVariants = {
        hidden: { scale: 0, x: 0, y: 0, opacity: 0 },
        visible: (i) => {
            // Distribute across 3 distinct rings with offset angles to prevent overlap
            const ringIndex = i % 3;
            const skillsInRing = Math.ceil(skills.length / 3);
            const indexInRing = Math.floor(i / 3);

            const radius = [160, 240, 320][ringIndex];
            const startAngle = (ringIndex * 30); // Offset each ring
            const angle = ((indexInRing / skillsInRing) * 360 + startAngle) * (Math.PI / 180);

            return {
                scale: 1,
                opacity: 1,
                x: Math.cos(angle) * radius,
                y: Math.sin(angle) * radius,
                transition: {
                    type: "spring",
                    stiffness: 80,
                    damping: 12,
                    delay: i * 0.05
                }
            };
        }
    };

    return (
        <div className="skill-orbit-container">
            <motion.div
                className={`orbit-center ${isDistributed ? 'distributed' : ''}`}
                onClick={() => setIsDistributed(!isDistributed)}
                whileHover={{ scale: 1.1, boxShadow: "0 0 40px var(--accent-primary)" }}
                whileTap={{ scale: 0.9 }}
            >
                <i className={`fas ${isDistributed ? 'fa-atom' : 'fa-brain'}`}></i>
                {!isDistributed && <span className="click-hint">EXPLODE</span>}
            </motion.div>

            <AnimatePresence>
                {isDistributed && (
                    <motion.div
                        className="skills-wrapper"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        {skills.map((skill, i) => {
                            const rotationDuration = 40 + (i % 3) * 20;
                            return (
                                <motion.div
                                    key={skill}
                                    className="orbiting-skill"
                                    custom={i}
                                    variants={skillVariants}
                                    animate={{
                                        rotate: [0, 360],
                                    }}
                                    transition={{
                                        rotate: {
                                            duration: rotationDuration,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }
                                    }}
                                >
                                    <motion.span
                                        initial={{ rotate: 0 }}
                                        animate={{ rotate: [0, -360] }}
                                        transition={{
                                            duration: rotationDuration,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                    >
                                        {skill}
                                    </motion.span>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SkillOrbit;
