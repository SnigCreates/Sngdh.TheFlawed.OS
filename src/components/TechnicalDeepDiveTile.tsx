import { motion } from 'motion/react';
import { Radio, FileText, ArrowUpRight } from 'lucide-react';

const papers = [
  { title: 'Autonomous Drone Navigation Systems', category: 'ECE Research' },
  { title: 'Economic Models & Market Analysis', category: 'Economics Paper' }
];

export function TechnicalDeepDiveTile() {
  return (
    <motion.div
      className="h-full bg-[#121212] rounded-3xl border border-white/10 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group"
      style={{ borderWidth: '0.5px' }}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
    >
      {/* Technical wireframe background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Circuit pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="3" fill="white" />
          <circle cx="80" cy="20" r="3" fill="white" />
          <circle cx="50" cy="50" r="3" fill="white" />
          <circle cx="20" cy="80" r="3" fill="white" />
          <circle cx="80" cy="80" r="3" fill="white" />
          <line x1="20" y1="20" x2="80" y2="20" stroke="white" strokeWidth="1" />
          <line x1="20" y1="20" x2="20" y2="80" stroke="white" strokeWidth="1" />
          <line x1="80" y1="20" x2="80" y2="80" stroke="white" strokeWidth="1" />
          <line x1="20" y1="80" x2="80" y2="80" stroke="white" strokeWidth="1" />
          <line x1="50" y1="50" x2="20" y2="20" stroke="white" strokeWidth="1" />
          <line x1="50" y1="50" x2="80" y2="80" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      {/* Gradient glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.5 }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Radio className="w-4 h-4 text-blue-400" />
              <span className="text-xs text-blue-400 uppercase tracking-wider">Research</span>
            </motion.div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl text-white mb-2">Drone Systems & Research</h3>
            <p className="text-sm text-gray-400">
              Technical deep-dives into autonomous systems and economic modeling
            </p>
          </div>

          {/* Technical Icon */}
          <motion.div 
            className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center"
            animate={{
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
              <line x1="9" y1="3" x2="9" y2="21" strokeWidth="1.5" />
              <line x1="15" y1="3" x2="15" y2="21" strokeWidth="1.5" />
              <line x1="3" y1="9" x2="21" y2="9" strokeWidth="1.5" />
              <line x1="3" y1="15" x2="21" y2="15" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="2" strokeWidth="1.5" />
            </svg>
          </motion.div>
        </div>

        {/* Research Papers */}
        <div className="space-y-3">
          {papers.map((paper, index) => (
            <motion.a
              key={index}
              href="#"
              className="block group/paper"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <FileText className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white text-sm mb-1 group-hover/paper:text-blue-400 transition-colors">
                        {paper.title}
                      </h4>
                      <p className="text-xs text-gray-500">{paper.category}</p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    whileHover={{ x: 3, y: -3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover/paper:text-blue-400 transition-colors" />
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Animated dots */}
      <motion.div
        className="absolute top-8 right-8 w-2 h-2 bg-blue-500 rounded-full"
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
      <motion.div
        className="absolute bottom-8 left-8 w-2 h-2 bg-cyan-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 1, 0.3]
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
