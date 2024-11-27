import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Writings.css';

const Writings = () => {
    const [activeTab, setActiveTab] = useState('SMS gateways');
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const CONTENTFUL_API_URL = 'https://cdn.contentful.com/spaces/168so8tu8c7k/environments/master';
    const API_TOKEN = 'vzrKWJs9we3Tn0oX8PZuDQHNt0wrAA4pB0yDEyroFPY';

    // Function to fetch asset URL
    const findAssetUrl = async (assetId) => {
        try {
            const response = await axios.get(`${CONTENTFUL_API_URL}/assets/${assetId}`, {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`,
                },
            });
            if (response.data) {
                return `https:${response.data.fields.file.url}`;
            }
            return null;
        } catch (error) {
            console.error('Error fetching asset URL:', error);
            return null;
        }
    };

    // Fetch articles based on category
    const fetchArticles = async (category) => {
        setLoading(true);
        try {
            const response = await axios.get(`${CONTENTFUL_API_URL}/entries`, {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`,
                },
                params: {
                    'content_type': 'blogPost',
                    'fields.categories[in]': category,
                    include: 2,
                },
            });

            // Fetch all asset URLs asynchronously for thumbnails
            const fetchedArticles = await Promise.all(response.data.items.map(async (item) => {
                const blogImageThumbnailUrl = await findAssetUrl(item.fields.blogImageThumbnail?.sys.id);

                return {
                    id: item.sys.id,
                    title: item.fields.blogTitle || 'Untitled',
                    displayTitle: item.fields.displayTitle || '',
                    categories: item.fields.categories || 'Uncategorized',
                    blogImageThumbnail: blogImageThumbnailUrl,
                    publishedDate: item.fields.publishedDate || 'Unknown date',
                    description: item.fields.content?.content[0]?.content[0]?.value || '',
                    content: item.fields.content || {},
                    relatedBlogs: item.fields.relatedBlogs?.map((ref) => ref.sys.id) || [],
                };
            }));

            setArticles(fetchedArticles);
        } catch (error) {
            console.error('Error fetching articles:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArticles(activeTab);


        const writingsSection = document.getElementById('writings-section');
        if (writingsSection) {
            writingsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, [activeTab]);

    // Render loading state if articles are still being fetched
    if (loading) {
        return <div style={{ textAlign: 'center' }}>Loading...</div>;
    }

    return (
        <div id="writings-section" className="latest-writings">
            <div className="header-content">
                <button className="head-section-b4">Blogs</button>
            </div>
            <h2>Latest Writings</h2>
            <div className="tabs2">
                {/* Dynamic tabs based on categories */}
                <button
                    className={`tab ${activeTab === 'SMS gateways' ? 'active' : ''}`}
                    onClick={() => setActiveTab('SMS gateways')}
                >
                    SMS Gateways
                </button>
                <button
                    className={`tab ${activeTab === 'IVR' ? 'active' : ''}`}
                    onClick={() => setActiveTab('IVR')}
                >
                    IVR
                </button>
                <button
                    className={`tab ${activeTab === 'RCS' ? 'active' : ''}`}
                    onClick={() => setActiveTab('RCS')}
                >
                    RCS
                </button>
                <button
                    className={`tab ${activeTab === 'WhatsApp API' ? 'active' : ''}`}
                    onClick={() => setActiveTab('WhatsApp API')}
                >
                    WhatsApp APIs
                </button>
            </div>
            <div className='web-view-article'>
                <div className="articles">
                    {/* Render articles dynamically */}
                    {articles.length > 0 ? (
                        articles.map((article) => (
                            <div
                                className="article"
                                key={article.id}
                                onClick={() => navigate(`/blog/${article.id}`)} // Navigate to single blog page
                            >
                                {article.blogImageThumbnail && (
                                    <img src={article.blogImageThumbnail} alt={article.title} />
                                )}
                                <div className="textpart">
                                    <h3>{article.title}</h3>
                                    <p>{article.displayTitle}</p>
                                    <div className="meta">{article.publishedDate} | 5 Min Read</div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No articles found for this category.</p>
                    )}
                </div>

            </div>

            <div className="mobile-view-article">
                <div className="articles">
                    {/* Render articles dynamically */}
                    {articles.length > 0 ? (
                        articles.map((article) => (
                            <div
                                className="article"
                                key={article.id}
                                onClick={() => navigate(`/blog/${article.id}`)} // Navigate to single blog page
                            >
                                {article.blogImageThumbnail && (
                                    <img src={article.blogImageThumbnail} alt={article.title} />
                                )}
                                <div className="textpart">
                                    <h3>{article.title.split(' ').slice(0,5).join(' ')}...</h3>
                                    <p>{article.displayTitle.split(' ').slice(0,8).join(' ')}...</p>
                                    <div className="meta">{article.publishedDate}</div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No articles found for this category.</p>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Writings;
