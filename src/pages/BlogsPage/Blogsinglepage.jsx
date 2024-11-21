import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './Bloglanding.css'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
const Blogsinglepage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const CONTENTFUL_API_URL = 'https://cdn.contentful.com/spaces/168so8tu8c7k/environments/master';
    const API_TOKEN = 'vzrKWJs9we3Tn0oX8PZuDQHNt0wrAA4pB0yDEyroFPY';
    // Function to fetch assets by ID
    const fetchAssetUrl = async (assetId) => {
        try {
            const response = await axios.get(`${CONTENTFUL_API_URL}/assets/${assetId}`, {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`,
                },
            });
            if (response.data) {
                const asset = response.data.fields.file;
                if (asset && asset.url) {
                    return `https:${asset.url}`;
                }
            }
            return null;
        } catch (error) {
            console.error('Error fetching asset:', error.message);
            return null;
        }
    };

    const fetchSingleBlog = async (blogId) => {
        try {
            const response = await axios.get(`${CONTENTFUL_API_URL}/entries/${blogId}`, {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`,
                },
                params: {
                    include: 3, // Ensure linked assets are included
                },
            });
            console.log('API Response:', response.data); // Check the structure of the entire response
            console.log('Included Assets:', response.data.includes?.Asset); // Check included assets

            const data = response.data;

            // Fetch linked assets using the fetchAssetUrl function
            const companyLogoUrl = data.fields.companyLogo
                ? await fetchAssetUrl(data.fields.companyLogo.sys.id)
                : null;

            const blogImageUrl = data.fields.blogImage
                ? await fetchAssetUrl(data.fields.blogImage.sys.id)
                : null;


            setBlog({
                id: data.sys.id,
                title: data.fields.blogTitle || 'Untitled',
                displayTitle: data.fields.displayTitle || '',
                categories: data.fields.categories || 'Uncategorized',
                companyLogo: companyLogoUrl,
                blogImage: blogImageUrl,
                publishedDate: data.fields.publishedDate || 'Unknown date',
                content: data.fields.content || {},
                relatedBlogs: data.fields.relatedBlogs?.map((ref) => ref.sys.id) || [],
            });
        } catch (error) {
            console.error('Error fetching single blog:', error.message);
        }
    };

    useEffect(() => {
        fetchSingleBlog(id); // Fetch the blog by ID
    }, [id]);


    if (!blog) {
        return <div style={{ textAlign: 'center', margin: '2rem' }}>Loading...</div>;
    }
    return (
        <div className='singleblog-main-container'>
            <div className="singleblogcontentwrap">
                <div className="single-blog-page">
                    <h1>{blog.title}</h1>
                </div>
                <div className="meta-info">
                    {blog.companyLogo && <img src={blog.companyLogo} alt="Company Logo" className="company-logo" />}
                    <span>{blog.publishedDate} | 5 Min Read</span>
                </div>
                <div className="blog-image">
                    {blog.blogImage && <img src={blog.blogImage} alt="Blog" />}
                </div>
                <div className="blog-content">
                    {blog.content && documentToReactComponents(blog.content)}
                </div>
            </div>
            {/* <div className="relatedblogcontentwrap">
                <p>something will come when it will be fetched </p>
                {blog.relatedBlogs.length > 0 && (
                    <div className="related-blogs">
                        <h2>Similar Blogs</h2>

                        
                        {blog.relatedBlogs.map((relatedId) => (
                            <div key={relatedId}>
                                <a href={`/blogs/${relatedId}`}>Blog {relatedId}</a>
                            </div>
                        ))}
                    </div>
                )}
            </div> */}
        </div>
    )
}

export default Blogsinglepage
