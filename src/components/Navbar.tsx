import { useState, useEffect, useRef } from "react";
import { useTheme } from "./theme-provider";
import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";

const solutionLinks = [
  { name: "Digital Solutions", href: "/solutions/digital-solutions" },
  { name: "AI & Automation", href: "/solutions/ai-automation" },
  { name: "Cybersecurity", href: "/solutions/cybersecurity" },
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

  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
  }, [location]);

  const isHome = location === "/";

  const linkClass = (active: boolean) =>
    scrolled || !isHome
      ? `text-sm font-medium transition-colors ${active ? "text-blue-400" : "text-gray-400 hover:text-white"}`
      : `text-sm font-medium transition-colors ${active ? "text-blue-300" : "text-blue-100/70 hover:text-white"}`;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${scrolled || !isHome ? "bg-[#0B1120]/90 backdrop-blur-lg border-b border-blue-900/20 py-3 shadow-lg shadow-black/10" : "bg-transparent py-5"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-bold text-white tracking-tight cursor-pointer font-display">
            nexio
            <span className="text-blue-400">.</span>
          </span>
        </Link>
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
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
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-[#0D1528] border border-blue-900/30 rounded-xl shadow-2xl shadow-black/30 py-2 z-50"
                      >
                        {solutionLinks.map((sl) => (
                          <Link key={sl.href} href={sl.href}>
                            <span className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-blue-500/10 hover:text-blue-300 transition-colors cursor-pointer">
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
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`p-2 rounded-full transition-colors ${scrolled || !isHome ? "text-gray-400 hover:text-white hover:bg-white/5" : "text-blue-200/70 hover:text-white hover:bg-white/5"}`}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          {!isHome && (
            <Link href="/contact">
              <span className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 cursor-pointer">
                Book a Consultation
              </span>
            </Link>
          )}
        </div>
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`p-2 rounded-full ${scrolled || !isHome ? "text-gray-400" : "text-blue-200/70"}`}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 ${scrolled || !isHome ? "text-gray-400" : "text-blue-200/70"}`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-blue-900/20 bg-[#0B1120]/95 backdrop-blur-lg"
          >
            <div className="flex flex-col py-4 px-6 gap-1">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.name}>
                      <button
                        onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                        className="flex items-center justify-between w-full text-left text-lg font-medium text-gray-300 hover:text-white py-2"
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
                                <span className="block text-base text-gray-400 hover:text-blue-300 py-1.5 cursor-pointer">
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
                    <span className="block text-lg font-medium text-gray-300 hover:text-white py-2 cursor-pointer">
                      {link.name}
                    </span>
                  </Link>
                );
              })}
              <Link href="/contact">
                <span className="block bg-blue-600 text-white px-5 py-3 rounded-full text-base font-medium mt-4 w-full text-center cursor-pointer hover:bg-blue-500 transition-colors">
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
