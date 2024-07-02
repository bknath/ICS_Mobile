import React from 'react'
import './Communication.css'
import { assets } from '../../assets/assets'
const Communication2 = () => {
  return (
    <div className='communication-section'>
            <div className="communication-background">
                <div className="com-content-wrapper">
                    <div className="communication-image-container">
                        <img src={assets.spiralRainbow} alt="Spiral Rainbow" className='spiral-rainbow' />
                        <img src={assets.iPhoneimg} alt="iPhone" className='iPhone-image' />
                    </div>
                    <div className="communication-content">
                        <h2>Empower Your Global Communication with ICS SMS API</h2>
                        <p>In addition to cutting-edge technology, working with ICS means joining forces with experts.</p>
                    </div>
                </div>
            </div>
            <div className="com-stats-section">
                <div className="com-stat-card">
                    <img src={assets.trustIcon} alt="" />
                    <div>
                        <h3>50+ Brands Trust Us</h3>
                        <p>Our expertise is reflected in the diversity and the number of brands that rely on our solutions.</p>
                    </div>
                </div>
                <div className="com-stat-card">
                    <img src={assets.experienceIcon} alt="" />
                    <div>
                        <h3>5+ Avg. Years of Experience</h3>
                        <p>Years of innovation and customer feedback have refined our offerings to meet your exact needs.</p>
                    </div>
                </div>
                <div className="com-stat-card">
                    <img src={assets.whatsAppIcon} alt="" />
                    <div>
                        <h3>1 Million WhatsApp messages per month</h3>
                        <p>Demonstrating our capacity to handle extensive volumes and deliver consistent quality.</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Communication2
