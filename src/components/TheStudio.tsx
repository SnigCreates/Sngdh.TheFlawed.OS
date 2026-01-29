import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const studioItems = [
  {
    title: 'Engineering',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
    description: 'System Architecture'
  },
  {
    title: 'Brand Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop',
    description: 'Visual Identity'
  },
  {
    title: 'Writing',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop',
    description: 'Thought Process'
  },
  {
    title: 'Creative Rituals',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop',
    description: 'Daily Practice'
  }
];

export function TheStudio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <div className="mt-4 md:mt-6">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex items-center justify-between mb-4 px-1"
      >
        <h2 className="text-sm text-gray-400 uppercase tracking-[0.2em]">The Studio</h2>
        <div className="h-px flex-1 bg-white/10 mx-4" />
        <span className="text-xs text-gray-600">Archive 2024-2025</span>
      </motion.div>

      {/* Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 h-[400px] md:h-[300px]"
      >
        {studioItems.map((item, index) => (
          <motion.div
            key={item.title}
            variants={itemVariants}
            className="group relative h-full bg-[#121212] rounded-3xl border border-white/10 overflow-hidden cursor-pointer"
            style={{ borderWidth: '0.5px' }}
          >
            {/* Image Background */}
            <div className="absolute inset-0">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex justify-end">
                <motion.div
                  className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </motion.div>
              </div>

              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {item.description}
                </p>
                <h3 className="text-lg md:text-xl text-white font-medium tracking-tight group-hover:tracking-wide transition-all duration-500">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Hover Border Glow */}
            <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-3xl transition-colors duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
