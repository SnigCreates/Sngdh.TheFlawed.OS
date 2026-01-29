import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function IdentityTile() {
  return (
    <motion.div
      className="h-full bg-[#121212] rounded-3xl border border-white/10 p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group"
      style={{ borderWidth: '0.5px' }}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
    >
      {/* Animated light sweep gradient */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        initial={false}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10"
          animate={{
            background: [
              'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, transparent 50%, rgba(59, 130, 246, 0.1) 100%)',
              'linear-gradient(225deg, rgba(168, 85, 247, 0.1) 0%, transparent 50%, rgba(59, 130, 246, 0.1) 100%)',
              'linear-gradient(315deg, rgba(168, 85, 247, 0.1) 0%, transparent 50%, rgba(59, 130, 246, 0.1) 100%)',
              'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, transparent 50%, rgba(59, 130, 246, 0.1) 100%)',
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      {/* Double Exposure Portrait Anchor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#121212]" />
        
        {/* Main Portrait Layer */}
        <div className="absolute inset-0 opacity-60 mix-blend-screen">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
            alt="Portrait"
            className="w-full h-full object-cover object-center filter grayscale contrast-125" 
          />
        </div>

        {/* Secondary Exposure Layer (Nature/Texture) */}
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1000&auto=format&fit=crop" 
            alt="Texture"
            className="w-full h-full object-cover object-center filter contrast-150" 
          />
        </div>

        {/* Gradient Overlays for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-[#121212]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/80 via-transparent to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Top Label */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="text-xs md:text-sm text-gray-300 font-mono tracking-widest uppercase">
            Sngdh [v1.0]
          </p>
        </motion.div>

        {/* Main Title */}
        <div className="space-y-2">
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold text-white tracking-tighter leading-none"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            The Flaw
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              OS
            </span>
          </motion.h1>
          
          <motion.p
            className="text-sm md:text-base text-gray-400 max-w-md font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Architecting identity through functional imperfection.
          </motion.p>
        </div>

        {/* Bottom Status */}
        <motion.div 
          className="flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-xs text-gray-400 uppercase tracking-wider">System Online</span>
        </motion.div>
      </div>

      {/* Interactive Hover Glitch */}
      <motion.div
        className="absolute inset-0 bg-white/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      />
    </motion.div>
  );
}
