import { useState, useEffect, useRef } from "react";
import { useTheme } from "./theme-provider";
import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";

const solutionLinks = [
  { name: "Digital Solutions", href: "/solutions/digital-solutions" },
  { name: "AI and Automation", href: "/solutions/ai-automation" },
  { name: "Cloud Solutions", href: "/solutions/cloud-solutions" },
  { name: "Cybersecurity", href: "/solutions/cybersecurity" },
  { name: "Technology Consulting", href: "/solutions/technology-consulting" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Solutions", href: "/solutions/digital-solutions", hasDropdown: true },
  { name: "Resources", href: "/resources" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
  }, [location]);

  const isHome = location === "/";

  const linkClass = (active: boolean) =>
    scrolled || !isHome
      ? `text-sm font-medium transition-colors ${active ? "text-primary" : "text-foreground/80 hover:text-primary"}`
      : `text-sm font-medium transition-colors ${active ? "text-white" : "text-white/90 hover:text-white"}`;

  const iconClass = scrolled || !isHome ? "text-foreground/70" : "text-white/80";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled || !isHome
          ? "bg-white/80 dark:bg-black/60 backdrop-blur-lg border-b border-gray-200/60 dark:border-gray-800/50 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-semibold text-primary tracking-tight cursor-pointer">nexio</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = location === link.href || (link.href !== "/" && location.startsWith(link.href));

            if (link.hasDropdown) {
              return (
                <div key={link.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setSolutionsOpen(!solutionsOpen)}
                    onMouseEnter={() => setSolutionsOpen(true)}
                    className={`${linkClass(isActive)} inline-flex items-center gap-1`}
                  >
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {solutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        onMouseEnter={() => setSolutionsOpen(true)}
                        onMouseLeave={() => setSolutionsOpen(false)}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl shadow-xl py-2 z-50"
                      >
                        {solutionLinks.map((sl) => (
                          <Link key={sl.href} href={sl.href}>
                            <span className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-primary transition-colors cursor-pointer">
                              {sl.name}
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link key={link.name} href={link.href}>
                <span className={`${linkClass(isActive)} cursor-pointer`}>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`p-2 rounded-full hover:bg-white/10 dark:hover:bg-gray-800/60 transition-colors ${iconClass}`}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link href="/contact">
            <span className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105 shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] cursor-pointer">
              Book a Consultation
            </span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`p-2 rounded-full ${iconClass}`}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 ${iconClass}`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg"
          >
            <div className="flex flex-col py-4 px-6 gap-1">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.name}>
                      <button
                        onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                        className="flex items-center justify-between w-full text-left text-lg font-medium text-foreground/80 hover:text-primary py-2"
                      >
                        {link.name}
                        <ChevronDown size={16} className={`transition-transform duration-200 ${mobileSolutionsOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileSolutionsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-1"
                          >
                            {solutionLinks.map((sl) => (
                              <Link key={sl.href} href={sl.href}>
                                <span className="block text-base text-foreground/70 hover:text-primary py-1.5 cursor-pointer">
                                  {sl.name}
                                </span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link key={link.name} href={link.href}>
                    <span className="block text-lg font-medium text-foreground/80 hover:text-primary py-2 cursor-pointer">
                      {link.name}
                    </span>
                  </Link>
                );
              })}
              <Link href="/contact">
                <span className="block bg-primary text-white px-5 py-3 rounded-full text-base font-medium mt-4 w-full text-center cursor-pointer">
                  Book a Consultation
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
