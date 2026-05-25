/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Terminal, Code, Cpu, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-12 pt-8 pb-16 flex flex-col items-center">
      
      {/* 1. Large High-Contrast Hero Card/Frame */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-[320px] md:h-[500px] rounded-[32px] overflow-hidden relative border border-white/15 bg-gradient-to-br from-[#0a0a1a] via-black to-[#050510] flex items-center justify-center p-6 md:p-12 mb-12 shadow-[0_0_80px_rgba(37,99,235,0.08)] group"
      >
        {/* Dynamic Glowing Blue Backlighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none transition-all duration-700 group-hover:bg-blue-600/15" />

        {/* Abstract Pixel Grid Base */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* Cyber-Artistic Tech Representation of Gokulan (Developer) */}
        <div className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center space-y-6">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="w-20 h-20 md:w-28 md:h-28 rounded-3xl bg-black border-2 border-white/20 flex items-center justify-center relative shadow-[0_0_30px_rgba(37,99,235,0.2)]"
          >
            {/* Corner Bracket Accents representing Brutalism */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-blue-500" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-blue-500" />
            
            {/* Spinning inner orbit wireframe */}
            <div className="absolute inset-1 rounded-2xl border border-white/5 animate-spin [animation-duration:8s] flex items-center justify-center">
              <div className="h-4 w-4 bg-blue-600 rounded-full animate-ping" />
            </div>
            
            <Cpu className="w-8 md:w-12 h-8 md:h-12 text-white stroke-[1.5]" />
          </motion.div>

          {/* Glowing badges overlaid */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-sm">
            <span className="px-3 py-1 rounded bg-[#101010] border border-white/10 font-mono text-[10px] text-white flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-blue-500" />
              MERN SHELL
            </span>
            <span className="px-3 py-1 rounded bg-[#101010] border border-white/10 font-mono text-[10px] text-white flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5 text-blue-500" />
              UI / UX LABS
            </span>
            <span className="px-3 py-1 rounded bg-[#101010] border border-white/10 font-mono text-[10px] text-white flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              CAMPUS TECH
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="font-sans font-black text-2xl md:text-4xl text-white tracking-widest uppercase">
              GOKULAN R
            </h1>
            <p className="font-mono text-xs text-[#555555] uppercase tracking-wider">
              System Architect • Digital Product Designer • GDG Lead Builder
            </p>
          </div>
        </div>

        {/* Lower Left Brutalist Accent */}
        <div className="absolute bottom-6 left-6 font-mono text-[10px] text-white/30 hidden md:block">
          SYS_STATUS: ONLINE // ENG_STACK_v26.5
        </div>

        {/* Lower Right Interactive Accent */}
        <div className="absolute bottom-6 right-6 font-mono text-[10px] text-blue-500/70 animate-pulse hidden md:block">
          ● SCROLL TO EXPLORE_
        </div>
      </motion.div>

      {/* 2. Main Manifest Statement Typography */}
      <div className="w-full text-left mb-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans font-black text-[32px] sm:text-[44px] md:text-[68px] lg:text-[76px] leading-[1.05] tracking-tighter text-white select-none text-balance"
        >
          I am a{" "}
          <span className="inline-block px-5 py-1 md:px-8 md:py-2 bg-blue-600 text-white rounded-full font-black select-none tracking-tighter shadow-[0_4px_24px_rgba(37,99,235,0.4)] my-1">
            creative
          </span>{" "}
          <span className="inline-block px-6 py-1.5 md:px-8 md:py-2.5 border-2 border-white/30 rounded-[99px] font-sans font-extrabold text-white text-stroke mx-1 my-1 tracking-tight text-center">
            full-stack developer
          </span>{" "}
          based in India specializing in the{" "}
          <span className="inline-block relative px-5 py-1 font-serif italic font-medium leading-none text-white text-stroke mx-1">
            MERN stack
            {/* Vector frame surrounding it */}
            <span className="absolute inset-0 border border-blue-500/80 rounded-full scale-105 pointer-events-none skew-x-[-4deg]" />
            <span className="absolute inset-x-2 -bottom-1 h-[2px] bg-blue-500" />
          </span>
          , art direction, system design, and digital solutions across all platforms.
        </motion.p>
      </div>

      {/* 3. Sub-text Paragraph OFFSET TO THE RIGHT */}
      <div className="w-full flex justify-end mt-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full md:w-1/2 text-left md:text-left md:pr-12"
        >
          <div className="h-[1px] bg-white/10 w-16 mb-4 md:block hidden" />
          <p className="font-sans font-medium text-lg text-[#888888] leading-relaxed">
            Building clean, efficient code and user-centered campus & commercial architectures. 
            Blending absolute brutalist structure with human-centered fluid micro-interactions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
