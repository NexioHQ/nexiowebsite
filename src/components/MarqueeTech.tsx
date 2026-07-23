const techStack = [
  { name: "React",         icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "TypeScript",    icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Node.js",       icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Python",        icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "AWS",           icon: "https://cdn.simpleicons.org/amazonwebservices/FF9900" },
  { name: "Google Cloud",  icon: "https://cdn.simpleicons.org/googlecloud/4285F4" },
  { name: "Azure",         icon: "https://cdn.simpleicons.org/microsoftazure/0078D4" },
  { name: "Docker",        icon: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Kubernetes",    icon: "https://cdn.simpleicons.org/kubernetes/326CE5" },
  { name: "PostgreSQL",    icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "MongoDB",       icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "TensorFlow",    icon: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
  { name: "OpenAI",        icon: "https://cdn.simpleicons.org/openai/000000" },
  { name: "Terraform",     icon: "https://cdn.simpleicons.org/terraform/7B42BC" },
  { name: "GitHub",        icon: "https://cdn.simpleicons.org/github/181717" },
  { name: "Next.js",       icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
];

// Duplicate for seamless infinite scroll
const doubled = [...techStack, ...techStack];

function TechItem({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm flex-shrink-0 select-none">
      <img src={icon} alt={name} className="w-5 h-5 object-contain" loading="lazy" />
      <span className="text-sm font-medium text-foreground/70 whitespace-nowrap">{name}</span>
    </div>
  );
}

export function MarqueeTech() {
  return (
    <section className="py-16 overflow-hidden bg-gray-50/50 dark:bg-background border-y border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground/60">
          Technologies we work with
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="flex gap-3 w-max animate-marquee">
          {doubled.map((item, i) => (
            <TechItem key={`${item.name}-${i}`} name={item.name} icon={item.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
