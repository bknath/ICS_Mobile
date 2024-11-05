import React, { useRef, useState } from 'react'
import './Whatsapp.css'
import '../Home/Product/Product.css'
import { assets } from '../../assets/assets'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Helmet } from "react-helmet"
const Whatsapp = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [activeTab, setActiveTab] = useState('rcs-carousels');
    const navRef = useRef(null);
    let scrollTimeout = null;

    // Sections array to match navigation with content
    const sections = [
        { id: 'location-sharing', name: 'Location Sharing' },
        { id: 'notification-ll', name: 'Notificatation in Local Languages' },
        { id: 'help-integration', name: 'Helpdesk Integration' },
        { id: 'ecomm-integration', name: 'E-commerce Integration' },
        { id: 'loyaty-prog', name: 'Loyalty Programs' },
        { id: 'faq-automation', name: 'FAQ Automation' },
        { id: 'custombot-flows', name: 'Customizable BOT Flows' },
        { id: 'engaging-news', name: 'Engaging Newsletters' },
        { id: 'delivery-management', name: 'Delivery Management' },
        { id: 'social-integration', name: 'Social Media Integration' },
        { id: 'versatile-message', name: 'Versatile WhatsApp Template Messages' }
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
    const cardWidth = 300;
    const cardGap = 25;

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
    const { ref: sectionref15, inView: imageInView15 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <div>
            <Helmet>
                <title>WhatsApp API | Easy Business Messaging</title>
                <meta name='description' content='Simplify your business communication with our user-friendly WhatsApp API platform. Automate messages, send rich media, and increase customer engagement.' />
                <meta name='keywords' content='Whatsapp API, Whatsapp Business API, whatsapp marketing tool, whatsapp automating tool' />
            </Helmet>
            <div className="whatsappAPI-wrap-content">
                <div className="hero-section-4">
                    <div className="content-whatsappAPI">
                        <p style={{ color: '#b30000' }}>Whatsapp Business API</p>
                        <h1>Amplify Customer Bonds With Whatsapp</h1>
                        <p className="whatsappAPI-text">ICS's WhatsApp Business API solution to build stronger relationships with your audience, streamline your operations, and boost your brand's visibility. </p>
                        <div className="buttons">
                            <Link to="/contact-us" className='contact-us'>Contact us</Link>
                        </div>
                    </div>
                    <div className="whatsapprobot" ref={sectionref15}>
                        <img
                            src={assets.whatsappAPILogo}
                            alt="chatRobot"
                            className={`image-slide-up ${imageInView15 ? 'visible' : ''}`}
                        />
                    </div>
                </div>
            </div>
            <div className="whatsapp-platform-section">
                <div className="whatsapp-platform-header">
                    <h2>Why WhatsApp Business API?</h2>
                    <p>The API, introduced by Facebook in 2018, completely changes how companies engage with WhatsApp users. It offers a seamless platform for communication and engagement. With it, businesses can:</p>
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
                <div className="whatsapp-platform-header">
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
                        <section id="location-sharing" className="feature-section-1234">
                            <div className="feature-item-1234">
                                <img src={assets.f7wf1} alt="Location Sharing" />
                                <div className="feature-text-1234">
                                    <h2>Location Sharing</h2>
                                    <p>Seamlessly bridge the gap between your digital presence and physical locations by leveraging WhatsApp's location sharing feature. Effortlessly direct customers to the nearest service centers, branches, or stores with precise location data and detailed directions. This feature significantly reduces the effort customers expend searching for your physical locations, enhancing their overall convenience. By improving accessibility, you not only increase foot traffic to your stores but also boost sales and customer satisfaction through a more connected and accessible service experience.</p>
                                </div>
                            </div>
                        </section>

                        <section id="notification-ll" className="feature-section-1234">
                            <div className="feature-item-1234">
                                <div className="feature-text-1234">
                                    <h2>Notificatation in Local Languages</h2>
                                    <p>Break down language barriers and connect more effectively with a diverse customer base by sending notifications in multiple Indian languages. Customize your messages to resonate with different cultural and linguistic groups, ensuring each customer feels recognized and valued. Localizing your communication enhances engagement, making promotions, updates, and alerts more impactful and inclusive. This approach not only improves customer understanding but also strengthens your brand's reputation for personalized and considerate service.</p>
                                </div>
                                <img src={assets.f7wf2} alt="Notificatation in Local Languages" />
                            </div>
                        </section>
                        <section id="help-integration" className="feature-section-1234">
                            <div className="feature-item-1234">
                                <img src={assets.f7wf3} alt="Helpdesk Integration" />
                                <div className="feature-text-1234">
                                    <h2>Helpdesk Integration</h2>
                                    <p>Revolutionize your customer support with a fully integrated helpdesk system within WhatsApp. Start with automated responses for common inquiries and effortlessly escalate to live agent support for complex issues. This seamless transition from automated to human assistance ensures that customers receive timely and appropriate support, reducing frustration and wait times. By providing a smooth and responsive support experience, you enhance customer satisfaction and build a loyal customer base.</p>
                                </div>
                            </div>
                        </section>
                        <section id="ecomm-integration" className="feature-section-1234">
                            <div className="feature-item-1234">
                                <div className="feature-text-1234">
                                    <h2>E-commerce Integration</h2>
                                    <p>Transform WhatsApp into a dynamic sales platform with seamless ecommerce integration. Enable customers to browse your product catalog, inquire about items, and complete purchases all within the app. This integration creates a frictionless shopping experience, reducing cart abandonment rates and increasing conversion by simplifying the purchase process. With secure payment options directly on WhatsApp, customers enjoy a convenient, streamlined, and engaging shopping experience.</p>
                                </div>
                                <img src={assets.f7wf4} alt="E-commerce Integration" />
                            </div>
                        </section>
                        <section id="loyaty-prog" className="feature-section-1234">
                            <div className="feature-item-1234">
                                <img src={assets.f7wf5} alt="Loyalty Programs" />
                                <div className="feature-text-1234">
                                    <h2>Loyalty Programs</h2>
                                    <p>Foster long-term customer relationships with tailored loyalty programs on WhatsApp. Reward repeat purchases, referrals, and ongoing engagement with exclusive incentives and rewards. These programs drive repeat business, cultivate a sense of community, and encourage customers to choose your brand over competitors. By creating brand advocates who promote your business, you enhance customer loyalty and boost word-of-mouth marketing.</p>
                                </div>
                            </div>
                        </section>
                        <section id="faq-automation" className="feature-section-1234">
                            <div className="feature-item-1234">
                                <div className="feature-text-1234">
                                    <h2>FAQ Automation</h2>
                                    <p>Drive continuous improvement by gathering valuable customer feedback through WhatsApp surveys and polls. Capture real-time insights into customer satisfaction, preferences, and pain points to inform data-driven decisions. By actively seeking and acting on feedback, you demonstrate a commitment to customer-centricity, enhancing your brand’s reputation for quality and responsiveness. This proactive approach helps you stay ahead of market trends and refine your offerings.</p>
                                </div>
                                <img src={assets.f7wf6} alt="FAQ Automation" />
                            </div>
                        </section>
                        <section id="custombot-flows" className="feature-section-1234">
                            <div className="feature-item-1234">
                                <img src={assets.f7wf5} alt="Customizable BOT Flows" />
                                <div className="feature-text-1234">
                                    <h2>Customizable BOT Flows</h2>
                                    <p>Deliver a personalized customer experience with customizable bot flows on WhatsApp. Design intelligent bots to guide users through tailored interactions, such as booking appointments, processing orders, or answering specific queries. These bots provide personalized support, making customers feel valued while also reducing operational costs and enhancing service efficiency. By tailoring interactions to individual needs, you optimize the customer journey and improve satisfaction.</p>
                                </div>
                            </div>
                        </section>
                        <section id="engaging-news" className="feature-section-1234">
                            <div className="feature-item-1234">
                                <div className="feature-text-1234">
                                    <h2>Engaging Newsletters</h2>
                                    <p>Maintain customer engagement with regular, informative newsletters delivered via WhatsApp. Keep your audience updated on the latest news, product launches, events, and exclusive offers. This direct communication channel ensures high open rates and interaction, keeping your brand at the forefront of customers’ minds. Consistent updates through WhatsApp help sustain interest and encourage repeat visits to your website or store, fostering loyalty and engagement.</p>
                                </div>
                                <img src={assets.f7wf6} alt="Engaging Newsletters" />
                            </div>
                        </section>
                        <section id="delivery-management" className="feature-section-1234">
                            <div className="feature-item-1234">
                                <img src={assets.f7wf5} alt="Delivery Management" />
                                <div className="feature-text-1234">
                                    <h2>Delivery Management</h2>
                                    <p>Deliver a personalized customer experience with customizable bot flows on WhatsApp. Design intelligent bots to guide users through tailored interactions, such as booking appointments, processing orders, or answering specific queries. These bots provide personalized support, making customers feel valued while also reducing operational costs and enhancing service efficiency. By tailoring interactions to individual needs, you optimize the customer journey and improve satisfaction.</p>
                                </div>
                            </div>
                        </section>
                        <section id="social-integration" className="feature-section-1234">
                            <div className="feature-item-1234">
                                <div className="feature-text-1234">
                                    <h2>Social Integration</h2>
                                    <p>Amplify your online presence by integrating WhatsApp with your social media platforms. Utilize features like the "Click to WhatsApp" button on Facebook and other channels to drive traffic directly to WhatsApp. This integration facilitates more personal and direct customer interactions, increasing conversion rates and strengthening relationships. By aligning your social media efforts with WhatsApp, you enhance your marketing strategy and extend your reach to a broader audience.</p>
                                </div>
                                <img src={assets.f7wf6} alt="Social Integration" />
                            </div>
                        </section>
                        <section id="versatile-message" className="feature-section-1234">
                            <div className="feature-item-1234">
                                <img src={assets.f7wf5} alt="Versatile Whatsapp Template Messages" />
                                <div className="feature-text-1234">
                                    <h2>Versatile WhatsApp Template Messages</h2>
                                    <p>Optimize communication efficiency with versatile WhatsApp template messages. Whether sending promotional offers, transactional updates, service notifications, or security alerts, these templates are designed to meet diverse business needs. Use marketing templates to drive sales, utility templates for managing customer accounts, and service templates for timely updates. Strategic use of these templates ensures consistent, professional communication, enhancing user satisfaction and supporting business growth.</p>
                                </div>
                            </div>
                        </section>
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
                    <p style={{ fontSize: '14px', color: '#777', lineHeight: '24px' }}>By partnering with these leading companies, our API provides a versatile and powerful tool to help you streamline operations, automate processes, and <br />enhance customer engagement across various platforms.</p>
                </div>
                <div className="header-content">
                    <button className='head-section-b3'>Case Studies</button>
                    <h2>Customer Success Stories</h2>
                    <p style={{ paddingBottom: '20px' }}>What some of our 8000+ customers across 100+ countries think of ICS</p>
                </div>
                <div className="content-block-3">
                    <div className="testimonial-content">
                        <div className="testimonial-box">
                            <div className="testimonial-text">
                                <img src={assets.lifestylelogo} alt="Lifestyle" className="testimonial-logo" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                <div className="author-info">
                                    <img src={assets.authorIcon} alt="Author" className="author-image" />
                                    <div>
                                        <h4>Mahesh Shah</h4>
                                        <p>CEO of lifestyle</p>
                                    </div>
                                </div>
                                <a href="#" className="case-study-link">Read Case Study<span><img className='readmorearrow' src={assets.readmorearrow} alt="" /></span></a>
                            </div>
                            <div className="testimonial-image">
                                <img src={assets.documentlogo} alt="Document" />
                            </div>
                        </div>
                        <div className="client-logos">
                            <div className="client-logo-container">
                                <img style={{ padding: '1rem 0 10px 0' }} src={assets.lifestylelogo2} alt="Lifestyle" />
                            </div>
                            <div className="client-logo-container">
                                <img style={{ width: '120px', padding: '1.3rem 0 10px 0' }} src={assets.zomotologo} alt="Zomato" />
                            </div>
                            <div className="client-logo-container">
                                <img style={{ width: '120px', padding: '1rem 0 10px 0' }} src={assets.weworklogo} alt="Wework" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whatsapp
