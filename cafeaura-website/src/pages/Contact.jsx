
import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    const data = new FormData(e.target)
    const values = Object.fromEntries(data.entries())
    
    try {
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      alert('Thank you! Your message has been sent successfully.')
      e.target.reset()
    } catch (err) {
      setError('Failed to send message. Please try again later.')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h2>Contact CafeAura</h2>
        <p>Get your doubts cleared here .</p>
      </section>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name *
          <input name="name" type="text" placeholder="Your name" required />
        </label>

        <label>
          Email id *
          <input name="email" type="email" placeholder="mail@id.com" required />
        </label>

        <label>
          Mobile *
          <input id="phone" name="phone" type="tel" placeholder="Your mobile no" required />
        </label>

        <label>
          Organization *
          <input name="organization" type="text" placeholder="Your organization" required />
        </label>

        <label>
          Message *
          <textarea id="message" name="message" rows="6" placeholder="Tell us about your question or feedback" required></textarea>
        </label>

        <div className="contact-actions">
          <button type="submit" className="primary" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  )
}

export default Contact

import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:3001/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("✅ Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        message: "",
      });
    } else {
      const err = await response.json();
      console.error("Server error:", err);
      alert("❌ Error sending message: " + (err.details || "Unknown error"));
    }
  } catch (error) {
    console.error("Network error:", error);
    alert("⚠️ Failed to send message. Check your backend connection.");
  }
};

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>Get in Touch</h2>
        <p className="subtitle">We’d love to hear from you!</p>
        <p className="desc">Feel free to clear your doubts with us.</p>
        <p className="desc">Drop us a message — we’ll get back to you soon.</p>

        <div className="contact-info">
          <p>📧 contacttcafeaura@gmail.com</p>
          <div className="social-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>

      <div className="contact-right">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="organization"
            placeholder="Organization"
            required
            value={formData.organization}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
 d1e7ba7376f0ef41d79a1a8a5ef7a6ba258682a8
