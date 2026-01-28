import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socials = [
  { icon: Github, label: 'GitHub', color: 'white', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', color: 'blue', href: '#' },
  { icon: Twitter, label: 'Twitter', color: 'cyan', href: '#' },
  { icon: Mail, label: 'Email', color: 'purple', href: '#' }
];

const colorMap = {
  white: { bg: 'bg-white/5', border: 'border-white/10', text: 'text-white', hover: 'hover:border-white/30' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400', hover: 'hover:border-blue-500/40' },
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-400', hover: 'hover:border-cyan-500/40' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400', hover: 'hover:border-purple-500/40' }
};

export function SocialStickersTile() {
  return (
    <motion.div
      className="h-full bg-[#121212] rounded-3xl border border-white/10 p-6 flex flex-col justify-center relative overflow-hidden group"
      style={{ borderWidth: '0.5px' }}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
          backgroundSize: '15px 15px'
        }} />
      </div>

      {/* Gradient glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.5 }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-5 text-center">
          <p className="text-xs text-gray-500 uppercase tracking-wider">Connect</p>
        </div>

        {/* Social Icons Grid (2x2) */}
        <div className="grid grid-cols-2 gap-3">
          {socials.map((social, index) => {
            const colors = colorMap[social.color as keyof typeof colorMap];
            const Icon = social.icon;

            return (
              <motion.a
                key={social.label}
                href={social.href}
                className={`${colors.bg} border ${colors.border} ${colors.hover} rounded-2xl p-5 flex flex-col items-center justify-center gap-2 transition-all duration-300 group/social`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.5, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                </motion.div>

                {/* Label */}
                <span className="text-xs text-gray-500 group-hover/social:text-gray-400 transition-colors">
                  {social.label}
                </span>

                {/* Hover indicator */}
                <motion.div
                  className={`w-8 h-0.5 ${colors.bg} rounded-full`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* Corner decorations */}
      <motion.div
        className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 1, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-4 left-4 w-2 h-2 bg-purple-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 1, 0.3]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
    </motion.div>
  );
}
