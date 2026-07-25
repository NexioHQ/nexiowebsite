import { Layers } from "lucide-react";
import { ServicePage, type ServiceData } from "@/components/ServicePage";

const data: ServiceData = {
  title: "Digital Solutions",
  tagline: "We design and build high-performance web applications, SaaS platforms, and enterprise software that scale with your business.",
  description: "From concept through to deployment, our engineers and designers work closely with your team to deliver digital products that are fast, intuitive, and built to last. We specialise in complex, data-intensive applications that require both technical depth and polished user experience.",
  Icon: Layers,
  accent: "from-blue-500 to-blue-600",
  iconBg: "bg-blue-50 dark:bg-blue-500/10",
  iconColor: "text-blue-600 dark:text-blue-400",
  stats: [
    { value: "98%", label: "On-time delivery rate" },
    { value: "3x", label: "Average performance improvement" },
    { value: "50+", label: "Digital products shipped" },
  ],
  features: [
    { title: "Custom Web Applications", desc: "Scalable, performant web apps built with modern frameworks like React, Vue, and Next.js." },
    { title: "SaaS Platform Development", desc: "End-to-end SaaS architecture including multi-tenancy, billing, and user management." },
    { title: "Enterprise Software", desc: "Complex enterprise systems designed for high availability and thousands of concurrent users." },
    { title: "Mobile Applications", desc: "Cross-platform mobile apps using React Native and Flutter for iOS and Android." },
    { title: "API Design and Integration", desc: "RESTful and GraphQL APIs with third-party integrations and data synchronisation." },
    { title: "UI and UX Design", desc: "User-centred interface design that turns complexity into clarity for your end users." },
  ],
  process: [
    { step: "01", title: "Discovery and Requirements", desc: "We begin with a deep-dive into your business goals, user needs, and technical constraints to define a clear scope." },
    { step: "02", title: "Architecture and Design", desc: "Our team designs the system architecture and UI prototypes before a single line of production code is written." },
    { step: "03", title: "Agile Development", desc: "We build in two-week sprints with regular demos, ensuring you have full visibility and can course-correct early." },
    { step: "04", title: "Testing and QA", desc: "Rigorous automated and manual testing across all browsers, devices, and user scenarios." },
    { step: "05", title: "Launch and Handover", desc: "We handle deployment, documentation, and knowledge transfer so your team is fully empowered from day one." },
  ],
  why: [
    "Senior engineers with 5+ years of production experience on every project",
    "Modern stack choices that balance speed of delivery with long-term maintainability",
    "Transparent project management with weekly stakeholder updates",
    "Post-launch support and iterative improvement included",
  ],
};

export default function DigitalSolutions() {
  return <ServicePage data={data} />;
}
