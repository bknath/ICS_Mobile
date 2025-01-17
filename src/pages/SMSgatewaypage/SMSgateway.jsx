import React, { useEffect, useRef, useState } from 'react'
import './SMSgateway.css'
import '../Home/Platform/Platform.css'
import { assets } from '../../assets/assets'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
const SMSgateway = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [activeTab, setActiveTab] = useState('dlt-support');
    const navRef = useRef(null);
    let scrollTimeout = null;

    // Sections array to match navigation with content
    const sections = [
        { id: 'dlt-support', name: 'DLT Support' },
        { id: 'unicode-messages', name: 'Unicode Messages' },
        { id: 'tat', name: 'Swift Turnaround Time (TAT)' },
        { id: 'smart-routing', name: 'Smart Routing' },
        { id: 'custom-apis', name: 'Custom APIs' },
        { id: 'brand-integration', name: 'Brand Integration' },
        { id: 'operator-connectivity', name: 'Operator Connectivity' },
        { id: 'mtsl', name: 'Multiple Trackable Short Links' },
        { id: 'tps', name: 'High Throughput (TPS)' }
    ];

    useEffect(() => {
        const sectionElements = sections.map((section) =>
            document.getElementById(section.id)
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Update active tab based on visible section
                        setActiveTab(entry.target.id);

                        // Debouncing scroll to prevent multiple triggers
                        clearTimeout(scrollTimeout);
                        scrollTimeout = setTimeout(() => {
                            const activeNavLink = document.querySelector(
                                `.product-nav-1234 a[href="#${entry.target.id}"]`
                            );
                            if (activeNavLink && navRef.current) {
                                const navContainer = navRef.current;
                                const navLinkLeft = activeNavLink.offsetLeft;
                                const navLinkWidth = activeNavLink.offsetWidth;
                                const containerWidth = navContainer.offsetWidth;

                                // Scroll manually for smooth horizontal scroll
                                navContainer.scrollTo({
                                    left: navLinkLeft - (containerWidth - navLinkWidth) / 2,
                                    behavior: 'smooth',
                                });
                            }
                        }, 100); // Delay for debouncing scroll
                    }
                });
            },
            { threshold: 0.7 }
        );

        sectionElements.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => {
            observer.disconnect();
            clearTimeout(scrollTimeout); // Cleanup timeout
        };
    }, []);

    const handleNavClick = (id) => {
        // Smooth scroll to the section on clicking a tab
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
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
    const features9 = [
        {
            icon: assets.smoothIcon,
            title: 'Comprehensive Support',
            description: 'Our devoted point of contact guarantees fast solutions and trouble-free implementation of your SMS strategy.',
            link: '#',
            linkText: 'Learn More'
        },
        {
            icon: assets.chipIcon,
            title: 'Advanced Technical Capabilities',
            description: 'Let us handle Unicode SMS, numerous lengthy URLs, and batch-wise campaign scheduling so you can get the benefits.',
            link: '#',
            linkText: 'Learn More'
        },
        {
            icon: assets.handshakeIcon,
            title: 'Trusted Partnerships',
            description: 'You can easily integrate ICS SMS API with popular CRM partners like moEngage, Webengage, CleverTap, and many more. ',
            link: '#',
            linkText: 'Learn More'
        },
    ]
    const { ref: sectionref10, inView: imageInView10 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })
    const { ref: sectionref11, inView: imageInView11 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })
    const { ref: sectionref12, inView: imageInView12 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })
    const { ref: sectionref13, inView: imageInView13 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })
    return (
        <div>
            <Helmet>
                <title>SMS Marketing | Engage Your Customers</title>
                <meta name='description' content='Reach your audience instantly with our powerful SMS Marketing platform. Send personalized messages, track campaigns, and drive conversions.' />
                <meta name='keywords' content='SMS Marketing, customer engagement platform, client engagement software, Customer Engagement services' />
            </Helmet>
            <div className="SMSgateway-wrap-content" ref={sectionref10}>
                <div className="hero-section-5">
                    <div className="content-SMSgateway">
                        <p style={{ color: '#b30000' }}>SMS Gateway</p>
                        <h1>Quick A2P SMS <br /> Solutions for Modern <br /> Communication</h1>
                        <p className="SMSgateway-text">Use ICS SMS Gateway to take your communications strategy to the next level. We are your source for dependable, effective, tailored SMS communication solutions.</p>
                        <div className="buttons">
                            <Link to="/contact-us" className='contact-us'>Contact us</Link>
                        </div>
                    </div>
                    <div className="SMSrobot">
                        <img src={assets.SMSGatewaynewLogo}
                            alt="SMSlogo1"
                            className={`image-slide-up ${imageInView10 ? 'visible' : ''}`}
                        />
                    </div>
                </div>
            </div>
            <div className="SMSgateway-platform-section">
                <div className="SMSgateway-platform-header">
                    <button className='head-section-b5'>Features for SMS Gateway</button>
                    <h2>Maximize SMS Potential with ICS</h2>
                    <p>Our shared values keep us connected and guide us as one team.</p>
                </div>
                <div className="feature-main-container-1234">

                    <div className="product-nav-1234" ref={navRef}>
                        {sections.map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className={activeTab === section.id ? 'active-1234' : ''}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(section.id); // Handle smooth scroll when clicking
                                }}
                            >
                                {section.name}
                            </a>
                        ))}
                    </div>


                    <div className="feature-content-container-1234">
                        <section id="dlt-support" className="feature-section-1234">
                            <div className="feature-item-1234">
                                <img src={assets.f7sm1} alt="DLT Support" />
                                <div className="feature-text-1234">
                                    <h2>DLT Support</h2>
                                    <p>Use ICS to traverse the complicated terrain of DLT compliance easily. Our goal is to provide smooth integration and speedy approvals across the board, from registration processes to SMS templates. We give you the tools you need to concentrate on SMS marketing.</p>
                                </div>
                            </div>
                        </section>

                        <section id="unicode-messages" className="feature-section-1234">
                            <div className="feature-item-1234">
                                <div className="feature-text-1234">
                                    <h2>Unicode Messages</h2>
                                    <p>We ensure clarity and authenticity with Unicode and regional SMS content visibility. Ensure that all messages delivered from ICS to your clients are verified and authenticated. Improve the credibility of the brand and the efficacy of communication.</p>
                                </div>
                                <img src={assets.f7sm2} alt="Unicode Messages" />
                            </div>
                        </section>
                        <section id="tat" className="feature-section-1234">
                            <div className="feature-item-1234">
                                <img src={assets.f7sm3} alt="Swift Turnaround Time (TAT)" />
                                <div className="feature-text-1234">
                                    <h2>Swift Turnaround Time (TAT)</h2>
                                    <p>Get the fastest turnaround times in the business for managed campaigns and ticket resolutions with ICS. Our lightning-fast response and execution will meet your CPaaS support and execution needs.</p>
                                </div>
                            </div>
                        </section>
                        <section id="smart-routing" className="feature-section-1234">
                            <div className="feature-item-1234">
                                <div className="feature-text-1234">
                                    <h2>Smart Routing</h2>
                                    <p>Our clever routing method will keep you ahead of any outage. Ensure communication continues unabated by smoothly shifting SMS traffic during an operator outage. Have faith in ICS to ensure the uninterrupted flow of your SMS traffic.</p>
                                </div>
                                <img src={assets.f7sm4} alt="Smart Routing" />
                            </div>
                        </section>
                        <section id="custom-apis" className="feature-section-1234">
                            <div className="feature-item-1234">
                                <img src={assets.f7sm5} alt="Customized Apis" />
                                <div className="feature-text-1234">
                                    <h2>Customized APIs</h2>
                                    <p>Take advantage of our extensive library of APIs to integrate effortlessly. Require a tailored answer? Inform us of your data flow requirements, and we will provide you with APIs specifically designed to meet your business objectives.</p>
                                </div>
                            </div>
                        </section>
                        <section id="brand-integration" className="feature-section-1234">
                            <div className="feature-item-1234">
                                <div className="feature-text-1234">
                                    <h2>Brand Domain Integration</h2>
                                    <p>Incorporating your brand name into SMS links adds an additional level of authenticity to your SMS communications. Authenticated links provided straight to customers increase brand awareness and credibility.</p>
                                </div>
                                <img src={assets.f7sm6} alt="Brand Domain Integration" />
                            </div>
                        </section>
                        <section id="operator-connectivity" className="feature-section-1234">
                            <div className="feature-item-1234">
                                <img src={assets.f7sm7} alt="Operator Connectivity" />
                                <div className="feature-text-1234">
                                    <h2>Operator Connectivity</h2>
                                    <p>Use the ICS SMS Gateway to connect to any of the main operator networks, such as Videocon, TATA, BSNL, Airtel. Get your SMS sent without a hitch by selecting your chosen network path.</p>
                                </div>
                            </div>
                        </section>
                        <section id="mtsl" className="feature-section-1234">
                            <div className="feature-item-1234">
                                <div className="feature-text-1234">
                                    <h2>Multiple Trackable Short Links</h2>
                                    <p>Get more people to click on your links by including many in one message. With trackable short links, we monitor the functioning of several links within a single message. ICS will help you in analyzing click rates and engagement. We optimize everything for the most effective SMS marketing.</p>
                                </div>
                                <img src={assets.f7sm8} alt="Multiple Trackable Short Links" />
                            </div>
                        </section>
                        <section id="tps" className="feature-section-1234">
                            <div className="feature-item-1234">
                                <img src={assets.f7sm9} alt="High Throughput (TPS)" />
                                <div className="feature-text-1234">
                                    <h2>High Throughput (TPS)</h2>
                                    <p>With ICS, you can easily manage high-volume campaigns since it can achieve up to 20K TPS for SMS channels. Count on us for secure and quick message delivery, whether it's for a holiday campaign or a massive launch.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="SMSgateway-platform-header">
                    <h2 style={{ paddingTop: '3rem' }}>Why Opt For ICS SMS Gateway</h2>
                    <p>Experience seamless conversations on the world's leading chat platforms and discover the benefits of deep tech integration. Our WABA and RCS Chatbots empower real-time customer engagement and provide enhanced customer insights.</p>
                </div>
                <div className="feature9-wrap-container">
                    <div className="feature9-cards-container" ref={sectionref11}>
                        <div className="feature9-cards-column">
                            {features9.map((features9, index) => (
                                <div className="feature9-card" key={index}>
                                    <img src={features9.icon} alt={features9.title} className='feature9-icon' />
                                    <div className="feature9-card-content">
                                        <h3>{features9.title}</h3>
                                        <p>{features9.description}</p>

                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="image-column-SMS">
                            <img src={assets.SMSgatewaylogo2}
                                alt="SMSgatewaylogo2"
                                className={`image-slide-up ${imageInView11 ? 'visible' : ''}`}
                            />
                        </div>
                    </div>
                </div>
                <div className="header-content">
                    <button className='head-section-b3'>Our Integration</button>
                    <h2>Connecting Seamlessly with Leading Platforms</h2>
                    <p>We are proud to integrate our WhatsApp Business API with top-tier platforms, ensuring seamless <br /> communication and enhanced functionality for your business:</p>
                </div>
                <div className="scroll-container">
                    <button className="scroll-btn left" onClick={scrollLeft}>
                        &#8249;
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
                        &#8250;
                    </button>
                </div>
                <div className="header-content-2">
                    <p style={{ fontSize: '14px', color: '#777', paddingBottom: '2rem', lineHeight: '24px' }}>By partnering with these leading companies, our API provides a versatile and powerful tool to help you streamline operations, automate processes, and <br />enhance customer engagement across various platforms.</p>
                </div>
                <div className="wrap-SMS-content-block">
                    <div className="SMS-content-block" ref={sectionref12}>
                        <div className="SMS-content-block-col-1">
                            <img
                                src={assets.SMSgatewaylogo3}
                                alt=""
                                className={`image-slide-up ${imageInView12 ? 'visible' : ''}`}
                            />
                        </div>
                        <div className="SMS-content-block-col-2">
                            <h3>Developer-Centric Messaging APIs</h3>
                            <p>Our platform offers carrier-grade capabilities such as delivery receipts and error codes, enhancing deliverability, minimizing costs, and enabling the creation of superior products.</p>
                        </div>
                    </div>
                </div>
                <div className="wrap-SMS-content-block">
                    <div className="SMS-content-block-2" ref={sectionref13}>
                        <div className="SMS-content-block2-col-1">
                            <h3>Efficient and Expandable <br /> One-Time Password System</h3>
                            <p>With support for multiple communication channels such as SMS, email, and voice, our system provides flexibility and reliability in delivering OTPs to users.</p>
                        </div>
                        <div className="SMS-content-block2-col-2">
                            <img src={assets.SMSgatewaylogo4}
                                alt=""
                                className={`image-slide-up ${imageInView13 ? 'visible' : ''}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SMSgateway
