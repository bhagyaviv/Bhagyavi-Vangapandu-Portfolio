import React, { useState } from "react";
import { Code, Box, BrainCircuit, Cloud, Wrench, Database, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState(skills[0].category);

  // Mapping categories to icons
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Languages":
        return <Code size={20} />;
      case "Frameworks & Libraries":
        return <Box size={20} />;
      case "AI / ML":
        return <BrainCircuit size={20} />;
      case "Cloud":
        return <Cloud size={20} />;
      case "Tools":
        return <Wrench size={20} />;
      case "Core CS":
        return <Database size={20} />;
      default:
        return <Cpu size={20} />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 120 } }
  };

  const activeSkills = skills.find((cat) => cat.category === activeCategory) || skills[0];

  return (
    <section id="skills" className="relative py-24 bg-slate-950 text-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest uppercase text-purple-400 font-mono mb-2"
          >
            Technical Arsenal
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold"
          >
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              Expertise
            </span>
          </motion.h3>
          <div className="h-[2px] w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Layout: Sidebar navigation for categories and Content pane */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Categories Navigation */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-3 scrollbar-none">
            {skills.map((skillCat, index) => {
              const isActive = skillCat.category === activeCategory;

              return (
                <button
                  key={index}
                  onClick={() => setActiveCategory(skillCat.category)}
                  className={`flex items-center gap-3 px-5 py-4 rounded-xl text-sm font-semibold tracking-wide border transition-all duration-300 w-full text-left shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border-purple-500/50 text-white shadow-lg shadow-purple-500/5"
                      : "bg-slate-900/50 border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/10"
                  }`}
                  style={{ width: 'auto', minWidth: '150px' }}
                >
                  <div className={`p-2 rounded-lg ${isActive ? "bg-purple-500/20 text-purple-300" : "bg-slate-950 text-slate-400"}`}>
                    {getCategoryIcon(skillCat.category)}
                  </div>
                  <span>{skillCat.category}</span>
                </button>
              );
            })}
          </div>

          {/* Skills Grid for active category */}
          <div className="lg:col-span-8 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {activeSkills.items.map((skill, index) => {
                  return (
                    <motion.div
                      key={index}
                      variants={skillVariants}
                      whileHover={{ scale: 1.02, borderColor: "rgba(34,211,238,0.3)" }}
                      className="p-5 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md relative overflow-hidden group transition-all duration-300"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 blur-xl rounded-full transition-all duration-500 group-hover:bg-purple-500/10 pointer-events-none" />
                      
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-white tracking-wide">{skill}</span>
                        <span className="text-xs font-mono text-cyan-400">Expertise</span>
                      </div>

                      {/* Animated Glow Bar */}
                      <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden mt-3 relative">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                          style={{ width: "90%" }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
