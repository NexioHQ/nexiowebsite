import { blogPosts } from "../data/resources";
import { workItems } from "../data/work";

export const SITE_URL = "https://nexiogbl.com";
export const SITE_NAME = "Nexio Global";
export const SITE_DEFAULT_DESCRIPTION =
  "Nexio Global transforms businesses through technology. Enterprise-grade digital solutions, AI automation, cloud infrastructure, and cyber security services.";
export const SITE_DEFAULT_TITLE = "Nexio Global | Digital Solutions, AI Automation & Cyber Security";
export const SITE_DEFAULT_IMAGE = `${SITE_URL}/favicon.png`;
export const SITE_TWITTER_HANDLE = "@nexiogbl";
export const SITE_LOCALE = "en_US";
export const SITE_LANGUAGE = "en";

export const CONTACT_EMAIL = "info@nexiogbl.com";
export const CONTACT_PHONE = "+94713900047";
export const CONTACT_PHONE_2 = "+94714939193";

export const SITE_ADDRESS = {
  streetAddress: "Colombo",
  addressLocality: "Colombo",
  addressRegion: "Western Province",
  postalCode: "00100",
  addressCountry: "LK",
};

export const MAIN_NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Solutions", href: "/solutions", hasDropdown: true },
  { name: "Resources", href: "/resources" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
];

export const SOLUTION_NAV_LINKS = [
  { name: "Solutions Overview", href: "/solutions" },
  { name: "Digital Solutions", href: "/digital-solutions" },
  { name: "AI & Automation", href: "/ai-automation" },
  { name: "Cyber Security", href: "/cyber-security" },
];

export interface SiteRoute {
  path: string;
  title: string;
  description: string;
  changefreq: "weekly" | "monthly" | "yearly";
  priority: number;
  lastmod?: string;
  noindex?: boolean;
}

export const PUBLIC_ROUTES: SiteRoute[] = [
  {
    path: "/",
    title: SITE_DEFAULT_TITLE,
    description: SITE_DEFAULT_DESCRIPTION,
    changefreq: "weekly",
    priority: 1,
  },
  {
    path: "/about",
    title: "About Nexio Global",
    description:
      "Learn about Nexio Global — a technology company transforming businesses through digital solutions, AI automation, and cybersecurity.",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/solutions",
    title: "Technology Solutions for Modern Businesses",
    description:
      "Explore Nexio Global's digital solutions, AI automation services, and cybersecurity services for modern businesses.",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/digital-solutions",
    title: "Digital Solutions & Custom Software Development",
    description:
      "Nexio Global builds high-performance websites, web applications, mobile apps, SaaS products, and custom enterprise software.",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/ai-automation",
    title: "AI Automation Services & Intelligent Workflows",
    description:
      "Nexio Global delivers AI automation services, AI assistants, workflow automation, predictive analytics, and intelligent business systems.",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/cyber-security",
    title: "Cyber Security Services & Application Security Testing",
    description:
      "Nexio Global provides cybersecurity services, application security testing, vulnerability assessments, API security testing, and practical protection.",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/resources",
    title: "Resources",
    description:
      "Explore Nexio Global's portfolio of products and insights on technology, engineering, and digital strategy.",
    changefreq: "weekly",
    priority: 0.7,
  },
  {
    path: "/careers",
    title: "Careers",
    description:
      "Join Nexio Global and build the future of technology with a global team of engineers, designers, and strategists.",
    changefreq: "monthly",
    priority: 0.6,
  },
  {
    path: "/contact",
    title: "Contact Us",
    description:
      "Contact Nexio Global to discuss your digital transformation, AI automation, or cybersecurity needs.",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy",
    description:
      "Learn how Nexio Global collects, uses, and protects your personal information.",
    changefreq: "yearly",
    priority: 0.3,
  },
  {
    path: "/terms-of-service",
    title: "Terms of Service",
    description:
      "Read the Terms of Service for Nexio Global and understand how our website and services are governed.",
    changefreq: "yearly",
    priority: 0.3,
  },
  {
    path: "/services/digital-solutions",
    title: "Digital Solutions Services",
    description:
      "Explore Nexio Global's digital solutions services — web development, mobile apps, and enterprise software.",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/ai-automation",
    title: "AI & Automation Services",
    description:
      "Nexio Global's AI and automation services — intelligent assistants, workflow automation, and predictive analytics.",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/cloud-solutions",
    title: "Cloud Solutions Services",
    description:
      "Nexio Global's cloud infrastructure services — cloud migration, architecture, and managed cloud operations.",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/cybersecurity",
    title: "Cyber Security Services",
    description:
      "Nexio Global's cybersecurity services — penetration testing, vulnerability management, and GRC compliance.",
    changefreq: "monthly",
    priority: 0.8,
    noindex: true,
  },
  {
    path: "/services/technology-consulting",
    title: "Technology Consulting Services",
    description:
      "Nexio Global's technology consulting services — digital strategy, IT advisory, and transformation planning.",
    changefreq: "monthly",
    priority: 0.8,
  },
  ...blogPosts.map(
    (post): SiteRoute => ({
      path: `/resources/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      changefreq: "weekly",
      priority: 0.6,
      lastmod: post.date,
    })
  ),
  ...workItems.map(
    (item): SiteRoute => ({
      path: `/resources/work/${item.slug}`,
      title: item.title,
      description: item.description,
      changefreq: "monthly",
      priority: 0.6,
    })
  ),
];

export interface SitemapImage {
  url: string;
  title: string;
  caption?: string;
}

export interface SitemapImageEntry {
  page: string;
  images: SitemapImage[];
}

export const IMAGE_SITEMAP_ENTRIES: SitemapImageEntry[] = [
  {
    page: "/",
    images: workItems.slice(0, 3).map((item) => ({
      url: `${SITE_URL}${item.image}`,
      title: item.title,
      caption: item.description,
    })),
  },
  {
    page: "/resources",
    images: blogPosts.slice(0, 6).map((post) => ({
      url: post.image,
      title: post.title,
      caption: post.excerpt,
    })),
  },
];

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function buildSitemapXml(routes: SiteRoute[] = PUBLIC_ROUTES) {
  const entries = routes
    .filter((route) => !route.noindex)
    .map(
      (route) => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${route.lastmod ?? "2026-08-04"}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
}

export function buildImageSitemapXml(entries: SitemapImageEntry[] = IMAGE_SITEMAP_ENTRIES) {
  const urls = entries
    .map((entry) => {
      const images = entry.images
        .map(
          (image) => `    <image:image>
      <image:loc>${escapeXml(image.url)}</image:loc>
      <image:title>${escapeXml(image.title)}</image:title>
      ${image.caption ? `<image:caption>${escapeXml(image.caption)}</image:caption>` : ""}
    </image:image>`
        )
        .join("\n");

      return `  <url>
    <loc>${SITE_URL}${entry.page}</loc>
${images}
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
}

export function buildRobotsTxt() {
  return `# Nexio Global robots.txt
# https://nexiogbl.com

User-agent: *
Allow: /
Disallow: /assets/work/
Disallow: /*?*

User-agent: Googlebot
Allow: /
Disallow: /assets/work/

User-agent: Googlebot-Image
Allow: /assets/work/

User-agent: Bingbot
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
Sitemap: ${SITE_URL}/sitemap-images.xml
`;
}

export function buildHumansTxt() {
  return `# humans.txt — Nexio Global
# ${SITE_URL}/humans.txt

## TEAM
Nexio Global Engineering Team
Contact: ${CONTACT_EMAIL}
Location: Colombo, Sri Lanka (Remote-first)

## THANKS
Built with React, TypeScript, Vite, and Tailwind CSS.

## SITE
Last update: 2026-08-04
Language: English
Standards: HTML5, CSS3, WCAG 2.2
`;
}
