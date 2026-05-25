/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ARTICLES_UPDATES } from "../data";
import { Calendar, Tag, ArrowRight, Award } from "lucide-react";

export default function ArticlesUpdates() {
  return (
    <section id="articles" className="w-full bg-black py-20 border-t border-white/5 relative">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12">
        
        {/* Left Aligned Clean Typography Title Section */}
        <div className="text-left mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-blue-500 uppercase tracking-widest block font-bold mb-2">
              [ ACHIEVEMENTS & INSIGHTS ]
            </span>
            <h2 className="font-sans font-black text-4xl md:text-6xl text-white tracking-tighter uppercase select-none">
              Articles & Updates
            </h2>
          </div>
          <span className="font-mono text-xs text-[#555] uppercase hidden md:block">
            STABLE LOG DEPLOYMENT // SWIPE TO READ
          </span>
        </div>

        {/* Responsive Layout: snap scrollable row on mobile, 3-column grid on desktop */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 pb-6 lg:pb-0 snap-x snap-mandatory no-scrollbar">
          
          {/* Article Card 1: Vibrant Red */}
          <div className="min-w-[85vw] sm:min-w-[420px] lg:min-w-0 snap-center rounded-[32px] bg-red-600 p-8 flex flex-col justify-between h-[380px] text-white relative overflow-hidden group select-none">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform" />
            
            <div className="z-10 flex justify-between items-start">
              <span className="font-mono text-[9px] bg-black/40 border border-white/10 rounded px-2 py-0.5 uppercase tracking-wider font-bold">
                {ARTICLES_UPDATES[0].category}
              </span>
              <Award className="w-6 h-6 text-white bg-black/30 p-1.5 rounded-full border border-white/10 animate-bounce" />
            </div>

            <div className="z-10 mt-6 flex-1 flex flex-col justify-between">
              <h3 className="font-sans font-black text-2xl md:text-3xl tracking-tight leading-tight select-text text-white">
                {ARTICLES_UPDATES[0].title}
              </h3>

              <div className="border-t border-white/15 pt-4 flex justify-between items-center mt-6">
                <span className="font-mono text-[10px] text-white/80 uppercase">
                  🏆 {ARTICLES_UPDATES[0].badge}
                </span>
                <span className="font-mono text-[10px] text-white/50">
                  {ARTICLES_UPDATES[0].date}
                </span>
              </div>
            </div>
          </div>

          {/* Article Card 2: Bright Amber Yellow with a vintage TV Frame */}
          <div className="min-w-[85vw] sm:min-w-[420px] lg:min-w-0 snap-center rounded-[32px] bg-amber-400 p-8 flex flex-col justify-between h-[380px] text-black relative overflow-hidden group select-none">
            
            {/* The Vintage TV Frame in vector representation overlay */}
            <div className="absolute right-4 bottom-4 w-40 h-32 border-4 border-black rounded-3xl opacity-15 flex items-center justify-center p-2">
              {/* Screen outline */}
              <div className="w-full h-full border border-black rounded flex flex-col justify-end p-1">
                <div className="flex gap-1 justify-center">
                  <span className="w-1.5 h-1.5 bg-black rounded-full" />
                  <span className="w-1.5 h-1.5 bg-black rounded-full" />
                </div>
              </div>
              {/* Antenna details */}
              <div className="absolute -top-6 left-1/3 w-8 h-6 rotate-[-30deg] border-l-2 border-black origin-bottom-left" />
              <div className="absolute -top-6 right-1/3 w-8 h-6 rotate-[30deg] border-r-2 border-black origin-bottom-right" />
            </div>

            <div className="z-10">
              <span className="font-mono text-[9px] bg-black/25 border border-black/10 rounded px-2 py-0.5 uppercase tracking-wider font-bold">
                {ARTICLES_UPDATES[1].category}
              </span>
            </div>

            <div className="z-10 mt-6 flex-1 flex flex-col justify-between">
              <h3 className="font-sans font-black text-2xl md:text-3xl tracking-tight leading-tight select-text text-black">
                {ARTICLES_UPDATES[1].title}
              </h3>

              <div className="border-t border-black/15 pt-4 flex justify-between items-center mt-6">
                <span className="font-mono text-[10px] text-black/80 font-bold uppercase">
                  ⚙️ {ARTICLES_UPDATES[1].badge}
                </span>
                <span className="font-mono text-[10px] text-black/50 font-bold">
                  {ARTICLES_UPDATES[1].date}
                </span>
              </div>
            </div>
          </div>

          {/* Article Card 3: Stark White */}
          <div className="min-w-[85vw] sm:min-w-[420px] lg:min-w-0 snap-center rounded-[32px] bg-white p-8 flex flex-col justify-between h-[380px] text-black relative overflow-hidden group select-none border border-white/20">
            
            <div className="z-10">
              <span className="font-mono text-[9px] bg-neutral-100 border border-neutral-200 rounded px-2 py-0.5 uppercase tracking-wider font-extrabold text-neutral-800">
                {ARTICLES_UPDATES[2].category}
              </span>
            </div>

            <div className="z-10 mt-6 flex-1 flex flex-col justify-between">
              <h3 className="font-sans font-black text-2xl md:text-3xl tracking-tight leading-tight select-text text-black">
                {ARTICLES_UPDATES[2].title}
              </h3>

              <div className="border-t border-black/10 pt-4 flex justify-between items-center mt-6">
                <span className="font-mono text-[10px] text-neutral-800 uppercase font-black">
                  🌐 {ARTICLES_UPDATES[2].badge}
                </span>
                <span className="font-mono text-[10px] text-neutral-500 font-bold">
                  {ARTICLES_UPDATES[2].date}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Swipe indicator for mobile */}
        <div className="flex justify-center gap-1.5 mt-6 lg:hidden">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-850" />
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-850" />
        </div>

      </div>
    </section>
  );
}
