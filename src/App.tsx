import { motion } from 'motion/react';
import { IdentityTile } from './components/IdentityTile';
import { GritStatTile } from './components/GritStatTile';
import { EngineTile } from './components/EngineTile';
import { BrandVaultTile } from './components/BrandVaultTile';
import { TechnicalDeepDiveTile } from './components/TechnicalDeepDiveTile';
import { LiveProductsTile } from './components/LiveProductsTile';
import { CreativeSoulTile } from './components/CreativeSoulTile';
import { SocialStickersTile } from './components/SocialStickersTile';
import { DirectLineTile } from './components/DirectLineTile';

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.2
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
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] p-4 md:p-6 lg:p-8">
      {/* Subtle background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-950/10 via-transparent to-blue-950/10 pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[minmax(280px,auto)]"
        >
          {/* Identity Tile (2x2) - Columns 1-2, Rows 1-2 */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 md:row-span-2"
          >
            <IdentityTile />
          </motion.div>

          {/* Grit Stat (1x1) - Column 3, Row 1 */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-1 md:row-span-1"
          >
            <GritStatTile />
          </motion.div>

          {/* Brand Vault (1x1) - Column 4, Row 1 */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-1 md:row-span-1"
          >
            <BrandVaultTile />
          </motion.div>

          {/* The Engine (2x1) - Columns 3-4, Row 2 */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 md:row-span-1"
          >
            <EngineTile />
          </motion.div>

          {/* Technical Deep-Dive (2x1) - Columns 1-2, Row 3 */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 md:row-span-1"
          >
            <TechnicalDeepDiveTile />
          </motion.div>

          {/* Live Products (1x1) - Column 3, Row 3 */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-1 md:row-span-1"
          >
            <LiveProductsTile />
          </motion.div>

          {/* Creative Soul (1x1) - Column 4, Row 3 */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-1 md:row-span-1"
          >
            <CreativeSoulTile />
          </motion.div>

          {/* Direct Line (2x1) - Columns 1-2, Row 4 */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 md:row-span-1"
          >
            <DirectLineTile />
          </motion.div>

          {/* Social Stickers (1x1) - Column 3, Row 4 */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-1 md:row-span-1"
          >
            <SocialStickersTile />
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-700 text-sm">© 2026 • Engineered with precision & purpose</p>
        </motion.div>
      </div>
    </div>
  );
}
