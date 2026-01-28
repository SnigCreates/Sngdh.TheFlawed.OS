import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Image } from 'lucide-react';

export function GalleryTile() {
  return (
    <div className="h-full bg-[#161616] rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-black/40 hover:shadow-black/60 transition-shadow duration-500 group relative">
      {/* Image Container */}
      <div className="relative h-full">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1552931008-4e859badb0e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwY29udHJhc3QlMjBhcmNoaXRlY3R1cmUlMjBtaW5pbWFsfGVufDF8fHx8MTc2OTYxNDYyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Gallery Image"
          className="w-full h-full object-cover filter contrast-125 grayscale-0 group-hover:grayscale group-hover:scale-105 transition-all duration-700"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Icon Badge */}
        <motion.div
          className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center"
          whileHover={{ scale: 1.1, rotate: 90 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image className="w-5 h-5 text-white" />
        </motion.div>

        {/* Bottom Label */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Visual Showcase</p>
            <h3 className="text-white text-lg">The Gallery</h3>
            
            {/* Indicator bar */}
            <div className="mt-3 w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
          </motion.div>
        </div>

        {/* Hover effect overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 opacity-0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 group-hover:opacity-100 transition-all duration-500"
        />
      </div>
    </div>
  );
}
