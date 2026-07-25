import { BrainCircuit } from "lucide-react";
import { ServicePage, type ServiceData } from "@/components/ServicePage";

const data: ServiceData = {
  title: "AI and Automation",
  tagline: "Intelligent systems that reduce manual effort, accelerate decisions, and create entirely new revenue opportunities for your organisation.",
  description: "We help businesses harness the power of artificial intelligence not as a buzzword, but as a practical tool that eliminates repetitive work, surfaces actionable insights, and enables products that were previously impossible to build.",
  Icon: BrainCircuit,
  accent: "from-violet-500 to-violet-600",
  iconBg: "bg-violet-50 dark:bg-violet-500/10",
  iconColor: "text-violet-600 dark:text-violet-400",
  stats: [
    { value: "60%", label: "Average reduction in manual workflows" },
    { value: "4x", label: "Faster decision-making cycles" },
    { value: "30+", label: "AI integrations delivered" },
  ],
  features: [
    { title: "Custom LLM Integrations", desc: "Production-grade integrations with GPT-4, Claude, Gemini, and open-source models tailored to your use case." },
    { title: "Intelligent Workflow Automation", desc: "End-to-end automation of complex business processes that previously required human judgement." },
    { title: "Predictive Analytics", desc: "ML models trained on your data to forecast demand, identify risk, and surface opportunities." },
    { title: "Natural Language Interfaces", desc: "AI-powered search, chat assistants, and document processing built into your existing products." },
    { title: "Computer Vision", desc: "Image recognition, quality inspection, and visual data extraction for manufacturing and logistics." },
    { title: "AI Strategy Consulting", desc: "Identifying where AI creates the highest ROI in your specific business context." },
  ],
  process: [
    { step: "01", title: "Opportunity Assessment", desc: "We audit your workflows to identify where AI delivers measurable value versus where it adds unnecessary complexity." },
    { step: "02", title: "Data Readiness Review", desc: "Evaluating your existing data assets and identifying gaps before building any models." },
    { step: "03", title: "Proof of Concept", desc: "A focused two-week sprint to validate the approach with real data before committing to full development." },
    { step: "04", title: "Build and Integration", desc: "Production-grade development with full integration into your existing tools and systems." },
    { step: "05", title: "Monitor and Improve", desc: "Continuous model monitoring, retraining, and performance optimisation post-launch." },
  ],
  why: [
    "Practical AI focus. We build tools that work, not demos that impress but fail in production",
    "Experience across GPT, Claude, open-source, and fine-tuned models",
    "ROI-first framing: every project is justified by measurable business outcomes",
    "Ongoing model maintenance and performance monitoring included",
  ],
};

export default function AIAutomation() {
  return <ServicePage data={data} />;
}
