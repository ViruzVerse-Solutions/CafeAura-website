import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "********" : "MISSING");


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Create Nodemailer transporter

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

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  const { name, email, phone, organization, message } = req.body;
  console.log("📩 Received form data:", req.body);  // <--- ADD THIS LINE


    const mailOptions = {
        from: `"CafeAura Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_RECIPIENT,
        subject: `Pinged by ${name}`,
        html: `
            <h3>Pinged by</h3>
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
  const info = await transporter.sendMail(mailOptions);
  console.log('Email sent:', info);
  res.status(200).json({ message: 'Email sent successfully' });
} catch (error) {
  console.error('Error sending email:', error);
  res.status(500).json({ error: 'Failed to send email', details: error.message });
}
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});