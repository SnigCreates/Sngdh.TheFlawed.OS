import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Zap, Award } from 'lucide-react';
import { useRef } from 'react';

export function SuperpowerTile() {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    stiffness: 150,
    damping: 20
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 150,
    damping: 20
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseXPos = (e.clientX - centerX) / (rect.width / 2);
    const mouseYPos = (e.clientY - centerY) / (rect.height / 2);

    mouseX.set(mouseXPos);
    mouseY.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d'
      }}
      className="h-full backdrop-blur-xl bg-[#161616]/50 rounded-3xl border border-white/10 p-8 flex flex-col justify-between group hover:border-purple-500/30 transition-colors duration-500 relative overflow-hidden"
    >
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100"
        initial={{ x: '-100%', y: '-100%' }}
        whileHover={{ x: '100%', y: '100%' }}
        transition={{ duration: 0.6 }}
      />

      <div className="relative" style={{ transform: 'translateZ(30px)' }}>
        <motion.div 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 px-4 py-2 rounded-full mb-6"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Zap className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-purple-300">Superpower</span>
        </motion.div>
        
        <h2 className="text-4xl md:text-5xl mb-6 text-white leading-tight">
          Cleared{' '}
          <motion.span 
            className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: '200% 200%'
            }}
          >
            15 ECE Papers
          </motion.span>
          <br />
          in One Cycle
        </h2>
        
        <p className="text-gray-400 leading-relaxed mb-6 max-w-lg">
          A testament to exceptional analytical thinking, ruthless time management, and unwavering execution. 
          This discipline now powers every system I build.
        </p>
      </div>

      <div 
        className="border-t border-white/10 pt-6 relative" 
        style={{ transform: 'translateZ(20px)' }}
      >
        <div className="flex items-start gap-4">
          <motion.div 
            className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl p-3 mt-1"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Award className="w-6 h-6 text-purple-400" />
          </motion.div>
          <div>
            <h3 className="text-sm text-gray-500 mb-1">Current Focus</h3>
            <p className="text-white text-lg">Founder's Office Operations</p>
            <p className="text-sm text-gray-400 mt-2">
              Driving strategic initiatives and operational excellence
            </p>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <motion.div
        className="absolute top-10 right-10 w-2 h-2 bg-purple-500 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5]
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
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}
