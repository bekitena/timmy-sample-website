import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Get in Touch</h1>
      <p className="contact-subtitle">
        We’d love to hear from you. Send us a message or reach us through the details below.
      </p>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> support@loreal.com</p>
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <p><strong>Address:</strong> Paris, France</p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
    
  )
}

export default Contact;
