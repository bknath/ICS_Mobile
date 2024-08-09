import React, { useEffect, useRef, useState } from 'react'
import './Platform.css';
import { assets } from '../../../assets/assets';
import { useInView } from "react-intersection-observer";
const Platform = () => {
    const { ref: sectionRef1, inView: imageInView1 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })
    const { ref: sectionRef2, inView: imageInView2 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })
    const sectionstatRef = useRef(null);
    const apiCallsRef = useRef(null);
    const operatorsRef = useRef(null);
    const apiUptimeRef = useRef(null);
    const smsSentRef = useRef(null);
    const otpSentRef = useRef(null);

    const targetCounts = {
        apiCalls: 12,
        operators: 5,
        apiUptime: 6,
        smsSent: 19,
        otpSent: 12
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const updateCount = (ref, target) => {
                        let currentCount = 0;
                        const increment = target / 100; // Determine how much to increment each step
                        const intervalId = setInterval(() => {
                            if (currentCount < target) {
                                currentCount += increment;
                                if (currentCount > target) currentCount = target;
                                ref.current.textContent = Math.floor(currentCount).toLocaleString();
                            } else {
                                clearInterval(intervalId);
                            }
                        }, 20);
                    };


                    updateCount(apiCallsRef, targetCounts.apiCalls);
                    updateCount(operatorsRef, targetCounts.operators);
                    updateCount(apiUptimeRef, targetCounts.apiUptime);
                    updateCount(smsSentRef, targetCounts.smsSent);
                    updateCount(otpSentRef, targetCounts.otpSent);

                    observer.disconnect();
                }
            });
        }, { threshold: 0.1 });

        if (sectionstatRef.current) {
            observer.observe(sectionstatRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const [activeTab, setActiveTab] = useState('Banking');
    const tabs = ['Banking', 'Retail', 'Technology', 'Ecommerce'];
    const logos = {
        Banking: [
            assets.amazonlogo,
            assets.axisbanklogo,
            assets.nykaalogo,
            assets.hexawarelogo,
            assets.cromalogo,
            assets.shopifylogo,
            assets.safewaylogo,
            assets.wayfairlogo,
            assets.citibanklogo,
            assets.shopclueslogo,
            assets.evernotelogo,
            assets.pwclogo
        ]
    }
    return (
        <section className="platform-section">
            <div className="header-content">
                <h2>Why Our Platform Works for You</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
            <div className="wrap-platform-content" ref={sectionRef1}>
                <div className="content-block">
                    <div className="content-block-col-1">
                        <div className="content-item">
                            <img src={assets.lastingconnection} alt="icon" />
                            <div className="content-text">
                                <h3>Lasting Connections</h3>
                                <p>Building enduring relationships through meaningful engagement.</p>
                            </div>
                        </div>
                        <div className="content-item">
                            <img src={assets.FlagIcon} alt="icon" />
                            <div className="content-text">
                                <h3>Commitment to Excellence</h3>
                                <p>Striving for unpralleled quality in every endeavor.</p>
                            </div>
                        </div>
                        <div className="content-item">
                            <img src={assets.innovativetech} alt="icon" />
                            <div className="content-text">
                                <h3>Innovative Technology</h3>
                                <p>Harnessing cutting-edge solution for advanced communication.</p>
                            </div>
                        </div>
                        <div className="content-item">
                            <img src={assets.playBtn} alt="icon" />
                            <div className="content-text">
                                <h3>Customer-First Approach</h3>
                                <p>Prioritizing your needs at every step.</p>
                            </div>
                        </div>
                        <a href="#" class="get-in-touch">Get in touch</a>
                    </div>
                    <div className="content-block-col-2">
                        <img
                            src={assets.whatsappimg}
                            alt="imagep2"
                            className={`image-slide-up ${imageInView1 ? 'visible' : ''}`}
                        />
                    </div>
                </div>
            </div>
            <div className="wrap-content-block-2" ref={sectionRef2}>
                <div className="content-block-2">
                    <div className="content-block-2-col-1">
                        <img
                            src={assets.Partnercompany}
                            alt=""
                            className={`image-slide-up ${imageInView2 ? 'visible' : ''}`}
                        />
                    </div>
                    <div className="content-block-2-col-2">
                        <h3>Seamless Integrations: Enhance Your Workflow</h3>
                        <p>Our advanced API effortlessly integrates with top-tier helpdesk,<br /> e-commerce, CRM, and marketing platforms, offering seamless integration without the coding hassle.</p>
                        <a href="" className='explore-more-integration'>Explore more integration</a>
                    </div>
                </div>
            </div>
            <div className="header-content">
                <h2>Our case studies</h2>
                <p style={{paddingBottom:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
            <div className="content-block-3">
                <div className="testimonial-content">
                    <div className="testimonial-box">
                        <div className="testimonial-text">
                            <img src={assets.lifestylelogo} alt="Lifestyle" className="testimonial-logo" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                            <div className="author-info">
                                <img src={assets.authorIcon} alt="Author" className="author-image" />
                                <div>
                                    <h4>Mahesh Shah</h4>
                                    <p>CEO of lifestyle</p>
                                </div>
                            </div>
                            <a href="#" className="case-study-link">Read Case Study<span><img className='readmorearrow' src={assets.readmorearrow} alt="" /></span></a>
                        </div>
                        <div className="testimonial-image">
                            <img src={assets.documentlogo} alt="Document" />
                        </div>
                    </div>
                    <div className="client-logos">
                        <div className="client-logo-container">
                            <img style={{padding:'1rem 0 10px 0'}} src={assets.lifestylelogo2} alt="Lifestyle" />
                        </div>
                        <div className="client-logo-container">
                            <img style={{width:'120px' ,padding:'1.3rem 0 10px 0' }} src={assets.zomotologo} alt="Zomato" />
                        </div>
                        <div className="client-logo-container">
                            <img style={{width:'120px' ,padding:'1rem 0 10px 0' }} src={assets.weworklogo} alt="Wework" />
                        </div>

                    </div>
                </div>
            </div>
            <div className="header-content">
                <h2>Across the industry, our partners</h2>
            </div>
            <div className="tab-container">
                <div className="tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            type='button'
                            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => handleTabClick(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="tab-content">
                    <div className="logos">
                        {logos[activeTab].map((logo, index) => (
                            <img key={index} src={logo} alt={`${activeTab} logo ${index + 1}`} />
                        ))}
                    </div>
                </div>
                <div className="tab-stats" ref={sectionstatRef}>
                    <div className="tab-stats-row">
                        <div className="tab-stats-content">
                            <div className="stat-flex-box">
                                <h3 className='stat-flex-box-1' ref={apiCallsRef}>0</h3><span className="stat-flex-box-2">L+</span>
                            </div>
                            <p>API calls per <br /> months</p>
                        </div>
                        <div className="tab-stats-content">
                            <div className="stat-flex-box">
                                <h3 className='stat-flex-box-1' ref={operatorsRef}>0</h3><span className='stat-flex-box-2'>L+</span>
                            </div>
                            <p>Operators <br />connected</p>
                        </div>
                        <div className="tab-stats-content">
                            <div className="stat-flex-box">
                                <span className="stat-flex-box-2">0</span><h3 className='stat-flex-box-1' ref={apiUptimeRef}>0</h3>
                            </div>
                            <p style={{paddingTop:'1.3rem'}}>API uptime</p>
                        </div>
                        <div className="tab-stats-content">
                            <div className="stat-flex-box">
                                <h3 className='stat-flex-box-1' ref={smsSentRef}>0</h3><span className='stat-flex-box-2'>L+</span>
                            </div>
                            <p>SMS sent per <br />month</p>
                        </div>
                        <div className="tab-stats-content">
                            <div className="stat-flex-box">
                                <h3 className='stat-flex-box-1' ref={otpSentRef}>0</h3><span className='stat-flex-box-2'>K+</span>
                            </div>
                            <p>OTP sent per <br /> month</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Platform
