import { ShieldHalf } from "lucide-react";
import { ServicePage, type ServiceData } from "@/components/ServicePage";

const data: ServiceData = {
  title: "Cybersecurity",
  tagline: "Proactive security strategies that protect your business, meet compliance requirements, and keep your customers' trust intact.",
  description: "In a world where breaches make headlines daily, security cannot be an afterthought. Our team of certified security professionals embeds enterprise-grade protection into your systems and processes — before attackers find the gaps you don't know exist.",
  Icon: ShieldHalf,
  accent: "from-emerald-500 to-emerald-600",
  iconBg: "bg-emerald-50 dark:bg-emerald-500/10",
  iconColor: "text-emerald-600 dark:text-emerald-400",
  stats: [
    { value: "100%", label: "Compliance target achievement rate" },
    { value: "6 wks", label: "Average time to compliance readiness" },
    { value: "0", label: "Post-engagement breaches reported" },
  ],
  features: [
    { title: "Penetration Testing", desc: "Ethical hacking across web applications, APIs, networks, and cloud infrastructure to expose vulnerabilities before attackers do." },
    { title: "Security Audits", desc: "Comprehensive reviews of your security posture, architecture, policies, and developer practices." },
    { title: "Compliance Consulting", desc: "Hands-on guidance to achieve ISO 27001, SOC 2, PCI-DSS, GDPR, and other regulatory frameworks." },
    { title: "Managed Security Operations", desc: "Continuous threat monitoring, detection, and response with a dedicated team watching your environment around the clock." },
    { title: "Secure Development Training", desc: "Upskilling your engineering team on secure coding practices, threat modelling, and vulnerability remediation." },
    { title: "Incident Response", desc: "Rapid containment, forensic investigation, and recovery support when a security incident occurs." },
  ],
  process: [
    { step: "01", title: "Security Assessment", desc: "An initial review of your current environment, identifying your most critical assets and likely threat vectors." },
    { step: "02", title: "Threat Modelling", desc: "Systematic analysis of how attackers could target your systems, prioritised by likelihood and business impact." },
    { step: "03", title: "Active Testing", desc: "Hands-on penetration testing and vulnerability scanning across all identified attack surfaces." },
    { step: "04", title: "Remediation", desc: "Detailed remediation guidance with prioritised fixes and direct engineering support to close identified gaps." },
    { step: "05", title: "Ongoing Monitoring", desc: "Continuous security monitoring, scheduled re-testing, and regular reporting to your leadership team." },
  ],
  why: [
    "Certified ethical hackers and CISSP-qualified security architects",
    "Industry-specific experience across fintech, healthcare, and enterprise environments",
    "Clear, actionable reports written for both technical and non-technical stakeholders",
    "Ongoing monitoring partnerships available post-assessment",
  ],
};

export default function Cybersecurity() {
  return <ServicePage data={data} />;
}
