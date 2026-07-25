export interface WorkItem {
  title: string;
  type: "Web App" | "Website" | "Dashboard" | "Mobile App";
  category: string;
  description: string;
  stack: string[];
  image: string;
}

export const workItems: WorkItem[] = [
  {
    title: "Pulse Analytics Platform",
    type: "Dashboard",
    category: "Digital Solutions",
    description: "A real-time business intelligence dashboard that turns raw operational data into clear, actionable insights for decision makers.",
    stack: ["React", "TypeScript", "Node.js"],
    image: "/work/pulse-analytics.png",
  },
  {
    title: "Aurora Commerce Storefront",
    type: "Website",
    category: "Digital Solutions",
    description: "A high-converting e-commerce experience with lightning-fast product discovery, seamless checkout, and a fully managed admin suite.",
    stack: ["Next.js", "Stripe", "Tailwind CSS"],
    image: "/work/aurora-commerce.png",
  },
  {
    title: "Finora Mobile Banking",
    type: "Mobile App",
    category: "Digital Solutions",
    description: "A secure and intuitive mobile banking experience featuring instant transfers, smart budgeting, and biometric authentication.",
    stack: ["React Native", "Node.js", "PostgreSQL"],
    image: "/work/finora-banking.png",
  },
  {
    title: "Nimbus Cloud Console",
    type: "Web App",
    category: "Cloud Solutions",
    description: "A unified cloud operations console for monitoring infrastructure health, costs, and deployments across multiple providers.",
    stack: ["React", "AWS", "Kubernetes"],
    image: "/work/nimbus-console.png",
  },
  {
    title: "Sentinel Security Center",
    type: "Dashboard",
    category: "Cybersecurity",
    description: "A security operations dashboard that surfaces threats in real time with automated alerting, incident timelines, and compliance reporting.",
    stack: ["React", "Python", "Elasticsearch"],
    image: "/work/sentinel-security.png",
  },
  {
    title: "Echo AI Support Assistant",
    type: "Web App",
    category: "AI and Automation",
    description: "An intelligent customer support assistant that resolves common queries instantly and hands off complex cases to human agents.",
    stack: ["Next.js", "OpenAI", "LangChain"],
    image: "/work/echo-assistant.png",
  },
];
