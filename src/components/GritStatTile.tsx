import { motion } from 'motion/react';
import { Trophy } from 'lucide-react';

export function GritStatTile() {
  return (
    <motion.div
      className="h-full bg-[#121212] rounded-3xl border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden group"
      style={{ borderWidth: '0.5px' }}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />
      </div>

      {/* Gradient glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.5 }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div 
          className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center mb-6"
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Trophy className="w-6 h-6 text-amber-400" />
        </motion.div>

        {/* Main Stat */}
        <div className="mb-4">
          <motion.div
            className="flex items-baseline gap-2 mb-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-6xl text-white tracking-tight">15</span>
            <span className="text-3xl text-gray-500">/</span>
            <span className="text-4xl text-gray-400">27</span>
          </motion.div>
          
          {/* Label */}
          <motion.p 
            className="text-sm text-gray-400 leading-relaxed font-medium mb-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Module: Recovery_15/27
          </motion.p>
          
          <p className="text-xs text-gray-500 leading-snug">
            The academic comeback as a case study in discipline.
          </p>
        </div>
      </div>

      {/* Bottom Progress Indicator */}
      <div className="relative z-10 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500">Completion</span>
          <span className="text-amber-400">55.6%</span>
        </div>
        
        <div className="h-2 bg-black/30 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full relative"
            initial={{ width: '0%' }}
            animate={{ width: '55.6%' }}
            transition={{ delay: 0.6, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ['-100%', '200%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 1
              }}
            />
          </motion.div>
        </div>

        {/* Stat tag */}
        <p className="text-xs text-gray-600 uppercase tracking-wider">Figure-It-Out Engine</p>
      </div>

      {/* Floating particle */}
      <motion.div
        className="absolute top-8 right-8 w-2 h-2 bg-amber-500 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.4, 1, 0.4]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}
