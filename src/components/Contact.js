import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import InteractiveBackground from "./shared/InteractiveBackground";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
          reply_to: formData.email, // Ensure this is correctly populated
          message: formData.message,
        },
        "1FbHQLVxPpA-QKhOg"
      )
      .then(() => {
        // Send acknowledgment email to the sender
        emailjs
          .send(
            "service_y1u2i5j",
            "template_gyd327m",
            {
              to_email: formData.email, // Sender's email
              from_name: "Deep",
              reply_to: formData.email, // Ensure this is correctly populated
              message:
                "Thank you for your message! I will get back to you as soon as possible.",
            },
            "1FbHQLVxPpA-QKhOg"
          )
          .then(() => {
            alert(
              "Message recieved successfully! Acknowledgment has been sent to your email."
            );
          })
          .catch((error) => {
            console.error("Error sending acknowledgment email:", error);
            alert("Failed to send acknowledgment email.");
          });
      })
      .catch((error) => {
        console.error("Error sending contact message:", error);
        alert("Failed to recieve message.");
      });
  };

  return (
    <div className="contact-wrapper">
      <InteractiveBackground />
      <div className="contact-page">
        <h1>Contact Me</h1>
        <h2>
          Hello, I'm Deep. If you wish to collaborate or have opportunities to
          offer, please include "Employer" in the name field.
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
