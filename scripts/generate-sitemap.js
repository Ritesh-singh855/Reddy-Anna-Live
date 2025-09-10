import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = "https://www.reddyannalive.in";
const pagesDir = path.resolve(__dirname, "../src/pages");
const publicDir = path.resolve(__dirname, "../public");
const sitemapPath = path.resolve(publicDir, "sitemap.xml");

const generateSitemap = async () => {
  const today = new Date().toISOString().split("T")[0];
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

  const staticRoutes = [
    { loc: "/", changefreq: "daily", priority: "1.0", lastmod: today, image: "/images/reddy-anna-live-og.png" },
    { loc: "/about-us", changefreq: "weekly", priority: "0.8", lastmod: today },
    { loc: "/contact-us", changefreq: "weekly", priority: "0.8", lastmod: today },
    { loc: "/casino", changefreq: "daily", priority: "0.9", lastmod: today },
    { loc: "/sports", changefreq: "daily", priority: "0.9", lastmod: today },
    { loc: "/live-matches", changefreq: "daily", priority: "0.9", lastmod: today },
    { loc: "/faq", changefreq: "weekly", priority: "0.7", lastmod: today },
    { loc: "/privacyPolicy", changefreq: "monthly", priority: "0.5", lastmod: today },
    { loc: "/termAndCondition", changefreq: "monthly", priority: "0.5", lastmod: today },
  ];

  staticRoutes.forEach(route => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${baseUrl}${route.loc}</loc>\n`;
    sitemap += `    <lastmod>${route.lastmod}</lastmod>\n`;
    sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${route.priority}</priority>\n`;
    if (route.image) {
      sitemap += `    <image:image>\n`;
      sitemap += `      <image:loc>${baseUrl}${route.image}</image:loc>\n`;
      sitemap += `      <image:title>Reddy Anna Live - Best Online Sports Betting & Casino Platform</image:title>\n`;
      sitemap += `      <image:caption>Reddy Anna Live offers the best online sports betting and casino games in India</image:caption>\n`;
      sitemap += `    </image:image>\n`;
    }
    sitemap += `  </url>\n`;
  });

  sitemap += `</urlset>\n`;

  fs.writeFileSync(sitemapPath, sitemap, "utf8");
  console.log("sitemap.xml generated successfully!");
};

generateSitemap();
