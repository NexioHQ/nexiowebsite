import { Compass } from "lucide-react";
import { ServicePage, type ServiceData } from "@/components/ServicePage";

const data: ServiceData = {
  title: "Technology Consulting",
  tagline: "Strategic guidance that aligns your technology investments with business outcomes, from long-term roadmaps to hands-on execution leadership.",
  description: "Many organisations have talented teams but struggle to translate technical capability into strategic business value. Our consulting practice bridges that gap — helping you make better technology decisions, build stronger teams, and execute transformations that actually stick.",
  Icon: Compass,
  accent: "from-amber-500 to-orange-500",
  iconBg: "bg-amber-50 dark:bg-amber-500/10",
  iconColor: "text-amber-600 dark:text-amber-400",
  stats: [
    { value: "3yr", label: "Average roadmap planning horizon" },
    { value: "85%", label: "Client retention rate year-on-year" },
    { value: "20+", label: "Digital transformations led" },
  ],
  features: [
    { title: "Digital Transformation Roadmaps", desc: "Clear, prioritised plans that take your organisation from its current state to its target digital vision." },
    { title: "Technology Stack Evaluation", desc: "Objective analysis of your current tools and recommendations for consolidation, migration, or modernisation." },
    { title: "CTO Advisory", desc: "Fractional CTO services for growing businesses that need strategic technology leadership without the full-time commitment." },
    { title: "Team Scaling and Hiring", desc: "Guidance on building and structuring engineering teams, including hiring process design and org structure." },
    { title: "Vendor Selection", desc: "Rigorous, unbiased evaluation of software vendors, platforms, and technology partners." },
    { title: "Technology Due Diligence", desc: "Pre-acquisition technical assessments for investors and acquirers evaluating technology assets." },
  ],
  process: [
    { step: "01", title: "Business and Technology Review", desc: "An honest assessment of where your technology currently sits relative to your business ambitions and industry benchmarks." },
    { step: "02", title: "Stakeholder Alignment", desc: "Workshops with your leadership team to align on priorities, constraints, and success criteria." },
    { step: "03", title: "Roadmap Development", desc: "A structured, phased plan with clear milestones, resource requirements, and risk mitigation strategies." },
    { step: "04", title: "Execution Support", desc: "Hands-on involvement during critical phases — governance reviews, architecture decisions, team coaching." },
    { step: "05", title: "Progress Tracking", desc: "Quarterly business reviews and KPI tracking to ensure the roadmap remains aligned with evolving business goals." },
  ],
  why: [
    "Former CTOs and VPs of Engineering who have built and scaled technology organisations",
    "Vendor-neutral recommendations — we have no referral arrangements with software vendors",
    "Practical focus: strategy that can be executed with your actual team and budget",
    "Board-level communication skills to translate technical strategy for non-technical leadership",
  ],
};

export default function TechnologyConsulting() {
  return <ServicePage data={data} />;
}
