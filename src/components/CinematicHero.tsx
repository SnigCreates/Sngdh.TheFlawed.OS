import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef } from 'react';
import { Twitter, Linkedin, Mail, ArrowRight, Terminal } from 'lucide-react';

export function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress relative to the viewport/page
  const { scrollY } = useScroll();

  // Scroll Ranges based on ~2500px scroll height (250vh)
  // Phase 1: Entry (0 - 600px)
  // Phase 2: Philosophy (600px - 1400px)
  // Phase 3: Deployment (1400px+)

  // --- Phase 1: Cinematic Entry ---
  // Portrait stays fixed, text moves faster (Parallax)
  const heroTextY = useTransform(scrollY, [0, 600], [0, -150]); 
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.2]); // Fades out slightly to background

  // --- Phase 2: Philosophy Reveal ---
  // Background darkens for text readability
  const overlayOpacity = useTransform(scrollY, [500, 800], [0.3, 0.85]); 
  
  // Text Entry/Exit
  const philosophyOpacity = useTransform(scrollY, [600, 800, 1400, 1600], [0, 1, 1, 0]);
  const philosophyScale = useTransform(scrollY, [600, 800, 1400, 1600], [0.95, 1, 1, 0.95]);
  const philosophyY = useTransform(scrollY, [600, 1400], [50, -50]); // Floating effect

  // --- Phase 3: System Deployment ---
  // Everything fades out for Bento Grid
  const globalOpacity = useTransform(scrollY, [1600, 2000], [1, 0]);
  const globalScale = useTransform(scrollY, [1600, 2000], [1, 0.95]);

  // Sidebar fades out last
  const sidebarOpacity = useTransform(scrollY, [1800, 2200], [1, 0]);

  return (
    <motion.div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-screen z-0 bg-[#080808] overflow-hidden"
      style={{ opacity: globalOpacity, scale: globalScale }}
    >
      
      {/* --- Left Sidebar (Persistent until Stage 3) --- */}
      <motion.div 
        className="absolute top-0 left-0 h-full w-16 md:w-20 border-r border-white/5 z-30 hidden md:flex flex-col justify-between items-center py-12"
        style={{ opacity: sidebarOpacity }}
      >
        {/* Top: Logo/Icon */}
        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>

        {/* Center: Vertical Text */}
        <div className="writing-vertical-rl rotate-180 text-xs text-gray-500 uppercase tracking-[0.3em] font-mono">
          Design Thinking
        </div>

        {/* Bottom: Socials & Kernel Status */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col gap-4 text-gray-500">
             <Twitter className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
             <Linkedin className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
             <Mail className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
          </div>
          <div className="h-12 w-px bg-white/10" />
          
          {/* Kernel Status */}
          <div className="flex flex-col items-center gap-2 group cursor-pointer">
            <Terminal className="w-3 h-3 text-emerald-500/50 group-hover:text-emerald-500 transition-colors" />
            <span className="writing-vertical-rl rotate-180 text-[10px] text-emerald-500/50 group-hover:text-emerald-500 font-mono tracking-widest transition-colors">
              KERNEL: OK
            </span>
          </div>
        </div>
      </motion.div>

      {/* --- Layer 1: Background & Hero Portrait --- */}
      <div className="absolute inset-0 z-10">
        <div className="relative w-full h-full flex items-center justify-center">
           {/* Background Image Layer */}
           <div className="absolute inset-0 opacity-40">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop" 
                alt="Portrait Base"
                className="w-full h-full object-cover object-center filter grayscale contrast-125" 
              />
           </div>
           
           {/* Double Exposure Texture */}
           <div className="absolute inset-0 opacity-30 mix-blend-overlay">
              <img 
                src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2000&auto=format&fit=crop" 
                alt="Texture"
                className="w-full h-full object-cover object-center" 
              />
           </div>

           {/* Gradient Overlays (Darkens in Phase 2) */}
           <motion.div 
             className="absolute inset-0 bg-[#080808]"
             style={{ opacity: overlayOpacity }} 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/20" />

           {/* Phase 1 Typography: Design Thinking Overnights */}
           <motion.div 
             className="relative z-20 text-center px-4 md:pl-20"
             style={{ y: heroTextY, opacity: heroOpacity }}
           >
             <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white tracking-tighter leading-none opacity-90 mix-blend-overlay">
               Design
               <br />
               Thinking
               <br />
               Overnights
             </h1>
             <p className="mt-6 text-sm md:text-base text-gray-400 uppercase tracking-[0.5em] font-mono">
               Sngdh [v1.0]
             </p>
           </motion.div>
        </div>
      </div>

      {/* --- Layer 2: Philosophy Reveal (Sticky/Floating) --- */}
      <motion.div 
        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
        style={{ opacity: philosophyOpacity, scale: philosophyScale, y: philosophyY }}
      >
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:pl-28">
          
          {/* Main Bold Text */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9]">
              BEING
              <br />
              FOUNDER
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
                TAKES GUTS.
              </span>
            </h2>
          </div>

          {/* Sub-text with Arrows (Side-Arrowed Paragraphs) */}
          <div className="md:col-span-5 flex flex-col justify-center gap-8 pl-4 md:pl-12 border-l border-white/10">
            
            {/* Paragraph 1: Logic */}
            <div className="group">
               <div className="flex items-center gap-3 mb-2">
                 <ArrowRight className="w-4 h-4 text-emerald-500" />
                 <h4 className="text-white text-xs font-bold uppercase tracking-widest">The Logic</h4>
               </div>
               <p className="text-gray-400 text-sm leading-relaxed">
                 Leveraging ECE technical foundations to build human-centered design systems.
               </p>
            </div>

            {/* Paragraph 2: Grit */}
            <div className="group">
               <div className="flex items-center gap-3 mb-2">
                 <ArrowRight className="w-4 h-4 text-emerald-500" />
                 <h4 className="text-white text-xs font-bold uppercase tracking-widest">The Grit</h4>
               </div>
               <p className="text-gray-400 text-sm leading-relaxed">
                 Successfully managing a high-velocity recovery of 15 papers while building D2C brand architectures.
               </p>
            </div>

            {/* Paragraph 3: OS */}
            <div className="group">
               <div className="flex items-center gap-3 mb-2">
                 <ArrowRight className="w-4 h-4 text-emerald-500" />
                 <h4 className="text-white text-xs font-bold uppercase tracking-widest">The OS</h4>
               </div>
               <p className="text-gray-400 text-sm leading-relaxed">
                 Transforming every "Flaw" into a functional specification for the next build.
               </p>
            </div>

          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2 z-30"
        style={{ opacity: heroOpacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
      </motion.div>

    </motion.div>
  );
}
