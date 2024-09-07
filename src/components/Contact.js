import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'

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
    
        emailjs.send('service_y1u2i5j', 'template_tlc8gp8', {
            from_name: formData.name,     
            reply_to: formData.email,     
            message: formData.message,   
        }, '1FbHQLVxPpA-QKhOg')
        .then(() => {
            alert('Message sent successfully!');
        })
        .catch(() => {
            alert('Failed to send message.');
        });
    };
    

    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
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
