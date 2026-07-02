import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section intersection detection
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/70 backdrop-blur-md border-b border-white/10 shadow-lg shadow-purple-500/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => handleLinkClick(e, "#")}
          className="flex items-center space-x-2 text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 hover:from-purple-300 hover:to-cyan-300 transition-all duration-300"
        >
          <span className="relative">
            BV
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 py-2 hover:text-cyan-300 ${
                    activeSection === link.href ? "text-cyan-400 font-semibold" : "text-slate-300"
                  }`}
                >
                  {link.name}
                  {activeSection === link.href && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="./Bhagyavi_Vangapandu_Resume.pdf"
            download="Bhagyavi_Vangapandu_Resume.pdf"
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-medium text-sm px-5 py-2.5 rounded-full transition-all duration-300 shadow-md shadow-purple-500/20 border border-white/10 hover:shadow-cyan-500/20"
          >
            <Download size={16} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center space-x-4">
          <a
            href="./Bhagyavi_Vangapandu_Resume.pdf"
            download="Bhagyavi_Vangapandu_Resume.pdf"
            className="flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium text-xs px-3.5 py-2 rounded-full transition-all duration-300 border border-white/10"
          >
            <Download size={14} />
            <span>Resume</span>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full bg-slate-950/95 border-b border-white/10 backdrop-blur-lg overflow-hidden"
          >
            <ul className="flex flex-col space-y-4 px-6 py-6 border-t border-white/5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`block py-2 text-base font-medium tracking-wide transition-all ${
                      activeSection === link.href
                        ? "text-cyan-400 pl-2 border-l-2 border-cyan-400"
                        : "text-slate-300 hover:text-cyan-300"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
