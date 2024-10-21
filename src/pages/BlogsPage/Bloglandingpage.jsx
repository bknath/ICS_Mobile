import React, { useState } from 'react'
import './Bloglanding.css'
import { assets } from '../../assets/assets';
const Bloglandingpage = () => {
    const [activeTab, setActiveTab] = useState('All');
    const articlesData = {
        'SMS gateways': [
            {
                img: assets.writingimg,
                title: 'Understanding SMS Gateways: How They Work',
                date: '10 April, 2021',
                time: '5 Min Read',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
            },
            {
                img: assets.writingimg,
                title: 'Benefits of SMS Gateways for Business',
                date: '15 April, 2021',
                time: '7 Min Read',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
            },
            {
                img: assets.writingimg,
                title: 'SMS Gateways vs. Email: Which to Choose?',
                date: '20 April, 2021',
                time: '6 Min Read',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
            }
        ],
        'Email assistance': [
            {
                img: assets.writingimg,
                title: 'Best Practices for Email Support',
                date: '12 March, 2022',
                time: '6 Min Read',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
            },
            {
                img: assets.writingimg,
                title: 'How Email Assistance Improves Customer Experience',
                date: '18 March, 2022',
                time: '7 Min Read',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
            },
            {
                img: assets.writingimg,
                title: 'Choosing the Right Email Assistance Tools',
                date: '22 March, 2022',
                time: '5 Min Read',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
            }
        ],
        'Engagement programs': [
            {
                img: assets.writingimg,
                title: 'Creating Effective Customer Engagement Programs',
                date: '10 May, 2021',
                time: '5 Min Read',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
            },
            {
                img: assets.writingimg,
                title: 'Top Customer Engagement Strategies for 2021',
                date: '12 May, 2021',
                time: '6 Min Read',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
            },
            {
                img: assets.writingimg,
                title: 'Engagement Programs: Measuring Success',
                date: '15 May, 2021',
                time: '7 Min Read',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
            }
        ],
        'WhatsApp APIs': [
            {
                img: assets.writingimg,
                title: 'Getting Started with WhatsApp APIs for Business',
                date: '10 August, 2021',
                time: '5 Min Read',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
            },
            {
                img: assets.writingimg,
                title: 'Best Practices for Using WhatsApp APIs',
                date: '12 August, 2021',
                time: '6 Min Read',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
            },
            {
                img: assets.writingimg,
                title: 'Scaling Customer Support with WhatsApp APIs',
                date: '15 August, 2021',
                time: '7 Min Read',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
            }
        ]
    };


    const renderContent = () => {
        let articlesToShow = [];

        if (activeTab === 'All') {
            // Merge all articles into one array
            Object.values(articlesData).forEach(articles => {
                articlesToShow = [...articlesToShow, ...articles];
            });
        } else {
            // Show articles based on the active tab
            articlesToShow = articlesData[activeTab] || [];
        }

        return (
            <div className="articles-bg">
                {articlesToShow.map((article, index) => (
                    <div className="article" key={index}>
                        <img src={article.img} alt={article.title} />
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                        <div className="meta">{article.date} | {article.time}</div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="latest-writings">
            <h2>Blogs</h2>
            <div className="tabs2">
                <button
                    className={`tab-bg ${activeTab === 'All' ? 'active' : ''}`}
                    onClick={() => setActiveTab('All')}
                >
                    All
                </button>
                <button
                    className={`tab-bg ${activeTab === 'SMS gateways' ? 'active' : ''}`}
                    onClick={() => setActiveTab('SMS gateways')}
                >
                    SMS gateways
                </button>
                <button
                    className={`tab-bg ${activeTab === 'Email assistance' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Email assistance')}
                >
                    Email assistance
                </button>
                <button
                    className={`tab-bg ${activeTab === 'Engagement programs' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Engagement programs')}
                >
                    Engagement programs
                </button>
                <button
                    className={`tab-bg ${activeTab === 'WhatsApp APIs' ? 'active' : ''}`}
                    onClick={() => setActiveTab('WhatsApp APIs')}
                >
                    WhatsApp APIs
                </button>
            </div>

            
            {renderContent()}
        </div>
    );
}

export default Bloglandingpage
