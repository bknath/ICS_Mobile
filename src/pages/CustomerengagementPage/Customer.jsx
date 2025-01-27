import React from 'react'
import './Customer.css'
import { assets } from '../../assets/assets'
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const features3 = [
    {
        icon: assets.promotionIcon,
        title: 'Tailored Promotions',
        description: "Personalized promotions are key to capturing your target audience's interest. Our team specializes in creating targeted marketing campaigns that boost engagement and revenue.",
        link: '#'
    },
    {
        icon: assets.gamificationIcon,
        title: 'Gamification',
        description: "Turn customer interactions into a captivating journey with our gamification solutions, offering engaging experiences from reward systems to interactive challenges.",
        link: '#'
    },
    {
        icon: assets.loyaltyIcon,
        title: 'Loyalty Rewards',
        description: 'Our loyalty programs help build lasting customer relationships by offering incentives like exclusive discounts, VIP privileges, and special offers that strengthen brand loyalty.',
        link: '#'
    },
    {
        icon: assets.htmltemplateIcon,
        title: 'Custom HTML Email Templates',
        description: 'Make a lasting impression with custom HTML email templates, optimized for conversion and engagement to stand out in crowded inboxes.',
        link: '#'
    },
    {
        icon: assets.flipbookIcon,
        title: 'Flipbook',
        description: "Engage your audience with interactive flipbooks that bring your content to life, offering immersive digital publications and product catalogs.",
        link: '#'
    },
    {
        icon: assets.surveypagesIcon,
        title: 'Survey Page',
        description: 'Gather valuable insights and feedback with our survey solutions, designed to deliver practical results for customer satisfaction or market research.',
        link: '#'
    }
];
const features4 = [
    {
        icon: assets.globalflexIcon,
        title: 'Global Flexibility',
        description: 'Integration with WhatsApp and Google RCS Messenger enables immediate, reliable support on global platforms.',
        link: '_',
        linkText: 'Learn More'
    },
    {
        icon: assets.variedrewardsIcon,
        title: 'Varied Rewards',
        description: 'Deep tech integration ensures personalized, informed interactions, transforming every chat into an opportunity to impress.',
        link: '#',
        linkText: 'Learn More'
    },
    {
        icon: assets.keyfeaturesIcon,
        title: 'Key Features',
        description: 'Synchronize chats across WhatsApp, Google RCS messenger and CRM systems to ensure consistent customer service.',
        link: '#',
        linkText: 'Learn More'
    },
    {
        icon: assets.engagingIcon,
        title: 'Engaging Interactions',
        description: 'Leverage Chatbots for real-time, interactive and relevant customer engagement.',
        link: '#',
        linkText: 'Learn More'
    },
    {
        icon: assets.brandalignmentIcon,
        title: 'Brand Alignment',
        description: 'Utilize rich data from integrated chats for actionable insights, enhancing customer satisfaction and business growth.',
        link: '#',
        linkText: 'Learn More'
    },
    {
        icon: assets.diverseoptionsIcon,
        title: 'Discover Options',
        description: 'Utilize rich data from integrated chats for actionable insights, enhancing customer satisfaction and business growth.',
        link: '#',
        linkText: 'Learn More'
    }
];
const Customer = () => {

    const { ref: sectionref3, inView: imageInView3 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })
    return (
        <div>
            <Helmet>
                <title>Customer Engagement Platform | Connect with Your Customers</title>
                <meta name='description' content='Improve customer satisfaction and boost sales with our easy-to-use customer engagement tools. Connect with your audience and build stronger relationships.' />
                <meta name='keywords' content='customer engagement platform, client engagement software, Customer Engagement services' />
            </Helmet>
            <div className="wrap-customer-content">
                <div className="hero-section-3">
                    <div className="content-CustomerEngagement">
                        <p style={{ color: '#b30000', fontSize: '16px', fontWeight: '600' }}>Customer Engagement Page</p>
                        <h1>Engage, Thrive, And Win With ICS Engagement!</h1>
                        <p className='CustomerEngagement-text'>At ICS, our main goal is to assist you in developing captivating experiences that connect with your target demographic and provide tangible outcomes.</p>
                        <div className="buttons">
                            <Link to="/contact-us" className='contact-us'>Contact us</Link>
                        </div>
                    </div>
                    <div className="Customerrobot">
                        <div className="hero-product-image">
                            <img src={assets.CEPnewLogo} alt="CustomerRobot" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="customer-platform-section">
                <div className="customer-platform-header">
                    <h2>Engagement Experiences We Provide</h2>
                    <p>Our shared values keep us connected and guide us as one team.</p>
                </div>
                <div className="feature3-wrap-container">
                    <div className="feature3-cards-container">
                        {features3.map((features3, index) => (
                            <div className="feature3-card" key={index}>
                                <img src={features3.icon} alt={features3.title} className="feature3-icon" />
                                <div className="feature3-card-content">
                                    <h3>{features3.title}</h3>
                                    <p>{features3.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="customer-platform-header">
                    <h2>Unlock Your Brand's Potential With ICS Mobile</h2>
                    <p>Engage more people with your brand and capture their attention with ICS. Pick ICS Mobile if you want:</p>
                </div>
                <div className="feature4-wrap-container" ref={sectionref3}>
                    <div className="feature4-cards-container">
                        <div className="feature4-cards-column">
                            {features4.map((features4, index) => (
                                <div className="feature4-card" key={index}>
                                    <img src={features4.icon} alt={features4.title} className="feature4-icon" />
                                    <div className="feature4-card-content">
                                        <h3>{features4.title}</h3>
                                        <p>{features4.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="image-column-ce">
                            <img
                                src={assets.artBrandlogo}
                                alt="Robot"
                                className={`image-slide-up ${imageInView3 ? 'visible' : ''}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customer
