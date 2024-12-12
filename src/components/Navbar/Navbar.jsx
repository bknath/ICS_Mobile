import React, { useEffect, useState } from 'react'
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
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isMobileMenuOpen]);
    return (
        <div>
            <nav className="navbar">
                <div className="logo">
                    <Link to="/">
                        <img src={assets.logo3} alt="Logo" />
                    </Link>
                </div>
                <ul className="nav-items">
                    <li
                        className="nav-item dropdown"
                        onMouseEnter={() => setDropdownOpen('products')}
                        onMouseLeave={() => setDropdownOpen(null)}
                    >
                        <a className="dropbtn">
                            Products
                            <span className="arrow">
                                <img src={assets.downarrow} alt="Dropdown Arrow" />
                            </span>
                        </a>
                        <div className={`dropdown-content ${dropdownOpen === 'products' ? 'show' : ''}`}>
                            <div className="dropdown-content-block">
                                <div className="dropdown-content-block-1">
                                    <div className="dropdown-content-pr">
                                        <img src={assets.whatsAppiconmain} alt="" />
                                        <div className="content-text-pr">
                                            <Link to="/whatsapp" onClick={handleLinkClick}>Whatsapp Business API</Link>
                                            <p>Leverage WhatsApp for seamless customer interactions with automated and reliable messaging solutions.</p>
                                        </div>
                                    </div>
                                    <div className="dropdown-content-pr">
                                        <img src={assets.robonavicon} alt="" />
                                        <div className="content-text-pr">
                                            <Link to="/chatbot" onClick={handleLinkClick}>Chatbot</Link>
                                            <p>Engage customers instantly with AI-powered chatbots tailored to respond to their queries in real time.</p>
                                        </div>
                                    </div>
                                    <div className="dropdown-content-pr">
                                        <img src={assets.cepnavicon} alt="" />
                                        <div className="content-text-pr">
                                            <Link to="/customer" onClick={handleLinkClick}>Customer Engagement Programs</Link>
                                            <p>Offer personalized and interactive campaigns to increase customer loyalty and satisfaction.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown-content-block-2">
                                    <div className="dropdown-content-pr">
                                        <img src={assets.smsnavicon} alt="" />
                                        <div className="content-text-pr">
                                            <Link to="/smsgateway" onClick={handleLinkClick}>SMS Gateway</Link>
                                            <p>Send timely notifications, reminders, and updates with high reliability through our SMS Gateway.</p>
                                        </div>
                                    </div>
                                    <div className="dropdown-content-pr">
                                        <img src={assets.rcsnavicon} alt="" />
                                        <div className="content-text-pr">
                                            <Link to="/rcspage" onClick={handleLinkClick}>Rich Communication Services</Link>
                                            <p>Elevate your messaging experience with multimedia-rich interactions through RCS technology.</p>
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
                        <a  className="dropbtn">
                            Resources
                            <span className="arrow">
                                <img src={assets.downarrow} alt="Dropdown Arrow" />
                            </span>
                        </a>
                        <div className={`dropdown-content-2 ${dropdownOpen === 'resources' ? 'show' : ''}`}>
                            <div className="dropdown-content-pr">
                                <img src={assets.innovativetech} alt="" />
                                <div className="content-text-pr">
                                    <Link to="/career">Careers</Link>
                                    <p>The latest industry news, updates and info.</p>
                                </div>
                            </div>
                            <div className="dropdown-content-pr">
                                <img src={assets.lastingconnection} alt="" />
                                <div className="content-text-pr">
                                    <Link to='/#casestudies'>Case Studies</Link>
                                    {/* <a href="#" onClick={handleLinkClick}>Case Study</a> */}
                                    <p>Learn how our customers are making big changes.</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog" onClick={handleLinkClick}>Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about-us" onClick={handleLinkClick}>About us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact-us" onClick={handleLinkClick}>Contact us</Link>
                    </li>
                </ul>
                <div className="nav-buttons">
                    {/* <a href="#" className="activate-trial">Activate Trial</a> */}
                    <Link to="/contact-us" className='activate-trial'>Activate Trial</Link>
                    <a href="https://ngui.sendmsg.in/" target="_blank" className="btn sign-in">Sign In</a>
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
                                    <a  onClick={toggleProductsDropdown}>
                                        Products
                                        <span className="arrow2">
                                            <img src={isProductsDropdownOpen ? assets.uparrow : assets.downarrow2} alt="dropdown" />
                                        </span>
                                    </a>
                                    {isProductsDropdownOpen && (
                                        <ul className="dropdown show">
                                            <li><span><img src={assets.whatsAppiconmain} alt="wh-icon" style={{ paddingRight: "10px", width: '42px' }} /></span><Link to="/whatsapp" style={{ fontSize: '14px' }} onClick={handleLinkClick}>Whatsapp Business API</Link></li>
                                            <li><span><img src={assets.robonavicon} alt="ch-icon" style={{ paddingRight: "10px", width: '42px' }} /></span><Link to="/chatbot" style={{ fontSize: '14px' }} onClick={handleLinkClick}>Chatbot</Link></li>
                                            <li><span><img src={assets.cepnavicon} alt="cep-icon" style={{ paddingRight: "10px" }} /></span><Link to="/customer" style={{ fontSize: '14px', textAlign:'left' }} onClick={handleLinkClick}>Customer Engagement Programs</Link></li>
                                            <li><span><img src={assets.smsnavicon} alt="sms-icon" style={{ paddingRight: "10px" }} /></span><Link to="/smsgateway" style={{ fontSize: '14px' }} onClick={handleLinkClick}>SMS Gateway</Link></li>
                                            <li><span><img src={assets.rcsnavicon} alt="rcs-icon" style={{ paddingRight: "10px" }} /></span><Link to="/rcspage" style={{ fontSize: '14px' }} onClick={handleLinkClick}>Rich Communication Services</Link></li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <a  onClick={toggleResourcesDropdown}>
                                        Resources
                                        <span className="arrow2">
                                            <img src={isResourcesDropdownOpen ? assets.uparrow : assets.downarrow2} alt="dropdown" />
                                        </span>
                                    </a>
                                    {isResourcesDropdownOpen && (
                                        <ul className="dropdown show">
                                            <li><span><img src={assets.innovativetech} alt="bg-icon" style={{ paddingRight: "10px" }} /></span><Link to="/career" style={{ fontSize: '14px' }} onClick={handleLinkClick}>Carrers</Link></li>
                                            <li><span><img src={assets.lastingconnection} alt="cs-icon" style={{ paddingRight: "10px" }} /></span><Link to='/#casestudies' style={{ fontSize: '14px' }} onClick={handleLinkClick}>Case Studies</Link></li>
                                        </ul>
                                    )}
                                </li>
                                <li><Link to="/blog" onClick={handleLinkClick}>Blogs</Link></li>
                                <li><Link to="/about-us" onClick={handleLinkClick}>About Us</Link></li>
                                <li><Link to="/contact-us" onClick={handleLinkClick}>Contact Us</Link></li>
                            </ul>

                        </div>

                        {/* Mobile Buttons */}
                        <div className="wrap-mobile-buttons">
                            <div className="mobile-buttons">
                                <Link to="/contact-us" className='activate-trial'>Activate Trial</Link>
                                {/* <a  className="activate-trial">Activate Trial</a> */}
                                <a href="https://ngui.sendmsg.in/" target="_blank" className="btn sign-in">Sign In</a>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navbar
