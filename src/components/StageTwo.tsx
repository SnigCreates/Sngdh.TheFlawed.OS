import React from 'react';
import { motion } from 'framer-motion';

const StageTwo = () => {
  return (
    <section className="relative w-full h-screen bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden px-6">
      
      {/* PERSISTENT SIDEBAR MARKER */}
      <div className="absolute left-0 top-0 h-full w-20 border-r border-white/5 flex flex-col justify-between py-10 px-4 z-50">
        <div className="flex flex-col gap-8 items-center pt-4 opacity-10">
           <span className="text-xs font-mono">GH</span>
           <span className="text-xs font-mono">LN</span>
        </div>
        <div className="rotate-180 transform [writing-mode:vertical-lr] text-[10px] tracking-[0.5em] uppercase opacity-30 font-mono">
          Design Thinking Overnights .
        </div>
        <div className="text-[10px] opacity-20 font-mono text-center">02 / 05</div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 items-center gap-12">
        {/* MAIN TYPOGRAPHY */}
        <div className="md:col-span-7">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] md:text-[8vw] font-bold leading-[0.9] text-[#f0f0f0] tracking-tighter uppercase italic text-left"
          >
            Being <br /> Founder <br /> Takes <br /> Guts.
          </motion.h2>
        </div>

        {/* SIDE-ARROWED PHILOSOPHY */}
        <div className="md:col-span-5 flex flex-col gap-10">
          {[
            { text: "Architecting systems from malfunctions." },
            { text: "Embracing imperfection as innovation catalyst." },
            { text: "Building resilience through systematic failure analysis." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + (index * 0.2), duration: 0.8 }}
              className="flex items-start gap-4"
            >
              <span className="text-[#f0f0f0] opacity-60 text-lg mt-1">→</span>
              <p className="text-sm md:text-base font-light text-[#f0f0f0] opacity-50 leading-relaxed font-mono">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StageTwo;