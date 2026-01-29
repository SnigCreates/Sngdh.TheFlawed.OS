import React from 'react';
import StageOne from './components/StageOne';
import StageTwo from './components/StageTwo';

// Corrected Named Imports based on your file structure
import { Header } from './components/Header';
import { IdentityTile } from './components/IdentityTile';
import { GritStatTile } from './components/GritStatTile';
import { BrandVaultTile } from './components/BrandVaultTile';
import { TechnicalDeepDiveTile } from './components/TechnicalDeepDiveTile';

function App() {
  return (
    <div className="bg-[#0a0a0a] text-white selection:bg-white selection:text-black">
      
      {/* STAGE 1: IDENTITY ANCHOR */}
      <section className="min-h-screen">
        <StageOne />
      </section>

      {/* STAGE 2: THE MANIFESTO */}
      <section className="min-h-screen">
        <StageTwo />
      </section>

      {/* STAGE 3: THE SYSTEM (Your Current Bento Grid) */}
      <main className="max-w-7xl mx-auto px-6 py-20 flex flex-col gap-6">
        <Header />
        
        {/* Top Row Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-6">
            <IdentityTile />
          </div>
          <div className="md:col-span-3">
            <GritStatTile />
          </div>
          <div className="md:col-span-3">
            <BrandVaultTile />
          </div>
        </div>

        {/* Technical Deep Dive Row */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
           <TechnicalDeepDiveTile />
        </div>
      </main>

    </div>
  );
}

export default App;