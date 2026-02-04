import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="bg-[#050505] h-screen w-full flex flex-col items-center justify-center text-white px-6 relative overflow-hidden selection:bg-white selection:text-black">
      
      {/* BACKGROUND: THE IDENTITY WATERMARK */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <img 
          src="/identity.jpg" 
          alt="Identity" 
          className="w-full h-full object-cover grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </div>

      {/* THE GLASS AIRLOCK */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-4xl backdrop-blur-3xl bg-white/[0.02] border border-white/10 rounded-[48px] p-10 md:p-20 shadow-2xl"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          
          {/* LEFT: STATUS & COPY */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter italic mb-4">
              The Flaw OS <span className="text-[10px] font-mono opacity-20 not-italic ml-2">[v1.0]</span>
            </h1>
            <p className="font-mono text-[10px] uppercase tracking-[0.6em] text-[#4ade80] mb-8">
              [ System Re-Architecting ]
            </p>
            <h2 className="text-xl md:text-2xl font-light text-white/70 leading-relaxed">
              Engineering a better failure. <br />
              <span className="italic opacity-30 font-serif text-lg">Identity & Systems in Sync.</span>
            </h2>
          </div>

          {/* RIGHT: CONNECT BENTO BLOCKS (High Visibility) */}
          <div className="w-full md:w-80 grid grid-cols-2 gap-4">
             <a href="https://linkedin.com/in/sngdhwork" target="_blank" rel="noreferrer" 
                className="aspect-square bg-white/5 border border-white/5 rounded-[32px] hover:bg-white/10 transition-all flex flex-col items-center justify-center gap-3 group">
                <span className="text-[10px] font-mono opacity-40 group-hover:opacity-100 uppercase tracking-widest transition-opacity">LinkedIn</span>
                <span className="opacity-20 group-hover:opacity-100 transition-all">→</span>
             </a>
             <a href="https://github.com/snigdha-work" target="_blank" rel="noreferrer" 
                className="aspect-square bg-white/5 border border-white/5 rounded-[32px] hover:bg-white/10 transition-all flex flex-col items-center justify-center gap-3 group">
                <span className="text-[10px] font-mono opacity-40 group-hover:opacity-100 uppercase tracking-widest transition-opacity">GitHub</span>
                <span className="opacity-20 group-hover:opacity-100 transition-all">→</span>
             </a>
             <a href="mailto:admin@theflaw.os" 
                className="col-span-2 py-5 bg-white/5 border border-white/5 rounded-[24px] hover:bg-white/10 transition-all flex items-center justify-center gap-4 group">
                <span className="text-[10px] uppercase tracking-[0.4em] opacity-30 group-hover:opacity-100 font-mono">Direct Line</span>
             </a>
          </div>

        </div>
      </motion.div>

      {/* FOOTER */}
      <div className="absolute bottom-10 w-full text-center z-10 opacity-20 font-mono text-[8px] tracking-[0.8em] uppercase">
         © 2026 • Engineered with precision & purpose
      </div>

    </div>
  );
}

export default App;