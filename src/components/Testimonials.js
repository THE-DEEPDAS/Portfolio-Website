import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialForm from "./TestimonialForm";
import "./Testimonials.css";
import InteractiveBackground from "./shared/InteractiveBackground";
import NeuralHandshake from "./shared/NeuralHandshake";

export default function Testimonials() {
  const [isDecoded, setIsDecoded] = useState(false);
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Aryan Verma",
      company: "SVNIT",
      role: "Classmate",
      comment: "Working with Deep on our second year project was a great experience. His skills in front-end development really took our project to the next level!",
      rating: 5,
    },
    {
      id: 2,
      name: "Sneha Reddy",
      company: "VIT Vellore",
      role: "Internship Colleague",
      comment: "Deep has an excellent grasp of algorithms and problem-solving. His logical thinking helped us crack multiple hackathon challenges.",
      rating: 4,
    },
    {
      id: 3,
      name: "Kartik Sharma",
      company: "SRM University",
      role: "Lab Partner",
      comment: "Deep is an extremely dedicated coder. I’ve seen him dive deep into tough assignments and come up with solutions that none of us could think of.",
      rating: 5,
    },
    {
      id: 4,
      name: "Pooja Agarwal",
      company: "BITS Pilani",
      role: "Mentor",
      comment: "I mentored Deep during a summer internship. His ability to pick up new technologies quickly and apply them in real-world scenarios is impressive.",
      rating: 5,
    },
    {
      id: 5,
      name: "Rajat Singh",
      company: "Amity University",
      role: "Project Teammate",
      comment: "Deep has strong problem-solving skills and great attention to detail. He played a vital role in making our project a success during the inter-college tech fest.",
      rating: 4,
    },
    {
      id: 6,
      name: "Ananya Iyer",
      company: "IIIT Hyderabad",
      role: "Open Source Contributor",
      comment: "Deep contributed to several open-source projects where his clean coding style and enthusiasm made him stand out. He’s a great collaborator.",
      rating: 5,
    },
    {
      id: 7,
      name: "Rohan Gupta",
      company: "NIT Trichy",
      role: "Hackathon Teammate",
      comment: "Deep’s passion for coding is truly inspiring. We worked together on a hackathon, and his ability to stay focused under pressure helped us win.",
      rating: 5,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const addTestimonial = (newTestimonial) => {
    const updatedTestimonials = [
      { ...newTestimonial, id: Date.now() },
      ...testimonials,
    ].slice(0, 7);
    setTestimonials(updatedTestimonials);
    setShowForm(false);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <div className="testimonials-wrapper">
      <InteractiveBackground type="about" />

      {!isDecoded && (
        <NeuralHandshake
          title="SECTOR: TESTIMONIALS"
          onComplete={() => setIsDecoded(true)}
        />
      )}

      <motion.div
        className="testimonials-container"
        initial={{ opacity: 0, filter: "blur(20px)" }}
        animate={isDecoded ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Visitor's Testimonials
        </motion.h2>

        <AnimatePresence>
          {showMessage && (
            <motion.div
              className="success-message"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              <i className="fas fa-check-circle"></i> The testimonial has been received and will be added shortly!
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isDecoded ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card glass-panel"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="testimonial-header">
                <h3>{testimonial.name}</h3>
                <p>{testimonial.company} — {testimonial.role}</p>
              </div>
              <p className="testimonial-comment">"{testimonial.comment}"</p>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className={index < testimonial.rating ? "star filled" : "star"}>
                    <i className="fas fa-star"></i>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {showForm ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <TestimonialForm onSubmit={addTestimonial} onCancel={() => setShowForm(false)} />
          </motion.div>
        ) : (
          <motion.button
            className="add-testimonial-btn"
            onClick={() => setShowForm(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fas fa-plus"></i> Add Your Testimonial
          </motion.button>
        )}
      </motion.div>
    </div>
  );
}
