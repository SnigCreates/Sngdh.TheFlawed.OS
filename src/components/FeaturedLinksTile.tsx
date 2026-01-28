import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const featuredLinks = [
  { 
    title: 'Case Study: E-commerce Platform', 
    description: 'Building a scalable solution for modern retail',
    tag: 'Featured'
  },
  { 
    title: 'Design System Documentation', 
    description: 'Comprehensive guide to our component library',
    tag: 'Documentation'
  },
  { 
    title: 'Open Source Contributions', 
    description: 'Contributing to the developer community',
    tag: 'GitHub'
  },
  { 
    title: 'Technical Blog', 
    description: 'Deep dives into engineering challenges',
    tag: 'Writing'
  }
];

export function FeaturedLinksTile() {
  return (
    <div className="h-full bg-[#161616] rounded-3xl border border-white/10 p-8 shadow-2xl shadow-black/40 hover:shadow-black/60 transition-shadow duration-500 group relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-gray-500 uppercase tracking-wider">Quick Access</p>
            <ExternalLink className="w-4 h-4 text-gray-600" />
          </div>
          <h3 className="text-2xl text-white">Featured Links</h3>
        </div>

        {/* Links List */}
        <div className="space-y-3 flex-1">
          {featuredLinks.map((link, index) => (
            <motion.a
              key={index}
              href="#"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="block group/link"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    {/* Tag */}
                    <span className="inline-block px-2 py-0.5 bg-white/5 border border-white/10 rounded text-xs text-gray-400 mb-2">
                      {link.tag}
                    </span>
                    
                    {/* Title */}
                    <h4 className="text-white text-sm mb-1 group-hover/link:text-blue-400 transition-colors truncate">
                      {link.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-gray-500 text-xs line-clamp-1">
                      {link.description}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <motion.div
                    className="flex-shrink-0 w-8 h-8 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover/link:bg-white/10 group-hover/link:border-blue-500/30 transition-all duration-300"
                    whileHover={{ x: 3, y: -3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover/link:text-blue-400 transition-colors" />
                  </motion.div>
                </div>

                {/* Progress indicator */}
                <motion.div
                  className="mt-3 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All Button */}
        <motion.button
          className="mt-4 w-full py-3 bg-white/5 border border-white/10 rounded-2xl text-sm text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>View All Projects</span>
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
}
