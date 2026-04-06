'use client';

import React from 'react';

/**
 * TickerCard Component
 * Represents a single skewed card in the ticker with enhanced dark theme hover effects.
 */
const TickerCard: React.FC = () => {
  return (
    <div className="
      w-48 h-24 md:w-56 md:h-28 shrink-0 
      bg-[#131313]/40 backdrop-blur-md 
      border border-white/5 
      flex items-center justify-center 
      shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] 
      group 
      /* Dark Theme Hover Enhancements */
      hover:border-red-500/50 
      hover:bg-[#1c1c1c]/60 
      hover:shadow-[0_0_25px_rgba(220,38,38,0.15),inset_0_0_15px_rgba(220,38,38,0.05)]
      transition-all duration-500 ease-out
      transform -skew-x-12 mx-3 lg:mx-4 cursor-pointer
    ">
      <div className="skew-x-12 flex flex-col items-center pointer-events-none">
        <span className="
          text-white/10 
          group-hover:text-white/80 
          font-mono text-xs md:text-sm 
          tracking-[0.3em] uppercase font-bold 
          transition-all duration-500 
          drop-shadow-md
          group-hover:tracking-[0.35em]
        ">
          Coming Soon
        </span>
        
        {/* Animated Accent Bar */}
        <div className="
          relative w-4 h-0.5 mt-2 
          bg-white/5 
          overflow-hidden
        ">
          <div className="
            absolute inset-0 
            bg-red-600 
            translate-x-[-100%] 
            group-hover:translate-x-[0%] 
            transition-transform duration-500 ease-in-out
          "></div>
        </div>
      </div>
    </div>
  );
};

/**
 * Main App Component
 * Handles the layout, dual-row scrolling logic, and gradient masking.
 */
const SponserSection: React.FC = () => {
  const cardCount: number = 10;
  const cards: number[] = Array.from({ length: cardCount }, (_, i) => i);

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-x-hidden">
      <div className="w-full space-y-6 md:space-y-10 flex flex-col relative overflow-hidden py-8">
        
        {/* Cinematic Gradient Masks */}
        <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none"></div>

        {/* Row 1: Leftwards Scrolling */}
        <div className="flex overflow-hidden group select-none">
          <div className="flex w-max animate-scroll-left group-hover:[animation-play-state:paused]">
            {cards.map((id) => (
              <TickerCard key={`row1-orig-${id}`} />
            ))}
            {cards.map((id) => (
              <TickerCard key={`row1-dup-${id}`} />
            ))}
          </div>
        </div>

        {/* Row 2: Rightwards Scrolling */}
        <div className="flex overflow-hidden group select-none">
          <div className="flex w-max animate-scroll-right group-hover:[animation-play-state:paused]">
            {cards.map((id) => (
              <TickerCard key={`row2-orig-${id}`} />
            ))}
            {cards.map((id) => (
              <TickerCard key={`row2-dup-${id}`} />
            ))}
          </div>
        </div>

        {/* Optimized Scroll Animations */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-left {
            animation: scroll-left 60s linear infinite;
          }
          .animate-scroll-right {
            animation: scroll-right 60s linear infinite;
          }
        `}} />

      </div>

      {/* Footer Branding */}
      <div className="mt-8 text-center space-y-4 group cursor-default">
        <h2 className="text-white/20 group-hover:text-white/60 font-mono tracking-[0.4em] uppercase text-[10px] md:text-xs transition-all duration-700">
          Global Championship Series
        </h2>
        <div className="h-px w-8 bg-red-600/30 group-hover:w-24 group-hover:bg-red-600 mx-auto transition-all duration-700"></div>
      </div>
    </div>
  );
};

export default SponserSection;