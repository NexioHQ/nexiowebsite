import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using the Nexio Global website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
      "If you do not agree with any part of these terms, you should not use our website or services.",
    ],
  },
  {
    title: "2. Description of Services",
    content: [
      "Nexio Global provides digital solutions, AI and automation services, cloud solutions, cybersecurity services, and technology consulting to businesses worldwide.",
      "Specific services and deliverables will be defined in individual proposals, statements of work, or service agreements entered into between you and Nexio Global.",
    ],
  },
  {
    title: "3. Use of the Website",
    content: [
      "You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use of, this website by any third party.",
      "You must not attempt to gain unauthorised access to any part of our website, the server on which it is hosted, or any systems connected to it.",
    ],
  },
  {
    title: "4. Intellectual Property",
    content: [
      "All content on this website, including text, graphics, logos, images, software, and code, is the property of Nexio Global or its licensors and is protected by intellectual property laws.",
      "You may not reproduce, distribute, modify, transmit, or use any content from our website without our prior written consent.",
    ],
  },
  {
    title: "5. Client Responsibilities",
    content: [
      "Clients engaging Nexio Global for services agree to provide accurate and complete information, cooperate with our team, and provide timely feedback to ensure successful project delivery.",
      "Clients are responsible for obtaining any necessary rights, licences, or permissions for content or materials they provide to us for use in their projects.",
    ],
  },
  {
    title: "6. Limitation of Liability",
    content: [
      "To the maximum extent permitted by law, Nexio Global shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to the use of our website or services.",
      "Our total liability for any claim arising out of or relating to our services shall not exceed the amount paid by you for the specific service giving rise to the claim.",
    ],
  },
  {
    title: "7. Disclaimers",
    content: [
      "Our website and services are provided on an \"as is\" and \"as available\" basis without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.",
      "We do not warrant that our website will be uninterrupted, error-free, or free of viruses or other harmful components.",
    ],
  },
  {
    title: "8. Third-Party Links",
    content: [
      "Our website may contain links to third-party websites that are not owned or controlled by Nexio Global.",
      "We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites.",
    ],
  },
  {
    title: "9. Termination",
    content: [
      "We may terminate or suspend your access to our website or services immediately, without prior notice or liability, for any reason whatsoever, including if you breach these Terms of Service.",
      "Upon termination, your right to use the website and services will cease immediately.",
    ],
  },
  {
    title: "10. Changes to These Terms",
    content: [
      "We reserve the right to modify or replace these Terms of Service at any time. Any changes will be effective immediately upon posting on this page.",
      "Your continued use of our website or services after any such changes constitutes your acceptance of the new terms.",
    ],
  },
  {
    title: "11. Governing Law",
    content: [
      "These Terms of Service shall be governed by and construed in accordance with the laws of Sri Lanka, without regard to its conflict of law provisions.",
      "Any disputes arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the courts of Sri Lanka.",
    ],
  },
  {
    title: "12. Contact Us",
    content: [
      "If you have any questions about these Terms of Service, please contact us at info@nexiogbl.com or visit www.nexiogbl.com.",
    ],
  },
];

export default function TermsOfService() {
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
                Terms of <span className="text-primary">Service</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Please read these terms carefully before using our website or engaging our services.
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
                  Welcome to Nexio Global. These Terms of Service govern your use of our website and the services we provide.
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

