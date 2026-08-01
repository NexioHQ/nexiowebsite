import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "We collect information you provide directly to us, such as your name, email address, phone number, country, and message content when you contact us through our website or book a consultation.",
      "We may also collect information automatically when you visit our website, including your IP address, browser type, device information, pages visited, and referring URLs through the use of cookies and similar technologies.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "We use the information we collect to respond to your enquiries, provide the services you request, improve our website and services, and communicate with you about our offerings.",
      "We may also use your information to personalise your experience, analyse usage patterns, and ensure the security and integrity of our platform.",
    ],
  },
  {
    title: "3. Cookies and Tracking Technologies",
    content: [
      "Our website uses cookies to enhance your browsing experience, remember your preferences, and understand how visitors interact with our site.",
      "You can control cookies through your browser settings. However, disabling cookies may affect the functionality of certain parts of our website.",
    ],
  },
  {
    title: "4. How We Share Your Information",
    content: [
      "We do not sell, trade, or rent your personal information to third parties.",
      "We may share your information with trusted service providers who assist us in operating our website and delivering our services, provided they agree to keep your information confidential.",
      "We may disclose your information when required by law, regulation, or legal process, or to protect the rights, property, or safety of Nexio Global, our users, or others.",
    ],
  },
  {
    title: "5. Data Security",
    content: [
      "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.",
      "While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee its absolute security.",
    ],
  },
  {
    title: "6. Your Rights",
    content: [
      "You have the right to access, update, or delete the personal information we hold about you.",
      "You may also object to or restrict certain processing of your data, and you have the right to data portability where applicable.",
      "To exercise any of these rights, please contact us at info@nexiogbl.com.",
    ],
  },
  {
    title: "7. Third-Party Links",
    content: [
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.",
      "We encourage you to review the privacy policies of any third-party websites you visit.",
    ],
  },
  {
    title: "8. Children's Privacy",
    content: [
      "Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children.",
      "If you believe a child has provided us with personal information, please contact us and we will take steps to remove such information.",
    ],
  },
  {
    title: "9. Changes to This Privacy Policy",
    content: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.",
      "We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.",
    ],
  },
  {
    title: "10. Contact Us",
    content: [
      "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at info@nexiogbl.com or visit www.nexiogbl.com.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-violet-500/5" />
          <div className="max-w-7xl mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Privacy <span className="text-primary">Policy</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Your privacy matters to us. This policy explains how Nexio Global collects, uses, and protects your personal information.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-24">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Last Updated: July 2026</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Nexio Global ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and safeguard the information you provide when using our website and services.
                </p>
              </div>

              {sections.map((section) => (
                <div key={section.title} className="space-y-3">
                  <h3 className="text-xl font-bold">{section.title}</h3>
                  <div className="space-y-3 text-muted-foreground leading-relaxed">
                    {section.content.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

