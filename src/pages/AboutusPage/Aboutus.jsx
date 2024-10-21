import React, { useEffect, useRef } from 'react'
import './Aboutus.css'
import { assets } from '../../assets/assets'
const Aboutus = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
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
        },
        {
            pic: assets.image6
        },
        {
            pic: assets.image7
        },
        {
            pic: assets.image8
        },
        {
            pic: assets.image9
        },
        {
            pic: assets.image10
        },
        {
            pic: assets.image11
        },
        {
            pic: assets.image12
        },
        {
            pic: assets.image13
        },
        {
            pic: assets.image14
        },
        {
            pic: assets.image15
        },

    ]
    const cardWidth = 300;
    const cardGap = 25;
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
    const logos = {
        partnerlogos: [
            assets.partner1logo,
            assets.partner2logo,
            assets.partner3logo,
            assets.partner4logo,
            assets.partner5logo,
            assets.partner6logo,
            assets.partner7logo,
            assets.partner8logo
        ]
    };
    const Awards = {
        Awardsimage: [
            assets.Awardics1,
            assets.Award2,
        ]
    }
    const timelineData = [
        { year: '2012', description: 'ICS Mobile Pvt Ltd was established by two individuals.' },
        { year: '2014', description: 'ICS Mobile Pvt Ltd expanded from two founders to a larger team of 20.' },
        { year: '2017', description: 'ICS Mobile Pvt Ltd continued its growth, accommodating a team of 60 employees.' },
        { year: '2021-2022', description: 'New services were launched, including WhatsApp and RCS.' },
        { year: '2023', description: 'ICS Mobile Pvt Ltd was honored with awards for Top Influential Business Leadership and Emerging CPaaS and Messaging Platform.' },
        { year: '2023', description: 'ICS Mobile Pvt Ltd expanded its presence in Delhi.' }
    ];
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
                <div className="hero-section-8-1">
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
                <h2 style={{ paddingTop: '2rem' }}>The ICS Mobile Team</h2>
                <p>Meet the enthusiastic and hardworking staff at ICS, where we push ourselves ahead daily through teamwork and innovative thinking.</p>
            </div>
            <div className="scroll-container-2">
                <button className="scroll-btn left" onClick={scrollLeft}>
                    <span style={{ position: 'relative', top: '-1px' }}>&#8249;</span>
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
                    <span style={{ position: 'relative', left: '1px' }}>&#8250;</span>
                </button>
            </div>
            <div style={{ backgroundColor: '#FFFAFA' }} className='header-content'>
                <h2 style={{ marginBottom: '0' }}>Enabling organizations to interact in a secure, efficient, and immediate manner</h2>
            </div>
            <div className="aboutus-wrap-content">
                <div className="hero-section-8-2">
                    <div className="content-aboutus">
                        <p style={{ fontSize: '24px', paddingBottom: '10px', fontWeight: '500' }}>Who Are We</p>
                        <p className='chatbot-text'>ICS is a renowned CPaaS communication partner for businesses. ICS provides seamless integration, A2P SMS Gateways, WhatsApp messaging, RCS, Voice and email solutions, Customer Engagement & Games, user-focused Chatbots, and more. For optimum results, ICS has been speeding up customer experience through the most engaging communication channels with its target audience, believing that communication is the language of leadership. Thanks to our many years of expertise in this field, we are one of India's most renowned firms specializing in improving client experiences through interactive communication channels.</p>
                        <p style={{ paddingBottom: '2rem' }}>The mission of ICS Mobile, an ISO-certified business, is to provide safe and fast messaging services. Covering 70% of the retail market and supporting 350+ esteemed brands, we offer full-scale operational assistance and oversee communication channels for a diverse range of products.</p>
                    </div>
                    <div className="abtus-image-1">
                        <div className="hero-product-image">
                            <img  src={assets.f7wf1} alt="chatRobot" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-content-at">
                <p style={{ paddingTop: '2rem', fontSize: '26px', fontWeight: '700' , color:'#000247'}}>Life at ICS Mobile</p>
                <p style={{ padding: '2rem 0' }}>Here at ICS Mobile, our mission goes beyond just helping businesses. We're committed to enhancing the potential of our most valuable resource: our employees. Team members are encouraged to develop their skills in decision-making, problem-solving, idealizing, and achieving goals. Working together, thinking beyond the box, and treating each other with dignity and respect is what makes ICS more than simply an organization - it's a family. </p>
            </div>
            <div className="scroll-container-3">
                <button className="scroll-btn left" onClick={scrollLeftPictures}>
                    <span style={{ position: 'relative', top: '-1px' }}>&#8249;</span>
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
                    <span style={{ position: 'relative', left: '1px' }}>&#8250;</span>
                </button>
            </div>
            <div className="header-content-2">
                <p style={{ fontSize: '14px', color: '#777', lineHeight: '24px', paddingBottom: '3rem' }}>Come be a part of ICS's inclusive and diverse workplace, where everyone has a chance to thrive. Join us today to learn more about the opportunities we have available!</p>
            </div>
            <div className="header-content">
                <h2>Our Journey</h2>
            </div>
            <div className="our-journey">
                <div className="timeline-container">
                    <div className="timeline">
                        {timelineData.map((item, index) => (
                            <div key={index} className="timeline-item">
                                <div className={`timeline-content ${index % 2 === 0 ? 'top' : 'bottom'}`}>
                                    <div className="timeline-year">{item.year}</div>
                                    <div className="timeline-description">{item.description}</div>
                                    <div className={`vertical-line ${index % 2 === 0 ? 'down' : 'up'}`}></div>
                                </div>
                                <div className="timeline-node-1">
                                    <div className="timeline-node-2"></div>
                                </div>
                            </div>
                        ))}
                        <div className="timeline-line"></div>
                    </div>
                </div>
            </div>

            <div className="header-content">
                <h2 style={{ marginTop: '3rem' }}>Reowned Brand Trust us</h2>
                <p>Fueling countless campaigns, delighting thousands of customers.</p>
            </div>
            <div className="logos-container">
                {logos.partnerlogos.map((logo, index) => (
                    <img key={index} src={logo} alt={`partnerlogos logo ${index + 1}`} className="logo-image" />
                ))}
            </div>
            <div className="header-content-aw">
                <h2>Awards</h2>
                <p>We’re honored to be recognized for our commitment to excellence. These awards reflect our dedication to innovation, quality, and outstanding service.</p>
            </div>
            <div className="awards-container-2">
                {Awards.Awardsimage.map((logo, index) => (
                    <img key={index} src={logo} alt={`Awards logo ${index + 1}`} className="logo-image-2" />
                ))}
            </div>
        </div>
    )
}

export default Aboutus

