const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 5000;
const FILE_PATH = './testimonials.json';

app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Testimonials API!');
});

// Fetch testimonials
app.get('/api/testimonials', (req, res) => {
    fs.readFile(FILE_PATH, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ error: 'Failed to read file' });
        const testimonials = JSON.parse(data || '[]');
        res.json(testimonials);
    });
});

// Store testimonials
app.post('/api/testimonials', (req, res) => {
    const newTestimonial = req.body;

    console.log('Received new testimonial:', newTestimonial);

    fs.readFile(FILE_PATH, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ error: 'Failed to read file' });

        const testimonials = JSON.parse(data || '[]');

        if (testimonials.length >= 7) {
            testimonials.shift(); // Remove the oldest testimonial
        }

        testimonials.push(newTestimonial);

        fs.writeFile(FILE_PATH, JSON.stringify(testimonials, null, 2), (err) => {
            if (err) return res.status(500).json({ error: 'Failed to write file' });
            res.json(newTestimonial);
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
