/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MANIFESTO_PHRASES } from "../data";

export default function Manifesto() {
  return (
    <section className="w-full bg-black py-24 border-t border-white/5 relative overflow-hidden flex flex-col items-center">
      
      {/* Background radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(37,99,235,0.03),transparent)] pointer-events-none" />

      <div className="w-full max-w-[1440px] px-4 md:px-12 flex flex-col items-center text-center relative z-10 select-none">
        
        {/* Core title badge */}
        <span className="font-mono text-[9px] text-[#555] uppercase tracking-widest block mb-12">
          [ THE ENGINEERING MANIFESTO ]
        </span>

        {/* Dynamic Typography Grid */}
        <div className="max-w-4xl flex flex-col gap-6 md:gap-10">
          
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <span className="font-serif italic text-3xl sm:text-5xl md:text-6xl text-white font-medium text-stroke leading-none">
              Zero Bullshit
            </span>
            <span className="text-[#333] text-2xl font-sans font-light hidden sm:inline">•</span>
            <span className="font-sans font-black text-2xl sm:text-4xl md:text-5xl text-white uppercase tracking-tighter leading-none">
              High Engineering Standards
            </span>
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <span className="font-sans font-extrabold text-2xl sm:text-4xl md:text-5xl text-[#888] tracking-widest uppercase text-stroke-sm leading-none">
              Celebrating Innovation
            </span>
            <span className="text-[#333] text-2xl font-mono hidden sm:inline">//</span>
            <span className="font-serif italic text-3xl sm:text-5xl md:text-6xl text-blue-500 font-medium leading-none">
              Endless Passion
            </span>
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 overflow-hidden">
            <span className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight leading-none">
              Taking Scalability Risks
            </span>
            <span className="text-[#333] text-2xl font-light hidden sm:inline">•</span>
            <span className="font-serif italic text-3xl sm:text-5xl md:text-6xl text-white text-stroke font-semibold leading-none">
              Trusting the Architecture
            </span>
          </div>

        </div>

        {/* Small manifesto stamp */}
        <div className="mt-16 border-t border-white/5 pt-6 w-32 flex flex-col items-center gap-1">
          <span className="font-mono text-[8px] text-[#444] uppercase tracking-wider block">
            EST. CORE_STACK
          </span>
          <span className="font-sans font-bold text-[10px] text-white tracking-widest uppercase">
            GOKULAN.DEV
          </span>
        </div>

      </div>
    </section>
  );
}
