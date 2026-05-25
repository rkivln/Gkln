/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { CAPABILITIES } from "../data";
import { Sparkles, Terminal, Cpu, Database, CheckCircle2 } from "lucide-react";

export default function AboutStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  // Custom descriptions for each technology to make hovering super rich and engaging!
  const techDetails: Record<string, { desc: string; icon: any; project: string }> = {
    "MongoDB": {
      desc: "Architecting document-based databases, indexing collections, and scaling clusters to store student resources securely.",
      icon: Database,
      project: "Altus Campus Hub Database Engine"
    },
    "Express.js": {
      desc: "Creating lightweight, robust RESTful routing architectures and secure middlewares for high-throughput node applications.",
      icon: Terminal,
      project: "Backend Gateway Services"
    },
    "React.js": {
      desc: "Rendering pixel-perfect, highly responsive interfaces, customized dashboard nodes, and interactive state models.",
      icon: Cpu,
      project: "Dynamic Showcase Portals & Widgets"
    },
    "Node.js": {
      desc: "Executing high-performance, asynchronous server processes, task scheduler scripts, and real-time sockets.",
      icon: Sparkles,
      project: "EcoRide Transit Websockets"
    },
    "Tailwind CSS": {
      desc: "Writing standard utilities and custom theme architectures to render gorgeous fluid brutalist and flat-design screens.",
      icon: CheckCircle2,
      project: "Pixel-Perfect Layout Specs"
    },
    "Next.js": {
      desc: "Leveraging static site generation, React server components, and serverless edge caching for blistering-fast, SEO-optimized apps.",
      icon: Terminal,
      project: "Sem-Docs Compiled Search Console"
    },
    "Git & GitHub": {
      desc: "Managing collaborative open-source student workflows, version controlling, CI/CD pull routes, and codebases.",
      icon: Database,
      project: "Community Infrastructure Repos"
    },
    "Generative AI integration": {
      desc: "Connecting Google AI SDKs, orchestrating structural prompts, and crafting dynamic summarization tools for syllabus notes.",
      icon: Sparkles,
      project: "AI-Powered Notes Compiler Engine"
    }
  };

  return (
    <section id="about" className="w-full bg-black py-20 border-t border-white/5 relative">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12 flex flex-col items-center">
        
        {/* Giant Serif/Sans-Serif mixed Header */}
        <div className="text-center mb-16 select-none">
          <h2 className="font-sans font-black text-5xl md:text-8xl text-white tracking-widest uppercase">
            ABOUT <span className="font-serif italic font-light text-stroke lowercase text-white">me.</span>
          </h2>
          <p className="font-mono text-[10px] text-[#555555] uppercase tracking-wider mt-3">
            [ INTENTIONALLY CRAFTED ENGINEERING ]
          </p>
        </div>

        {/* Custom Clipped/Wavy Collage Frame Layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-5xl">
          
          <div className="md:col-span-2 rounded-[32px] overflow-hidden bg-gradient-to-br from-[#0c0c0c] to-[#010101] border border-white/10 p-8 flex flex-col justify-between h-[300px] relative group hover:border-white/20 transition-all">
            {/* Structural background lines */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] bg-[size:12px_12px] opacity-100" />
            
            <div className="relative z-10">
              <span className="font-mono text-[9px] text-blue-500 uppercase tracking-widest block mb-4">
                THE MISSION STATEMENT
              </span>
              <p className="font-serif italic text-xl md:text-2xl text-white leading-relaxed">
                "We work with college groups and digital tools starting from index design to final application deployment. I believe in orchestrating structured, emotion-driven code architectures that perform seamlessly under real-world student loads."
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between mt-6 border-t border-white/5 pt-4">
              <span className="font-mono text-[10px] text-gray-500 uppercase">
                GOKULAN R // FULL-STACK DEVELOPER
              </span>
              <span className="font-mono text-[10px] text-blue-500 animate-pulse">
                ● STATUS: ENGAGED
              </span>
            </div>
          </div>

          <div className="rounded-[32px] overflow-hidden bg-gradient-to-tr from-blue-950/20 to-black border border-white/10 p-8 flex flex-col justify-between h-[300px] relative group hover:border-white/20 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center mb-6">
              <Cpu className="w-6 h-6 text-blue-500 animate-spin [animation-duration:12s]" />
            </div>

            <div>
              <h3 className="font-sans font-extrabold text-xl text-white mb-2 uppercase">
                The Blueprint
              </h3>
              <p className="font-sans text-xs text-gray-400 leading-relaxed mb-4">
                Creating secure student databases, optimized routers, and responsive layouts designed centered around human use.
              </p>
            </div>

            <div className="font-mono text-[9.5px] text-[#444444] uppercase tracking-wider">
              STRUCTURE: MODULAR_v2.0
            </div>
          </div>

        </div>

        {/* Vertical Capability Scroller Section */}
        <div className="w-full max-w-5xl flex flex-col lg:flex-row justify-between gap-12 items-start mt-8">
          
          {/* Left Column: Vertical Stack list */}
          <div className="w-full lg:w-1/2 flex flex-col" role="list">
            <div className="border-b border-white/10 pb-4 mb-6">
              <span className="font-mono text-xs text-blue-500 uppercase tracking-widest font-bold">
                🛠️ TECHNOLOGY STACK
              </span>
            </div>

            {CAPABILITIES.map((tech) => {
              const isHovered = hoveredTech === tech;
              const hasAnyHover = hoveredTech !== null;

              return (
                <div
                  key={tech}
                  role="listitem"
                  onMouseEnter={() => setHoveredTech(tech)}
                  onMouseLeave={() => setHoveredTech(null)}
                  className="py-4 border-b border-white/5 transition-all duration-300 cursor-pointer flex justify-between items-center group"
                >
                  <h3
                    className={`font-sans font-black text-2xl sm:text-3xl md:text-4xl transition-all duration-300 ${
                      isHovered
                        ? "text-white translate-x-2"
                        : hasAnyHover
                        ? "text-neutral-800 opacity-60"
                        : "text-neutral-500"
                    }`}
                  >
                    {tech}
                  </h3>
                  <span
                    className={`font-mono text-xs text-blue-400 font-bold transition-all duration-300 ${
                      isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
                    }`}
                  >
                    SELECT_
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Preview Frame explaining hovered tech */}
          <div className="w-full lg:w-1/2 static lg:sticky lg:top-36 shrink-0 h-[280px]">
            <div className="w-full h-full rounded-[32px] bg-[#0c0c0c] border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-350 shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
              {/* Backlit glow when something is hovered */}
              <div
                className={`absolute inset-0 bg-blue-600/5 blur-3xl pointer-events-none transition-opacity duration-350 ${
                  hoveredTech ? "opacity-100" : "opacity-0"
                }`}
              />

              {hoveredTech ? (
                (() => {
                  const details = techDetails[hoveredTech] || {
                    desc: "Leveraging core frameworks to deliver high-performance user assets.",
                    icon: Cpu,
                    project: "Custom Modular Architecture"
                  };
                  const IconComp = details.icon;

                  return (
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center text-blue-400">
                            <IconComp className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="font-mono text-[9px] text-[#555555] uppercase tracking-widest">
                              ACTIVE CAPABILITY
                            </span>
                            <h4 className="font-sans font-black text-xl text-white">
                              {hoveredTech}
                            </h4>
                          </div>
                        </div>

                        <p className="font-sans text-sm text-gray-450 leading-relaxed text-balance">
                          {details.desc}
                        </p>
                      </div>

                      <div className="border-t border-white/5 pt-4">
                        <span className="font-mono text-[8.5px] text-blue-400 uppercase tracking-widest block mb-0.5">
                          REPRESENTATIVE DEPLOYMENT
                        </span>
                        <span className="font-sans font-bold text-xs text-white uppercase">
                          ⚡ {details.project}
                        </span>
                      </div>
                    </div>
                  );
                })()
              ) : (
                <div className="relative z-10 h-full flex flex-col justify-between text-left select-none">
                  <div className="space-y-4">
                    <span className="font-mono text-[9px] text-blue-500 uppercase tracking-widest block">
                      SYSTEM DETECTOR
                    </span>
                    <h4 className="font-sans font-black text-xl text-white">
                      Hover Over Capabilities Stack
                    </h4>
                    <p className="font-sans text-xs text-gray-500 leading-relaxed">
                      Toggle, tap, or hover cursor coordinates over Gokulan's core technology stack to analyze granular execution strategies, custom implementations, and project cases.
                    </p>
                  </div>

                  <div className="border-t border-white/5 pt-4">
                    <span className="font-mono text-[8.5px] text-neutral-600 uppercase tracking-widest block mb-0.5">
                      ACTIVE SPECIFICATION
                    </span>
                    <span className="font-mono text-xs text-neutral-500 uppercase">
                      NO_TECH_FOCUSED_
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
