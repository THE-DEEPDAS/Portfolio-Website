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
        <div className="testimonial-form-overlay" onClick={onCancel}>
            <form className="testimonial-form" onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
                <h3>Add Your Testimonial</h3>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="company">Company / Institution</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Tech Corp"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="role">Role / Relationship</label>
                    <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="Project Partner"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="comment">Testimonial</label>
                    <textarea
                        id="comment"
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        placeholder="Share your thoughts..."
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Rating (1-5)</label>
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
                    <button type="submit" className="submit-btn">
                        <i className="fas fa-paper-plane"></i> Submit
                    </button>
                    <button type="button" className="cancel-btn" onClick={onCancel}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}
