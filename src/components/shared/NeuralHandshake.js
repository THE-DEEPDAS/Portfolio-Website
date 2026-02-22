import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './NeuralHandshake.css';

const NeuralHandshake = ({ onComplete, title = "AUTHENTICATION REQUIRED" }) => {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const containerRef = useRef(null);
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        // Generate random nodes to "connect"
        const newNodes = Array.from({ length: 5 }).map((_, i) => ({
            id: i,
            x: 20 + Math.random() * 60, // 20% to 80%
            y: 20 + Math.random() * 60,
            active: false
        }));
        setNodes(newNodes);
    }, []);

    const [showInstructions, setShowInstructions] = useState(false);

    useEffect(() => {
        const seen = localStorage.getItem('handshake_instructions_seen');
        if (!seen) {
            setShowInstructions(true);
        }
    }, []);

    const handleNodeHover = (id) => {
        setNodes(prev => {
            const updated = prev.map(node => node.id === id ? { ...node, active: true } : node);
            const activeCount = updated.filter(n => n.active).length;
            const newProgress = (activeCount / updated.length) * 100;
            setProgress(newProgress);

            if (activeCount === updated.length && !isComplete) {
                localStorage.setItem('handshake_instructions_seen', 'true');
                setTimeout(() => {
                    setIsComplete(true);
                    onComplete();
                }, 500);
            }
            return updated;
        });
    };

    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    className="neural-handshake-overlay"
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="handshake-content">
                        <motion.h2
                            initial={{ opacity: 0, letterSpacing: "10px" }}
                            animate={{ opacity: 1, letterSpacing: "2px" }}
                        >
                            {title}
                        </motion.h2>
                        {showInstructions && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                Bridge the neural nodes to access this sector.
                            </motion.p>
                        )}

                        <div className="nodes-container" ref={containerRef}>
                            <svg className="nodes-svg">
                                {nodes.map((node, i) => {
                                    if (i === 0) return null;
                                    const prev = nodes[i - 1];
                                    return (
                                        <motion.line
                                            key={`line-${i}`}
                                            x1={`${prev.x}%`}
                                            y1={`${prev.y}%`}
                                            x2={`${node.x}%`}
                                            y2={`${node.y}%`}
                                            stroke={node.active && prev.active ? "var(--accent-primary)" : "rgba(255,255,255,0.1)"}
                                            strokeWidth="2"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: node.active && prev.active ? 1 : 0 }}
                                        />
                                    );
                                })}
                            </svg>

                            {nodes.map(node => (
                                <motion.div
                                    key={node.id}
                                    className={`neural-node ${node.active ? 'active' : ''}`}
                                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                                    onMouseEnter={() => handleNodeHover(node.id)}
                                    whileHover={{ scale: 1.5 }}
                                >
                                    <div className="node-pulse" />
                                </motion.div>
                            ))}
                        </div>

                        <div className="progress-bar-container">
                            <motion.div
                                className="progress-bar-fill"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default NeuralHandshake;
