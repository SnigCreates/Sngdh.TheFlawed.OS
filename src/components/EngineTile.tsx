import { motion } from 'motion/react';
import { Cpu, Zap } from 'lucide-react';

export function EngineTile() {
  return (
    <motion.div
      className="h-full bg-[#121212] rounded-3xl border border-white/10 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group"
      style={{ borderWidth: '0.5px' }}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Gradient glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.5 }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span className="text-xs text-emerald-400 uppercase tracking-wider">Personal Brand</span>
            </motion.div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl text-white mb-2">The Flaw Philosophy</h3>
            <p className="text-sm text-gray-400 max-w-md">
              My personal branding framework. It’s about documenting the journey from system failure to stable build. Every project here is a patch in the OS.
            </p>
          </div>

          {/* Efficiency Badge */}
          <motion.div 
            className="backdrop-blur-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-2xl p-4 flex flex-col items-center justify-center min-w-[100px]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Zap className="w-8 h-8 text-emerald-400 mb-1" />
            <motion.span 
              className="text-3xl text-emerald-300"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              60%
            </motion.span>
            <span className="text-xs text-gray-400 mt-1 text-center">Efficiency Gain</span>
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">SDLC Reduction</span>
            <span className="text-emerald-400">60%</span>
          </div>
          
          <div className="relative h-3 bg-black/30 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '60%' }}
              transition={{ delay: 0.5, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Gradient fill */}
              <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 relative overflow-hidden">
                {/* Animated glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  animate={{
                    x: ['-100%', '200%']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 0.5
                  }}
                />
                {/* Pulsing glow */}
                <motion.div
                  className="absolute inset-0 bg-emerald-400"
                  animate={{
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Phase tags */}
          <div className="flex items-center gap-2 flex-wrap">
            {['Planning', 'Development', 'Deployment'].map((phase, index) => (
              <motion.span
                key={phase}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(16, 185, 129, 0.3)' }}
              >
                {phase}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <motion.div
        className="absolute top-10 right-20 w-2 h-2 bg-emerald-500 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 1, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 left-20 w-2 h-2 bg-teal-500 rounded-full"
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 1, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </motion.div>
  );
}
