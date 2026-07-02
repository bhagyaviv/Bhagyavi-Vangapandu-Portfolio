import React from "react";
import { Award, Briefcase, BookOpen, GitMerge, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const { bio, stats, currentlyLearning } = portfolioData.personalInfo;

  // Icon mapping for stats
  const getIcon = (label) => {
    switch (label) {
      case "CGPA":
        return <GraduationCap className="text-purple-400 h-6 w-6" />;
      case "Internships":
        return <Briefcase className="text-blue-400 h-6 w-6" />;
      case "Certifications":
        return <Award className="text-cyan-400 h-6 w-6" />;
      case "Major Projects":
        return <BookOpen className="text-purple-400 h-6 w-6" />;
      case "Open Source":
        return <GitMerge className="text-cyan-400 h-6 w-6" />;
      default:
        return <Award className="text-purple-400 h-6 w-6" />;
    }
  };

  return (
    <section id="about" className="relative py-24 bg-slate-950 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

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
            About Me
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold"
          >
            Sailing the Waves of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              AI & Web Development
            </span>
          </motion.h3>
          <div className="h-[2px] w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-slate-300"
          >
            <h4 className="text-2xl font-semibold text-white tracking-wide">
              Who is Bhagyavi?
            </h4>
            <div className="space-y-4 text-base leading-relaxed">
              <p>{bio.split("\n\n")[0]}</p>
              <p>{bio.split("\n\n")[1]}</p>
              <p>{bio.split("\n\n")[2]}</p>
            </div>

            {/* Currently Learning Section */}
            <div className="pt-6 space-y-4">
              <h5 className="text-lg font-semibold text-white font-mono flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                Currently Learning & Refining:
              </h5>
              <div className="flex flex-wrap gap-2.5">
                {currentlyLearning.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-4 py-2 rounded-lg bg-slate-900 border border-white/5 text-slate-300 hover:border-cyan-500/30 hover:text-cyan-300 transition-all duration-300 shadow-md shadow-black/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => {
              // Custom span for 'Open Source Contributor' stat
              const isFullWidth = stat.label === "Open Source";
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, borderColor: "rgba(168,85,247,0.4)" }}
                  className={`relative p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md overflow-hidden flex flex-col justify-between group transition-all duration-300 ${
                    isFullWidth ? "col-span-2 py-8" : "col-span-1"
                  }`}
                >
                  {/* Decorative background glow on card hover */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-purple-500/5 group-hover:bg-purple-500/10 blur-xl rounded-full transition-all duration-500 pointer-events-none" />

                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 bg-slate-950/80 rounded-xl border border-white/5 group-hover:border-purple-500/30 transition-all">
                      {getIcon(stat.label)}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-3xl font-extrabold text-white tracking-tight group-hover:text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                      {stat.value}
                    </h4>
                    <p className="text-xs font-semibold text-slate-400 font-mono tracking-widest uppercase mt-1">
                      {stat.label}
                    </p>
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
