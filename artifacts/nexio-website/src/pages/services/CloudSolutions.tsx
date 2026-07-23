import { Cloud } from "lucide-react";
import { ServicePage, type ServiceData } from "@/components/ServicePage";

const data: ServiceData = {
  num: "03",
  title: "Cloud Solutions",
  tagline: "Cloud infrastructure that scales with your ambitions — architected for performance, designed for resilience, and managed for peace of mind.",
  description: "Whether you are migrating from on-premise infrastructure or optimising an existing cloud environment, our team brings deep expertise across AWS, Google Cloud, and Azure to help you run faster, spend less, and sleep better.",
  Icon: Cloud,
  accent: "from-cyan-500 to-cyan-600",
  iconBg: "bg-cyan-50 dark:bg-cyan-500/10",
  iconColor: "text-cyan-600 dark:text-cyan-400",
  stats: [
    { value: "40%", label: "Average infrastructure cost reduction" },
    { value: "99.9%", label: "Uptime SLA target" },
    { value: "0", label: "Migration downtime incidents" },
  ],
  features: [
    { title: "Cloud Migration", desc: "Zero-downtime migrations from on-premise or legacy cloud environments to modern, optimised infrastructure." },
    { title: "Multi-Cloud Architecture", desc: "Vendor-neutral architecture strategies that avoid lock-in and maximise resilience." },
    { title: "DevOps and CI/CD", desc: "Automated deployment pipelines, infrastructure-as-code, and developer tooling that accelerates your team." },
    { title: "Managed Cloud Operations", desc: "24/7 monitoring, incident response, and proactive optimisation of your cloud environment." },
    { title: "Cost Optimisation", desc: "Right-sizing, reserved instance strategy, and architectural refactoring to reduce your monthly cloud bill." },
    { title: "Disaster Recovery", desc: "Robust backup strategies and tested recovery plans that meet your RTO and RPO requirements." },
  ],
  process: [
    { step: "01", title: "Infrastructure Audit", desc: "A comprehensive review of your current environment, identifying performance bottlenecks and cost inefficiencies." },
    { step: "02", title: "Architecture Design", desc: "Designing a target-state architecture with clear migration path, cost projections, and risk analysis." },
    { step: "03", title: "Migration Execution", desc: "Phased migration with rollback plans at every stage to ensure business continuity throughout." },
    { step: "04", title: "Optimisation", desc: "Post-migration tuning of performance, security posture, and cost allocation." },
    { step: "05", title: "Ongoing Management", desc: "Proactive monitoring, patching, and scaling support to keep your environment in peak condition." },
  ],
  why: [
    "AWS Advanced Partner with certified solutions architects on every engagement",
    "Infrastructure-as-code approach means your environment is always reproducible and auditable",
    "Cost transparency: we provide monthly cost breakdowns and proactive optimisation recommendations",
    "24/7 on-call support with defined SLA response times",
  ],
};

export default function CloudSolutions() {
  return <ServicePage data={data} />;
}
