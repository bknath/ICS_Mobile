import React, { useState, useEffect } from 'react';
import './Bloglanding.css';
import { fetchBlogs } from '../../api/blogs';
import { useNavigate } from 'react-router-dom';

const Bloglandingpage = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [articlesData, setArticlesData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const loadBlogs = async () => {
            const blogs = await fetchBlogs(); // Fetch all blogs
            const groupedBlogs = groupBlogsByCategory(blogs);
            setArticlesData(groupedBlogs);
        };

        loadBlogs();
    }, []);

    const groupBlogsByCategory = (blogs) => {
        return blogs.reduce((acc, blog) => {
            const category = blog.categories || 'Uncategorized';
            if (!acc[category]) acc[category] = [];
            acc[category].push(blog);
            return acc;
        }, {});
    };

    const renderContent = () => {
        let articlesToShow = [];

        if (activeTab === 'All') {
            Object.values(articlesData).forEach((articles) => {
                articlesToShow = [...articlesToShow, ...articles];
            });
        } else {
            articlesToShow = articlesData[activeTab] || [];
        }

        if (articlesToShow.length === 0) {
            return <p>No blogs available for this category.</p>;
        }

        return (
           
                <div className="articles-bg">
                {articlesToShow.map((article) => (
                    <div
                        className="article"
                        key={article.id}
                        onClick={() => navigate(`/blog/${article.id}`)} // Navigate to single blog page
                    >
                        {/* Display Thumbnail Image */}
                        <img
                            src={article.blogImageThumbnail}
                            alt={article.title}
                            className="blog-thumbnail"
                        />
                        <div className="textpart">
                            <h3>{article.title}</h3>
                            <p>{article.displayTitle}</p>
                            <div className="meta">
                            {article.publishedDate} | {article.readingTime || 'N/A'}
                            </div>
                        </div>
                        
                    </div>
                ))}
                </div>   
        );
    };
    const mobilerendercontent =() =>{
        
        let articlesToShow = [];

        if (activeTab === 'All') {
            Object.values(articlesData).forEach((articles) => {
                articlesToShow = [...articlesToShow, ...articles];
            });
        } else {
            articlesToShow = articlesData[activeTab] || [];
        }

        if (articlesToShow.length === 0) {
            return <p>No blogs available for this category.</p>;
        }
        
        return(
    
                <div className="articles-bg">
                    {articlesToShow.map((article) => (
                        <div
                            className="article"
                            key={article.id}
                            onClick={() => navigate(`/blog/${article.id}`)} // Navigate to single blog page
                        >
                            {/* Display Thumbnail Image */}
                        <img
                            src={article.blogImageThumbnail}
                            alt={article.title}
                            className="blog-thumbnail"
                        />
                        <div className="textpart">
                            <h3>{article.title.split(' ').slice(0,5).join(' ')}...</h3>
                            <p>{article.displayTitle.split(' ').slice(0,8).join(' ')}...</p>
                            <div className="meta">{article.publishedDate} | {article.readingTime || 'N/A'}</div>
                        </div>
                        </div>
                    ))}
                </div>
            )
    }

    return (
        <div className="latest-writings">
            <h2>Blogs</h2>
            <div className="tabs2">
                {['All', ...Object.keys(articlesData)].map((category) => (
                    <button
                        key={category}
                        className={`tab-bg ${activeTab === category ? 'active' : ''}`}
                        onClick={() => setActiveTab(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="web-view-article">
                {renderContent()}
            </div>
            <div className="mobile-view-article">
                
                {mobilerendercontent()}
            </div>
            
        </div>
    );
};

export default Bloglandingpage;