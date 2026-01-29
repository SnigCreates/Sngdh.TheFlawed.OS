import React from 'react';
import { motion } from 'framer-motion';

const StageOne = () => {
  return (
    <section className="relative w-full h-screen bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
      
      {/* SIDEBAR NAVIGATION */}
      <div className="absolute left-0 top-0 h-full w-20 border-r border-white/5 flex flex-col justify-between py-10 px-4 z-50 bg-[#0a0a0a]">
        <div className="flex flex-col gap-8 items-center pt-4 opacity-40">
           <span className="text-xs font-mono">GH</span>
           <span className="text-xs font-mono">LN</span>
        </div>
        <div className="rotate-180 transform [writing-mode:vertical-lr] text-[10px] tracking-[0.5em] uppercase opacity-30 font-mono font-medium whitespace-nowrap">
          Design Thinking Overnights .
        </div>
        <div className="text-[10px] opacity-20 font-mono text-center">v1.0</div>
      </div>

      {/* CENTERED PORTRAIT */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative w-full max-w-[900px] h-[85vh] flex items-center justify-center"
      >
        <img 
          src="/identity.jpg" 
          alt="Sngdh Profile" 
          className="w-full h-full object-contain opacity-40 contrast-125 brightness-90 grayscale mix-blend-lighten"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a] opacity-60" />
      </motion.div>

      {/* HERO TEXT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none text-center">
          <h1 className="text-6xl md:text-8xl font-medium tracking-tight text-[#f0f0f0]">
            The Flaw OS <span className="text-xl font-mono opacity-30 ml-4 tracking-widest">[v1.0]</span>
          </h1>
          <p className="mt-6 text-xs md:text-sm uppercase tracking-[0.6em] opacity-40 font-mono font-light">
            Technical Generalist & Founder
          </p>
      </div>
    </section>
  );
};

export default StageOne;