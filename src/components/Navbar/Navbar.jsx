import React, { useState } from 'react'
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(null);

    const handleLinkClick = () => {
        setDropdownOpen(null);
    };
    return (
        <div>
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={assets.logo} alt="Logo" />
                </Link>
            </div>
            <ul className="nav-items">
                <li 
                    className="nav-item dropdown"
                    onMouseEnter={() => setDropdownOpen('products')}
                    onMouseLeave={() => setDropdownOpen(null)}
                >
                    <a href="#" className="dropbtn">
                        Products 
                        <span className="arrow">
                            <img src={assets.downarrow} alt="Dropdown Arrow" />
                        </span>
                    </a>
                    <div className={`dropdown-content ${dropdownOpen === 'products' ? 'show' : ''}`}>
                        <div className="dropdown-content-pr">
                            <img src={assets.whatsappapiNavbarIcon} alt="" />
                            <div className="content-text-pr">
                                <Link to="/whatsapp" onClick={handleLinkClick}>Whatsapp Business API</Link>
                                <p>Trigger multiple variations of a message without errors on the most...</p>
                            </div>
                        </div>
                        <div className="dropdown-content-pr">
                            <img src={assets.chatbotNavbarIcon} alt="" />
                            <div className="content-text-pr">
                                <Link to="/chatbot" onClick={handleLinkClick}>Chatbot</Link>
                                <p>Trigger multiple variations of a message without errors on the most...</p>
                            </div>
                        </div>
                        <div className="dropdown-content-pr">
                            <img src={assets.CEPNavbarIcon} alt="" />
                            <div className="content-text-pr">
                                <Link to="/customer" onClick={handleLinkClick}>Customer Engagement Programs</Link>
                                <p>Choose from various gamified campaigns to offer your customers...</p>
                            </div>
                        </div>
                        <div className="dropdown-content-pr">
                            <img src={assets.CEPNavbarIcon} alt="" />
                            <div className="content-text-pr">
                                <Link to="/smsgateway" onClick={handleLinkClick}>SMS Gateway</Link>
                                <p>Choose from various gamified campaigns to offer your customers...</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li 
                    className="nav-item dropdown"
                    onMouseEnter={() => setDropdownOpen('resources')}
                    onMouseLeave={() => setDropdownOpen(null)}
                >
                    <a href="#" className="dropbtn">
                        Resources 
                        <span className="arrow">
                            <img src={assets.downarrow} alt="Dropdown Arrow" />
                        </span>
                    </a>
                    <div className={`dropdown-content ${dropdownOpen === 'resources' ? 'show' : ''}`}>
                        <div className="dropdown-content-pr">
                            <img src={assets.SMSmarketingNavbarIcon} alt="" />
                            <div className="content-text-pr">
                                <a href="#" onClick={handleLinkClick}>Blogs </a>
                                <p>The latest industry news, updates and info.</p>
                            </div>
                        </div>
                        <div className="dropdown-content-pr">
                            <img src={assets.CEPNavbarIcon} alt="" />
                            <div className="content-text-pr">
                                <a href="#" onClick={handleLinkClick}>Case Study</a>
                                <p>Learn how our customers are making big changes.</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="nav-item"><a href="#">Blogs</a></li>
                <li className="nav-item"><a href="#">About us</a></li>
                <li className="nav-item">
                    <Link to="/contact-us">Contact us</Link>
                </li>
            </ul>
            <div className="nav-buttons">
                <a href="#" className="activate-trial">Activate Trial</a>
                <a href="#" className="btn sign-in">Sign In</a>
            </div>
        </nav>
    </div>
    )
}

export default Navbar
