import React from "react";
import { GraduationCap, Calendar, Award, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="relative py-24 bg-slate-950 text-white overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 translate-x-1/2 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest uppercase text-cyan-400 font-mono mb-2"
          >
            Academic Foundation
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold"
          >
            Education{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Details
            </span>
          </motion.h3>
          <div className="h-[2px] w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu, index) => {
            const isUniversity = index === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, borderColor: isUniversity ? "rgba(168,85,247,0.4)" : "rgba(34,211,238,0.3)" }}
                className={`p-6 md:p-8 rounded-2xl border ${
                  isUniversity ? "border-purple-500/20 bg-gradient-to-br from-purple-950/10 to-slate-950/40" : "border-white/10 bg-gradient-to-br from-white/5 to-transparent"
                } backdrop-blur-md relative overflow-hidden flex flex-col justify-between group transition-all duration-300`}
              >
                {/* Ambient glow for card */}
                <div className={`absolute -top-10 -right-10 w-24 h-24 blur-2xl rounded-full pointer-events-none transition-all duration-500 ${
                  isUniversity ? "bg-purple-500/10 group-hover:bg-purple-500/20" : "bg-cyan-500/5 group-hover:bg-cyan-500/10"
                }`} />

                <div>
                  {/* Icon Indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl border ${
                      isUniversity ? "bg-purple-500/10 border-purple-500/20 text-purple-400" : "bg-slate-900 border-white/5 text-cyan-400"
                    }`}>
                      {isUniversity ? <GraduationCap size={24} /> : <Building2 size={24} />}
                    </div>
                    <div className="flex items-center text-xs font-mono text-slate-400 bg-slate-900/80 border border-white/5 px-2.5 py-1 rounded-md gap-1">
                      <Calendar size={12} className="text-cyan-400" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  {/* Institution Name */}
                  <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {edu.institution}
                  </h4>
                  
                  {/* Degree/Class */}
                  <p className="text-sm text-slate-300 mt-2 font-medium">
                    {edu.degree}
                  </p>
                </div>

                {/* Score section */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono tracking-wider uppercase text-slate-400">Result</span>
                  <div className="flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-3 py-1 rounded-lg text-sm font-semibold font-mono">
                    <Award size={14} />
                    <span>{edu.score.split(": ")[1] || edu.score}</span>
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
