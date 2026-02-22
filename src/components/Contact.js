import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import InteractiveBackground from "./shared/InteractiveBackground";
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_y1u2i5j",
        "template_tlc8gp8",
        {
          to_email: "deepdblm@outlook.com",
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        "1FbHQLVxPpA-QKhOg"
      )
      .then(() => {
        emailjs
          .send(
            "service_y1u2i5j",
            "template_gyd327m",
            {
              to_email: formData.email,
              from_name: "Deep",
              reply_to: formData.email,
              message:
                "Thank you for your message! I will get back to you as soon as possible.",
            },
            "1FbHQLVxPpA-QKhOg"
          )
          .then(() => {
            setResult("Message received successfully! Acknowledgment has been sent to your email.");
          })
          .catch((error) => {
            console.error("Error sending acknowledgment email:", error);
            setResult("Failed to send acknowledgment email.");
          });
      })
      .catch((error) => {
        console.error("Error sending contact message:", error);
        setResult("Failed to receive message.");
      });
  };

  return (
    <div className="contact-wrapper">
      <InteractiveBackground type="contact" />
      <motion.div
        className="contact-page holographic-container"
        initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1 }}
      >
        <h1 className="glitch-text" data-text="Get in Touch">Get in Touch</h1>
        <h2>
          Establishing neural link... Send your message through the vortex.
        </h2>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="form-matrix-grid">
            <motion.div className="form-group" whileHover={{ scale: 1.02 }}>
              <label>Identity</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.div className="form-group" whileHover={{ scale: 1.02 }}>
              <label>Frequency</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>
          </div>
          <motion.div className="form-group" whileHover={{ scale: 1.02 }}>
            <label>Transmission</label>
            <textarea
              name="message"
              placeholder="Your thoughts..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </motion.div>
          <motion.button
            type="submit"
            whileHover={{
              boxShadow: "0 0 30px var(--accent-primary)",
              textShadow: "0 0 10px white"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-satellite-dish" style={{ marginRight: '10px' }}></i>
            Broadcast Message
          </motion.button>
          {result && <p className="form-result pulse-glow">{result}</p>}
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
