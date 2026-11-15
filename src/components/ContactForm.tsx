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
  defaultService?: string;
}

export function ContactForm({ open, onClose, defaultService = "" }: ContactFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    service: defaultService,
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
      setForm({ name: "", email: "", country: "", phone: "", service: defaultService, message: "" });
      setErrors({});
    }, 400);
  };

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
            role="dialog"
            aria-modal="true"
            aria-label="Contact form"
            className="relative bg-white dark:bg-gray-950 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full text-foreground/40 hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors z-10"
              aria-label="Close contact form"
            >
              <X size={18} />
            </button>

            {submitted ? (
              <div className="p-10 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                  <CheckCircle2 className="h-7 w-7 text-emerald-500" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">Message ready to send</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Your email client should have opened with your message pre-filled.
                  If it didn&rsquo;t, email us directly at {CONTACT_EMAIL_ADDRESS}.
                </p>
                <button
                  onClick={handleClose}
                  className="bg-primary text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="p-6 sm:p-8">
                <h3 className="font-display text-2xl font-bold mb-1">Get in touch</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Tell us about your project and we&rsquo;ll get back to you.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
                        placeholder="Your name"
                        aria-invalid={!!errors.name}
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all ${errors.name ? "border-red-400" : "border-gray-200 dark:border-gray-800"}`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                      <input
                        id="contact-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: "" }); }}
                        placeholder="you@company.com"
                        aria-invalid={!!errors.email}
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all ${errors.email ? "border-red-400" : "border-gray-200 dark:border-gray-800"}`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-country" className="block text-sm font-medium text-foreground mb-1.5">Country</label>
                      <input
                        id="contact-country"
                        type="text"
                        value={form.country}
                        onChange={(e) => { setForm({ ...form, country: e.target.value }); setErrors({ ...errors, country: "" }); }}
                        placeholder="Your country"
                        aria-invalid={!!errors.country}
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all ${errors.country ? "border-red-400" : "border-gray-200 dark:border-gray-800"}`}
                      />
                      {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-medium text-foreground mb-1.5">Phone (optional)</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="Your phone number"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 text-sm bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block text-sm font-medium text-foreground mb-1.5">Service</label>
                    <select
                      id="contact-service"
                      value={form.service}
                      onChange={(e) => { setForm({ ...form, service: e.target.value }); setErrors({ ...errors, service: "" }); }}
                      aria-invalid={!!errors.service}
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all appearance-none ${errors.service ? "border-red-400" : "border-gray-200 dark:border-gray-800"}`}
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: "" }); }}
                      placeholder="Tell us about your project, goals, and timeline..."
                      aria-invalid={!!errors.message}
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
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
