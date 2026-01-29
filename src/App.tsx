import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="bg-[#050505] h-screen w-full flex flex-col items-center justify-center text-white px-6 relative overflow-hidden selection:bg-white selection:text-black">
      
      {/* 1. BACKGROUND PORTRAIT (Fixed Visibility) */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="/identity.jpg" 
          alt="Identity" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </div>

      {/* 2. MAIN CARD */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-16"
      >
        {/* LEFT: CONTENT (High Visibility) */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter italic mb-4 text-white">
            The Flaw OS <span className="text-xl font-mono opacity-40 not-italic ml-2">[v1.0]</span>
          </h1>
          <p className="font-mono text-xs uppercase tracking-[0.6em] text-white/40 mb-10">
            [ System Status: Re-Architecting ]
          </p>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-light text-white/90">
              The core philosophy is being synced.
            </h2>
            <p className="italic font-serif text-xl md:text-2xl text-white/50">
              "Engineering a better failure."
            </p>
          </div>
        </div>

        {/* RIGHT: THE TWO BENTO BLOCKS (Exact Match) */}
        <div className="w-full md:w-[400px] grid grid-cols-2 gap-4">
          
          {/* GitHub Block */}
          <a href="https://github.com" target="_blank" rel="noreferrer" 
             className="aspect-square bg-[#0d0d0d] border border-white/10 rounded-[32px] flex flex-col items-center justify-center gap-4 hover:bg-[#151515] hover:border-white/20 transition-all group">
            <div className="w-8 h-8 opacity-60 group-hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </div>
            <span className="font-mono text-[10px] tracking-widest opacity-40 group-hover:opacity-80 uppercase">GitHub</span>
          </a>

          {/* LinkedIn Block */}
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" 
             className="aspect-square bg-[#0d0d0d] border border-white/10 rounded-[32px] flex flex-col items-center justify-center gap-4 hover:bg-[#151515] hover:border-white/20 transition-all group">
            <div className="w-8 h-8 opacity-60 group-hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </div>
            <span className="font-mono text-[10px] tracking-widest opacity-40 group-hover:opacity-80 uppercase">LinkedIn</span>
          </a>

        </div>
      </motion.div>

      {/* FOOTER TEXT */}
      <div className="absolute bottom-10 left-0 w-full text-center z-10">
        <p className="font-mono text-[8px] tracking-[0.5em] opacity-20 uppercase">
          Operating from Berhampur, Odisha [222.02]
        </p>
      </div>

    </div>
  );
}

export default App;