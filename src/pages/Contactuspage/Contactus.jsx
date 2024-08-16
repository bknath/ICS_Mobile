import React from 'react'
import './Contactus.css'
import { assets } from '../../assets/assets'
const Contactus = () => {
    return (
        <div className='contact-us-section'>
            <div className="contactus-text-wrap">
                <div className="contactus-text-section">
                    <div className="contact-us-content">
                        <p style={{ paddingBottom: '5px', color:'#b30000' }}>Contact us</p>
                        <h2>How May We<br /> Assist You?</h2>
                        <p style={{ paddingBottom: '2rem' }}>ICS is a trusted CPaaS communication partner for Enterprises. We aim to provide solutions that not only fulfill your demands but also surpass your expectations. We're here to help you find it, no matter what you're looking for.</p>
                    </div>
                    <div className="contactusimage">
                        <img src={assets.contactusimage} alt="" />
                    </div>
                </div>
            </div>
            <div className="form-section">
                <div className="wrapping-form-section">
                    <div className="info-block">
                        <div className="contact-us-item">
                            <img src={assets.chatBubble} alt="" />
                            <div className="info-block-content">
                                <h3>Looking to know more about our <br /> Services and Products?</h3>
                                <a href="_">Find Assistance</a>
                            </div>
                        </div>
                        <div className="contact-us-item">
                            <img src={assets.contactuschaticon2} alt="" />
                            <div className="info-block-content">
                                <h3>Want to know more about our Developers API?</h3>
                                <a href="_">Read API Docs</a>
                            </div>
                        </div>
                        <div className="contact-us-item">
                            <img src={assets.chatBubble} alt="" />
                            <div className="info-block-content">
                                <h3>Exploring better rates or better <br /> CPaaS services?</h3>
                                <a href="_">Contact an Expert</a>
                            </div>
                        </div>
                        <div className="contact-us-item">
                            <img src={assets.contactuschaticon2} alt="" />
                            <div className="info-block-content">
                                <h3>Investigating potential ICS Mobile collaborations?</h3>
                                <a href="_">Discover Patnership</a>
                            </div>
                        </div>
                        <div className="contact-us-item">
                            <img src={assets.chatBubble} alt="" />
                            <div className="info-block-content">
                                <h3>Want to be a part of our exciting <br />team?</h3>
                                <a href="_">Uncover Possibilities</a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-us-form">
                        <h2>Fill up the form</h2>
                        <p>Kindly provide the following information, and a representative from ICS Mobile will contact you at the earliest:</p>
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
                </div>
            </div>
            <div className="locations-section">
                <div className="wrap-locations-section">
                    <div className="locations-section-container">
                        <h2 >Our Loactions</h2>
                        <p >Come visit our friendly team at one of our offices.</p>
                        <div className="locations-container">
                            <div className="location-card-1">
                                <img src={assets.contactuslocationIcon} alt="Location Icon" className="location-icon" />
                                <div className="location-info">
                                    <h3>Visit us</h3>
                                    <p style={{ paddingBottom: '5px' }}>Visit our office HQ.</p>
                                    <address>
                                        NO.57, 2ND FLOOR, 8th Main Rd, NEAR SBI BANK,<br />
                                        3rd Phase, J. P. Nagar, Bengaluru, Karnataka 560078
                                    </address>
                                </div>
                            </div>
                            <div className="location-card-2">
                                <img src={assets.contactusphoneIcon} alt="Phone Icon" className="location-icon" />
                                <div className="location-info">
                                    <h3>Call us or Chat</h3>
                                    <p>Mon-Fri from 8am to 5pm.</p>
                                    <p>+1 (555) 000-0000</p>
                                    <p><a href="mailto:support@untitledui.com">support@untitledui.com</a></p>
                                </div>
                            </div>
                            <div className="location-maps">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9436388134536!2d77.59272157411928!3d12.911344016198445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15bbea75471b%3A0x89ed62836951e516!2sICS%20Mobile%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1716799707677!5m2!1sen!2sin"
                                    width="600"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="ICS Mobile Location"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus
