import { motion } from 'motion/react';
import { Headphones, BookOpen, Lightbulb } from 'lucide-react';

export function CreativeSoulTile() {
  return (
    <motion.div
      className="h-full bg-[#121212] rounded-3xl border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden group"
      style={{ borderWidth: '0.5px' }}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
    >
      {/* Gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.5 }}
      />

      {/* Vinyl record rotating background */}
      <motion.div
        className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full border-4 border-white/5 opacity-20"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/10" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="mb-4">
          <motion.div 
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-pink-500/10 border border-pink-500/20 rounded-full mb-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Lightbulb className="w-4 h-4 text-pink-400" />
            <span className="text-xs text-pink-400 uppercase tracking-wider">Inspiration</span>
          </motion.div>
          
          <h3 className="text-xl text-white">Module: The_Mind_Jar</h3>
        </div>

        {/* Coming Soon */}
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <p className="text-xl text-white font-bold tracking-wider uppercase opacity-80">The Mind Jar</p>
            <p className="text-xs text-gray-500 mt-2">The immersive physics archive (Coming Soon).</p>
          </motion.div>
        </div>
      </div>

      {/* Animated music wave */}
      <div className="absolute bottom-6 right-6 flex items-center gap-1">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="w-1 bg-pink-500 rounded-full"
            animate={{
              height: [8, 16, 8]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating dot */}
      <motion.div
        className="absolute top-6 right-6 w-2 h-2 bg-pink-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 1, 0.3]
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
