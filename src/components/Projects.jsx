import React from "react";
import { Github, ExternalLink, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  const { projects } = portfolioData;

  // Map project title to the copied local assets
  const getProjectImage = (title) => {
    switch (title) {
      case "Ecommerce Store":
        return "./ecommerce.jpg";
      case "Spam Email Checker":
        return "./spam_checker.jpg";
      case "Smart Study Planner":
        return "./study_planner.jpg";
      default:
        return "./ecommerce.jpg";
    }
  };

  return (
    <section id="projects" className="relative py-24 bg-slate-950 text-white overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest uppercase text-cyan-400 font-mono mb-2"
          >
            My Works
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold"
          >
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              Projects
            </span>
          </motion.h3>
          <div className="h-[2px] w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, borderColor: "rgba(168,85,247,0.3)" }}
                className="flex flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md overflow-hidden relative group transition-all duration-300"
              >
                {/* Project Image and Overlay */}
                <div className="relative h-48 overflow-hidden bg-slate-900 border-b border-white/5 shrink-0">
                  <img
                    src={getProjectImage(project.title)}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90" />
                  
                  {/* Tech stack top float indicator */}
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                    <Code2 size={12} />
                    <span>Active Project</span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h4>
                    
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-semibold font-mono tracking-wider text-slate-400 uppercase flex items-center gap-1">
                        <Sparkles size={12} className="text-purple-400" />
                        <span>Core Features</span>
                      </div>
                      <ul className="grid grid-cols-1 gap-1.5 text-xs text-slate-400">
                        {project.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2">
                            <CheckCircle2 size={12} className="text-cyan-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-bold font-mono px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center justify-between gap-4 pt-8 border-t border-white/5 mt-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-xs font-semibold bg-slate-900 border border-white/10 hover:border-purple-500/40 text-slate-300 hover:text-white px-4 py-2.5 rounded-xl transition-all duration-300 flex-1 hover:shadow-md hover:shadow-purple-500/5 cursor-pointer"
                    >
                      <Github size={14} />
                      <span>Codebase</span>
                    </a>
                    
                    <a
                      href={project.live}
                      onClick={(e) => project.live === "#" && e.preventDefault()}
                      className="flex items-center justify-center gap-2 text-xs font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-4 py-2.5 rounded-xl transition-all duration-300 flex-1 hover:shadow-md hover:shadow-cyan-500/10 cursor-pointer"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
