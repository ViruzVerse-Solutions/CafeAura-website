import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
     tls: {
    rejectUnauthorized: false, // 👈 ignores self-signed certificate errors
  },
});

// Verify transporter on startup so we get immediate feedback if auth fails
(async () => {
    try {
        await transporter.verify()
        console.log('Nodemailer transporter verified. Ready to send emails.')
    } catch (err) {
        console.error('Error verifying Nodemailer transporter. Check EMAIL_USER/EMAIL_PASS and network access:', err)
    }
})()

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
    const { name, email, phone, organization, message } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_RECIPIENT,
        subject: `New Contact Form Submission from ${name}`,
        html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Organization:</strong> ${organization}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `
    };

    try {
        console.log('Sending email to:', process.env.EMAIL_RECIPIENT);
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        // Return the error message for easier debugging (remove details in production)
        res.status(500).json({ error: 'Failed to send email', details: error && error.message ? error.message : String(error) });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});