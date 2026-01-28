import { motion } from 'motion/react';
import { Briefcase, MessageSquare, GraduationCap } from 'lucide-react';

const products = [
  { name: 'CareerOS', icon: Briefcase, color: 'purple' },
  { name: 'FocusChat', icon: MessageSquare, color: 'blue' },
  { name: 'UniVerse', icon: GraduationCap, color: 'emerald' }
];

const colorMap = {
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400' },
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400' }
};

export function LiveProductsTile() {
  return (
    <motion.div
      className="h-full bg-[#121212] rounded-3xl border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden group"
      style={{ borderWidth: '0.5px' }}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />
      </div>

      {/* Gradient glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.5 }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Live Products</p>
          <h3 className="text-xl text-white">Digital Suite</h3>
        </div>

        {/* Products Grid */}
        <div className="flex-1 flex flex-col justify-center space-y-3">
          {products.map((product, index) => {
            const colors = colorMap[product.color as keyof typeof colorMap];
            const Icon = product.icon;

            return (
              <motion.a
                key={product.name}
                href="#"
                className="block group/product"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <div className={`${colors.bg} border ${colors.border} rounded-2xl p-3 hover:scale-105 transition-all duration-300 cursor-pointer`}>
                  <div className="flex items-center gap-3">
                    {/* Icon */}
                    <motion.div
                      className={`w-10 h-10 ${colors.bg} border ${colors.border} rounded-xl flex items-center justify-center`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className={`w-5 h-5 ${colors.text}`} />
                    </motion.div>

                    {/* Name */}
                    <div className="flex-1">
                      <p className="text-white text-sm group-hover/product:text-white transition-colors">
                        {product.name}
                      </p>
                    </div>

                    {/* Status dot */}
                    <div className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 ${colors.bg} rounded-full animate-pulse`} />
                      <span className="text-xs text-gray-500">Live</span>
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Bottom tag */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-xs text-gray-600 uppercase tracking-wider">In Production</p>
        </div>
      </div>

      {/* Animated corner dot */}
      <motion.div
        className="absolute top-6 right-6 w-2 h-2 bg-purple-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 1, 0.3]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}
