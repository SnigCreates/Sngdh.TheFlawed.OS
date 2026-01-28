import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function MainHighlightTile() {
  return (
    <div className="h-full bg-[#161616] rounded-3xl border border-white/10 p-8 md:p-10 flex flex-col justify-between shadow-2xl shadow-black/40 hover:shadow-black/60 transition-shadow duration-500 group relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-blue-600/5" />
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10">
        {/* Badge */}
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8"
          whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 255, 0.2)' }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-xs text-gray-400 uppercase tracking-wider">Featured Project</span>
        </motion.div>

        {/* Main Heading */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight tracking-tight">
          The Main
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Highlight
          </span>
        </h2>

        {/* Sub-text */}
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 flex items-center justify-between pt-8 border-t border-white/10">
        <div className="flex items-center gap-6">
          <div>
            <p className="text-xs text-gray-500 mb-1">Status</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-white">Active</span>
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Year</p>
            <p className="text-sm text-white">2026</p>
          </div>
        </div>

        <motion.button
          className="px-6 py-3 bg-white text-black rounded-2xl text-sm hover:bg-gray-200 transition-colors"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          View Details
        </motion.button>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-10 left-10 w-2 h-2 bg-blue-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 1, 0.4]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
