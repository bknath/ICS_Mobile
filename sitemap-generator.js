import { create } from 'xmlbuilder2';
import fs from 'fs';

const routes = [
  { path: "/" },
  { path: "/about-us" },
  { path: "/contact-us" },
  { path: "/smsgateway" },
  { path: "/whatsapp" },
  { path: "/chatbot" },
  { path: "/career" },
  { path: "/csrpolicy" },
  { path: "/privacypolicy" },
  { path: "/termscondition" },
];

const generateSitemap = () => {
  const urlset = create({ version: '1.0', encoding: 'UTF-8' })
    .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

  routes.forEach(route => {
    urlset.ele('url')
      .ele('loc').txt(`https://icsmobile.in${route.path}`).up()
      .ele('changefreq').txt('monthly').up()
      .ele('priority').txt('0.8').up();
  });

  const xml = urlset.end({ prettyPrint: true });

  // Write the sitemap.xml file to the public folder
  fs.writeFileSync('./public/sitemap.xml', xml);

  console.log("Sitemap successfully generated at ./public/sitemap.xml");
};

// Run the function to generate the sitemap
generateSitemap();
