import React, { useState } from 'react'
import './Whatsapp.css'
import '../Home/Product/Product.css'
import plusIcon from '../../assets/plusIcon.svg';
import { assets } from '../../assets/assets'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
const Whatsapp = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [activeIndex2, setActiveIndex2] = useState(0);
    const [activeIndex3, setActiveIndex3] = useState(0);

    const handleClick = (index) => {
        setActiveIndex2(index); // Open the clicked product and close the previously opened one
    };
    const handleClick2 = (index) => {
        setActiveIndex3(index);
    };
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
            name: 'Location Sharing',
            description: 'Effortlessly direct your consumers by giving the locations of the nearest service centre, branch or stores on WhatsApp. Facilitate easier access and utilisation by making it easier to find your physical touch points.',
            image: assets.f7wf1
        },
        {
            name: 'Notification in Local languages',
            description: 'Ensure that various audiences can comprehend and respond to critical notifications by providing them in Indian languages. Promptly notify your consumers of any significant developments or happenings.',
            image: assets.f7wf2
        },
        {
            name: 'Helpdesk Integration',
            description: 'Provide a seamless transition for customers when moving from automated replies to live agent service. Get questions and problems answered quickly to boost satisfaction and loyalty.',
            image: assets.f7wf3
        },
        {
            name: 'E-commerce Integration',
            description: 'Put your product catalog on display and accept payments safely within WhatsApp. Help your consumers have a smooth shopping experience by streamlining the purchase process.',
            image: assets.f7wf4
        },
        {
            name: 'Loyalty Programs',
            description: 'Build long-term connections with dealers, merchants, and consumers to inspire devotion to your brand. Promote consumer happiness in the long run by rewarding loyalty and offering incentives for recurrent purchases.',
            image: assets.f7wf5
        },
        {
            name: 'FAQ Automation',
            description: 'Help your staff and clients save time by providing rapid solutions to frequent concerns with automated responses. Resolve routine queries efficiently to increase customer satisfaction.',
            image: assets.f7wf6
        }
    ];
    const features71 = [
        {
            name: 'Customizable Bot Flows',
            description: 'Effortlessly direct your consumers by giving the locations of the nearest service centre, branch or stores on WhatsApp. Facilitate easier access and utilisation by making it easier to find your physical touch points.',
            image: assets.f7wf7
        },
        {
            name: 'Engaging Newsletter',
            description: 'Ensure that various audiences can comprehend and respond to critical notifications by providing them in Indian languages. Promptly notify your consumers of any significant developments or happenings.',
            image: assets.f7wf8
        },
        {
            name: 'Delivery Management',
            description: 'Provide a seamless transition for customers when moving from automated replies to live agent service. Get questions and problems answered quickly to boost satisfaction and loyalty.',
            image: assets.f7wf9
        },
        {
            name: 'Social Media Integration',
            description: 'Put your product catalog on display and accept payments safely within WhatsApp. Help your consumers have a smooth shopping experience by streamlining the purchase process.',
            image: assets.f7wf10
        },
        {
            name: 'Versatile WhatsApp Template Messages',
            description: 'Build long-term connections with dealers, merchants, and consumers to inspire devotion to your brand. Promote consumer happiness in the long run by rewarding loyalty and offering incentives for recurrent purchases.',
            image: assets.f7wf11
        },
    ];
    const { ref: sectionref4, inView: imageInView4 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
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
                        <p style={{ color: '#b30000' }}>Whatsapp Business API</p>
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
                <div className="whatsapp-info-section">
                    <div className="whatsapp-info-details">
                        <div className="whatsapp-info-item">
                            <div className='whatsapp-info-r1'>
                                <div className="whataspp-info-r1-c1">
                                    <img src={assets.whywhatsappp1} alt="Email Icon" />
                                </div>
                                <div className="whatsapp-info-r1-c2">
                                    <h3>Connect with a Global Audience</h3>
                                    <p>Get your word out to thousands of people at once. Embrace limitless reach and bid farewell to limitations.</p>
                                </div>
                            </div>
                            <div className="whatsapp-info-content">
                                <img src={assets.whywhatsappP1img} alt="" />
                            </div>
                        </div>
                        <div className="whatsapp-info-item">
                            <div className='whatsapp-info-r1'>
                                <div className="whataspp-info-r1-c1">
                                    <img src={assets.whywhatsappp2} alt="Email Icon" />
                                </div>
                                <div className="whatsapp-info-r1-c2">
                                    <h3>Automate Sales and Support</h3>
                                    <p>Put intelligent chatbots to work for your company. Reduce manual steps in the sales process and offer round-the-clock assistance.</p>
                                </div>
                            </div>
                            <div className="whatsapp-info-content">
                                <img src={assets.whywhatsappP2img} alt="" />
                            </div>
                        </div>

                        <div className="whatsapp-info-item">
                            <div className='whatsapp-info-r1'>
                                <div className="whataspp-info-r1-c1">
                                    <img src={assets.whywhatsappp3} alt="Email Icon" />
                                </div>
                                <div className="whatsapp-info-r1-c2">
                                    <h3>Connect Multiple Human Agents</h3>
                                    <p>Effortlessly coordinate chats with several people using a single WhatsApp number. Efficient teamwork simplified.</p>
                                </div>
                            </div>
                            <div className="whatsapp-info-content">
                                <img src={assets.whywhatsappP3img} alt="" />
                            </div>
                        </div>

                        <div className="whatsapp-info-item">
                            <div className='whatsapp-info-r1'>
                                <div className="whataspp-info-r1-c1">
                                    <img src={assets.whywhatsappp4} alt="Email Icon" />
                                </div>
                                <div className="whatsapp-info-r1-c2">
                                    <h3>Green Tick</h3>
                                    <p>Gain trust by earning WhatsApp's coveted green tick. Promote the fact that your audience is interacting with a legitimate company.</p>
                                </div>
                            </div>
                            <div className="whatsapp-info-content">
                                <img style={{ height: '180px' }} src={assets.whywhatsappP4img} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="feature5-wrap-container">
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
                </div> */}
                {/* <div className="feature5-wrap-container">
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
                </div> */}
                <div className="whatsapp-platform-header">
                    <h2>Unparalleled Features Tailored For Success</h2>
                    <p>Discover carefully developed features that will improve your company's success on WhatsApp. Discover the unique ways each element <br /> has been designed to boost your achievements.</p>
                </div>
                {/* taking css from products2 page  */}
                <div className="custom-product-section">
                    <div className="custom-product-content">
                        {/* Left side - Product List */}
                        <div className="custom-product-list">
                            {features7.map((product, index) => (
                                <div
                                    key={index}
                                    className={`custom-product-item ${activeIndex2 === index ? 'active' : ''}`}
                                    onClick={() => handleClick(index)} // Set the clicked product as active
                                >
                                    <div className="custom-product-question">
                                        <span>{product.name}</span>
                                        {activeIndex2 !== index && ( // Only show the plus icon if the product is not active
                                            <img
                                                src={plusIcon}
                                                alt="Expand"
                                                className="custom-product-icon"
                                            />
                                        )}
                                    </div>
                                    {activeIndex2 === index && (
                                        <div className="custom-product-description">
                                            {product.description}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        {/* Right side - Image */}
                        <div className="custom-product-image2">
                            <img
                                src={features7[activeIndex2].image}
                                alt={features7[activeIndex2].name}
                            />
                        </div>
                    </div>
                </div>
                <div className="custom-product-section">
                    <div className="custom-product-content">
                        {/* left side - Image */}
                        <div className="custom-product-image3">
                            <img
                                src={features71[activeIndex3].image}
                                alt={features71[activeIndex3].name}
                            />
                        </div>
                        {/* right side - Product List */}
                        <div className="custom-product-list">
                            {features71.map((product, index) => (
                                <div
                                    key={index}
                                    className={`custom-product-item ${activeIndex3 === index ? 'active' : ''}`}
                                    onClick={() => handleClick2(index)} // Set the clicked product as active
                                >
                                    <div className="custom-product-question">
                                        <span>{product.name}</span>
                                        {activeIndex3 !== index && ( // Only show the plus icon if the product is not active
                                            <img
                                                src={plusIcon}
                                                alt="Expand"
                                                className="custom-product-icon"
                                            />
                                        )}
                                    </div>
                                    {activeIndex3 === index && (
                                        <div className="custom-product-description">
                                            {product.description}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
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
