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
          
          <h3 className="text-xl text-white">Now Consuming</h3>
        </div>

        {/* Current items */}
        <div className="flex-1 space-y-4">
          {/* Reading */}
          <motion.div
            className="bg-white/5 border border-white/10 rounded-2xl p-4"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.02, borderColor: 'rgba(236, 72, 153, 0.3)' }}
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-pink-500/10 border border-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-4 h-4 text-pink-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 mb-1">Reading</p>
                <p className="text-sm text-white truncate">Atomic Habits</p>
                <p className="text-xs text-gray-600">James Clear</p>
              </div>
            </div>
          </motion.div>

          {/* Listening */}
          <motion.div
            className="bg-white/5 border border-white/10 rounded-2xl p-4"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ scale: 1.02, borderColor: 'rgba(168, 85, 247, 0.3)' }}
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Headphones className="w-4 h-4 text-purple-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 mb-1">Listening</p>
                <p className="text-sm text-white truncate">Lo-fi Study Beats</p>
                <p className="text-xs text-gray-600">Focus Mix</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quote/Analogy */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-xs text-gray-500 italic leading-relaxed">
            "Engineering is like a Desi wedding—systematic planning meets creative chaos."
          </p>
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
