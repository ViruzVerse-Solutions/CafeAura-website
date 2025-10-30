import React from 'react'
import './Contact.css'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const values = Object.fromEntries(data.entries())
    // In this demo we just log and show a confirmation. Replace with API call as needed.
    console.log('Contact submission:', values)
    alert('Thanks — your message has been received (demo).')
    e.target.reset()
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h2>Contact CafeAura</h2>
        <p>Questions, feedback, or partnership inquiries? Send us a message and we'll get back to you.</p>
      </section>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" type="text" placeholder="Your name" required />
        </label>

        <label>
          Email
          <input name="email" type="email" placeholder="you@example.com" required />
        </label>

        <label>
          Phone 
          <input name="phone" type="phone no" placeholder="Your phone no" required />
        </label>

        <label>
          Organization 
          <input name="organization" type="text" placeholder="Your organization" required />
        </label>
        
        <label>
          Message
          <textarea name="message" rows="6" placeholder="Tell us about your question or feedback" required />
        </label>

        <div className="contact-actions">
          <button type="submit" className="primary">Send Message</button>
        </div>
      </form>
    </div>
  )
}

export default Contact
