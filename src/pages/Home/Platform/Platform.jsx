import React, { useEffect, useRef, useState } from 'react'
import './Platform.css';
import { assets } from '../../../assets/assets';
import { useInView } from "react-intersection-observer";
import { Link } from 'react-router-dom';
const Platform = () => {
    const { ref: sectionRef1, inView: imageInView1 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })
    // const [scrollIndex, setScrollIndex] = useState(0);
    const scrollContainerRef = useRef(null);
    const cards = [
        {
            logo: assets.zapierlogo,
            title: "Zapier",
            description: "Automate workflows and connect WhatsApp with over 5,000 apps, allowing for seamless task automation and enhanced productivity."
        },
        {
            logo: assets.pabblyconnectlogo,
            title: "Pabbly Connect",
            description: "Integrate WhatsApp with various apps and services, creating efficient workflows and automating repetitive tasks to save time and effort."
        },
        {
            logo: assets.hubspotlogo,
            title: "HubSpot",
            description: "WhatsApp conversations directly with HubSpot CRM, ensuring all customer interactions are tracked and managed efficiently."
        },
        {
            logo: assets.zohologo,
            title: "Zoho",
            description: "Enhance your customer relationship management by integrating WhatsApp with Zoho CRM, allowing for personalized communication and improved customer service."
        },
        {
            logo: assets.shopify2logo,
            title: "Shopify",
            description: "Enhance your customer relationship management by integrating WhatsApp with Zoho CRM, allowing for personalized communication and improved customer service."
        },
        {
            logo: assets.woocommercelogo,
            title: "WooCommerce",
            description: "Connect WhatsApp with WooCommerce to provide real-time customer support, send order updates, and boost sales through personalized interactions."
        },
    ];
    const cardWidth = 300; // Width of a single card
    const cardGap = 25; // Gap between cards

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            const scrollAmount = cardWidth + cardGap;
            scrollContainerRef.current.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            const scrollAmount = cardWidth + cardGap;
            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };



    const sectionstatRef = useRef(null);
    const apiCallsRef = useRef(null);
    const operatorsRef = useRef(null);
    const apiUptimeRef = useRef(null);
    const smsSentRef = useRef(null);
    const otpSentRef = useRef(null);

    const targetCounts = {
        apiCalls: 3,
        operators: 5,
        apiUptime: 99.9,
        smsSent: 2,
        otpSent: 1
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

    const [activeTab, setActiveTab] = useState('Retail');
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const tabs = ['Retail', 'Banking', 'Technology', 'Gaming'];
    const logos = {
        Banking: [
            assets.kashti,
            assets.tatacapital,
            assets.paynearby,
            assets.payworld,
            assets.fatakpay,
            assets.mpokket
        ],
        Retail: [
            assets.adityabirla,
            assets.arvind,
            assets.bestseller,
            assets.decathlon,
            assets.healthglow,
            assets.landmark,
            assets.marksspencer,
            assets.benetton,
            assets.vmart
        ],
        Technology: [
            assets.timesinternet,
            assets.salesforce,
            assets.clevertap,
            assets.capillary,
            assets.moengage,
            assets.easyrewardz,
            assets.webengage,
            assets.solus,
            assets.resulticks,
            assets.customercentria,
            assets.hansacequity
        ],
        Gaming: [
            assets.mpl,
            assets.my11circle
        ]
    }
    const [selectedClient, setSelectedClient] = useState('Bluestone');
    const clientContent = {
        Bluestone: {
            logo: assets.bluestonelogo,
            name: "Prasad",
            title: "Operation Manager",
            description: "Choosing ICS Mobile Services for our SMS services was a game-changer. The ease of use of their platform, coupled with the robust features, has streamlined our communication processes. Whether it's sending important updates or running targeted marketing campaigns, ICS has exceeded our expectations. Highly recommended!",
            document: assets.documentlogo,
        },
        Benetton: {
            logo: assets.benettonlogo,
            name: "Vinay Sharma",
            title: "Benetton India",
            description: "ICS mobiles is one of the leading organisations which is well equipped with technology and moreover they offer end to end solutions to the brands in terms of reaching out to their customers which includes conventional/ modern. Good part of ICS is that they are flexible in terms understanding the client’s requirement and based on their respective requirement their team always design a customised solution with a speed.",
            document: assets.documentlogo,
        },
        MPL: {
            logo: assets.mpl2logo,
            name: "Akashdeep Mishra",
            title: "Operation Manager",
            description: "Partnering with ICS has been a game-changer for us as a company. Their team consistently delivers quick responses and exceptional support, allowing us to implement innovative SMS strategies with ease. This collaboration has not only enhanced our communication but also significantly improved our key metrics. We are grateful for their expertise and dedication, which have truly elevated our SMS marketing efforts.",
            document: assets.documentlogo,
        },
    };
    const handleClick = (clientKey) => {
        setSelectedClient(clientKey);
    };
    return (
        <div>
            <div className="platform-section-1">
                <div className="header-content">
                    <button className='head-section-b2'>Why us</button>
                    <h2>Why Our Platform Works for You</h2>
                    <p>There are many reasons why forward thinking brands like you choose ICS as their campaign marketing partner.</p>
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
                            <Link to="/demomodule" className='get-in-touch'>Get in touch</Link>
                        </div>
                        <div className="content-block-col-2">
                            <img
                                src={assets.p1image}
                                alt="imagep2"
                                className={`image-slide-up ${imageInView1 ? 'visible' : ''}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="platform-section-2">
                <div className="header-content">
                    <button className='head-section-b3'>Our Integration</button>
                    <h2>Connecting Seamlessly with Leading Platforms</h2>
                    <p >We are proud to integrate our WhatsApp Business API with top-tier platforms, ensuring seamless communication and enhanced functionality for your business:</p>
                </div>
                <div className="scroll-container">
                    <button className="scroll-btn left" onClick={scrollLeft}>
                        <span style={{ position: 'relative', top: '-1px' }}>&#8249;</span>
                    </button>

                    <div className="scroll-boxes" ref={scrollContainerRef}>
                        {cards.map((card, index) => (
                            <div className="card" key={index}>
                                <div className="card-content">
                                    <img src={card.logo} alt={card.title} />
                                    <h3>{card.title}</h3>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="scroll-btn right" onClick={scrollRight}>
                        <span style={{ position: 'relative', left: '1px' }}>&#8250;</span>
                    </button>
                </div>
                <div className="header-content-2">
                    <p style={{ fontSize: '14px', color: '#777', lineHeight: '24px' }}>By partnering with these leading companies, our API provides a versatile and powerful tool to help you streamline operations, automate processes, and <br />enhance customer engagement across various platforms.</p>
                </div>
                <div className="header-content">
                    <button className='head-section-b3'>Case Studies</button>
                    <h2>Customer Success Stories</h2>
                    <p style={{ paddingBottom: '20px' }}>What some of our 8000+ customers across 100+ countries think of ICS</p>
                </div>
                <div className="content-block-3">
                    <div className="testimonial-content">
                        <div className="testimonial-box">
                            <div className="testimonial-text">
                                <img src={clientContent[selectedClient].logo} alt="Client Logo" className="testimonial-logo" />
                                <p>{clientContent[selectedClient].description}</p>
                                <div className="author-info">
                                    {/* <img src={assets.authorIcon} alt="Author" className="author-image" /> */}
                                    <div>
                                        <h4>{clientContent[selectedClient].name}</h4>
                                        <p>{clientContent[selectedClient].title}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-image">
                                <img src={clientContent[selectedClient].document} alt="Document" />
                            </div>
                        </div>
                        <div className="client-logos">
                            <div className="client-logo-container" onClick={() => handleClick('Bluestone')}>
                                <img  src={assets.bluestonelogo} alt="Bluestone" />
                            </div>
                            <div className="client-logo-container" onClick={() => handleClick('Benetton')}>
                                <img  src={assets.benettonlogo} alt="Benetton" />
                            </div>
                            <div className="client-logo-container" onClick={() => handleClick('MPL')}>
                                <img  src={assets.mpl2logo} alt="MPL" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="platform-section-3">
                <div className="header-content">
                    <h2 style={{ padding: '3rem 0px' }}>Across the industry, our partners</h2>
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
                    <div className="tab-stat-container">
                        <div className="tab-stats" ref={sectionstatRef}>
                            <div className="tab-stats-row">
                                <div className="tab-stats-content">
                                    <div className="stat-flex-box">
                                        <h3 className='stat-flex-box-1' ref={apiCallsRef}>0</h3><span className="stat-flex-box-2">B+</span>
                                    </div>
                                    <p>API calls per <br /> months</p>
                                </div>
                                <div className="tab-stats-content">
                                    <div className="stat-flex-box">
                                        <h3 className='stat-flex-box-1' ref={operatorsRef}>0</h3><span className='stat-flex-box-2'>+</span>
                                    </div>
                                    <p>Operators <br />connected</p>
                                </div>
                                <div className="tab-stats-content">
                                    <div className="stat-flex-box">
                                        <h3 className='stat-flex-box-1' ref={apiUptimeRef}>0</h3><span className="stat-flex-box-2">.9%</span>
                                    </div>
                                    <p style={{ paddingTop: '1.3rem' }}>API uptime</p>
                                </div>
                                <div className="tab-stats-content">
                                    <div className="stat-flex-box">
                                        <h3 className='stat-flex-box-1' ref={smsSentRef}>0</h3><span className='stat-flex-box-2'>B+</span>
                                    </div>
                                    <p>SMS sent per <br />month</p>
                                </div>
                                <div className="tab-stats-content">
                                    <div className="stat-flex-box">
                                        <h3 className='stat-flex-box-1' ref={otpSentRef}>0</h3><span className='stat-flex-box-2'>B+</span>
                                    </div>
                                    <p>OTP sent per <br /> month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Platform
