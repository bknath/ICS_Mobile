import React, { useRef } from 'react'
import './Aboutus.css'
import { assets } from '../../assets/assets'
const Aboutus = () => {
    const scrollContainerRef = useRef(null);
    const pictureScrollRef = useRef(null);
    const cards = [
        {
            logo: assets.ceo,
            title: "Abhishek Agarwalla",
            description: "Cheif Executive Officer"
        },
        {
            logo: assets.cto,
            title: "Himansu Doshi",
            description: "Chief Technology Officer"
        },
        {
            logo: assets.sysl,
            title: "Nandhini T",
            description: "Senior System Engineer, Linux"
        },
        {
            logo: assets.smsl,
            title: "Suman K.M",
            description: "SMS Team Manager"
        },
        {
            logo: assets.techl,
            title: "Arun D.M",
            description: "Tech Lead - Web UI/UX"
        },
    ];
    const pictures = [
        {
            pic: assets.image1
        },
        {
            pic: assets.image2
        },
        {
            pic: assets.image3
        },
        {
            pic: assets.image4
        },
        {
            pic: assets.image5
        }
    ]
    const cardWidth = 320; 
    const cardGap = 20; 
    const cardWidth2 = 320; 
    const cardGap2 = 20; 

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
    // Scroll functions for the pictures section
    const scrollLeftPictures = () => {
        if (pictureScrollRef.current) {
            pictureScrollRef.current.scrollBy({
                left: -(cardWidth2 + cardGap2),
                behavior: 'smooth'
            });
        }
    };

    const scrollRightPictures = () => {
        if (pictureScrollRef.current) {
            pictureScrollRef.current.scrollBy({
                left: cardWidth2 + cardGap2,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div>
            <div className="aboutus-wrap-content">
                <div className="hero-section-8">
                    <div className="content-chatbot">
                        <h1>About us</h1>
                        <p className='chatbot-text'>Engage directly with your customers on their preferred messaging app to enhance loyalty and satisfaction.</p>
                    </div>
                    <div className="abtus-image">
                        <div className="hero-product-image">
                            <img src={assets.Aboutuslogo1} alt="chatRobot" />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#fff' }} className="aboutus-wrap-content">
                <div className="hero-section-8">
                    <div className="abtus-image">
                        <div className="hero-product-image">
                            <img src={assets.Aboutuslogo2} alt="chatRobot" />
                        </div>
                    </div>
                    <div className="content-aboutus">
                        <h2>Providing effective means of communication between companies and their consumers.</h2>
                        <p>The ICS Mobile team has been a leading CPaaS communication partner for businesses since 2008. We improve engagement profiles and speed up client encounters as a result of our renowned expertise in Conversational Messaging. To provide our clients with the best possible results, we emphasize interactive channels, as we know that communication is the language of leadership.</p>
                    </div>
                </div>
            </div>
            <div className="header-content">
                <button style={{ backgroundColor: '#F7FBFF' }} className='head-section-b3'>Our Integration</button>
                <h2>Connecting Seamlessly with Leading Platforms</h2>
                <p>We are proud to integrate our WhatsApp Business API with top-tier platforms, ensuring seamless <br /> communication and enhanced functionality for your business:</p>
            </div>
            <div className="scroll-container-2">
                <button className="scroll-btn left" onClick={scrollLeft}>
                    <span style={{position:'relative', top:'-1px'}}>&#8249;</span>
                </button>

                <div className="scroll-boxes2" ref={scrollContainerRef}>
                    {cards.map((card, index) => (
                        <div className="card2" key={index}>
                            <div className="card-content-2">
                                <img style={{ width: '260px' }} src={card.logo} alt={card.title} />
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="scroll-btn right" onClick={scrollRight}>
                   <span style={{position:'relative', left:'1px'}}>&#8250;</span> 
                </button>
            </div>
            <div style={{ backgroundColor: '#FFFAFA' }} className='header-content'>
                <h2 style={{ marginBottom: '0' }}>Enabling organizations to interact in a secure, <br />efficient, and immediate manner</h2>
            </div>
            <div className="aboutus-wrap-content">
                <div className="hero-section-8">
                    <div className="content-aboutus">
                        <p style={{ fontSize: '24px', paddingBottom: '10px', fontWeight: '500' }}>Who Are We</p>
                        <p className='chatbot-text'>ICS is a renowned CPaaS communication partner for businesses. ICS provides seamless integration, A2P SMS Gateways, WhatsApp messaging, RCS, Voice and email solutions, Customer Engagement & Games, user-focused Chatbots, and more. For optimum results, ICS has been speeding up customer experience through the most engaging communication channels with its target audience, believing that communication is the language of leadership. Thanks to our many years of expertise in this field, we are one of India's most renowned firms specializing in improving client experiences through interactive communication channels.</p>
                        <p style={{ paddingBottom: '2rem' }}>The mission of ICS Mobile, an ISO-certified business, is to provide safe and fast messaging services. Covering 70% of the retail market and supporting 350+ esteemed brands, we offer full-scale operational assistance and oversee communication channels for a diverse range of products.</p>
                    </div>
                    <div className="abtus-image">
                        <div className="hero-product-image">
                            <img style={{ paddingLeft: '4rem' }} src={assets.f7wf1} alt="chatRobot" />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{}} className="header-content">
                <p style={{ paddingTop: '2rem', fontSize: '20px', fontWeight: '500' }}>Life at ICS Mobile</p>
                <p style={{ width: '1000px', margin: '0 auto', padding: '2rem 0' }}>Here at ICS Mobile, our mission goes beyond just helping businesses. We're committed to enhancing the potential of our most valuable resource: our employees. Team members are encouraged to develop their skills in decision-making, problem-solving, idealizing, and achieving goals. Working together, thinking beyond the box, and treating each other with dignity and respect is what makes ICS more than simply an organization - it's a family. </p>
            </div>
            <div className="scroll-container-3">
                <button className="scroll-btn left" onClick={scrollLeftPictures}>
                   <span style={{position:'relative', top:'-1px'}}>&#8249;</span> 
                </button>
                <div className="scroll-boxes3" ref={pictureScrollRef}>
                    {pictures.map((pictures, index) => (
                        <div className="card3" key={index}>
                            <div className="card-content-3">
                                <img style={{ width: '360px' }} src={pictures.pic} />
                            </div>
                        </div>
                    ))}
                </div>
                <button className="scroll-btn right" onClick={scrollRightPictures}>
                    <span style={{position:'relative', left:'1px'}}>&#8250;</span> 
                </button>
            </div>
            <div className="header-content-2">
                <p style={{ fontSize: '14px', color: '#777', lineHeight: '24px', paddingBottom: '3rem' }}>Come be a part of ICS's inclusive and diverse workplace, where everyone has a chance to thrive. Join us today to learn more about the opportunities we have available!</p>
            </div>
            <div className='our-journey'>
                <img src={assets.ourJourney} alt="" />
            </div>
        </div>
    )
}

export default Aboutus

