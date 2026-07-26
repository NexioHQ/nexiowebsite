export interface WorkItem {
  title: string;
  type: "Web App" | "Website" | "Dashboard" | "Mobile App";
  category: string;
  description: string;
  stack: string[];
  image: string;
  imageAlt: string;
}

export const workItems: WorkItem[] = [
  {
    title: "Pulse Analytics Platform",
    type: "Dashboard",
    category: "Digital Solutions",
    description: "A real-time business intelligence dashboard that turns raw operational data into clear, actionable insights for decision makers.",
    stack: ["React", "TypeScript", "Node.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Analytics dashboard with performance charts and KPI visualizations. Photo by Luke Chesser on Unsplash.",
  },
  {
    title: "Aurora Commerce Storefront",
    type: "Website",
    category: "Digital Solutions",
    description: "A high-converting e-commerce experience with lightning-fast product discovery, seamless checkout, and a fully managed admin suite.",
    stack: ["Next.js", "Stripe", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1539278383962-a7774385fa02?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Laptop showing a modern online storefront and product catalog. Photo by charlesdeluvio on Unsplash.",
  },
  {
    title: "Finora Mobile Banking",
    type: "Mobile App",
    category: "Digital Solutions",
    description: "A secure and intuitive mobile banking experience featuring instant transfers, smart budgeting, and biometric authentication.",
    stack: ["React Native", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Mobile banking app with financial charts on a smartphone. Photo by Balázs Kétyi on Unsplash.",
  },
  {
    title: "Nimbus Cloud Console",
    type: "Web App",
    category: "Cloud Solutions",
    description: "A unified cloud operations console for monitoring infrastructure health, costs, and deployments across multiple providers.",
    stack: ["React", "AWS", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1516031190212-da133013de50?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Cloud operations workspace with server consoles and terminal screens. Photo by Pankaj Patel on Unsplash.",
  },
  {
    title: "Sentinel Security Center",
    type: "Dashboard",
    category: "Cybersecurity",
    description: "A security operations dashboard that surfaces threats in real time with automated alerting, incident timelines, and compliance reporting.",
    stack: ["React", "Python", "Elasticsearch"],
    image: "https://images.unsplash.com/photo-1584291527908-033f4d6542c8?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Security monitoring dashboard with threat alerts and network activity. Photo by Clay Banks on Unsplash.",
  },
  {
    title: "Echo AI Support Assistant",
    type: "Web App",
    category: "AI and Automation",
    description: "An intelligent customer support assistant that resolves common queries instantly and hands off complex cases to human agents.",
    stack: ["Next.js", "OpenAI", "LangChain"],
    image: "https://images.unsplash.com/photo-1758780690553-8bc703fabca6?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "AI chat assistant interface displayed on a laptop. Photo by Herry Sucahya on Unsplash.",
  },
];
