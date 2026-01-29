import React from 'react';

function App() {
  return (
    <div className="bg-[#0a0a0a] h-screen w-full flex flex-col items-center justify-center text-[#f0f0f0] px-6 selection:bg-white selection:text-black">
      
      {/* GLITCH ANIMATION LOGO */}
      <div className="relative mb-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase italic opacity-80 animate-pulse">
          The Flaw OS
        </h1>
        <div className="absolute -top-2 -right-4 text-[10px] font-mono opacity-40 px-2 py-1 border border-white/20 rounded">
          v1.0
        </div>
      </div>

      {/* MAINTENANCE MESSAGE */}
      <div className="max-w-md text-center">
        <p className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] opacity-40 mb-6">
          [ System Status: Re-Architecting ]
        </p>
        
        <h2 className="text-xl md:text-2xl font-light leading-relaxed mb-8">
          The core philosophy is being synced. <br /> 
          <span className="opacity-50 italic">Engineering a better failure.</span>
        </h2>

        {/* PROGRESS BAR */}
        <div className="w-full h-[1px] bg-white/10 relative overflow-hidden mb-10">
          <div className="absolute top-0 left-0 h-full bg-white/40 w-1/2 animate-[load_2s_infinite_ease-in-out]" />
        </div>

        {/* TEMPORARY LINKS */}
        <div className="flex flex-wrap justify-center gap-6 opacity-40 font-mono text-[10px] uppercase tracking-widest">
          <a href="https://github.com" className="hover:opacity-100 transition-opacity">GitHub</a>
          <a href="https://linkedin.com" className="hover:opacity-100 transition-opacity">LinkedIn</a>
          <a href="mailto:your-email@example.com" className="hover:opacity-100 transition-opacity">Contact System Admin</a>
        </div>
      </div>

      {/* TAILWIND ANIMATION CONFIG (Add this to your tailwind.config.js later, but for now it's just a placeholder) */}
      <style>
        {`
          @keyframes load {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
          }
        `}
      </style>
    </div>
  );
}

export default App;