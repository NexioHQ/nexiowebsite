import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Target, Eye, Users, Award, Globe, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We exist to empower businesses with technology that creates lasting competitive advantage.",
  },
  {
    icon: Eye,
    title: "Visionary Thinking",
    description: "We look beyond today's challenges to architect solutions that scale for tomorrow.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We don't just deliver projects. We become an extension of your team."
  },
  {
    icon: Award,
    title: "Excellence Always",
    description: "Every line of code, every design decision, every interaction reflects our commitment to quality.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Serving clients across continents with diverse perspectives and world-class expertise.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay at the forefront of technology to bring cutting-edge solutions to every engagement.",
  },
];
const stats = [
  { value: "30+", label: "Projects Delivered" },
  { value: "20+", label: "Enterprise Clients" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-violet-500/5" />
          <div className="max-w-7xl mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                About <span className="text-primary">Nexio</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are a technology company dedicated to transforming businesses through innovative digital solutions.
                Founded with the belief that every organisation deserves access to world-class technology,
                we partner with businesses to build, scale, and secure their digital future.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gray-50/70 dark:bg-card/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To empower organisations of all sizes with enterprise-grade technology solutions that
                  drive growth, efficiency, and innovation. We bridge the gap between complex technology
                  and real business outcomes.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-bold">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To be the most trusted technology partner for businesses worldwide,
                  known for delivering transformative solutions that create measurable impact
                  and lasting value for our clients and their customers.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-50/70 dark:bg-card/20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-4xl font-bold tracking-tight mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide every decision, every project, and every interaction.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white dark:bg-card border border-gray-100 dark:border-gray-800 rounded-2xl p-7 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon size={20} className="text-primary" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold tracking-tight">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Nexio was born from a simple observation: too many businesses struggle to leverage
                  technology effectively. While large enterprises have dedicated technology teams,
                  growing businesses often lack the expertise to make the right technology decisions.
                </p>
                <p>
                  We set out to change that. By assembling a team of experienced engineers, architects,
                  and consultants from across the globe, we created a company that delivers enterprise-level
                  technology solutions with the agility and personal attention of a dedicated partner.
                </p>
                <p>
                  Today, we serve clients across the globe, helping businesses build scalable applications,
                  implement AI solutions, migrate to the cloud, and secure their digital assets.
                  Every project we take on is a partnership. We succeed when our clients succeed.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
