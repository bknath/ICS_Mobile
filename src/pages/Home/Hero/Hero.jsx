import React, { useEffect, useRef } from 'react'
import './Hero.css'
import { assets } from '../../../assets/assets'
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
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
    const { ref: sectionref14, inView: imageInView14 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <div>
            <div className="hero-wrap-section">
                <section className="hero-section">
                    <div className="content">
                        <h1>Reimagine omnichannel communications</h1>
                        <p>Leverage the power of ICS Mobile’s Trusted CPAAS platform to elevate your digital interactions.</p>
                        <div className="buttons">
                            <Link to="/contact-us" className='request-demo'>Request Demo</Link>
                            <Link to="/contact-us" className='talk-to-sales'>Talk to Sales</Link>
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
                    <div className="robot" ref={sectionref14}>
                        <img
                            className={`image-slide-up ${imageInView14 ? 'visible' : ''}`}
                            src={assets.homepageupdatedimage}
                            alt="Robot"
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Hero
