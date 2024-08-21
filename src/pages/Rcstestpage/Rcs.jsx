import React, { useEffect } from 'react'
import './Rcs.css'
import { assets } from '../../assets/assets';
const Rcs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const features11 = [
        {
            icon: assets.globalaudienceIcon,
            title: 'RCS Carousels',
            description: 'RCS Carousels transform how the material is shared by providing a visually attractive platform to display rich media.',
            link: '_',
            linkText: 'Learn More'
        },
        {
            icon: assets.contactuschaticon2,
            title: 'RCS Suggested Actions',
            description: 'With RCS Suggested Actions, you can finally end all that laborious typing. Users can easily react to messages, finish purchases, and engage with your company using these clickable buttons.',
            link: '_',
            linkText: 'Learn More'
        }
    ]
    const features12 = [
        {
            icon: assets.whatsAppIcon,
            title: 'RCS Smart Replies',
            description: 'With RCS Smart Replies, you can make discussions more efficient. The discussion is guided, and users save time with these context-aware suggestions that give pre-populated replies based on the message content.',
            link: '_',
            linkText: 'Learn More'
        },
        {
            icon: assets.bluetickIcon,
            title: 'RCS High-Resolution Images and Videos',
            description: 'Gain trust by earning WhatsApp coveted green tick. Promote the fact that your audience is interacting with a legitimate company.',
            link: '_',
            linkText: 'Learn More'
        }
    ]
    const features13 = [
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
        }
    ]
    return (
        <div>
            <div className="rcs-wrap-content">
                <div className="hero-section-7">
                    <div className="content-RCS">
                        <p style={{ color: '#b30000' }}>Rich Communication Service</p>
                        <h1>Promote Your <br />Business With RCS Messaging</h1>
                        <p style={{ paddingBottom: '2rem' }}>The goal of our team at ICS is to revolutionize human communication. Rich Communication Services (RCS) is a prime example of that level of commitment.</p>
                        <div className="buttons">
                            <a href="contact-us" className="contact-us">Contact us</a>
                        </div>
                    </div>
                    <div className="rcsdetail-image">
                        <div className="hero-product-image">
                            <img src={assets.Rcsmainlogo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="rcs-platform-section">
                <div className="rcs-platform-header">
                    <h2>Empowering Conversations With Advanced Features</h2>
                    <p>A communication revolution has occurred with the advent of Rich Communication Services (RCS), which is more than simply <br /> another messaging platform. Here at ICS, we are thrilled to show you the limitless potential of RCS.</p>
                </div>
                <div className="feature11-wrap-container">
                    <div className="feature11-cards-container">
                        <div className="feature11-cards-column">
                            {features11.map((features11, index) => (
                                <div className="feature11-card" key={index}>
                                    <img src={features11.icon} alt={features11.title} className='feature11-icon' />
                                    <div className="feature11-card-content">
                                        <h3>{features11.title}</h3>
                                        <p>{features11.description}</p>
                                        <a href={features11.link} className='read-more-2'>{features11.linkText} &gt;</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="image-column-rcs">
                            <img src={assets.whatsappPlatfroml2}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="feature11-wrap-container">
                    <div className="feature11-cards-container">
                        <div className="image-column-rcs">
                            <img src={assets.whatsappPlatfroml3}
                                alt="whatsappAPIlogo2"

                            />
                        </div>
                        <div className="feature11-cards-column">
                            {features12.map((features12, index) => (
                                <div className="feature11-card" key={index}>
                                    <img src={features12.icon} alt={features12.title} className='feature11-icon' />
                                    <div className="feature11-card-content">
                                        <h3>{features12.title}</h3>
                                        <p>{features12.description}</p>
                                        <a href={features12.link} className='read-more-2'>{features12.linkText} &gt;</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="rcs-platform-header">
                    <h2>Unparalleled Features Tailored For Success</h2>
                    <p>Discover carefully developed features that will improve your company's success on WhatsApp. Discover the unique ways each element <br /> has been designed to boost your achievements.</p>
                </div>
                <div className="feature13-wrap-container">
                    <div className="feature13-cards-container">
                        {features13.map((features13, index) => (
                            <div className="feature13-card" key={index}>
                                <img src={features13.icon} alt={features13.title} className="feature13-icon" />
                                <div className="feature13-card-content">
                                    <h3>{features13.title}</h3>
                                    <p>{features13.description}</p>
                                    <a href={features13.link} className="read-more">Read More &gt;</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="rcs-platform-header">
                    <h2>The ICS Advantage: Leading The Way In Innovation</h2>
                    <p>If you go with ICS, you're getting a business partner who will go above and beyond to provide you with state-of-the-art <br />solutions. With our RCS services, you can:</p>
                </div>
                <div className="rcs-unique-feature-wrap">
                    <section className='rcs-feature-section'>
                        <div className="rcs-feature-content">
                            <ul className="rcs-feature-list">
                                <li>
                                    <img src={assets.chatIcon2} alt="" />
                                    <p>Elevate engagement with visually stunning RCS Carousels.</p>
                                </li>
                                <li>
                                    <img src={assets.chatIcon3} alt="" />
                                    <p>Simplify interactions with clickable RCS Suggested Actions.</p>
                                </li>
                                <li>
                                    <img src={assets.chatIcon2} alt="" />
                                    <p>Streamline conversations with context-aware RCS Smart Replies.</p>
                                </li>
                                <li>
                                    <img src={assets.chatIcon3} alt="" />
                                    <p>Showcase crystal-clear media with RCS's high-resolution images and videos.</p>
                                </li>
                                <li>
                                    <img src={assets.chatIcon2} alt="" />
                                    <p>Ensure clarity and accountability with RCS Read Receipts.</p>
                                </li>
                                <li>
                                    <img src={assets.chatIcon3} alt="" />
                                    <p>Enjoy seamless integration of favorite apps for a unified communication experience.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="rcs-feature-image">
                            <img src={assets.whatsappPlatforml4} alt="" />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Rcs;
