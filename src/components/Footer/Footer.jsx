import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-logo">
                        <img src={assets.logo} alt="ICS Logo" className="logo" />
                        <p>Helping Step up Businesses a Notch <br />Higher</p>
                    </div>
                    <div className="footer-social">
                        <a href="#"><img src={assets.TwitterIcon} alt="Twitter Icon" /></a>
                        <a href="#"><img src={assets.LinkedlnIcon} alt="LinkedIn Icon" /></a>
                        <a href="#"><img src={assets.FacebookIcon} alt="Facebook Icon" /></a>
                        <a href="#"><img src={assets.InstagramIcon} alt="Instagram Icon" /></a>
                    </div>
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">CSR Policy</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">T&C</a></li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <div className="footer-line"></div>
                    <p>Copyright ©2021. ICS Mobile Pvt. Ltd. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
