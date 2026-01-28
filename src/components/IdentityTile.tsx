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

      {/* Floating orb */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 30, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Status Badge */}
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-xs text-emerald-400 uppercase tracking-wider">Available for Projects</span>
        </motion.div>

        {/* Name & Title */}
        <div className="mb-8">
          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Your Name
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-px bg-gradient-to-r from-purple-500 to-blue-500" />
            <p className="text-lg text-gray-400">Product Engineer & System Designer</p>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Building systematic solutions at the intersection of{' '}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            engineering rigor
          </span>
          {' '}and{' '}
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            creative innovation
          </span>
          .
        </motion.p>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 flex items-center justify-between pt-8 border-t border-white/10">
        <div className="flex items-center gap-6">
          <div>
            <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Focus</p>
            <p className="text-sm text-white">Founder's Office Operations</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Expertise</p>
            <p className="text-sm text-white">AI-Augmented Systems</p>
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Sparkles className="w-6 h-6 text-purple-400" />
        </motion.div>
      </div>

      {/* Decorative dots */}
      <motion.div
        className="absolute top-10 right-10 w-2 h-2 bg-purple-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-2 h-2 bg-blue-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </motion.div>
  );
}
