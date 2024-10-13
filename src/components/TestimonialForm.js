import React, { useState, useEffect } from 'react';
import './TestimonialForm.css';

export default function TestimonialForm({ onCancel }) {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        role: '',
        comment: '',
        rating: 5,
    });

    const [latestTestimonial, setLatestTestimonial] = useState(null);

    useEffect(() => {
        // Fetch the latest testimonial from the server when the component mounts
        fetch('/api/testimonials')
            .then((res) => res.json())
            .then((data) => {
                if (data.length > 0) {
                    setLatestTestimonial(data[0]); // Get the latest testimonial
                }
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      
      console.log('Submitting form:', formData); // Log form data
  
      // Post the new testimonial to the server
      fetch('/api/testimonials', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
      })
      .then((res) => res.json())
      .then((data) => {
          console.log('Response from server:', data); // Log server response
          setLatestTestimonial(data); // Update the latest testimonial
      })
      .catch((error) => {
          console.error('Error during submission:', error); // Log any errors
      });
  };
  
    return (
        <div>
            <form className="testimonial-form" onSubmit={handleSubmit}>
                <h3>Add Your Testimonial</h3>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="company">Company:</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="role">Role:</label>
                    <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="comment">Comment:</label>
                    <textarea
                        id="comment"
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Rating:</label>
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        min="1"
                        max="5"
                        value={formData.rating}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-actions">
                    <button type="submit">Submit</button>
                    <button type="button" onClick={onCancel}>Cancel</button>
                </div>
            </form>

            {latestTestimonial && (
                <div>
                    <h3>Latest Testimonial</h3>
                    <p><strong>{latestTestimonial.name}</strong> - {latestTestimonial.company} ({latestTestimonial.role})</p>
                    <p>{latestTestimonial.comment}</p>
                    <p>Rating: {latestTestimonial.rating}</p>
                </div>
            )}
        </div>
    );
}
