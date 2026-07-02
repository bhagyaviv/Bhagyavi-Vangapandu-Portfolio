import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-purple-500/30 selection:text-cyan-300 overflow-x-hidden">
      {/* Background Static/Ambient Lights */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-purple-950/20 via-transparent to-transparent" />
        <div className="absolute top-[30vh] right-[10vw] w-72 h-72 rounded-full bg-blue-600/5 blur-[120px]" />
        <div className="absolute bottom-[20vh] left-[5vw] w-96 h-96 rounded-full bg-cyan-600/5 blur-[130px]" />
      </div>

      {/* Main Layout Elements */}
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <Hero />
          
          <div className="space-y-12">
            <About />
            <Experience />
            <Education />
            <Projects />
            <Skills />
            <Certifications />
            <Contact />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
