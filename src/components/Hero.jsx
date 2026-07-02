import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, MapPin, GraduationCap, Star, ArrowRight, Download, Terminal, Circle, Code2, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData, codingProfiles } from "../data/portfolioData";

export default function Hero() {
  const { name, roles, location, university, cgpa, socials } = portfolioData.personalInfo;
  
  // Terminal text simulation state
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [terminalState, setTerminalState] = useState("booting"); // booting, loading, ready

  const logs = [
    { text: "> booting bhagyavi.dev", delay: 100 },
    { text: "✓ loading profile data", delay: 600 },
    { text: "✓ loading AI & LLM stack", delay: 1100 },
    { text: "✓ loading certifications (AWS, Oracle, Copilot)", delay: 1600 },
    { text: "✓ loading cloud modules", delay: 2000 },
    { text: "✓ loading open-source modules", delay: 2400 },
    { text: "✓ status: available for internships", delay: 2800 },
    { text: "> ready", delay: 3200 }
  ];

  useEffect(() => {
    logs.forEach((log) => {
      setTimeout(() => {
        setTerminalLogs((prev) => [...prev, log.text]);
        if (log.text === "> ready") {
          setTerminalState("ready");
        }
      }, log.delay);
    });
  }, []);

  // Cycle through roles animation
  const [roleIndex, setRoleIndex] = useState(0);
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(roleInterval);
  }, [roles.length]);

  const handleScrollTo = (id) => {
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
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-slate-950 text-white"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        {/* Left Side: Developer Info */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 text-purple-300 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide w-fit"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>Open to Internships & Collaborations</span>
          </motion.div>

          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
            >
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                {name}
              </span>
            </motion.h1>

            {/* Role Rotation */}
            <div className="h-10 sm:h-12 overflow-hidden flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-lg sm:text-2xl md:text-3xl font-medium text-slate-300 tracking-wide font-mono flex items-center"
                >
                  <span className="text-cyan-400 mr-2">&gt;</span>
                  {roles[roleIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-300 text-sm max-w-lg mt-2"
          >
            <div className="flex items-center space-x-3 bg-white/5 border border-white/10 p-3.5 rounded-xl backdrop-blur-sm">
              <MapPin className="text-purple-400 h-5 w-5 shrink-0" />
              <span>{location}</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/5 border border-white/10 p-3.5 rounded-xl backdrop-blur-sm">
              <GraduationCap className="text-blue-400 h-5 w-5 shrink-0" />
              <span>B.Tech CSE @ KL University</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/5 border border-white/10 p-3.5 rounded-xl backdrop-blur-sm">
              <Star className="text-cyan-400 h-5 w-5 shrink-0" />
              <span>CGPA: {cgpa}</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/5 border border-white/10 p-3.5 rounded-xl backdrop-blur-sm">
              <span className="text-green-400 font-mono text-base shrink-0 font-bold">🚀</span>
              <span>Available for Summer Internships</span>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button
              onClick={() => handleScrollTo("#projects")}
              className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-cyan-500/30 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleScrollTo("#contact"); }}
              className="flex items-center gap-2 bg-white/5 border border-white/15 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm cursor-pointer"
            >
              <span>Contact Me</span>
            </a>

            <a
              href="./Bhagyavi_Vangapandu_Resume.pdf"
              download="Bhagyavi_Vangapandu_Resume.pdf"
              className="flex items-center gap-2 bg-slate-900 border border-purple-500/30 hover:border-purple-500/60 text-slate-300 hover:text-white font-semibold px-5 py-3 rounded-full transition-all duration-300 cursor-pointer"
            >
              <Download size={16} />
              <span>CV</span>
            </a>
          </motion.div>

          {/* Social Icons & Coding Profiles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap items-center gap-5 pt-2"
          >
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-purple-400 hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={codingProfiles.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-yellow-500 hover:scale-110 transition-all duration-300"
              aria-label="LeetCode"
              title="LeetCode"
            >
              <Code2 size={22} />
            </a>
            <a
              href={codingProfiles.codechef}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-orange-500 hover:scale-110 transition-all duration-300"
              aria-label="CodeChef"
              title="CodeChef"
            >
              <Flame size={22} />
            </a>
            <a
              href={codingProfiles.hackerrank}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-green-500 hover:scale-110 transition-all duration-300"
              aria-label="HackerRank"
              title="HackerRank"
            >
              {/* Custom SVG or custom style for HackerRank using terminal/bracket icon */}
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.062 10.938H24v2.124h-1.938v5H19.88v-5H9.873v5H7.683v-5H4.124v2.876H1.938v-2.876H0V10.94h1.938V8.062H4.12v2.876h3.559v-5h2.19v5h10.007v-5h2.186v5h2.004V8.062h1.938v2.876z"/>
              </svg>
            </a>
            <a
              href={`mailto:${socials.email}`}
              className="text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
              aria-label="Email"
              title="Email"
            >
              <Mail size={22} />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Profile / Interactive terminal */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
          {/* Glowing Profile Ring Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full p-2 bg-gradient-to-tr from-purple-500 via-blue-500 to-cyan-400 shadow-[0_0_50px_rgba(168,85,247,0.3)] animate-pulse-slow"
          >
            <div className="w-full h-full rounded-full bg-slate-950 overflow-hidden relative border-4 border-slate-950 flex items-center justify-center">
              {/* Profile Image - Let's use generated profile asset */}
              <img
                src="./profile.jpg"
                alt="Bhagyavi Vangapandu"
                className="w-full h-full object-cover object-top transform hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML += `
                    <div class="flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-slate-900 via-purple-950 to-slate-950 p-6 text-center select-none">
                      <div class="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 font-mono mb-2">&lt;BV /&gt;</div>
                      <div class="text-xs text-cyan-300 font-mono tracking-widest uppercase">AI & GenAI Dev</div>
                    </div>
                  `;
                }}
              />
            </div>

            {/* Floating Tech Badges around profile */}
            <div className="absolute -top-2 -right-2 bg-slate-950/80 backdrop-blur-md border border-purple-500/40 p-2.5 rounded-full shadow-lg text-purple-400 hover:scale-110 transition-transform cursor-pointer">
              <span className="text-sm font-bold font-mono">AI</span>
            </div>
            <div className="absolute bottom-4 -left-2 bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 p-2.5 rounded-full shadow-lg text-cyan-400 hover:scale-110 transition-transform cursor-pointer">
              <span className="text-sm font-bold font-mono">React</span>
            </div>
            <div className="absolute bottom-6 -right-4 bg-slate-950/80 backdrop-blur-md border border-blue-500/40 p-2.5 rounded-full shadow-lg text-blue-400 hover:scale-110 transition-transform cursor-pointer">
              <span className="text-sm font-bold font-mono">AWS</span>
            </div>
          </motion.div>

          {/* Futuristic Terminal Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full max-w-sm rounded-xl overflow-hidden border border-white/10 bg-slate-950/90 shadow-2xl backdrop-blur-md font-mono text-xs text-left"
          >
            {/* Terminal Header */}
            <div className="bg-slate-900 border-b border-white/5 px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Terminal size={14} className="text-purple-400" />
                <span className="text-slate-400 font-semibold tracking-wider">bhagyavi@dev-shell: ~</span>
              </div>
              <div className="flex space-x-1.5">
                <Circle size={10} className="fill-red-500 text-red-500" />
                <Circle size={10} className="fill-yellow-500 text-yellow-500" />
                <Circle size={10} className="fill-green-500 text-green-500" />
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-4 space-y-1.5 h-44 overflow-y-auto scrollbar-thin select-none">
              {terminalLogs.map((log, index) => (
                <div
                  key={index}
                  className={`${
                    log.startsWith(">")
                      ? "text-purple-400 font-bold"
                      : log.includes("status:")
                      ? "text-green-400 font-semibold"
                      : "text-slate-300"
                  }`}
                >
                  {log}
                </div>
              ))}
              {terminalState === "ready" && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2 h-4 bg-cyan-400 align-middle ml-1"
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
