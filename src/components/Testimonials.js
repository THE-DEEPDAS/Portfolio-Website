import React, { useState } from 'react';
import TestimonialForm from './TestimonialForm';
import './Testimonials.css';

export default function Testimonials() {
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

  const addTestimonial = (newTestimonial) => {
    const updatedTestimonials = [
      { ...newTestimonial, id: Date.now() },
      ...testimonials,
    ].slice(0, 7); // Limit to 7 testimonials
    setTestimonials(updatedTestimonials);
    setShowForm(false);
    setShowMessage(true); // Show message after submission

    // Hide the message after a few seconds
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <div className="testimonials-container">
      <h2>Visitor's Testimonials</h2>

      {/* Show success message */}
      {showMessage && (
        <div className="success-message">
          The testimonial has been received and will be added shortly!
        </div>
      )}

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-header">
              <h3>{testimonial.name}</h3>
              <p>{testimonial.company} - {testimonial.role}</p>
            </div>
            <p className="testimonial-comment">{testimonial.comment}</p>
            <div className="testimonial-rating">
              {[...Array(5)].map((_, index) => (
                <span key={index} className={index < testimonial.rating ? 'star filled' : 'star'}>★</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {showForm ? (
        <TestimonialForm onSubmit={addTestimonial} onCancel={() => setShowForm(false)} />
      ) : (
        <button className="add-testimonial-btn" onClick={() => setShowForm(true)}>Add Your Testimonial</button>
      )}
    </div>
  );
}
