import React from 'react'
import './SMSgateway.css'
import { assets } from '../../assets/assets'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
const SMSgateway = () => {
    const features8 = [
        {
            icon: assets.smoothIcon,
            title: 'DLT Support',
            description: 'Use ICS to traverse the complicated terrain of DLT com...',
            link: '#'
        },
        {
            icon: assets.MessageIcon,
            title: 'Unicode Messages',
            description: 'We ensure clarity and authenticity with Unicode and r...',
            link: '#'
        },
        {
            icon: assets.turnaroundTimeIcon,
            title: 'Swift Turnaround Time (TAT)',
            description: 'Get the fastest turnaround times in the business for managed ca...',
            link: '#'
        },
        {
            icon: assets.smartroutingIcon,
            title: 'Smart Routing',
            description: 'Our clever routing method will keep you ahead of any outage...',
            link: '#'
        },
        {
            icon: assets.customizedAPIsIcon,
            title: 'Customized APIs',
            description: 'Take advantage of our extensive library of APIs to integrate effort...',
            link: '#'
        },
        {
            icon: assets.branddomainIcon,
            title: 'Brand Domain Integration',
            description: 'Incorporating your brand name into SMS links adds an additiona...',
            link: '#'
        },
        {
            icon: assets.operatorconnectivityIcon,
            title: 'Operator Connectivity',
            description: 'Use the ICS SMS Gateway to connect to any of the main oper...',
            link: '#'
        },
        {
            icon: assets.MTSlIcon,
            title: 'Multiple Trackable Short Links',
            description: 'Get more people to click on your links by including many in one...',
            link: '#'
        },
        {
            icon: assets.TPsIcon,
            title: 'High Throughput (TPS)',
            description: 'With ICS, you can easily manage high-volume campaigns since it...',
            link: '#'
        },
    ]
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
    const { ref: sectionref14, inView: imageInView14 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })
    return (
        <div>
            <div className="SMSgateway-wrap-content" ref={sectionref10}>
                <div className="hero-section-5">
                    <div className="content-SMSgateway">
                        <p style={{color:'#b30000'}}>SMS Gateway</p>
                        <h1>Quick A2P SMS <br /> Solutions for Modern <br /> Communication</h1>
                        <p className="SMSgateway-text">Use ICS SMS Gateway to take your communications strategy to the next level. We are your source for dependable, effective, tailored SMS communication solutions.</p>
                        <div className="buttons">
                            {/* <a href="contact-us" className="contact-us">Contact us</a> */}
                            <Link to="/contact-us" className='contact-us'>Contact us</Link>
                        </div>
                    </div>
                    <div className="SMSrobot">
                        <img src={assets.SMSgatewaylogo}
                            alt="SMSlogo1"
                            className={`image-slide-up ${imageInView10 ? 'visible' : ''}`}
                        />
                    </div>
                </div>
            </div>
            <div className="SMSgateway-platform-section">
                <div className="SMSgateway-platform-header">
                    <h2>Why Opt For ICS SMS Gateway</h2>
                    <p>Experience seamless conversations on the world's leading chat platforms and discover the benefits of deep tech integration. <br /> Our WABA and RCS Chatbots empower real-time customer engagement and provide enhanced customer insights.</p>
                </div>
                <div className="feature8-wrap-container">
                    <div className="feature8-cards-container">
                        {features8.map((features8, index) => (
                            <div className="feature8-card" key={index}>
                                <img src={features8.icon} alt={features8.title} className="feature8-icon" />
                                <div className="feature8-card-content">
                                    <h3>{features8.title}</h3>
                                    <p>{features8.description}</p>
                                    <a href={features8.link} className="read-more">Read More &gt;</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="SMSgateway-platform-header">
                    <h2>Why Opt For ICS SMS Gateway</h2>
                    <p>Experience seamless conversations on the world's leading chat platforms and discover the benefits of deep tech integration. <br /> Our WABA and RCS Chatbots empower real-time customer engagement and provide enhanced customer insights.</p>
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
                                        <a href={features9.link} className='read-more-2'>{features9.linkText} &gt;</a>
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
                <div className="wrap-SMS-content-block">
                    <div className="SMS-content-block" ref={sectionref12}>
                        <div className="SMS-content-block-col-1">
                            <img
                                style={{ width: '470px', border: '2px solid #004498', borderRadius: '10px' }}
                                src={assets.SMSgatewaylogo3}
                                alt=""
                                className={`image-slide-up ${imageInView12 ? 'visible' : ''}`}
                            />
                        </div>
                        <div className="SMS-content-block-col-2">
                            <h3>Developer-Centric <br /> Messaging APIs</h3>
                            <p>Our platform offers carrier-grade capabilities such as delivery <br /> receipts and error codes, enhancing deliverability, minimizing <br /> costs, and enabling the creation of superior products.</p>
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
                <div className="wrap-SMS-content-block">
                    <div className="SMS-content-block-3" ref={sectionref14}>
                        <div className="SMS-content-block3-col-1">
                            <img src={assets.SMSgatewaylogo5}
                                alt=""
                                className={`image-slide-up ${imageInView14 ? 'visible' : ''}`}
                            />
                        </div>
                        <div className="SMS-content-block3-col-2">
                            <h3>Seamless Integrations: Enhance Your Workflow</h3>
                            <p>Our advanced API effortlessly integrates with top-tier helpdesk,<br /> e-commerce, CRM, and marketing platforms, offering seamless integration without the coding hassle.</p>
                            <a href="" className='explore-more-integration'>Explore more integration</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SMSgateway
