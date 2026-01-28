import { motion } from 'motion/react';
import { Copy, MapPin, Mail, Check } from 'lucide-react';
import { useState } from 'react';

export function DirectLineTile() {
  const [copied, setCopied] = useState(false);
  const email = 'your.email@example.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <motion.div
      className="h-full bg-[#121212] rounded-3xl border border-white/10 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group"
      style={{ borderWidth: '0.5px' }}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
    >
      {/* Gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.5 }}
      />

      {/* Animated circles */}
      <motion.div
        className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-6">
          <motion.div 
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Mail className="w-4 h-4 text-emerald-400" />
            <span className="text-xs text-emerald-400 uppercase tracking-wider">Open to Connect</span>
          </motion.div>

          <h3 className="text-3xl md:text-4xl text-white mb-2">Let's Connect</h3>
          <p className="text-gray-400 text-sm">
            Have a project in mind? Let's build something remarkable together.
          </p>
        </div>

        {/* Email Section */}
        <div className="space-y-4">
          {/* Copy Email Button */}
          <motion.button
            onClick={handleCopyEmail}
            className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-2xl p-5 flex items-center justify-between group/button relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ['-100%', '200%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 1
              }}
            />

            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                {copied ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Check className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </div>
              <div className="text-left">
                <p className="text-sm opacity-90">
                  {copied ? 'Email Copied!' : 'Copy Email Address'}
                </p>
                <p className="text-xs opacity-70">{email}</p>
              </div>
            </div>

            <motion.div
              className="relative z-10"
              animate={{
                x: [0, 3, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              →
            </motion.div>
          </motion.button>

          {/* Location Tag */}
          <motion.div
            className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center">
              <MapPin className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Based in</p>
              <p className="text-white text-sm">India • Available Globally</p>
            </div>
          </motion.div>

          {/* Additional info */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs text-gray-500">Typically responds in 24h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-8 right-8 w-2 h-2 bg-emerald-500 rounded-full"
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
        className="absolute top-1/2 left-8 w-2 h-2 bg-blue-500 rounded-full"
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
