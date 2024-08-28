import React from 'react'
import './Whatsapp.css'
import { assets } from '../../assets/assets'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
const Whatsapp = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const features5 = [
        {
            icon: assets.globalaudienceIcon,
            title: 'Connect with a Global Audience',
            description: 'Get your word out to thousands of people at once. Embrace limitless reach and bid farewell to limitations.',
            link: '_',
            linkText: 'Learn More'
        },
        {
            icon: assets.smoothIcon,
            title: 'Automate Sales and Support',
            description: 'Put intelligent chatbots to work for your company. Reduce manual steps in the sales process and offer round-the-clock assistance.',
            link: '#',
            linkText: 'Learn More'
        },
    ]
    const features6 = [
        {
            icon: assets.whatsAppIcon,
            title: 'Connect Multiple Human Agents',
            description: 'Get your word out to thousands of people at once. Embrace limitless reach and bid farewell to limitations.',
            link: '_',
            linkText: 'Learn More'
        },
        {
            icon: assets.bluetickIcon,
            title: 'Green Tick',
            description: "Gain trust by earning WhatsApp's coveted green tick. Promote the fact that your audience is interacting with a legitimate company.",
            link: '#',
            linkText: 'Learn More'
        },
    ]
    const features7 = [
        {
            icon: assets.LocationIcon,
            title: 'Location Share',
            description: 'Effortlessly direct your consumers by giving the locations of the ne...',
            link: '#'
        },
        {
            icon: assets.notificationIcon,
            title: 'Notifications',
            description: 'Ensure that various audiences can comprehend and respond t...',
            link: '#'
        },
        {
            icon: assets.smoothIcon,
            title: 'Helpdesk Integration',
            description: 'Our adaptive natural language algorithms provide an unrivaled...',
            link: '#'
        },
        {
            icon: assets.MessageIcon,
            title: 'Live Chat',
            description: 'Our technology allows seamless handovers to human customer s...',
            link: '#'
        },
        {
            icon: assets.ecommerceIcon,
            title: 'E-commerce Integration',
            description: 'Communicate in multiple languages and provide accomm...',
            link: '#'
        },
        {
            icon: assets.loyaltyprogramIcon,
            title: 'Loyalty Programs',
            description: 'Communicate in multiple languages and provide accomm...',
            link: '#'
        },
        {
            icon: assets.faqautomationIcon,
            title: 'FAQ Automation',
            description: 'Our technology allows seamless handovers to human customer s...',
            link: '#'
        },
        {
            icon: assets.feedbacksolIcon,
            title: 'Feedback Collection',
            description: 'Communicate in multiple languages and provide accomm...',
            link: '#'
        },
        {
            icon: assets.botflowIcon,
            title: 'BOT Flow',
            description: 'Communicate in multiple languages and provide accomm...',
            link: '#'
        },
        {
            icon: assets.newsletterIcon,
            title: 'Newsletters',
            description: 'Our technology allows seamless handovers to human customer s...',
            link: '#'
        },
        {
            icon: assets.deliverymanageIcon,
            title: 'Delivery Management',
            description: 'Communicate in multiple languages and provide accomm...',
            link: '#'
        },
        {
            icon: assets.socialmediaIcon,
            title: 'Social Media Integration',
            description: 'Communicate in multiple languages and provide accomm...',
            link: '#'
        },
        {
            icon: assets.whatsapptemplateIcon,
            title: 'Whatsapp Template Message',
            description: 'Communicate in multiple languages and provide accomm...',
            link: '#'
        }
    ]
    const { ref: sectionref4, inView: imageInView4 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })
    const { ref: sectionref5, inView: imageInView5 } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })
    const { ref: sectionref6, inView: imageInView6 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })
    const { ref: sectionref7, inView: imageInView7 } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })
    return (
        <div>
            <div className="whatsappAPI-wrap-content">
                <div className="hero-section-4">
                    <div className="content-whatsappAPI">
                        <p style={{color:'#b30000'}}>Whatsapp Business API</p>
                        <h1>Amplify Customer <br />Bonds With <br />Whatsapp</h1>
                        <p className="whatsappAPI-text">ICS's WhatsApp Business API solution to build stronger <br /> relationships with your audience, streamline your operations, and boost your brand's visibility. </p>
                        <div className="buttons">
                            {/* <a href="contact-us" className="contact-us">Contact us</a> */}
                            <Link to="/contact-us" className='contact-us'>Contact us</Link>
                        </div>
                    </div>
                    <div className="whatsapprobot">
                        <div className="hero-product-image">
                            <img src={assets.whatsappAPILogo} alt="chatRobot" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="whatsapp-platform-section" ref={sectionref4}>
                <div className="whatsapp-platform-header">
                    <h2>Why WhatsApp Business API?</h2>
                    <p>The API, introduced by Facebook in 2018, completely changes how companies engage with WhatsApp users. It offers a seamless platform <br /> for communication and engagement. With it, businesses can:</p>
                </div>
                <div className="feature5-wrap-container">
                    <div className="feature5-cards-container">
                        <div className="feature5-cards-column">
                            {features5.map((features5, index) => (
                                <div className="feature5-card" key={index}>
                                    <img src={features5.icon} alt={features5.title} className='feature5-icon' />
                                    <div className="feature5-card-content">
                                        <h3>{features5.title}</h3>
                                        <p>{features5.description}</p>
                                        <a href={features5.link} className='read-more-2'>{features5.linkText} &gt;</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="image-column-wp">
                            <img src={assets.whatsappPlatfroml2}
                                alt="whatsappAPIlogo2"
                                className={`image-slide-up ${imageInView4 ? 'visible' : ''}`}
                            />
                        </div>
                    </div>
                </div>
                <div className="feature5-wrap-container">
                    <div className="feature5-cards-container" ref={sectionref5}>
                        <div className="image-column-wp">
                            <img src={assets.whatsappPlatfroml3}
                                alt="whatsappAPIlogo2"
                                className={`image-slide-up ${imageInView5 ? 'visible' : ''}`}
                            />
                        </div>
                        <div className="feature5-cards-column">
                            {features6.map((features6, index) => (
                                <div className="feature5-card" key={index}>
                                    <img src={features6.icon} alt={features6.title} className='feature5-icon' />
                                    <div className="feature5-card-content">
                                        <h3>{features6.title}</h3>
                                        <p>{features6.description}</p>
                                        <a href={features6.link} className='read-more-2'>{features6.linkText} &gt;</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="whatsapp-platform-header">
                    <h2>Unparalleled Features Tailored For Success</h2>
                    <p>Discover carefully developed features that will improve your company's success on WhatsApp. Discover the unique ways each element <br /> has been designed to boost your achievements.</p>
                </div>
                <div className="feature7-wrap-container">
                    <div className="feature7-cards-container">
                        {features7.map((features7, index) => (
                            <div className="feature7-card" key={index}>
                                <img src={features7.icon} alt={features7.title} className="feature7-icon" />
                                <div className="feature7-card-content">
                                    <h3>{features7.title}</h3>
                                    <p>{features7.description}</p>
                                    <a href={features7.link} className="read-more">Read More &gt;</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="whatsapp-platform-header">
                    <h2>Pioneering Tomorrow's Communication: The ICS Way</h2>
                    <p>Enter the cutting-edge world of A2P communication with ICS, where simplicity meets innovation. Using cutting-edge technology, ICS <br /> transforms how companies communicate with their clients on WhatsApp. </p>
                </div>
                <div className="unique-wrap-feature" ref={sectionref6}>
                    <section className="unique-feature-section">
                        <div className="unique-feature-content">
                            <ul className="unique-feature-list">
                                <li>
                                    <img src={assets.chatIcon2} alt="Feature Icon" />
                                    <p>Streamline consumer guiding by utilizing location sharing to streamline routing.</p>
                                </li>
                                <li>
                                    <img src={assets.chatIcon3} alt="Feature Icon" />
                                    <p>Encourage comprehension with announcements in 14 Indian languages to ensure effective communication.</p>
                                </li>
                                <li>
                                    <img src={assets.chatIcon2} alt="Feature Icon" />
                                    <p>Smoothly switch between automated and live service.</p>
                                </li>
                                <li>
                                    <img src={assets.chatIcon3} alt="Feature Icon" />
                                    <p>Simplify your buying with safe payment methods and e-commerce integration.</p>
                                </li>
                                <li>
                                    <img src={assets.chatIcon2} alt="Feature Icon" />
                                    <p>Create programmes that captivate participants to foster enduring relationships.</p>
                                </li>
                                <li>
                                    <img src={assets.chatIcon3} alt="Feature Icon" />
                                    <p>Automate your FAQ to solve queries quickly and effectively.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="unique-feature-image">
                            <img src={assets.whatsappPlatforml4}
                                alt="Robot and Phone"
                                className={`image-slide-up ${imageInView6 ? 'visible' : ''}`}
                            />
                        </div>
                    </section>
                </div>
                <div className="unique-wrap-feature">
                    <section className="unique-feature-section" ref={sectionref7}>
                        <div className="unique-feature-image">
                            <img src={assets.whatsappPlatforml5} 
                            alt="Robot and Phone"
                            className={`image-slide-up ${imageInView7 ? 'visible' : ''}`}
                            />
                        </div>
                        <div className="unique-feature-content">
                            <ul className="unique-feature-list">
                                <li>
                                    <img src={assets.chatIcon2} alt="Feature Icon" />
                                    <p>Gather comments to get insights for ongoing development.</p>
                                </li>
                                <li>
                                    <img src={assets.chatIcon3} alt="Feature Icon" />
                                    <p>Send out newsletters frequently to keep people informed about business updates.</p>
                                </li>
                                <li>
                                    <img src={assets.chatIcon2} alt="Feature Icon" />
                                    <p>Guarantee on-time delivery by using direct WhatsApp notifications.</p>
                                </li>
                                <li>
                                    <img src={assets.chatIcon3} alt="Feature Icon" />
                                    <p>Increase reach and improve communication by integrating social media.</p>
                                </li>
                                <li>
                                    <img src={assets.chatIcon2} alt="Feature Icon" />
                                    <p>Improve communication with flexible WhatsApp Template Messages.</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Whatsapp
