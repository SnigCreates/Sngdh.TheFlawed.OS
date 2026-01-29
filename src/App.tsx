import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="bg-[#050505] min-h-screen w-full flex flex-col items-center justify-center text-white px-6 py-12 relative overflow-hidden selection:bg-white selection:text-black">
      
      {/* 1. BACKGROUND WATERMARK */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <img 
          src="/identity.jpg" 
          alt="Identity" 
          className="w-full h-full object-cover grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </div>

      {/* 2. SPLASH CONTENT */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-6xl flex flex-col items-center"
      >
        {/* RE-ARCHITECTING HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter italic mb-4">
            The Flaw OS <span className="text-sm font-mono opacity-20 not-italic ml-2">[v1.0]</span>
          </h1>
          <p className="font-mono text-[10px] uppercase tracking-[0.6em] text-white/30 mb-8">
            [ System Status: Re-Architecting ]
          </p>
          <h2 className="text-xl md:text-2xl font-light text-white/80 leading-relaxed">
            The core philosophy is being synced. <br />
            <span className="italic opacity-40 font-serif text-lg md:text-xl mt-2 block">"Engineering a better failure."</span>
          </h2>
        </div>

        {/* 3. THE CONNECT BENTOS (Exact Match) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT BENTO: OPEN TO CONNECT */}
          <div className="lg:col-span-7 bg-[#0d0d0d]/80 backdrop-blur-md border border-white/5 rounded-[40px] p-8 md:p-12 flex flex-col justify-between min-h-[350px]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a2e1a] border border-[#2d4d2d] text-[#4ade80] text-[10px] font-medium uppercase tracking-wider mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
                Open to Connect
              </div>
              <h3 className="text-4xl md:text-5xl font-medium mb-4">Let's Connect</h3>
              <p className="text-white/40 text-sm md:text-base max-w-md leading-relaxed font-light">
                Have a project in mind? Let's build something remarkable together.
              </p>
            </div>
            
            <div className="space-y-4 mt-12">
              <div className="flex items-center justify-between p-5 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center opacity-40">@</div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest opacity-30">Copy Email Address</p>
                    <p className="text-sm font-mono opacity-60 group-hover:opacity-100 transition-opacity">admin@theflaw.os</p>
                  </div>
                </div>
                <span className="opacity-20 group-hover:opacity-100 transition-all text-xl">→</span>
              </div>
            </div>
          </div>

          {/* RIGHT BENTO: CONNECT LINKS */}
          <div className="lg:col-span-5 bg-[#0d0d0d]/80 backdrop-blur-md border border-white/5 rounded-[40px] p-8 md:p-12 flex flex-col items-center justify-center min-h-[350px]">
             <p className="text-[10px] uppercase tracking-[0.4em] opacity-20 mb-10 font-mono">Connect</p>
             <div className="grid grid-cols-2 gap-4 w-full">
                <a href="https://github.com" target="_blank" className="aspect-square bg-white/5 border border-white/5 rounded-3xl flex flex-col items-center justify-center gap-4 hover:bg-white/10 hover:border-white/10 transition-all group">
                   <div className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                   </div>
                   <span className="text-[9px] uppercase tracking-widest opacity-20 group-hover:opacity-60 font-mono">GitHub</span>
                </a>
                <a href="https://linkedin.com" target="_blank" className="aspect-square bg-white/5 border border-white/5 rounded-3xl flex flex-col items-center justify-center gap-4 hover:bg-white/10 hover:border-white/10 transition-all group">
                   <div className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                   </div>
                   <span className="text-[9px] uppercase tracking-widest opacity-20 group-hover:opacity-60 font-mono">LinkedIn</span>
                </a>
             </div>
          </div>
        </div>
      </motion.div>

      {/* FOOTER */}
      <div className="absolute bottom-10 w-full text-center z-10 opacity-20 font-mono text-[8px] tracking-[0.6em] uppercase">
         Engineered with precision & purpose . 2026
      </div>

    </div>
  );
}

export default App;