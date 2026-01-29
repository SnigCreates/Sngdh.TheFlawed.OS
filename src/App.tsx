import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="bg-[#050505] h-screen w-full flex flex-col items-center justify-center text-[#f0f0f0] px-6 relative overflow-hidden font-sans selection:bg-white selection:text-black">
      
      {/* 1. BACKGROUND LAYER (Portrait) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/identity.jpg" 
          alt="Identity Background" 
          className="w-full h-full object-cover opacity-20 grayscale brightness-50 mix-blend-overlay scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </div>

      {/* 2. GLASSMORPHISM CONTAINER */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-4xl backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-[40px] p-8 md:p-16 shadow-2xl overflow-hidden"
      >
        {/* Top Glow */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-[100px]" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* LEFT: CONTENT */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter italic mb-4">
              The Flaw OS <span className="text-sm font-mono opacity-20 not-italic ml-2">[v1.0]</span>
            </h1>
            <p className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-30 mb-8">
              System Syncing in Progress
            </p>
            <h2 className="text-xl md:text-2xl font-light leading-relaxed mb-6">
              Re-architecting the interface. <br />
              <span className="opacity-40 italic">"Engineering a better failure."</span>
            </h2>
          </div>

          {/* RIGHT: CONNECT BENTO (Mini Version) */}
          <div className="w-full md:w-80 grid grid-cols-2 gap-4">
            <a href="https://github.com" target="_blank" className="group bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all flex flex-col items-center gap-3">
              <span className="opacity-40 group-hover:opacity-100 text-xs font-mono">GH</span>
              <span className="text-[10px] uppercase tracking-widest opacity-20">GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" className="group bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all flex flex-col items-center gap-3">
              <span className="opacity-40 group-hover:opacity-100 text-xs font-mono">LN</span>
              <span className="text-[10px] uppercase tracking-widest opacity-20">LinkedIn</span>
            </a>
            <a href="mailto:admin@theflaw.os" className="col-span-2 group bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-all flex justify-between items-center px-6">
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-30">Direct Line</span>
              <span className="text-xs font-mono opacity-50 group-hover:opacity-100">→</span>
            </a>
          </div>

        </div>
      </motion.div>

      {/* 3. SIDEBAR MARKER */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block opacity-10 rotate-180 transform [writing-mode:vertical-lr]">
        <p className="text-[8px] tracking-[1em] uppercase font-mono">
          Identity . Philosophy . System
        </p>
      </div>

    </div>
  );
}

export default App;