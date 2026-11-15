const techStack = [
  // Digital Solutions & Software Engineering
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", category: "Digital Solutions" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000", category: "Digital Solutions" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", category: "Digital Solutions" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933", category: "Digital Solutions" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", category: "Digital Solutions" },
  { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B", category: "Digital Solutions" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1", category: "Digital Solutions" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248", category: "Digital Solutions" },
  { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql/E10098", category: "Digital Solutions" },

  // AI & Automation
  { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai/412991", category: "AI & Automation" },
  { name: "Anthropic", icon: "https://cdn.simpleicons.org/anthropic/D97757", category: "AI & Automation" },
  { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain/1C3C3C", category: "AI & Automation" },
  { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00", category: "AI & Automation" },
  { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch/EE4C2C", category: "AI & Automation" },
  { name: "Zapier", icon: "https://cdn.simpleicons.org/zapier/FF4A00", category: "AI & Automation" },
  { name: "Make", icon: "https://cdn.simpleicons.org/make/6D00FF", category: "AI & Automation" },
  { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/EA4B71", category: "AI & Automation" },

  // Cybersecurity & Cloud Infrastructure
  { name: "AWS", icon: "https://cdn.simpleicons.org/amazonwebservices/FF9900", category: "Cybersecurity & Cloud" },
  { name: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud/4285F4", category: "Cybersecurity & Cloud" },
  { name: "Microsoft Azure", icon: "https://cdn.simpleicons.org/microsoftazure/0078D4", category: "Cybersecurity & Cloud" },
  { name: "Cloudflare", icon: "https://cdn.simpleicons.org/cloudflare/F38020", category: "Cybersecurity & Cloud" },
  { name: "CrowdStrike", icon: "https://cdn.simpleicons.org/crowdstrike/FC0000", category: "Cybersecurity & Cloud" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED", category: "Cybersecurity & Cloud" },
  { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326CE5", category: "Cybersecurity & Cloud" },
  { name: "Terraform", icon: "https://cdn.simpleicons.org/terraform/7B42BC", category: "Cybersecurity & Cloud" },
  { name: "Datadog", icon: "https://cdn.simpleicons.org/datadog/632CA6", category: "Cybersecurity & Cloud" },
];

// Duplicate for seamless infinite scroll
const doubled = [...techStack, ...techStack];

function TechItem({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white dark:bg-card border border-gray-200/80 dark:border-white/10 shadow-sm flex-shrink-0 select-none hover:border-primary/40 transition-colors">
      <img src={icon} alt={name} width={20} height={20} className="w-5 h-5 object-contain" loading="lazy" fetchPriority="low" referrerPolicy="no-referrer" />
      <span className="text-sm font-medium text-foreground/80 whitespace-nowrap">{name}</span>
    </div>
  );
}

export function MarqueeTech() {
  return (
    <section className="py-12 overflow-hidden bg-muted/30 border-y border-border relative">
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/70">
          Platforms, Cloud Ecosystems & Security Vendors We Build With
        </p>
      </div>

      {/* Gradient Mask Overlays for Edge Fading */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-4 w-max animate-marquee py-1">
          {doubled.map((item, i) => (
            <TechItem key={`${item.name}-${i}`} name={item.name} icon={item.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}