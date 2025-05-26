"use client"

import { useState } from "react"
import "../styles/contact.css"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send the form data to a server
    console.log("Form submitted:", formData)
    setFormSubmitted(true)

    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setFormSubmitted(false)
    }, 3000)
  }

  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>Have questions about our water management solutions? We're here to help!</p>
      </header>

      <div className="contact-content">
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          {formSubmitted ? (
            <div
              className="success-message"
              style={{
                padding: "20px",
                background: "#d4edda",
                color: "#155724",
                borderRadius: "8px",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              Thank you for your message! We will get back to you soon.
            </div>
          ) : null}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-control"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <div className="info-item">
            <div className="info-icon">
              <i>📍</i>
            </div>
            <div className="info-text">
              <h3>Our Location</h3>
              <p>123 Water Street, Eco City, EC 12345</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <i>📞</i>
            </div>
            <div className="info-text">
              <h3>Phone Number</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <i>✉️</i>
            </div>
            <div className="info-text">
              <h3>Email Address</h3>
              <p>info@watermanagement.com</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <i>⏰</i>
            </div>
            <div className="info-text">
              <h3>Working Hours</h3>
              <p>Monday - Friday: 9AM - 5PM</p>
            </div>
          </div>

          <div className="map-section">
            <div className="map-placeholder">Interactive Map Will Be Displayed Here</div>
          </div>

          <div className="social-section">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <div className="social-icon">
                <i>f</i>
              </div>
              <div className="social-icon">
                <i>t</i>
              </div>
              <div className="social-icon">
                <i>in</i>
              </div>
              <div className="social-icon">
                <i>ig</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

