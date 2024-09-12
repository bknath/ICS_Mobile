import React, { useState } from 'react';
import './Product2.css';
import { assets } from '../../../assets/assets';
import plusIcon from '../../../assets/plusIcon.svg';
import minusIcon from '../../../assets/minusIcon.svg';

const products = [
    {
        name: 'SMS Gateways',
        description: 'Amplify your voice using our advanced SMS Gateway. Deliver targeted, timely, and reliable messages for maximum impact.',
        image: assets.SMSproduct2image
    },
    {
        name: 'WhatsApp',
        description: 'Enhance communication with our seamless WhatsApp integration. Deliver rich, personalized messages directly to your audience, ensuring high engagement and interaction.',
        image: assets.Whatsappproduct2image
    },
    {
        name: 'Gamification',
        description: 'Drive engagement and motivation with our gamification solutions. Turn mundane interactions into exciting, rewarding experiences that keep your audience engaged and eager to participate.',
        image: assets.SMSproduct2image
    },
    {
        name: 'RCS',
        description: ' Upgrade your messaging experience with RCS. Send interactive, media-rich content that brings your brand’s messaging to life, creating deeper connections with your customers.',
        image: assets.RCSproduct2image
    },
    {
        name: 'Chat Bots',
        description: 'Streamline customer interactions with our intelligent Chatbot solutions. Provide instant, personalized responses, improving customer satisfaction and operational efficiency.',
        image: assets.RCSproduct2image
    },
    {
        name: 'Solution',
        description: 'Empower your business with our comprehensive solutions, designed to optimize communication, improve customer experience, and drive growth across multiple channels.',
        image: assets.Whatsappproduct2image
    }
];

const Product2 = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index); // Open the clicked product and close the previously opened one
    };
    const handleMouseEnter = (index) => {
        setActiveIndex(index); // Change active product on hover
    };


    return (
        <section className="product2-section">
            <div className="header-content">
                <button className='head-section-button'>Products</button>
                <h2>Explore All Products, Unlock Possibilities</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
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
                            src={products[activeIndex].image}
                            alt={products[activeIndex].name}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Product2;
