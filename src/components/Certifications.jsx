import React from "react";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Certifications() {
  const { certifications } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="certifications" className="relative py-24 bg-slate-950 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" />

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
            Credentials
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold"
          >
            Certifications &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              Licenses
            </span>
          </motion.h3>
          <div className="h-[2px] w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => {
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, borderColor: "rgba(34,211,238,0.3)" }}
                className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md relative overflow-hidden flex flex-col justify-between group transition-all duration-300"
              >
                {/* Background glow hover effect */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 group-hover:bg-cyan-500/10 blur-2xl rounded-full transition-all pointer-events-none" />

                <div>
                  {/* Top Row: Icon & Issuer */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 bg-slate-900 border border-white/5 rounded-xl text-purple-400 group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-all">
                      <Award size={20} />
                    </div>
                    <div className="flex items-center text-[10px] font-bold font-mono text-cyan-400 bg-cyan-500/5 border border-cyan-500/10 px-2.5 py-1 rounded-md gap-1">
                      <ShieldCheck size={10} />
                      <span>Verified</span>
                    </div>
                  </div>

                  {/* Cert details */}
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 line-clamp-2 min-h-[56px] flex items-center">
                    {cert.name}
                  </h4>
                  <p className="text-xs font-mono text-purple-300 tracking-wider uppercase mt-1 mb-3">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>
                </div>

                {/* Verification Action */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <a
                    href={cert.verifyUrl}
                    onClick={(e) => cert.verifyUrl === "#" && e.preventDefault()}
                    className="flex items-center justify-between text-xs font-bold text-slate-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
