import { readFileSync, writeFileSync } from 'fs';

const filePath = "C:/Users/dhanukan/OneDrive - MILLENNIUM I.T.E.S.P (PRIVATE) LIMITED/Desktop/Nexio Global/nexio v2/nexiowebsite/src/pages/Solutions.tsx";

let content = readFileSync(filePath, 'utf8');
console.log(`Current length: ${content.length}`);

// We need to replace the solutions array and imports
// The import line has Monitor, Cpu, Cloud, ShieldCheck, BarChart3
// New import should have Monitor, Cpu, ShieldCheck, ArrowRight

// Fix imports
content = content.replace(
    'import { Monitor, Cpu, Cloud, ShieldCheck, BarChart3, ArrowRight } from "lucide-react";',
    'import { Monitor, Cpu, ShieldCheck, ArrowRight } from "lucide-react";'
);

// Replace the solutions array entirely
const oldSolutionsStart = content.indexOf('const solutions = [');
const oldSolutionsEnd = content.indexOf('];', oldSolutionsStart) + 2;

const newSolutions = `const solutions = [
  {
    icon: Monitor,
    title: "Software & Web Development",
    description: "We design and build high-performance web applications, SaaS platforms, and enterprise software tailored to your business model.",
    features: ["Custom web and mobile applications", "SaaS platform architecture", "Legacy system modernisation", "API design and integration"],
    accent: "from-blue-500 to-blue-600",
    iconBg: "bg-blue-50 dark:bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
    href: "/solutions/digital-solutions",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description: "Intelligent systems that reduce manual effort, accelerate decisions, and unlock new revenue streams for your organisation.",
    features: ["AI-powered workflow automation", "Custom LLM integrations", "Predictive analytics solutions", "Natural language processing"],
    accent: "from-violet-500 to-violet-600",
    iconBg: "bg-violet-50 dark:bg-violet-500/10",
    iconColor: "text-violet-600 dark:text-violet-400",
    href: "/solutions/ai-automation",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description: "Proactive security strategies that protect your business, meet compliance requirements, and keep your customers' trust intact.",
    features: ["Penetration testing and audits", "Compliance consulting (ISO, SOC2)", "Managed security operations", "Incident response planning"],
    accent: "from-emerald-500 to-emerald-600",
    iconBg: "bg-emerald-50 dark:bg-emerald-500/10",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    href: "/solutions/cybersecurity",
  },
];`;

content = content.substring(0, oldSolutionsStart) + newSolutions + content.substring(oldSolutionsEnd);

writeFileSync(filePath, content, 'utf8');
console.log(`File written. New length: ${content.length}`);

// Verify
const opens = (content.match(/<(div|section|main|span|h1|h3|p|motion\.nav|motion\.div|Link|motion\.section|Footer|Navbar) /g)||[]).length;
const closes = (content.match(/<\/(div|section|main|span|h1|h3|p|motion\.nav|motion\.div|Link|motion\.section|Footer|Navbar)>/g)||[]).length;
console.log(`Open tags: ${opens}, Close tags: ${closes}`);
