export interface BlogPost {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  category: "engineering" | "ai" | "cloud" | "security" | "business";
  image: string;
  readTime: string;
}

export interface CaseStudy {
  title: string;
  excerpt: string;
  slug: string;
  client: string;
  industry: string;
  image: string;
  results: string[];
}

export const blogPosts: BlogPost[] = [
  {
    title: "How AI is Reshaping Enterprise Workflow Automation",
    excerpt: "Discover how intelligent automation is helping organisations reduce manual effort by up to 70% while improving accuracy and speed.",
    slug: "ai-reshaping-enterprise-workflow",
    date: "2026-07-15",
    category: "ai",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    readTime: "5 min read",
  },
  {
    title: "Zero Trust Architecture: A Practical Implementation Guide",
    excerpt: "Learn the key principles and step-by-step approach to implementing Zero Trust security in your organisation.",
    slug: "zero-trust-architecture-guide",
    date: "2026-07-08",
    category: "security",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&q=80",
    readTime: "8 min read",
  },
  {
    title: "Multi-Cloud Strategies: Avoiding Vendor Lock-In",
    excerpt: "A comprehensive look at designing cloud architectures that leverage the best of AWS, Azure, and GCP without creating dependencies.",
    slug: "multi-cloud-strategies-vendor-lockin",
    date: "2026-06-28",
    category: "cloud",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    readTime: "6 min read",
  },
  {
    title: "Building Scalable SaaS Platforms with Modern Architectures",
    excerpt: "From microservices to event-driven design, explore the patterns that power high-growth SaaS products.",
    slug: "scalable-saas-modern-architectures",
    date: "2026-06-20",
    category: "engineering",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    readTime: "7 min read",
  },
  {
    title: "Digital Transformation ROI: Measuring What Matters",
    excerpt: "Beyond vanity metrics. Learn how to quantify the real business impact of your technology investments.",
    slug: "digital-transformation-roi",
    date: "2026-06-12",
    category: "business",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    readTime: "4 min read",
  },
  {
    title: "DevOps Best Practices for Enterprise CI/CD Pipelines",
    excerpt: "Streamline your delivery pipeline with proven DevOps strategies that reduce deployment times and increase reliability.",
    slug: "devops-best-practices-cicd",
    date: "2026-06-05",
    category: "engineering",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&q=80",
    readTime: "6 min read",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Automating Claims Processing for a Leading Insurer",
    excerpt: "How we reduced claims processing time by 65% using AI-powered document extraction and automated workflows.",
    slug: "insurance-claims-automation",
    client: "Fortune 500 Insurance Company",
    industry: "Insurance & Finance",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
    results: ["65% faster processing", "92% accuracy rate", "$2.4M annual savings"],
  },
  {
    title: "Cloud Migration for a Global Logistics Provider",
    excerpt: "Migrating 200+ microservices from on-premise to a multi-cloud architecture with zero downtime.",
    slug: "logistics-cloud-migration",
    client: "International Logistics Corp",
    industry: "Logistics & Supply Chain",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    results: ["Zero downtime migration", "40% cost reduction", "99.99% uptime achieved"],
  },
  {
    title: "Building a Real-Time Analytics Platform for E-Commerce",
    excerpt: "Designing and deploying a real-time data pipeline processing 50M+ events daily for personalised customer experiences.",
    slug: "ecommerce-analytics-platform",
    client: "Leading E-Commerce Retailer",
    industry: "Retail & E-Commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    results: ["50M+ daily events processed", "23% increase in conversions", "Sub-second query response"],
  },
  {
    title: "Securing a FinTech Platform Against Emerging Threats",
    excerpt: "Implementing comprehensive security measures that achieved SOC2 Type II compliance in record time.",
    slug: "fintech-security-compliance",
    client: "Fast-Growing FinTech Startup",
    industry: "Financial Technology",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
    results: ["SOC2 Type II in 4 months", "Zero security incidents", "100% audit pass rate"],
  },
];
