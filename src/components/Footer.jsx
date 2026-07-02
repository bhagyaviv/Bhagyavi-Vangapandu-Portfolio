import React from "react";
import { Github, Linkedin, Mail, ArrowUp, Download } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { name, socials } = portfolioData.personalInfo;

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
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
    <footer className="relative bg-slate-950 text-white border-t border-white/5 py-12">
      {/* Decorative top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* Info Column */}
        <div className="md:col-span-5 space-y-4">
          <div className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 w-fit">
            Bhagyavi Vangapandu
          </div>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            Building intelligent systems with AI, Cloud, and Full Stack technologies.
          </p>
          <div className="text-xs text-slate-500 font-mono pt-2">
            © 2026 All Rights Reserved.
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-4 space-y-4 text-left">
          <h4 className="text-xs font-bold font-mono tracking-widest text-slate-300 uppercase">Quick Nav</h4>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-400">
            <li>
              <a href="#about" onClick={(e) => handleScrollTo(e, "#about")} className="hover:text-cyan-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={(e) => handleScrollTo(e, "#experience")} className="hover:text-cyan-400 transition-colors">
                Experience
              </a>
            </li>
            <li>
              <a href="#education" onClick={(e) => handleScrollTo(e, "#education")} className="hover:text-cyan-400 transition-colors">
                Education
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => handleScrollTo(e, "#projects")} className="hover:text-cyan-400 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" onClick={(e) => handleScrollTo(e, "#skills")} className="hover:text-cyan-400 transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#certifications" onClick={(e) => handleScrollTo(e, "#certifications")} className="hover:text-cyan-400 transition-colors">
                Certifications
              </a>
            </li>
          </ul>
        </div>

        {/* Socials & Download CV */}
        <div className="md:col-span-3 space-y-4 flex flex-col items-start md:items-end">
          <h4 className="text-xs font-bold font-mono tracking-widest text-slate-300 uppercase md:text-right w-full">Connect</h4>
          
          <div className="flex gap-4">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-900 border border-white/5 rounded-lg text-slate-400 hover:text-purple-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-900 border border-white/5 rounded-lg text-slate-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${socials.email}`}
              className="p-2 bg-slate-900 border border-white/5 rounded-lg text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <a
            href="./Bhagyavi_Vangapandu_Resume.pdf"
            download="Bhagyavi_Vangapandu_Resume.pdf"
            className="flex items-center gap-2 bg-slate-900 border border-white/10 hover:border-purple-500/40 text-slate-300 hover:text-white px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 shadow-sm cursor-pointer"
          >
            <Download size={14} />
            <span>Download CV</span>
          </a>
        </div>
      </div>

      {/* Back to top float action button */}
      <button
        onClick={handleScrollToTop}
        className="absolute bottom-6 right-6 p-3 rounded-full bg-slate-900 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer shadow-lg shadow-black/50"
        aria-label="Scroll to top"
      >
        <ArrowUp size={16} />
      </button>
    </footer>
  );
}
