import React, { useState } from 'react'
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(null);

    const handleLinkClick = () => {
        setDropdownOpen(null);
        setIsMobileMenuOpen(false);
    };
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
    const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleProductsDropdown = () => {
        setIsProductsDropdownOpen(!isProductsDropdownOpen);
    };

    const toggleResourcesDropdown = () => {
        setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
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
                            <div className="dropdown-content-block">
                                <div className="dropdown-content-block-1">
                                    <div className="dropdown-content-pr">
                                        <img src={assets.playBtn} alt="" />
                                        <div className="content-text-pr">
                                            <Link to="/whatsapp" onClick={handleLinkClick}>Whatsapp Business API</Link>
                                            <p>Trigger multiple variations of a message without errors on the most...</p>
                                        </div>
                                    </div>
                                    <div className="dropdown-content-pr">
                                        <img src={assets.robotextIcon} alt="" />
                                        <div className="content-text-pr">
                                            <Link to="/chatbot" onClick={handleLinkClick}>Chatbot</Link>
                                            <p>Trigger multiple variations of a message without errors on the most...</p>
                                        </div>
                                    </div>
                                    <div className="dropdown-content-pr">
                                        <img src={assets.FlagIcon} alt="" />
                                        <div className="content-text-pr">
                                            <Link to="/customer" onClick={handleLinkClick}>Customer Engagement Programs</Link>
                                            <p>Choose from various gamified campaigns to offer your customers...</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown-content-block-2">
                                    <div className="dropdown-content-pr">
                                        <img src={assets.innovativetech} alt="" />
                                        <div className="content-text-pr">
                                            <Link to="/smsgateway" onClick={handleLinkClick}>SMS Gateway</Link>
                                            <p>Choose from various gamified campaigns to offer your customers...</p>
                                        </div>
                                    </div>
                                    <div className="dropdown-content-pr">
                                        <img src={assets.lastingconnection} alt="" />
                                        <div className="content-text-pr">
                                            <Link to="/rcspage" onClick={handleLinkClick}>Rich Communication</Link>
                                            <p>Choose from various gamified campaigns to offer your customers...</p>
                                        </div>
                                    </div>
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
                        <div className={`dropdown-content-2 ${dropdownOpen === 'resources' ? 'show' : ''}`}>
                            <div className="dropdown-content-pr">
                                <img src={assets.innovativetech} alt="" />
                                <div className="content-text-pr">
                                    <a href="#" onClick={handleLinkClick}>Blogs </a>
                                    <p>The latest industry news, updates and info.</p>
                                </div>
                            </div>
                            <div className="dropdown-content-pr">
                                <img src={assets.lastingconnection} alt="" />
                                <div className="content-text-pr">
                                    <a href="#" onClick={handleLinkClick}>Case Study</a>
                                    <p>Learn how our customers are making big changes.</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item"><a href="#">Blogs</a></li>
                    <li className="nav-item">
                        <Link to="/aboutus">About us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact-us">Contact us</Link>
                    </li>
                </ul>
                <div className="nav-buttons">
                    <a href="#" className="activate-trial">Activate Trial</a>
                    <a href="#" className="btn sign-in">Sign In</a>
                </div>
                {/* Mobile Hamburger */}
                <div className="hamburger" onClick={toggleMobileMenu}>
                    &#9776;
                </div>
                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="mobile-nav">
                        {/* Mobile Menu Header */}
                        <div className="mobile-header">
                            <div className="menu-title">Menu</div>
                            <div className="close-btn" onClick={toggleMobileMenu}>
                                &times;
                            </div>
                        </div>

                        {/* Mobile Navigation Links */}
                        <div className="mobile-nav-links">
                            <ul>
                                <li>
                                    <a href="#" onClick={toggleProductsDropdown}>
                                        Products
                                        <span className="arrow2">
                                            <img src={isProductsDropdownOpen ? assets.uparrow : assets.downarrow2} alt="dropdown" />
                                        </span>
                                    </a>
                                    {isProductsDropdownOpen && (
                                        <ul className="dropdown show">
                                            <li><span><img src={assets.playBtn} alt="wh-icon" style={{paddingRight:"10px", width:'42px'}} /></span><Link to="/whatsapp" style={{fontSize:'14px'}} onClick={handleLinkClick}>Whatsapp Business API</Link></li>
                                            <li><span><img src={assets.robotextIcon} alt="ch-icon" style={{paddingRight:"10px", width:'42px'}} /></span><Link to="/chatbot" style={{fontSize:'14px'}} onClick={handleLinkClick}>Chatbot</Link></li>
                                            <li><span><img src={assets.FlagIcon} alt="cep-icon" style={{paddingRight:"10px"}} /></span><Link to="/customer" style={{fontSize:'14px'}} onClick={handleLinkClick}>Customer Engagement Programs</Link></li>
                                            <li><span><img src={assets.innovativetech} alt="sms-icon" style={{paddingRight:"10px"}} /></span><Link to="/smsgateway" style={{fontSize:'14px'}} onClick={handleLinkClick}>SMS Gateway</Link></li>
                                            <li><span><img src={assets.lastingconnection} alt="rcs-icon" style={{paddingRight:"10px"}} /></span><Link to="/rcspage" style={{fontSize:'14px'}} onClick={handleLinkClick}>Rich Communication</Link></li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <a href="#" onClick={toggleResourcesDropdown}>
                                        Resources
                                        <span className="arrow2">
                                            <img src={isResourcesDropdownOpen ? assets.uparrow : assets.downarrow2} alt="dropdown" />
                                        </span>
                                    </a>
                                    {isResourcesDropdownOpen && (
                                        <ul className="dropdown show">
                                            <li><span><img src={assets.innovativetech} alt="bg-icon" style={{paddingRight:"10px"}} /></span><a href="#" style={{fontSize:'14px'}} onClick={handleLinkClick}>Blogs </a></li>
                                            <li><span><img src={assets.lastingconnection} alt="cs-icon" style={{paddingRight:"10px"}} /></span><a href="#" style={{fontSize:'14px'}} onClick={handleLinkClick}>Case Study</a></li>
                                        </ul>
                                    )}
                                </li>
                                <li><Link to="/aboutus">About Us</Link></li>
                                <li><Link to="/contact-us">Contact Us</Link></li>
                            </ul>

                        </div>

                        {/* Mobile Buttons */}
                        <div className="wrap-mobile-buttons">
                            <div className="mobile-buttons">
                                <a href="#" className="activate-trial">Activate Trial</a>
                                <a href="#" className="btn sign-in">Sign In</a>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navbar
