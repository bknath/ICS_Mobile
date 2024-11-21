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
                        <h3>{article.title}</h3>
                        <p>{article.displayTitle}</p>
                        <div className="meta">
                            {article.publishedDate} | {article.readingTime || 'N/A'}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

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

            {renderContent()}
        </div>
    );
};

export default Bloglandingpage;


// const Bloglandingpage = () => {
//     const [activeTab, setActiveTab] = useState('All');
//     const articlesData = {
//         'SMS gateways': [
//             {
//                 img: assets.writingimg,
//                 title: 'Understanding SMS Gateways: How They Work',
//                 date: '10 April, 2021',
//                 time: '5 Min Read',
//                 description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
//             },
//             {
//                 img: assets.writingimg,
//                 title: 'Benefits of SMS Gateways for Business',
//                 date: '15 April, 2021',
//                 time: '7 Min Read',
//                 description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
//             },
//             {
//                 img: assets.writingimg,
//                 title: 'SMS Gateways vs. Email: Which to Choose?',
//                 date: '20 April, 2021',
//                 time: '6 Min Read',
//                 description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
//             }
//         ],
//         'Email assistance': [
//             {
//                 img: assets.writingimg,
//                 title: 'Best Practices for Email Support',
//                 date: '12 March, 2022',
//                 time: '6 Min Read',
//                 description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
//             },
//             {
//                 img: assets.writingimg,
//                 title: 'How Email Assistance Improves Customer Experience',
//                 date: '18 March, 2022',
//                 time: '7 Min Read',
//                 description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
//             },
//             {
//                 img: assets.writingimg,
//                 title: 'Choosing the Right Email Assistance Tools',
//                 date: '22 March, 2022',
//                 time: '5 Min Read',
//                 description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
//             }
//         ],
//         'Engagement programs': [
//             {
//                 img: assets.writingimg,
//                 title: 'Creating Effective Customer Engagement Programs',
//                 date: '10 May, 2021',
//                 time: '5 Min Read',
//                 description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
//             },
//             {
//                 img: assets.writingimg,
//                 title: 'Top Customer Engagement Strategies for 2021',
//                 date: '12 May, 2021',
//                 time: '6 Min Read',
//                 description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
//             },
//             {
//                 img: assets.writingimg,
//                 title: 'Engagement Programs: Measuring Success',
//                 date: '15 May, 2021',
//                 time: '7 Min Read',
//                 description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
//             }
//         ],
//         'WhatsApp APIs': [
//             {
//                 img: assets.writingimg,
//                 title: 'Getting Started with WhatsApp APIs for Business',
//                 date: '10 August, 2021',
//                 time: '5 Min Read',
//                 description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
//             },
//             {
//                 img: assets.writingimg,
//                 title: 'Best Practices for Using WhatsApp APIs',
//                 date: '12 August, 2021',
//                 time: '6 Min Read',
//                 description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
//             },
//             {
//                 img: assets.writingimg,
//                 title: 'Scaling Customer Support with WhatsApp APIs',
//                 date: '15 August, 2021',
//                 time: '7 Min Read',
//                 description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
//             }
//         ]
//     };


//     const renderContent = () => {
//         let articlesToShow = [];

//         if (activeTab === 'All') {
            
//             Object.values(articlesData).forEach(articles => {
//                 articlesToShow = [...articlesToShow, ...articles];
//             });
//         } else {
            
//             articlesToShow = articlesData[activeTab] || [];
//         }

//         return (
//             <div className="articles-bg">
//                 {articlesToShow.map((article, index) => (
//                     <div className="article" key={index}>
//                         <img src={article.img} alt={article.title} />
//                         <h3>{article.title}</h3>
//                         <p>{article.description}</p>
//                         <div className="meta">{article.date} | {article.time}</div>
//                     </div>
//                 ))}
//             </div>
//         );
//     };

//     return (
//         <div className="latest-writings">
//             <h2>Blogs</h2>
//             <div className="tabs2">
//                 <button
//                     className={`tab-bg ${activeTab === 'All' ? 'active' : ''}`}
//                     onClick={() => setActiveTab('All')}
//                 >
//                     All
//                 </button>
//                 <button
//                     className={`tab-bg ${activeTab === 'SMS gateways' ? 'active' : ''}`}
//                     onClick={() => setActiveTab('SMS gateways')}
//                 >
//                     SMS gateways
//                 </button>
//                 <button
//                     className={`tab-bg ${activeTab === 'Email assistance' ? 'active' : ''}`}
//                     onClick={() => setActiveTab('Email assistance')}
//                 >
//                     Email assistance
//                 </button>
//                 <button
//                     className={`tab-bg ${activeTab === 'Engagement programs' ? 'active' : ''}`}
//                     onClick={() => setActiveTab('Engagement programs')}
//                 >
//                     Engagement programs
//                 </button>
//                 <button
//                     className={`tab-bg ${activeTab === 'WhatsApp APIs' ? 'active' : ''}`}
//                     onClick={() => setActiveTab('WhatsApp APIs')}
//                 >
//                     WhatsApp APIs
//                 </button>
//             </div>

            
//             {renderContent()}
//         </div>
//     );
// }

// export default Bloglandingpage
