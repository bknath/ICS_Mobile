import React from 'react'
import './Formsection.css'
import { assets } from '../../assets/assets'
const Formsection = () => {
  return (
    <section className="contact-form-section">
      <div className="contact-content-block">
        <h2>Chat to our friendly team</h2>
        <p>We’d love to hear from you. Please fill out this form or shoot us an email.</p>
        <div className="contact-details">
          <div className="contact-item">
            <img src={assets.EmailIcon} alt="Email Icon" />
            <div>
              <h3>Email</h3>
              <p>Our friendly team is here <br /> to help.</p>
              <a href="mailto:hello@icsmobile.com">hello@icsmobile.com</a>
            </div>
          </div>
          <div className="contact-item">
            <img src={assets.MessageIcon} alt="Live Chat Icon" />
            <div>
              <h3>Live chat</h3>
              <p>Our friendly team is here <br /> to help.</p>
              <a href="#">Start new chat</a>
            </div>
          </div>
          <div className="contact-item">
            <img src={assets.LocationIcon} alt="Office Icon" />
            <div>
              <h3>Office</h3>
              <p>Come say hello at our <br /> office HQ.</p>
              <address>100 Smith Street Collingwood VIC 3066 AU</address>
            </div>
          </div>
          <div className="contact-item">
            <img src={assets.PhoneIcon} alt="Phone Icon" />
            <div>
              <h3>Phone</h3>
              <p>Mon-Fri from 10am to <br /> 7pm.</p>
              <a href="tel:+919686544566">+91 96865-44566</a>
            </div>
          </div>
        </div>
      </div>
      <div className="form-block">
        {/* <h2>Fill up the form</h2>
        <p>Kindly provide the following information, and a representative from ICS Mobile will contact you at the earliest:</p> */}
        <form action="#">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="first-name">First name</label>
              <input type="text" id="first-name" name="first-name" placeholder='First Name' required />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last name</label>
              <input type="text" id="last-name" name="last-name" placeholder='Last Name' required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder='you@company.com' required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone number</label>
            <input type="tel" id="phone" name="phone" placeholder='+91 7608741464' required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder='Leave us a message...' required></textarea>
          </div>
          <div className="form-group checkbox-group">
            <input type="checkbox" id="privacy-policy" name="privacy-policy" required />
            <label htmlFor="privacy-policy">You agree to our friendly <a href="#">privacy policy</a>.</label>
          </div>
          <button type="submit">Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Formsection
