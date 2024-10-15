import React, { useEffect } from 'react';
import './Chatbot.css';
import { assets } from '../../assets/assets';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
const features = [
    {
        icon: assets.magnetIcon,
        title: 'Real-time Engagement',
        description: 'Ensure fast, insightful responses to customer queries with our ChatBots designed for instant, meaningful interactions.',
        link: '#'
    },
    {
        icon: assets.chipIcon,
        title: 'Seamlessly Integrated Solutions',
        description: 'Connect our ChatBots with popular platforms like WhatsApp and Google RCS messaging effortlessly through our robust APIs. We offer a WABA catalog to enhance your dynamic customer interaction.',
        link: '#'
    },
    {
        icon: assets.understandingIcon,
        title: 'Enhanced Understanding',
        description: 'Our adaptive natural language algorithms provide an unrivaled understanding of customer needs and conversations.',
        link: '#'
    },
    {
        icon: assets.smoothIcon,
        title: 'Smooth Transitions',
        description: 'Our technology allows seamless handovers to human customer service agents when necessary, preserving the conversational context.',
        link: '#'
    },
    {
        icon: assets.globalIcon,
        title: 'Global Reach',
        description: 'Communicate in multiple languages and provide accommodating and personalized global customer interaction.',
        link: '#'
    }
];
const features2 = [
    {
        icon: assets.smoothIcon,
        title: 'Connect Instantly, Anywhere',
        description: 'Integration with WhatsApp and Google RCS Messenger enables immediate, reliable support on global platforms.',
        link: '_',
        linkText: 'Learn More'
    },
    {
        icon: assets.compDisplayIcon,
        title: 'Know Your Customer Better',
        description: 'Deep tech integration ensures personalized, informed interactions, transforming every chat into an opportunity to impress.',
        link: '#',
        linkText: 'Learn More'
    },
    {
        icon: assets.settingIcon,
        title: 'Unified Integrations, Diverse Platforms',
        description: 'Synchronize chats across WhatsApp, Google RCS messenger and CRM systems to ensure consistent customer service.',
        link: '#',
        linkText: 'Learn More'
    },
    {
        icon: assets.robotextIcon,
        title: 'Engage with Precision and Empathy',
        description: 'Leverage Chatbots for real-time, interactive and relevant customer engagement.',
        link: '#',
        linkText: 'Learn More'
    },
    {
        icon: assets.flowchartIcon,
        title: 'Discover, Adapt, and Thrive',
        description: 'Utilize rich data from integrated chats for actionable insights, enhancing customer satisfaction and business growth.',
        link: '#',
        linkText: 'Learn More'
    }
];
const Chatbot = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { ref: sectionref8, inView: imageInView8 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })
    return (
        <div>
            <div className="hero-wraping-content">
                <div className="hero-section-2">
                    <div className="content-chatbot">
                        <p style={{color:'#b30000'}}>Chatbot</p>
                        <h1>Experience Stellar <br />Customer Engagement <br />with ICS Chatbots</h1>
                        <p className='chatbot-text'>Amplify your brand with exceptional customer care and personalized experiences provided by our ICS ChatBots. Leverage technology to deliver efficient and intelligent customer interactions.</p>
                        <div className="buttons">
                            <Link to="/contact-us" className='contact-us'>Contact us</Link>
                        </div>
                    </div>
                    <div className="chatrobot">
                        <div className="hero-product-image">
                            <img src={assets.chatbotImg} alt="chatRobot" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="chatbot-platform-section">
                <div className="chatbot-platform-header">
                    <h2>What ICS Chatbot Offer</h2>
                    <p>Our shared values keep us connected and guide us an one team</p>
                </div>
                <div className="feature-wrap-container">
                    <div className="feature-cards-container">
                        {features.map((feature, index) => (
                            <div className="feature-card" key={index}>
                                <img src={feature.icon} alt={feature.title} className="feature-icon" />
                                <div className="feature-card-content">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="chatbot-platform-header" ref={sectionref8}>
                    <h2>Enhancing Digital Interactions with ICS Chatbots</h2>
                    <p>Experience seamless conversations on the world's leading chat platforms and discover the benefits of deep tech integration. Our WABA and RCS Chatbots empower real-time customer engagement and provide enhanced customer insights.</p>
                </div>
                <div className="feature2-wrap-container">
                    <div className="feature2-cards-container">
                        <div className="feature2-cards-column">
                            {features2.map((features2, index) => (
                                <div className="feature2-card" key={index}>
                                    <img src={features2.icon} alt={features2.title} className="feature2-icon" />
                                    <div className="feature2-card-content">
                                        <h3>{features2.title}</h3>
                                        <p>{features2.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="image-column-cb">
                            <img src={assets.chatbot2Icon} alt="Robot"
                                className={`image-slide-up ${imageInView8 ? 'visible' : ''}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Chatbot
