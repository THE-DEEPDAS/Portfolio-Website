import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send contact message to yourself
        emailjs.send('service_y1u2i5j', 'template_tlc8gp8', {
            to_email: 'deepdblm@outlook.com',  // Your email address
            from_name: formData.name,     
            reply_to: formData.email,     
            message: formData.message,   
        }, '1FbHQLVxPpA-QKhOg')
        .then(() => {
            // Send acknowledgment email to the sender
            emailjs.send('service_y1u2i5j', 'template_gyd327m', {
                to_email: formData.email,  // Sender's email
                from_name: 'Deep',         
                message: 'Thank you for your message! I will get back to you as soon as possible.',
            }, '1FbHQLVxPpA-QKhOg')
            .then(() => {
                alert('Message sent successfully! Acknowledgment has been sent to your email.');
            })
            .catch(() => {
                alert('Failed to send acknowledgment email.');
            });
        })
        .catch(() => {
            alert('Failed to send message.');
        });
    };

    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <h2>Hello, I'm Deep. If you wish to collaborate or have opportunities to offer, please include "Employer" in the name field, and I will reach out to you as soon as possible. For general viewers, your suggestions and feedback are also highly welcomed.</h2>
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
    );
};

export default Contact;