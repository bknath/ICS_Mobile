import React, { useState, useEffect } from 'react';
import './Contactus.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Contactus = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        companySize: 'null',
        helpOptions: 'null',
        privacy_policy: false,
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhoneNumber = (phone) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!validatePhoneNumber(formData.phone)) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }

        if (!formData.privacy_policy) {
            alert('You must agree to the privacy policy.');
            return;
        }

        try {
            const response = await fetch('https://insurvey.sendmsg.in/mobileicsmobile/AddMessage.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                const data = await response.json(); // assuming your PHP script returns JSON
                var responsestatus = data.status;
                var responsemessage = data.response;
                if (responsestatus == true) {
                    alert('Message Recieved Successfully');
                }
                else {
                    alert(responsemessage);
                }
                setFormData({
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone: '',
                    companySize: 'null',
                    helpOptions: 'null',
                    privacy_policy: false,
                });
            } else {
                alert('Error submitting form');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting form');
        }
    };

    return (
        <div className='contact-us-section'>
            <div className="contactus-text-wrap">
                <div className="contactus-text-section">
                    <div className="contact-us-content">
                        <p style={{ paddingBottom: '5px', color: '#b30000' }}>Contact us</p>
                        <h2>How May We<br /> Assist You?</h2>
                        <p>ICS is a trusted CPaaS communication partner for Enterprises. We aim to provide solutions that not only fulfill your demands but also surpass your expectations. We're here to help you find it, no matter what you're looking for.</p>
                        <span style={{display:'flex', fontSize:'14px', alignItems:'center', padding:'2rem 2rem 0 0'}}><Link to='/fb-signup'>Click here</Link><p>&nbsp; for Facebook Signup</p></span>
                    </div>
                    <div className="contactusimage">
                        <img src={assets.contactusimage} alt="Contact Us" />
                    </div>
                </div>
            </div>
            <div className="wrapping-form-section">
                <div className="form-section">
                    <div className="info-block">
                        <div className="contact-us-item">
                            <img src={assets.chatBubble} alt="Chat Bubble" />
                            <div className="info-block-content">
                                <h3>Looking to know more about our Services and Products?</h3>
                                <a href="#">Find Assistance</a>
                            </div>
                        </div>
                        <div className="contact-us-item">
                            <img src={assets.contactuschaticon2} alt="Contact Us" />
                            <div className="info-block-content">
                                <h3>Want to know more about our Developers API?</h3>
                                <a href="#">Read API Docs</a>
                            </div>
                        </div>
                        <div className="contact-us-item">
                            <img src={assets.chatBubble} alt="Chat Bubble" />
                            <div className="info-block-content">
                                <h3>Exploring better rates or better CPaaS services?</h3>
                                <a href="#">Contact an Expert</a>
                            </div>
                        </div>
                        <div className="contact-us-item">
                            <img src={assets.contactuschaticon2} alt="Contact Us" />
                            <div className="info-block-content">
                                <h3>Investigating potential ICS Mobile collaborations?</h3>
                                <a href="#">Discover Partnership</a>
                            </div>
                        </div>
                        <div className="contact-us-item">
                            <img src={assets.chatBubble} alt="Chat Bubble" />
                            <div className="info-block-content">
                                <h3>Want to be a part of our exciting team?</h3>
                                <a href="#">Uncover Possibilities</a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-us-form">
                        <h2>Fill up the form</h2>
                        <p>Kindly provide the following information, and a representative from ICS Mobile will contact you at the earliest:</p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Business Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder='you@company.com'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="first-name">First name</label>
                                <input
                                    type="text"
                                    id="first-name"
                                    name="first_name"
                                    placeholder='First Name'
                                    value={formData.first_name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="last-name">Last name</label>
                                <input
                                    type="text"
                                    id="last-name"
                                    name="last_name"
                                    placeholder='Last Name'
                                    value={formData.last_name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="company-size">Company Size</label>
                                <select
                                    id="company-size"
                                    name="companySize"
                                    value={formData.companySize}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select company size</option>
                                    <option value="1-10">1-10 employees</option>
                                    <option value="11-50">11-50 employees</option>
                                    <option value="51-200">51-200 employees</option>
                                    <option value="201-500">201-500 employees</option>
                                    <option value="500+">500+ employees</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder='+91 7608741464'
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="help-options">How Could ICS Help You?</label>
                                <select
                                    id="help-options"
                                    name="helpOptions"
                                    value={formData.helpOptions}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select an option</option>
                                    <option value="increase-traffic">Increase Website Traffic</option>
                                    <option value="improve-customer-communication">Improve Customer Communication</option>
                                    <option value="optimize-business-processes">Optimize Business Processes</option>
                                    <option value="enhance-security-and-authentication">Enhance Security & Authentication</option>
                                    <option value="connect-and-discuss-with-us">Connect and discuss with us</option>
                                    <option value="book-a-free-15min-demo">Book a free 15 min demo</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="form-group checkbox-group">
                                <input
                                    type="checkbox"
                                    id="privacy-policy"
                                    name="privacy_policy"
                                    checked={formData.privacy_policy}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="privacy-policy">
                                    You agree to our friendly <Link to='/privacypolicy'>privacy policy</Link>.
                                </label>
                            </div>
                            <button type="submit">Send message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="locations-section">
                <div className="wrap-locations-section">
                    <div className="locations-section-container">
                        <h2>Our Locations</h2>
                        <p>Come visit our friendly team at one of our offices.</p>
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
                                    <a style={{fontSize:'14px'}} href="tel:+919686544566">+91 9686544566</a>
                                    <p><a href="mailto:sms.support@icsportal.in">sms.support@icsportal.in</a></p>
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
    );
};

export default Contactus;
