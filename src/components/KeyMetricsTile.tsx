import { motion } from 'motion/react';
import { TrendingUp } from 'lucide-react';
import { SparklineChart } from './SparklineChart';

export function KeyMetricsTile() {
  return (
    <div className="h-full bg-[#161616] rounded-3xl border border-white/10 p-6 shadow-2xl shadow-black/40 hover:shadow-black/60 transition-shadow duration-500 group relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs text-gray-500 uppercase tracking-wider">Performance</p>
          <motion.div
            className="w-8 h-8 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </motion.div>
        </div>

        {/* Main Metric */}
        <div className="mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-baseline gap-2"
          >
            <span className="text-5xl text-white">
              92
            </span>
            <span className="text-2xl text-gray-400">%</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center gap-2 mt-2"
          >
            <span className="text-xs text-emerald-400">+12.5%</span>
            <span className="text-xs text-gray-500">vs last month</span>
          </motion.div>
        </div>

        {/* Sparkline Chart */}
        <div className="mt-auto">
          <p className="text-xs text-gray-500 mb-3">7-day trend</p>
          <SparklineChart />
        </div>
      </div>

      {/* Animated dot */}
      <motion.div
        className="absolute top-6 right-6 w-2 h-2 bg-emerald-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
