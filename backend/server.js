const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());  // This is important for parsing JSON request bodies

// Contact Route
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    // Configure Nodemailer to send emails
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'deepdblm@gmail.com', // replace with your email
            pass: 'birth@655',  // replace with your email password
        },
    });

    let mailOptions = {
        from: email,
        to: 'deepdblm@gmail.com',  // replace with the email you want to send to
        subject: `Message from ${name}`,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Message sent successfully');
    } catch (error) {
        res.status(500).send('Failed to send message');
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
