import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles } from 'lucide-react';

const brandImages = [
  'https://images.unsplash.com/photo-1626251851903-1143b5c6f057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwbG9nbyUyMGRlc2lnbnxlbnwxfHx8fDE3Njk2MTU2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1746904305806-a9ce08b33dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGFja2FnaW5nJTIwZWxlZ2FudHxlbnwxfHx8fDE3Njk2MTU2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1727755868081-c25d2b427ce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwbW9kZXJufGVufDF8fHx8MTc2OTYxNTYxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1762525984790-7349708a8894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kaW5nJTIwYWVzdGhldGljfGVufDF8fHx8MTc2OTYxNTYxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
];

export function BrandVaultTile() {
  return (
    <motion.div
      className="h-full bg-[#121212] rounded-3xl border border-white/10 overflow-hidden relative group"
      style={{ borderWidth: '0.5px' }}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
    >
      {/* Header overlay */}
      <div className="absolute top-0 left-0 right-0 z-20 p-4 bg-gradient-to-b from-black/60 to-transparent">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
          </motion.div>
          <h3 className="text-sm text-white">Brand Vault</h3>
        </div>
      </div>

      {/* 2x2 Image Grid */}
      <div className="grid grid-cols-2 grid-rows-2 h-full gap-1 p-1">
        {brandImages.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
          >
            <ImageWithFallback
              src={image}
              alt={`Brand ${index + 1}`}
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Index badge */}
            <div className="absolute top-2 right-2 w-6 h-6 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center">
              <span className="text-xs text-white">{index + 1}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-400">Creative Portfolio</p>
          <div className="flex items-center gap-1">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-purple-500"
                animate={{
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 opacity-0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
      />
    </motion.div>
  );
}
