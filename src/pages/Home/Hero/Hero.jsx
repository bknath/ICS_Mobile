import React, { useEffect, useRef } from 'react'
import './Hero.css'
import { assets } from '../../../assets/assets'
const Hero = () => {
    const brandRef = useRef(null);
    const yearRef = useRef(null);
    const smsRef = useRef(null);

    const targetCounts = {
        brandcount: 50,
        yearcount: 5,
        smscount: 3
    };

    useEffect(() => {
        const updateCount = (ref, target) => {
            let currentCount = 0;
            const intervalId = setInterval(() => {
                if (currentCount < target) {
                    currentCount += 1;
                    ref.current.textContent = currentCount;
                } else {
                    clearInterval(intervalId);
                }
            }, 30);
        };
        // Start intervals for each count
        updateCount(brandRef, targetCounts.brandcount);
        updateCount(yearRef, targetCounts.yearcount);
        updateCount(smsRef, targetCounts.smscount);
    }, []);


    return (
        <div>
            <div className="hero-wrap-section">
                <section className="hero-section">
                    <div className="content">
                        <h1>Reimagine omnichannel communications</h1>
                        <p>Leverage the power of ICS Mobile’s Trusted CPAAS platform to elevate your digital interactions.</p>
                        <div className="buttons">
                            <a href="#" className="request-demo">Request Demo</a>
                            <a href="#" className="talk-to-sales">Talk to Sales</a>
                        </div>
                        <div className="stats">
                            <div className="stat">
                                <div className='statbox'>
                                    <span className="number" ref={brandRef}>0</span><span className='numbertext'>+ brands</span>
                                </div>
                                <span className="text">Trusted us</span>
                            </div>
                            <div className="stat">
                                <div className="statbox">
                                    <span className="number" ref={yearRef}>0</span><span className='numbertext'>+ years</span>
                                </div>
                                <span className="text">Experience</span>
                            </div>
                            <div className="stat">
                                <div className="statbox">
                                    <span className="number" ref={smsRef}>0</span><span className="numbertext">+ Crore</span>
                                </div>
                                <span className="text">SMS per hour</span>
                            </div>
                        </div>
                    </div>
                    <div className="robot">
                        <div className="hero-product-image">
                            <img className="h2" src={assets.HomepageBannerart} alt="Robot" />
                        </div>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default Hero
