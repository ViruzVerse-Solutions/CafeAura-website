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
