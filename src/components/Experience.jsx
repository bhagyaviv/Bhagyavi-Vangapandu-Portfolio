import React from "react";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  const { experience } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="experience" className="relative py-24 bg-slate-950 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest uppercase text-purple-400 font-mono mb-2"
          >
            Journey
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold"
          >
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              Experience
            </span>
          </motion.h3>
          <div className="h-[2px] w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 md:border-l-0 max-w-4xl mx-auto">
          {/* Vertical central timeline line on desktop */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 hidden md:block" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {experience.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline node */}
                  <div className="absolute -left-[9px] md:left-1/2 md:-translate-x-1/2 top-0 md:top-6 z-20 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="w-full md:w-1/2 hidden md:block" />

                  {/* Timeline Card */}
                  <div className="w-full md:w-1/2 pl-6 md:pl-0 md:px-8">
                    <motion.div
                      whileHover={{ y: -4, borderColor: "rgba(34,211,238,0.3)" }}
                      className="p-6 md:p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md relative overflow-hidden group transition-all duration-300"
                    >
                      {/* Interactive glow effect */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 group-hover:bg-cyan-500/10 blur-2xl rounded-full transition-all pointer-events-none" />

                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {exp.role}
                          </h4>
                          <p className="text-sm font-semibold text-purple-300 mt-0.5">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center text-xs font-mono text-slate-400 bg-slate-900 border border-white/5 px-3 py-1.5 rounded-lg w-fit h-fit shrink-0 gap-1.5">
                          <Calendar size={12} className="text-cyan-400" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      {/* Responsibilities list */}
                      <ul className="space-y-2.5 text-sm text-slate-300">
                        {exp.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 size={16} className="text-cyan-500 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
