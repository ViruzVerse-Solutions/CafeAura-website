import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
<<<<<<< HEAD
=======
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "********" : "MISSING");

>>>>>>> d1e7ba7376f0ef41d79a1a8a5ef7a6ba258682a8

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5175",
  methods: ["POST", "GET"],
  credentials: true,
}));

app.use(express.json());

// Create Nodemailer transporter
<<<<<<< HEAD
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

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
    const { name, email, phone, organization, message } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_RECIPIENT,
        subject: `New Contact Form Submission from ${name}`,
        html: `
            <h3>New Contact Form Submission</h3>
=======

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
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


app.post('/api/send-email', async (req, res) => { 
  const { name, email, phone, organization, message } = req.body;
  console.log("📩 Received form data:", req.body);  


    const mailOptions = {
        from: `"CafeAura Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_RECIPIENT,
        subject: `Pinged by ${name}`,
        html: `
            <h3>Pinged by</h3>
>>>>>>> d1e7ba7376f0ef41d79a1a8a5ef7a6ba258682a8
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Organization:</strong> ${organization}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `
    };

    try {
<<<<<<< HEAD
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
=======
  console.log('Sending email to:', process.env.EMAIL_RECIPIENT);
  const info = await transporter.sendMail(mailOptions);
  console.log('Email sent:', info);
  res.status(200).json({ message: 'Email sent successfully' });
} catch (error) {
  console.error('Error sending email:', error);
  res.status(500).json({ error: 'Failed to send email', details: error.message });
}
>>>>>>> d1e7ba7376f0ef41d79a1a8a5ef7a6ba258682a8
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});