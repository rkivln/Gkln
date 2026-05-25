/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECT_DECK } from "../data";
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, User, Code } from "lucide-react";

export default function MarqueeDeck() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJECT_DECK.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + PROJECT_DECK.length) % PROJECT_DECK.length);
  };

  // Create infinite repeating text for marquee
  const marqueeText = "GOKULAN PROJECTS • FEATURED SOLUTIONS • MERN SHIFT • INTUITIVE CODE • ".repeat(6);

  return (
    <section id="work" className="w-full bg-black py-20 relative overflow-hidden flex flex-col items-center">
      
      {/* Wave/Frequencies Upper Flanking line */}
      <div className="w-full flex justify-center opacity-30 h-8 relative pointer-events-none mb-6">
        <svg className="w-full h-full" viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none">
          <path
            d="M0,20 C120,40 240,0 360,20 C480,40 600,0 720,20 C840,40 960,0 1080,20 C1200,40 1320,0 1440,20"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="4 6"
          />
        </svg>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="w-full bg-neutral-950/40 border-y border-white/5 py-6 md:py-10 overflow-hidden relative select-none flex">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="font-sans font-black text-6xl md:text-8xl tracking-tighter uppercase text-stroke opacity-25">
            {marqueeText}
          </span>
        </div>
      </div>

      {/* Wave/Frequencies Lower Flanking line */}
      <div className="w-full flex justify-center opacity-30 h-8 relative pointer-events-none mt-6 mb-16">
        <svg className="w-full h-full" viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none">
          <path
            d="M0,20 C120,0 240,40 360,20 C480,0 600,40 720,20 C840,0 960,40 1080,20 C1200,0 1320,40 1440,20"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="4 6"
          />
        </svg>
      </div>

      {/* Floating Interactive 3D Card Stack Container */}
      <div className="w-full max-w-[1440px] px-4 md:px-12 flex flex-col items-center relative z-10">
        
        {/* Section title banner overlaying */}
        <div className="text-center mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-blue-500">
            [ PORTFOLIO SPOTLIGHT ]
          </span>
          <h3 className="font-sans font-black text-3xl md:text-5xl text-white mt-1 tracking-tight">
            The Interactive Showcase
          </h3>
        </div>

        {/* The 3D Stack Frame */}
        <div className="relative w-full max-w-xl h-[420px] flex items-center justify-center">
          {/* Deck rendering loop */}
          {PROJECT_DECK.map((project, idx) => {
            // Determine relative distance from current index
            const total = PROJECT_DECK.length;
            const offset = (idx - currentIndex + total) % total;
            
            // Render only top 3 cards in stack for clean structure
            if (offset > 2) return null;

            // Compute geometric scales and transforms based on pile depth
            const scale = 1 - offset * 0.05;
            const yOffset = -offset * 24;
            const zIndex = 30 - offset;
            const opacity = 1 - offset * 0.4;
            const rotate = offset === 0 ? 0 : offset === 1 ? 3 : -3;

            return (
              <motion.div
                key={project.id}
                style={{ zIndex }}
                animate={{
                  scale,
                  y: yOffset,
                  opacity,
                  rotate,
                  pointerEvents: offset === 0 ? "auto" : "none"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`absolute w-full max-w-lg rounded-3xl p-6 md:p-8 bg-gradient-to-br ${project.bgGradient} border border-white/20 shadow-2xl flex flex-col justify-between h-[360px] cursor-pointer group`}
                onClick={() => offset > 0 && setCurrentIndex(idx)}
              >
                {/* Upper Details Bar */}
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest block mb-1">
                      {project.role}
                    </span>
                    <h4 className="font-sans font-extrabold text-2xl md:text-3xl text-white group-hover:text-blue-300 transition-colors duration-300">
                      {project.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/40 border border-white/15 font-mono text-[10px] text-white">
                    <Calendar className="w-3 h-3 text-blue-400" />
                    {project.year}
                  </div>
                </div>

                {/* Main description paragraph */}
                <p className="font-sans text-sm md:text-base text-gray-300/90 leading-relaxed max-w-md my-4">
                  {project.description}
                </p>

                {/* Interaction & Tools Footer */}
                <div className="flex flex-col gap-4">
                  {/* Skill Badge Pill Cloud */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-white/10 font-mono text-[9px] text-[#DDDDDD] uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Horizontal dividing border */}
                  <div className="h-[1px] bg-white/10" />

                  {/* Operational Controls if front of pile */}
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[10px] text-[#888888]">
                      PROJECT_ID: {project.id.toUpperCase()}_
                    </span>
                    
                    {offset === 0 && (
                      <a
                        href="#contact"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="inline-flex items-center gap-2 font-mono text-xs text-white hover:text-blue-400 font-bold transition-colors"
                      >
                        PROPOSE SYNERGY <ExternalLink className="w-3 h-3 animate-pulse" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 3D Stack Interactive Navigation Controls */}
        <div className="flex items-center gap-4 mt-12 z-20">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-white/20 bg-black hover:bg-white hover:text-black transition-all flex items-center justify-center font-bold text-white focus:outline-none cursor-pointer group"
            style={{ touchAction: "manipulation" }}
            aria-label="Previous project"
          >
            <ArrowLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
          
          <span className="font-mono text-xs text-white bg-neutral-900 border border-white/10 px-4 py-2 rounded-full">
            {currentIndex + 1} / {PROJECT_DECK.length}
          </span>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-white/20 bg-black hover:bg-white hover:text-black transition-all flex items-center justify-center font-bold text-white focus:outline-none cursor-pointer group"
            style={{ touchAction: "manipulation" }}
            aria-label="Next project"
          >
            <ArrowRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Tiny hint beneath controls */}
        <p className="font-mono text-[10px] text-[#555555] uppercase mt-4 tracking-wider">
          💡 Swipe, click arrows, or select cards directly to switch stack focus.
        </p>
      </div>
    </section>
  );
}
