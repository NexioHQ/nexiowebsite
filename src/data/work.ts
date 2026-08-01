export interface WorkItem {
  title: string;
  type?: "Web App" | "Website" | "Dashboard" | "Mobile App";
  category: string;
  description: string;
  longDescription?: string;
  stack: string[];
  image: string;
  imageAlt: string;
  // Digital Solutions
  industry?: string;
  businessOutcome?: string;
  // AI & Automation
  problem?: string;
  aiSolution?: string;
  timeSaved?: string;
  roi?: string;
  // Cybersecurity
  engagementType?: string;
}

export const workItems: WorkItem[] = [
  {
    title: "Hotel Website & Portal",
    type: "Website",
    category: "Digital Solutions",
    description:
      "Hotel website & custom booking engine with real-time reservations and payment gateway integration for a hotel based in Nuwara Eliya, Sri Lanka.",
    longDescription:
      "A luxury heritage hotel nestled in the misty mountains of Nuwara Eliya, Sri Lanka, needed a digital presence as elegant as the estate itself. We designed and engineered a fully bespoke hotel website with a custom real-time booking engine, interactive room availability calendars, and seamless Stripe payment integration. Guests can browse curated room packages, make instant reservations, and receive automated confirmation emails, all from a stunning, mobile-first interface that reflects the forest retreat's premium character.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe API"],
    image: "/assets/work/hotel_website.png",
    imageAlt:
      "Luxury resort hotel pool surrounded by tropical greenery",
  },
  {
    title: "Enterprise GRC & Compliance Review",
    type: "Dashboard",
    category: "Cybersecurity",
    description:
      "Governance, Risk, and Compliance assessment featuring ISO 27001 auditing.",
    longDescription:
      "A leading enterprise required a comprehensive Governance, Risk, and Compliance (GRC) review to meet ISO 27001 certification standards. Our cybersecurity team conducted a deep-dive security posture assessment, identifying critical vulnerabilities and policy gaps across their infrastructure, access control, and incident response processes. We delivered a detailed risk register, remediation roadmap, and executive risk dashboard that gave leadership real-time visibility into compliance progress, accelerating their path to ISO 27001 certification.",
    stack: ["ISO 27001", "Python", "GRC Audit", "React"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?auto=format&fit=crop&w=1200&q=85",
    imageAlt:
      "Minimalist abstract representation of data security and ISO compliance",
  },
  {
    title: "WhatsApp Lead Automation AI Chatbot",
    type: "Web App",
    category: "AI & Automation",
    description:
      "Autonomous 24/7 WhatsApp AI agent for lead qualification and CRM syncing.",
    longDescription:
      "A fast-growing business needed to capture and qualify leads around the clock without adding sales headcount. We built an autonomous WhatsApp AI agent powered by OpenAI GPT models that engages prospects in natural conversation, qualifies leads based on custom criteria, handles FAQs, and instantly syncs qualified contact data to their CRM via n8n workflow automation. The system operates 24/7, responds in under 3 seconds, and has helped reduce lead response time from hours to seconds, dramatically improving conversion rates.",
    stack: ["OpenAI", "WhatsApp Cloud API", "Node.js", "n8n"],
    image: "/assets/work/whatsapp_ai_bot.png",
    imageAlt:
      "AI chatbot conversation interface on a smartphone screen",
  },
  {
    title: "Pulse Analytics Platform",
    type: "Dashboard",
    category: "Digital Solutions",
    description:
      "A real-time business intelligence dashboard that turns raw operational data into clear, actionable insights for decision makers.",
    longDescription:
      "Built for a regional logistics company, Pulse Analytics aggregates data across 12 operational systems into a single, live intelligence dashboard. Executive leadership can track KPIs, revenue trends, fleet performance, and customer SLA adherence in real time. The platform reduced reporting cycles from weekly to instant and surfaced $2M in annual savings by highlighting operational inefficiencies previously hidden in spreadsheets.",
    stack: ["React", "TypeScript", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Analytics dashboard with performance charts and KPI visualizations.",
  },
  {
    title: "Restful Sleep Monitoring App",
    type: "Mobile App",
    category: "Digital Solutions",
    description:
      "A smart sleep health app that tracks sleep cycles, detects disturbances, and delivers personalised AI coaching to help users build better rest habits.",
    longDescription:
      "Restful is a sleep health companion app designed for a wellness startup seeking to differentiate through meaningful health insights. We designed and built the full mobile experience, covering biometric data capture via wearable integrations through to an AI coaching engine that generates personalised sleep improvement plans. The app tracks sleep stages, snoring, heart rate variability, and ambient noise, presenting the data in beautifully designed nightly reports. Users receive actionable daily recommendations, bedtime reminders, and weekly trend analysis, making complex health data immediately understandable and actionable.",
    stack: ["React Native", "TensorFlow Lite", "HealthKit", "Node.js"],
    image: "/assets/work/restful_sleep_app.png",
    imageAlt: "Peaceful sleep environment with soft ambient lighting and a smartphone displaying sleep data.",
  },
  {
    title: "FreshMart Supermarket Management System",
    type: "Web App",
    category: "Digital Solutions",
    description:
      "A fully custom ERP-style management platform built for a supermarket chain, covering inventory, POS, supplier orders, and real-time sales analytics.",
    longDescription:
      "FreshMart is a mid-sized supermarket chain that had outgrown off-the-shelf retail software and needed a tailored solution that matched how their business actually operated. We designed and built a comprehensive supermarket management system from the ground up, featuring a fast, barcode-driven point-of-sale interface for cashier stations, real-time inventory tracking with low-stock alerts, automated supplier purchase order generation, and a management dashboard with live sales analytics, margin reports, and daily reconciliation tools. The system also includes staff scheduling, customer loyalty programme management, and expiry date tracking to reduce waste. Since launch, FreshMart has reduced stock-outs by 40% and cut manual administrative time by over 60%.",
    stack: ["React", "Node.js", "PostgreSQL", "Electron"],
    image: "/assets/work/freshmart_erp.png",
    imageAlt: "Supermarket aisle with fresh produce and modern retail environment.",
  },
];
