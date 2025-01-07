import React, { useState, useEffect } from 'react';
import './Product2.css';
import { assets } from '../../../assets/assets';
import plusIcon from '../../../assets/plusIcon.svg';
import minusIcon from '../../../assets/minusIcon.svg';

// Desktop and Mobile Image Sets
const desktopImages = {
    SMSproduct2image: assets.SMSproduct2image,
    Whatsappproduct2image: assets.Whatsappproduct2image,
    RCSproduct2image: assets.RCSproduct2image,
    Gamification : assets.GamificationPimage,
    Solution : assets.SolutionPimage
};

const mobileImages = {
    SMSproduct2image: assets.mobileSMSproduct2image,
    Whatsappproduct2image: assets.mobileWhatsappproduct2image,
    RCSproduct2image: assets.mobileRCSproduct2image
};

const products = [
    {
        name: 'SMS Gateways',
        description: 'Amplify your voice using our advanced SMS Gateway. Deliver targeted, timely, and reliable messages for maximum impact.',
        imageKey: 'SMSproduct2image'
    },
    {
        name: 'WhatsApp',
        description: 'Enhance communication with our seamless WhatsApp integration. Deliver rich, personalized messages directly to your audience, ensuring high engagement and interaction.',
        imageKey: 'Whatsappproduct2image'
    },
    {
        name: 'Gamification',
        description: 'Drive engagement and motivation with our gamification solutions. Turn mundane interactions into exciting, rewarding experiences that keep your audience engaged and eager to participate.',
        imageKey: 'Gamification'
    },
    {
        name: 'RCS',
        description: 'Upgrade your messaging experience with RCS. Send interactive, media-rich content that brings your brand’s messaging to life, creating deeper connections with your customers.',
        imageKey: 'RCSproduct2image'
    },  
    {
        name: 'Solution',
        description: 'Empower your business with our comprehensive solutions, designed to optimize communication, improve customer experience, and drive growth across multiple channels.',
        imageKey: 'Solution'
    },
    {
        name: 'Chat Bots',
        description: 'Streamline customer interactions with our intelligent Chatbot solutions. Provide instant, personalized responses, improving customer satisfaction and operational efficiency.',
        imageKey: 'RCSproduct2image'
    }
];

const Product2 = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Check if the user is on mobile
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        setIsMobile(mediaQuery.matches); // Set initial value

        const handleResize = () => setIsMobile(mediaQuery.matches); // Update value on resize
        mediaQuery.addListener(handleResize);

        return () => mediaQuery.removeListener(handleResize); // Clean up
    }, []);

    const handleClick = (index) => {
        setActiveIndex(index); // Open the clicked product and close the previously opened one
    };

    return (
        <section className="product2-section">
            <div className="header-content-1">
                <button className='head-section-b1'>Products</button>
                <h2>Explore All Products, Unlock Possibilities</h2>
                <p>Discover Our Full Range of Products and Unlock Endless Possibilities!</p>
            </div>
            <div className="custom-product-section">
                <div className="custom-product-content">
                    {/* Left side - Product List */}
                    <div className="custom-product-list">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className={`custom-product-item ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => handleClick(index)} // Set the clicked product as active
                            >
                                <div className="custom-product-question">
                                    <span>{product.name}</span>
                                    {activeIndex !== index && ( // Only show the plus icon if the product is not active
                                        <img
                                            src={plusIcon}
                                            alt="Expand"
                                            className="custom-product-icon"
                                        />
                                    )}
                                </div>
                                {activeIndex === index && (
                                    <div className="custom-product-description">
                                        {product.description}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    {/* Right side - Image */}
                    <div className="custom-product-image">
                        <img
                            src={isMobile ? mobileImages[products[activeIndex].imageKey] : desktopImages[products[activeIndex].imageKey]}
                            alt={products[activeIndex].name}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product2;
