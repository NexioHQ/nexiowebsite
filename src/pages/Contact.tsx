import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, CheckCircle2, Loader2 } from "lucide-react";

const services = [
  "Digital Solutions",
  "AI and Automation",
  "Cloud Solutions",
  "Cybersecurity",
  "Technology Consulting",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.country.trim()) e.country = "Country is required";
    if (!form.service) e.service = "Please select a service";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          subject: `[NexioGBL] New message from ${form.name}`,
          from_name: form.name,
          replyto: form.email,
          email: form.email,
          phone: form.phone || "Not provided",
          country: form.country,
          service: form.service,
          message: form.message,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setErrors({ form: "Something went wrong. Please try again." });
      }
    } catch {
      setErrors({ form: "Network error. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border text-sm bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all ${
      errors[field] ? "border-red-400" : "border-gray-200 dark:border-gray-800"
    }`;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-violet-500/5" />
          <div className="max-w-7xl mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Contact <span className="text-primary">Us</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ready to transform your business? Let's discuss how we can help you 
                achieve your technology goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you have a project in mind or just want to explore possibilities, 
                    our team is here to help.
                  </p>
                  <div className="mt-4 flex items-center gap-2.5 bg-primary/10 border border-primary/20 text-primary rounded-xl px-4 py-3 text-sm font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    <span>We typically respond within <span className="font-bold">24 hours</span></span>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm mb-0.5">Email</p>
                      <p className="text-muted-foreground text-sm">hello@nexio.biz</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm mb-0.5">Phone</p>
                      <p className="text-muted-foreground text-sm">+94 77 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm mb-0.5">Location</p>
                      <p className="text-muted-foreground text-sm">Colombo, Sri Lanka</p>
                      <p className="text-muted-foreground text-sm">Serving clients globally</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="lg:col-span-2"
              >
                <div className="bg-white dark:bg-card border border-gray-100 dark:border-gray-800 rounded-2xl p-8">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-500/10 flex items-center justify-center mb-5">
                        <CheckCircle2 size={32} className="text-green-500" strokeWidth={1.75} />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                        Thank you for reaching out. Our team will be in touch within one business day.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setForm({ name: "", email: "", country: "", phone: "", service: "", message: "" });
                        }}
                        className="mt-8 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-2xl font-bold mb-1">Let's Talk</h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        Tell us about your project.
                      </p>
                      <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary rounded-xl px-4 py-2.5 mb-7 text-sm font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        We'll get back to you within <span className="font-bold">24 hours</span>
                      </div>

                      <form onSubmit={handleSubmit} noValidate className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                            <input
                              type="text"
                              value={form.name}
                              onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
                              placeholder="Your full name"
                              className={inputClass("name")}
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                            <input
                              type="email"
                              value={form.email}
                              onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: "" }); }}
                              placeholder="you@company.com"
                              className={inputClass("email")}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-1.5">Country</label>
                            <input
                              type="text"
                              value={form.country}
                              onChange={(e) => { setForm({ ...form, country: e.target.value }); setErrors({ ...errors, country: "" }); }}
                              placeholder="Enter your country"
                              className={inputClass("country")}
                            />
                            {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-1.5">
                              Phone <span className="text-muted-foreground font-normal">(optional)</span>
                            </label>
                            <input
                              type="tel"
                              value={form.phone}
                              onChange={(e) => setForm({ ...form, phone: e.target.value })}
                              placeholder="+1 234 567 8900"
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 text-sm bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">Service</label>
                          <select
                            value={form.service}
                            onChange={(e) => { setForm({ ...form, service: e.target.value }); setErrors({ ...errors, service: "" }); }}
                            className={inputClass("service") + " appearance-none"}
                          >
                            <option value="">Select a service</option>
                            {services.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                          {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                          <textarea
                            rows={5}
                            value={form.message}
                            onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: "" }); }}
                            placeholder="Tell us about your project, goals, and timeline..."
                            className={inputClass("message") + " resize-none"}
                          />
                          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full bg-primary hover:bg-primary/90 disabled:opacity-70 text-white py-3.5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 mt-2"
                        >
                          {loading ? (
                            <>
                              <Loader2 size={16} className="animate-spin" />
                              Sending...
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </button>
                        {errors.form && (
                          <p className="text-red-500 text-sm text-center mt-2">{errors.form}</p>
                        )}
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
