import React, { useState } from 'react';
import './Writings.css';
import { assets } from '../../../assets/assets';

const Writings = () => {
    const [activeTab, setActiveTab] = useState('WhatsApp APIs'); 

    const renderContent = () => {
        switch (activeTab) {
            case 'SMS gateways':
                return (
                    <div className="articles">
                        <div className="article">
                            <img src={assets.writingimg} alt="SMS gateways 1" />
                            <h3>Understanding SMS Gateways: How They Work</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            <div className="meta">10 April, 2021 | 5 Min Read</div>
                        </div>
                        <div className="article">
                            <img src={assets.writingimg} alt="SMS gateways 2" />
                            <h3>Benefits of SMS Gateways for Business</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            <div className="meta">15 April, 2021 | 7 Min Read</div>
                        </div>
                        <div className="article">
                            <img src={assets.writingimg} alt="SMS gateways 3" />
                            <h3>SMS Gateways vs. Email: Which to Choose?</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            <div className="meta">20 April, 2021 | 6 Min Read</div>
                        </div>
                    </div>
                );
            case 'Email assistance':
                return (
                    <div className="articles">
                        <div className="article">
                            <img src={assets.writingimg} alt="Email Assistance 1" />
                            <h3>Best Practices for Email Support</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            <div className="meta">12 March, 2022 | 6 Min Read</div>
                        </div>
                        <div className="article">
                            <img src={assets.writingimg} alt="Email Assistance 2" />
                            <h3>How Email Assistance Improves Customer Experience</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            <div className="meta">18 March, 2022 | 7 Min Read</div>
                        </div>
                        <div className="article">
                            <img src={assets.writingimg} alt="Email Assistance 3" />
                            <h3>Choosing the Right Email Assistance Tools</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            <div className="meta">22 March, 2022 | 5 Min Read</div>
                        </div>
                    </div>
                );
            case 'Engagement programs':
                return (
                    <div className="articles">
                        <div className="article">
                            <img src={assets.writingimg} alt="Engagement Programs 1" />
                            <h3>Creating Effective Customer Engagement Programs</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            <div className="meta">10 May, 2021 | 5 Min Read</div>
                        </div>
                        <div className="article">
                            <img src={assets.writingimg} alt="Engagement Programs 2" />
                            <h3>Top Customer Engagement Strategies for 2021</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            <div className="meta">12 May, 2021 | 6 Min Read</div>
                        </div>
                        <div className="article">
                            <img src={assets.writingimg} alt="Engagement Programs 3" />
                            <h3>Engagement Programs: Measuring Success</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            <div className="meta">15 May, 2021 | 7 Min Read</div>
                        </div>
                    </div>
                );
            case 'WhatsApp APIs':
            default:
                return (
                    <div className="articles">
                        <div className="article">
                            <img src={assets.writingimg} alt="WhatsApp APIs 1" />
                            <h3>Getting Started with WhatsApp APIs for Business</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            <div className="meta">10 August, 2021 | 5 Min Read</div>
                        </div>
                        <div className="article">
                            <img src={assets.writingimg} alt="WhatsApp APIs 2" />
                            <h3>Best Practices for Using WhatsApp APIs</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            <div className="meta">12 August, 2021 | 6 Min Read</div>
                        </div>
                        <div className="article">
                            <img src={assets.writingimg} alt="WhatsApp APIs 3" />
                            <h3>Scaling Customer Support with WhatsApp APIs</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            <div className="meta">15 August, 2021 | 7 Min Read</div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="latest-writings">
            <div className="header-content">
                <button className='head-section-b4'>Blogs</button>
            </div>
            <h2>Latest writings</h2>
            <div className="tabs2">
                <button 
                    className={`tab ${activeTab === 'SMS gateways' ? 'active' : ''}`}
                    onClick={() => setActiveTab('SMS gateways')}
                >
                    SMS gateways
                </button>
                <button 
                    className={`tab ${activeTab === 'Email assistance' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Email assistance')}
                >
                    Email assistance
                </button>
                <button 
                    className={`tab ${activeTab === 'Engagement programs' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Engagement programs')}
                >
                    Engagement programs
                </button>
                <button 
                    className={`tab ${activeTab === 'WhatsApp APIs' ? 'active' : ''}`}
                    onClick={() => setActiveTab('WhatsApp APIs')}
                >
                    WhatsApp APIs
                </button>
            </div>

            {/* Conditionally render articles based on active tab */}
            {renderContent()}
        </div>
    );
}

export default Writings;
