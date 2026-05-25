/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROFILE_SLIDES } from "../data";
import { ChevronLeft, ChevronRight, UserCheck, Terminal, Award, HelpCircle } from "lucide-react";

export default function ProfileWidget() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNext = () => {
    setSlideIndex((prev) => (prev + 1) % PROFILE_SLIDES.length);
  };

  const handlePrev = () => {
    setSlideIndex((prev) => (prev - 1 + PROFILE_SLIDES.length) % PROFILE_SLIDES.length);
  };

  const activeSlide = PROFILE_SLIDES[slideIndex];

  return (
    <section className="w-full bg-black py-20 border-t border-white/5 relative">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12">
        
        {/* Section title */}
        <div className="mb-12">
          <span className="font-mono text-xs text-blue-500 uppercase tracking-widest block font-bold mb-2">
            [ LEAD INTERFACES ]
          </span>
          <h2 className="font-sans font-black text-4xl md:text-5xl text-white uppercase tracking-tighter">
            Profile & Core Focus
          </h2>
        </div>

        {/* Dynamic Split Layout Box */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10 rounded-[32px] overflow-hidden bg-[#090909]">
          
          {/* Left Box: Deep black slate with dynamic data + interactive controls */}
          <div className="p-8 md:p-12 flex flex-col justify-between min-h-[400px] border-b md:border-b-0 md:border-r border-white/10 relative">
            
            {/* Top row */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] text-[#555] uppercase tracking-widest block">
                ROLE SELECTION // 0{slideIndex + 1}_
              </span>
              <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            </div>

            {/* Dynamic Card Content Container */}
            <div className="my-8 flex-1 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide.id}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 25 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-4"
                >
                  <h3 className="font-sans font-black text-2xl md:text-3xl text-white uppercase tracking-tight leading-tight">
                    {activeSlide.name}
                  </h3>
                  
                  <span className="inline-block px-3 py-1 rounded bg-blue-600/10 border border-blue-500/20 font-mono text-[10.5px] text-blue-400 font-bold uppercase tracking-wider">
                    ⚡ {activeSlide.role}
                  </span>

                  <p className="font-serif italic text-base md:text-lg text-neutral-300 leading-relaxed pt-2">
                    "{activeSlide.tagline}"
                  </p>

                  <div className="space-y-2.5 pt-4">
                    {activeSlide.facts.map((fact, index) => (
                      <div key={index} className="flex items-start gap-2.5 text-xs text-gray-400 leading-relaxed select-text">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                        <span>{fact}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows Controls Bar */}
            <div className="flex items-center justify-between border-t border-white/5 pt-6">
              <span className="font-sans font-extrabold text-xs text-[#888] font-mono tracking-widest uppercase">
                {activeSlide.signature}
              </span>
              
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="w-11 h-11 rounded-full border border-white/10 bg-black hover:bg-white hover:text-black hover:border-white transition-all flex items-center justify-center font-bold text-white focus:outline-none cursor-pointer"
                  style={{ touchAction: "manipulation" }}
                  aria-label="Previous profile"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-11 h-11 rounded-full border border-white/10 bg-black hover:bg-white hover:text-black hover:border-white transition-all flex items-center justify-center font-bold text-white focus:outline-none cursor-pointer"
                  style={{ touchAction: "manipulation" }}
                  aria-label="Next profile"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Box: Vibrant dynamic solid color profile background with custom abstract portrait cutout */}
          <div className={`transition-colors duration-500 ${activeSlide.avatarBgColor} flex items-center justify-center p-8 md:p-12 relative h-[350px] md:h-auto`}>
            
            {/* Custom vector portrait outline inside yellow container representing Gokulan */}
            <div className="relative w-full max-w-sm h-full flex items-center justify-center select-none">
              
              {/* Backlit geometric element */}
              <div className="absolute inset-4 rounded-[24px] border-4 border-black/10 flex items-center justify-center p-4">
                <div className="w-full h-full border border-black/5 rounded-[12px] flex items-center justify-center font-serif text-black/5 italic text-6xl select-none font-bold">
                  GKLN
                </div>
              </div>

              {/* Developer schematic avatar representation */}
              <div className="relative z-10 w-44 h-44 md:w-56 md:h-56 rounded-full border-4 border-black bg-black flex items-center justify-center shadow-2xl relative overflow-hidden group">
                
                {/* Simulated radar scan sweeps */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(37,99,235,0.15),transparent)] [mask-image:linear-gradient(white,transparent)] h-[200%] animate-pulse pointer-events-none" />

                <div className="absolute top-8 w-12 h-1 bg-blue-500/80 rounded-full animate-bounce" />

                {/* Cyber Glasses and profile outlines */}
                <div className="flex flex-col items-center justify-center gap-1.5 text-center px-4">
                  <span className="font-mono text-center font-black text-xl text-white tracking-widest leading-none">
                    [ G . R ]
                  </span>
                  <div className="flex items-center gap-1 justify-center py-1">
                    <span className="w-8 h-4 rounded-full border border-blue-400" />
                    <span className="w-2 h-[1px] bg-white/40" />
                    <span className="w-8 h-4 rounded-full border border-blue-400" />
                  </div>
                  <span className="font-mono text-[9px] text-[#888888] uppercase tracking-wider block leading-snug">
                    Full-Stack Core Node
                  </span>
                </div>

                <div className="absolute bottom-4 font-mono text-[8.5px] text-emerald-400 tracking-wider">
                  ● ACTIVE_MERN
                </div>
              </div>

              {/* Outer floating metadata markers */}
              <div className="absolute top-6 left-6 py-1 px-2.5 bg-black border border-black rounded font-mono text-[9px] text-white">
                LOC: INDIA // +5.5
              </div>

              <div className="absolute bottom-6 right-6 py-1 px-2.5 bg-black border border-[#222] rounded font-mono text-[9px] text-white flex items-center gap-1">
                <Terminal className="w-3 h-3 text-blue-500" />
                SHELL: DEPLOYED
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
