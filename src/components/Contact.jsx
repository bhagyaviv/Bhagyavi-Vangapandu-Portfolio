import React, { useState } from "react";
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, AlertCircle, Code2, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData, codingProfiles } from "../data/portfolioData";

export default function Contact() {
  const { socials, location } = portfolioData.personalInfo;
  
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }
    
    setStatus("sending");
    // Simulate API request
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-950 text-white overflow-hidden">
      {/* Background Glow */}
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
            className="text-xs font-bold tracking-widest uppercase text-purple-400 font-mono mb-2"
          >
            Get In Touch
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold"
          >
            Let's Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              Intelligent
            </span>
          </motion.h3>
          <div className="h-[2px] w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-white tracking-wide">
                Reach Out Directly
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Whether you have an internship opportunity, a project proposal, or just want to connect, feel free to drop a message.
              </p>
            </div>

            {/* Info cards */}
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-purple-500/30 transition-all duration-300">
                <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl text-purple-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h5 className="text-[10px] font-bold font-mono tracking-wider text-slate-400 uppercase">Email</h5>
                  <a href={`mailto:${socials.email}`} className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                    {socials.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-blue-500/30 transition-all duration-300">
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h5 className="text-[10px] font-bold font-mono tracking-wider text-slate-400 uppercase">Location</h5>
                  <span className="text-sm font-semibold text-white">
                    {location}
                  </span>
                </div>
              </div>

              {/* Social Link Hub */}
              <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md items-start sm:items-center justify-between">
                <span className="text-sm font-semibold text-slate-300">Coding Profiles & Socials:</span>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-900 border border-white/5 rounded-xl hover:border-purple-500/30 text-slate-400 hover:text-purple-400 hover:scale-110 transition-all duration-300"
                    title="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-900 border border-white/5 rounded-xl hover:border-blue-500/30 text-slate-400 hover:text-blue-400 hover:scale-110 transition-all duration-300"
                    title="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={codingProfiles.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-900 border border-white/5 rounded-xl hover:border-yellow-500/30 text-slate-400 hover:text-yellow-500 hover:scale-110 transition-all duration-300"
                    title="LeetCode"
                  >
                    <Code2 size={20} />
                  </a>
                  <a
                    href={codingProfiles.codechef}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-900 border border-white/5 rounded-xl hover:border-orange-500/30 text-slate-400 hover:text-orange-500 hover:scale-110 transition-all duration-300"
                    title="CodeChef"
                  >
                    <Flame size={20} />
                  </a>
                  <a
                    href={codingProfiles.hackerrank}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-900 border border-white/5 rounded-xl hover:border-green-500/30 text-slate-400 hover:text-green-500 hover:scale-110 transition-all duration-300"
                    title="HackerRank"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.062 10.938H24v2.124h-1.938v5H19.88v-5H9.873v5H7.683v-5H4.124v2.876H1.938v-2.876H0V10.94h1.938V8.062H4.12v2.876h3.559v-5h2.19v5h10.007v-5h2.186v5h2.004V8.062h1.938v2.876z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-6 md:p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md relative overflow-hidden">
              {/* Form border neon line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500" />

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="name" className="text-xs font-semibold font-mono text-slate-300 tracking-wide uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === "sending"}
                    placeholder="John Doe"
                    className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="email" className="text-xs font-semibold font-mono text-slate-300 tracking-wide uppercase">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === "sending"}
                    placeholder="john@example.com"
                    className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="message" className="text-xs font-semibold font-mono text-slate-300 tracking-wide uppercase">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === "sending"}
                    placeholder="Hi Bhagyavi, I would like to discuss..."
                    className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                {/* Status messages */}
                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 text-xs font-semibold text-green-400 bg-green-500/10 border border-green-500/20 px-4 py-2.5 rounded-xl"
                    >
                      <CheckCircle2 size={16} />
                      <span>Message sent successfully! I will get back to you soon.</span>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 text-xs font-semibold text-red-400 bg-red-500/10 border border-red-500/20 px-4 py-2.5 rounded-xl"
                    >
                      <AlertCircle size={16} />
                      <span>Please fill in all inputs before submitting.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-md shadow-purple-500/20 hover:shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === "sending" ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
