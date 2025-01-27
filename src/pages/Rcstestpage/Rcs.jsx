import React, { useEffect, useRef, useState } from 'react'
import './Rcs.css'
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const Rcs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [activeTab, setActiveTab] = useState('rcs-carousels');
    const navRef = useRef(null);
    let scrollTimeout = null;

    // Sections array to match navigation with content
    const sections = [
        { id: 'rcs-carousels', name: 'RCS Carousels' },
        { id: 'rcs-suggested', name: 'RCS Suggested Actions' },
        { id: 'rcs-smart', name: 'RCS Smart Replies' },
        { id: 'rcs-high', name: 'RCS High-Resolution Images and Videos' },
        { id: 'rcs-read', name: 'RCS Read Receipts' },
        { id: 'seamless-integration', name: 'Seamless Integrations' }
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
    return (
        <div>
            <Helmet>
                <title>RCS Messaging | Make mobile conversations engaging</title>
                <meta name='description' content='Engage your customers with rich, interactive messages. Our RCS API integration offers advanced features to enhance your mobile marketing strategy' />
                <meta name='keywords' content='Rich Communication Services, rcs api integration, rcs chat services' />
            </Helmet>
            <div className="rcs-wrap-content">
                <div className="hero-section-7">
                    <div className="content-RCS">
                        <p style={{ color: '#b30000' }}>Rich Communication Service</p>
                        <h1>Promote Your <br />Business With RCS Messaging</h1>
                        <p style={{ paddingBottom: '2rem' }}>The goal of our team at ICS is to revolutionize human communication. Rich Communication Services (RCS) is a prime example of that level of commitment.</p>
                        <div className="buttons">
                            <Link to="/contact-us" className='contact-us'>Contact us</Link>
                        </div>
                    </div>
                    <div className="rcsdetail-image">
                        <div className="hero-product-image">
                            <img src={assets.RCSnewmainLogo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="rcs-platform-section">
                <div className="rcs-platform-header">
                    <h2>Empowering Conversations With Advanced Features</h2>
                    <p>A communication revolution has occurred with the advent of Rich Communication Services (RCS), which is more than simply another messaging platform. Here at ICS, we are thrilled to show you the limitless potential of RCS.</p>
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
                    <div className="feature12-cards-container">
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
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="rcs-platform-header">
                    <h2>Unparalleled Features Tailored For Success</h2>
                    <p>Discover carefully developed features that will improve your company's success on WhatsApp. Discover the unique ways each element has been designed to boost your achievements.</p>
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
                                    handleNavClick(section.id);
                                }}
                            >
                                {section.name}
                            </a>
                        ))}
                    </div>
                    <div className="feature-content-container-1234">
                        <section id="rcs-carousels" className="feature-section-1234">
                            <div className="feature-item-1234">
                                <img src={assets.f7rcs1} alt="RCS Carousels" />
                                <div className="feature-text-1234">
                                    <h2>RCS Carousels</h2>
                                    <p>RCS Carousels transform how the material is shared by providing a visually attractive platform to display rich media. With RCS Carousels, you can enhance the immersion and engagement of any interaction, whether you're presenting product photos, promotional offers, or multimedia material.</p>
                                </div>
                            </div>
                        </section>

                        <section id="rcs-suggested" className="feature-section-1234">
                            <div className="feature-item-1234">
                                <div className="feature-text-1234">
                                    <h2>RCS Suggested Actions</h2>
                                    <p>With RCS Suggested Actions, you can finally end all that laborious typing. Users can easily react to messages, finish purchases, and engage with your company using these clickable buttons. Now more than ever before, communication is streamlined, simplified, and straightforward with RCS Suggested Actions.</p>
                                </div>
                                <img src={assets.f7rcs2} alt="RCS Suggested Actions" />
                            </div>
                        </section>
                        <section id="rcs-smart" className="feature-section-1234">
                            <div className="feature-item-1234">
                                <img src={assets.f7rcs3} alt="RCS Smart Replies" />
                                <div className="feature-text-1234">
                                    <h2>RCS Smart Replies</h2>
                                    <p>With RCS Smart Replies, you can make discussions more efficient. The discussion is guided, and users save time with these context-aware suggestions that give pre-populated replies based on the message content. You may expedite the communication process for appointment confirmation, order placement, and question responding by using RCS Smart Replies.</p>
                                </div>
                            </div>
                        </section>
                        <section id="rcs-high" className="feature-section-1234">
                            <div className="feature-item-1234">
                                <div className="feature-text-1234">
                                    <h2 style={{ lineHeight: '30px', paddingBottom: '10px' }}>RCS High-Resolution Images and Videos</h2>
                                    <p>Get a feel for RCS's high-resolution picture and video capabilities. Put an end to grainy movies and distorted photographs with RCS. Your shared media will always seem crystal clear. Whether presenting items to clients or reminiscing with friends, RCS will make your stuff look better.</p>
                                </div>
                                <img src={assets.f7rcs4} alt="RCS High-Resolution Images and Videos" />
                            </div>
                        </section>
                        <section id="rcs-read" className="feature-section-1234">
                            <div className="feature-item-1234">
                                <img src={assets.f7rcs5} alt="RCS Read Receipts" />
                                <div className="feature-text-1234">
                                    <h2>RCS Read Receipts</h2>
                                    <p>Using RCS Read Receipts, you can rest easy. These user-friendly features let users know when their messages have been read and received by the people they meant them to. You may converse with peace of mind when you use RCS Read Receipts. Your communications will be recognized and handled accordingly.</p>
                                </div>
                            </div>
                        </section>
                        <section id="seamless-integration" className="feature-section-1234">
                            <div className="feature-item-1234">
                                <div className="feature-text-1234">
                                    <h2>Seamless Integrations</h2>
                                    <p>RCS provides a unified communication experience by integrating your favorite applications and services. Using RCS, being connected and productive is easier than ever before, whether sharing your location, making payments, or organizing appointments.</p>
                                </div>
                                <img src={assets.f7rcs6} alt="Seamless Integrations" />
                            </div>
                        </section>
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
                                    <img src={assets.chatIcon4} alt="" />
                                    <p>Elevate engagement with visually stunning RCS Carousels.</p>
                                </li>
                                <li>
                                    <img src={assets.chatIcon3} alt="" />
                                    <p>Simplify interactions with clickable RCS Suggested Actions.</p>
                                </li>
                                <li>
                                    <img src={assets.chatIcon4} alt="" />
                                    <p>Streamline conversations with context-aware RCS Smart Replies.</p>
                                </li>
                                <li>
                                    <img src={assets.chatIcon3} alt="" />
                                    <p>Showcase crystal-clear media with RCS's high-resolution images and videos.</p>
                                </li>
                                <li>
                                    <img src={assets.chatIcon4} alt="" />
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
