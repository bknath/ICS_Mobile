import React, { useEffect, useState } from 'react'
import './Demomodule.css'
import { assets } from '../../assets/assets';
const Demomodule = () => {
    useEffect(() =>{
        window.scrollTo(0,0);
    },[]);
    const items = [
        {
            icon: assets.Hiringlogo1,
            title: "Drive Sales and Enhance Commerce",
            description: "Boost revenue with personalized, interactive dialogues that convert.",
        },
        {
            icon: assets.Hiringlogo2,
            title: "Deliver Seamless Support",
            description: "Combine the efficiency of chatbots with the empathy of live agents.",
        },
        {
            icon: assets.Hiringlogo3,
            title: "Engage Consumers Meaningfully",
            description: "Build lasting relationships through impactful, two-way conversations.",
        },
    ];
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        companySize:'null',
        helpOptions:'null',
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
                    phone_number: '',
                    companySize:'null',
                    helpOptions:'null',
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
        <div>
            <div className="demo-section">
                <div className="demo-wrap-section">
                    <div className="layout-container">
                        {items.map((item, index) => (
                            <div key={index} className="layout-item">
                                <div className="item-icon">
                                    <img src={item.icon} alt="Icon" />
                                </div>
                                <div className="item-content">
                                    <h4 className="item-title">{item.title}</h4>
                                    <p className="item-description">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="demo-form-block">
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
                                    You agree to our friendly <a href="#">privacy policy</a>.
                                </label>
                            </div>
                            <button type="submit">Schedule a demo</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="demo-content-section">
                <div className="demo-text-content-col1">
                    <div className="demo-heading">
                        <h2>Book your free demo</h2>
                        <p className='p-demo'>We really encourage you to see how Wati lets you use WhatsApp as a communication channel to sell, market and support more efficiently.</p>
                        <div className="content-item-2">
                            <img src={assets.demoimg1} alt="icon" />
                            <div className="content-text">
                                <h3>Lasting Connections</h3>
                            </div>
                        </div>
                        <div className="content-item-2">
                            <img src={assets.demoimg2} alt="icon" />
                            <div className="content-text">
                                <h3>Commitment to Excellence</h3>
                            </div>
                        </div>
                        <div className="content-item-2">
                            <img src={assets.demoimg3} alt="icon" />
                            <div className="content-text">
                                <h3>Innovative Technology</h3>
                            </div>
                        </div>
                        <div className="content-item-2">
                            <img src={assets.demoimg4} alt="icon" />
                            <div className="content-text">
                                <h3>Customer-First Approach</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="demo-img-content-col2">
                    <img
                        src={assets.demomainimg}
                        alt="imagep2"
                    />
                </div>
            </div>

        </div>

    )
}

export default Demomodule;
