import axios from 'axios';
const CONTENTFUL_API_URL = 'https://cdn.contentful.com/spaces/168so8tu8c7k/environments/master';
const API_TOKEN = 'vzrKWJs9we3Tn0oX8PZuDQHNt0wrAA4pB0yDEyroFPY';

export const fetchBlogs = async () => {
    try {
        const response = await axios.get(`${CONTENTFUL_API_URL}/entries`, {
            headers: {
                Authorization: `Bearer ${API_TOKEN}`,
            },
            params: {
                content_type: 'blogPost', 
            },
        });
        // console.log(response.data.items);
        // console.log(response.data.items.map(item => item.fields.blogImageThumbnail?.fields?.file?.url));
        response.data.items.forEach((item) => {
            console.log(item.fields); // Inspect all fields
        });

        // const items = response.data.items;
        const assets = response.data.includes?.Asset || [];

        const findAssetUrl = (id) => {
            const asset = assets.find((asset) => asset.sys.id === id);
            return asset?.fields?.file?.url || '';
        };


        return response.data.items.map((item) => ({
            id: item.sys.id, 
            title: item.fields.blogTitle || 'Untitled', 
            displayTitle: item.fields.displayTitle || '', 
            categories: item.fields.categories || 'Uncategorized', 
            companyLogo: findAssetUrl(item.fields.companyLogo?.sys.id),
            blogImageThumbnail: findAssetUrl(item.fields.blogImageThumbnail?.sys.id),
            blogImage: findAssetUrl(item.fields.blogImage?.sys.id),
            publishedDate: item.fields.publishedDate || 'Unknown date', 
            description: item.fields.content?.content[0]?.content[0]?.value || '', 
            content: item.fields.content || {}, 
            relatedBlogs: item.fields.relatedBlogs?.map((ref) => ref.sys.id) || [], 
        }));
    } catch (error) {
        console.error('Error fetching blogs:', error.message);
        return [];
    }
};
