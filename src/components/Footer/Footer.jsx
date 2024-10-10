import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-logo">
                        <img src={assets.logo2} alt="ICS Logo" className="logo" />
                        <p>Helping Step up Businesses a Notch Higher</p>
                    </div>
                    <div className="footer-social">
                        <a href="#" target="_blank"><img src={assets.TwitterIcon} alt="Twitter Icon" /></a>
                        <a href="https://www.linkedin.com/company/ics-mobile-pvt-limited/mycompany/" target="_blank"><img src={assets.LinkedlnIcon} alt="LinkedIn Icon" /></a>
                        <a href="https://www.facebook.com/people/ICS-Mobile-Pvt-Ltd/100091170706909/" target="_blank"><img src={assets.FacebookIcon} alt="Facebook Icon" /></a>
                        <a href="https://www.instagram.com/ics_mobile_private_limited/" target="_blank"><img src={assets.InstagramIcon} alt="Instagram Icon" /></a>
                    </div>
                </div>
                <div className="footer-links">
                    <ul>
                        <li><Link to="/aboutus">About us</Link></li>
                        <li><a href="#">Products</a></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                        <li><Link to="/career">Careers</Link></li>
                        <li><a href="#">CSR Policy</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">T&C</a></li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <div className="footer-line"></div>
                    <div className="footer-ct-img">
                        <p>Copyright ©2021. ICS Mobile Pvt. Ltd. All Rights Reserved</p>
                        <div className="ct-img-grp">
                            <span style={{paddingRight:'10px'}}><img src={assets.ISOCertified1} alt="" /></span><span><img src={assets.ISOCertified2} alt="" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
