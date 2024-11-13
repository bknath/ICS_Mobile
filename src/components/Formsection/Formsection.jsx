import React, { useState } from 'react';
import './Formsection.css';
import { assets } from '../../assets/assets';
const Formsection = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        message: '',
        api_key: '',
        privacy_policy: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhoneNumber = (phone_number) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone_number);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!validatePhoneNumber(formData.phone_number)) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }

        if (!formData.privacy_policy) {
            alert('You must agree to the privacy policy.');
            return;
        }
     const updatedFormData = {
            ...formData,
            api_key: 'QtOaDjEZSJsHUvsuxcuKab', // Replace 'your_api_key_here' with your actual API key
        };
         const bodyData = new URLSearchParams(updatedFormData).toString();
        try {
            const response = await fetch('https://insurvey.sendmsg.in/mobileicsmobile/AddMessage.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(bodyData),
            });
            if (response.ok) {
                const data = await response.json(); // assuming your PHP script returns JSON
                var responsestatus=data.status;
                var responsemessage=data.response;
                if(responsestatus==true)
                {
                    alert('Message Recieved Successfully');
                }
                else
                {
                    alert(responsemessage);
                }
                setFormData({
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone_number: '',
                    message: '',
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
        <section className="contact-form-section">
            <div className="wrap-contact-content-block">
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
                                <address>NO.57, 2ND FLOOR, 8th Main Rd, NEAR SBI BANK, 3rd Phase, J. P. Nagar, Bengaluru, Karnataka 560078</address>
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
            </div>
            <div className="form-block">
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
                        <input
                            type="hidden"
                            id="api_key"
                            name="api_key"
                            value='QtOaDjEZSJsHUvsuxcuKab'
                            required
                        />
                    </div>
                    <div className="form-row">
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
                            name="phone_number"
                            placeholder='+91 7608741464'
                            value={formData.phone_number}
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
                            <option value="improve-communication">Improve Customer Communication</option>
                            <option value="optimize-processes">Optimize Business Processes</option>
                            <option value="enhance-security">Enhance Security & Authentication</option>
                            <option value="enhance-security">Connect and discuss with us</option>
                            <option value="enhance-security">Book a free 15 min demo</option>
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
                            You agree to our friendly <a href="#">privacy policy</a>.
                        </label>
                    </div>
                    <button type="submit">Send message</button>
                </form>
            </div>
        </section>
    );
};

export default Formsection;
