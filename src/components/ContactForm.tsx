import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Loader2 } from "lucide-react";
import { CONTACT_EMAIL_ADDRESS, createContactMailtoUrl } from "@/lib/contact-email";

const services = [
  "Digital Solutions",
  "AI and Automation",
  "Cloud Solutions",
  "Cybersecurity",
  "Technology Consulting",
  "Other",
];

interface ContactFormProps {
  open: boolean;
  onClose: () => void;
}

export function ContactForm({ open, onClose }: ContactFormProps) {
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
    window.location.href = createContactMailtoUrl(form);
    setSubmitted(true);
    setLoading(false);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", country: "", phone: "", service: "", message: "" });
      setErrors({});
    }, 400);
  };

  const field = (id: keyof typeof form, label: string, required = true) => ({
    id,
    label: required ? label : `${label} (optional)`,
    error: errors[id],
  });

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 24 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="relative bg-white dark:bg-gray-950 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full text-foreground/40 hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors z-10"
            >
              <X size={18} />
            </button>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-500/10 flex items-center justify-center mb-5">
                  <CheckCircle2 size={32} className="text-green-500" strokeWidth={1.75} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Email Draft Ready</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                  Your email app is opening with the message addressed to {CONTACT_EMAIL_ADDRESS}. Send it to reach our team.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-8 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold mb-1">Let's Talk</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Tell us about your project.
                </p>
                <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary rounded-xl px-4 py-2.5 mb-7 text-sm font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  We'll get back to you within <span className="font-bold">24 hours</span>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all ${errors.name ? "border-red-400" : "border-gray-200 dark:border-gray-800"}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: "" }); }}
                      placeholder="you@company.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all ${errors.email ? "border-red-400" : "border-gray-200 dark:border-gray-800"}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Country + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Country</label>
                      <input
                        type="text"
                        value={form.country}
                        onChange={(e) => { setForm({ ...form, country: e.target.value }); setErrors({ ...errors, country: "" }); }}
                        placeholder="Enter your country"
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all ${errors.country ? "border-red-400" : "border-gray-200 dark:border-gray-800"}`}
                      />
                      {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Phone <span className="text-muted-foreground font-normal">(optional)</span></label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+1 234 567 8900"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 text-sm bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Service</label>
                    <select
                      value={form.service}
                      onChange={(e) => { setForm({ ...form, service: e.target.value }); setErrors({ ...errors, service: "" }); }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all appearance-none ${errors.service ? "border-red-400" : "border-gray-200 dark:border-gray-800"}`}
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: "" }); }}
                      placeholder="Tell us about your project, goals, and timeline..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none ${errors.message ? "border-red-400" : "border-gray-200 dark:border-gray-800"}`}
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
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
