export interface JobListing {
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  experience: string;
  description: string;
  slug: string;
}

export const jobListings: JobListing[] = [
  {
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote / Sri Lanka",
    type: "Full-time",
    experience: "5+ years",
    description: "Build and scale web applications using React, Node.js, and cloud-native architectures for enterprise clients.",
    slug: "senior-fullstack-engineer",
  },
  {
    title: "AI/ML Engineer",
    department: "AI & Data",
    location: "Remote / Sri Lanka",
    type: "Full-time",
    experience: "3+ years",
    description: "Design and deploy machine learning models and AI-powered automation solutions for real-world business problems.",
    slug: "ai-ml-engineer",
  },
  {
    title: "Cloud Solutions Architect",
    department: "Cloud & Infrastructure",
    location: "Remote",
    type: "Full-time",
    experience: "6+ years",
    description: "Architect multi-cloud solutions on AWS, Azure, and GCP. Lead migrations and design scalable infrastructure.",
    slug: "cloud-solutions-architect",
  },
  {
    title: "Cybersecurity Analyst",
    department: "Security",
    location: "Remote / Sri Lanka",
    type: "Full-time",
    experience: "3+ years",
    description: "Conduct penetration testing, security audits, and help clients achieve compliance certifications (ISO, SOC2).",
    slug: "cybersecurity-analyst",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Create beautiful, accessible, and user-centred designs for web and mobile applications across industries.",
    slug: "ui-ux-designer",
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote / Sri Lanka",
    type: "Full-time",
    experience: "4+ years",
    description: "Build and maintain CI/CD pipelines, container orchestration, and infrastructure-as-code for production systems.",
    slug: "devops-engineer",
  },
];

export const cultureValues = [
  {
    title: "Remote-First Culture",
    description: "Work from anywhere. We believe great talent isn't confined to a single location.",
    icon: "globe",
  },
  {
    title: "Continuous Learning",
    description: "Annual learning budgets, conference sponsorships, and dedicated time for skill development.",
    icon: "book",
  },
  {
    title: "Impactful Work",
    description: "Work on projects that transform businesses and touch millions of users worldwide.",
    icon: "rocket",
  },
  {
    title: "Work-Life Balance",
    description: "Flexible hours, generous PTO, and a culture that respects your time outside of work.",
    icon: "heart",
  },
];
