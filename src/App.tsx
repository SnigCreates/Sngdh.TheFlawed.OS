import React from 'react';
import StageOne from './components/StageOne';
import StageTwo from './components/StageTwo';

// Using the imports from your file structure
import { Header } from './components/Header';
import { IdentityTile } from './components/IdentityTile';
import { GritStatTile } from './components/GritStatTile';
import { BrandVaultTile } from './components/BrandVaultTile';
import { TechnicalDeepDiveTile } from './components/TechnicalDeepDiveTile';
import { LiveProductsTile } from './components/LiveProductsTile';
import { SocialStickersTile } from './components/SocialStickersTile';

function App() {
  return (
    <div className="bg-[#0a0a0a] text-white selection:bg-white selection:text-black w-full min-h-screen">
      
      {/* 1. STAGE ONE: IDENTITY ANCHOR */}
      <StageOne />

      {/* 2. STAGE TWO: MANIFESTO */}
      <StageTwo />

      {/* 3. STAGE THREE: THE BENTO SYSTEM */}
      <div className="w-full bg-[#0a0a0a] pb-20">
        <main className="max-w-[1400px] mx-auto px-6 flex flex-col gap-6">
          
          <Header />
          
          {/* THE MAIN GRID - Matching your Stage 3 Screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Row 1: Left Big Block */}
            <div className="md:col-span-6">
              <IdentityTile />
            </div>

            {/* Row 1: Right Side Blocks */}
            <div className="md:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-1">
                <GritStatTile />
              </div>
              <div className="md:col-span-1">
                <BrandVaultTile />
              </div>
              <div className="md:col-span-2">
                <LiveProductsTile />
              </div>
            </div>

            {/* Row 2: Deep Dive Section */}
            <div className="md:col-span-8">
              <TechnicalDeepDiveTile />
            </div>
            
            {/* Row 2: Social/Connect Section */}
            <div className="md:col-span-4">
              <SocialStickersTile />
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default App;