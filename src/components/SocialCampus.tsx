/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SOCIAL_PROJECTS } from "../data";
import { AlertTriangle, Users, BookOpen, Calendar, HelpCircle, HardDrive, EyeOff } from "lucide-react";

export default function SocialCampus() {
  // Arduino glasses simulation state
  const [isSimulating, setIsSimulating] = useState(false);
  const [blinkState, setBlinkState] = useState<"open" | "closed">("open");
  const [timerText, setTimerText] = useState(3.0);
  const [alarmTriggered, setAlarmTriggered] = useState(false);

  // Simulation effect
  useEffect(() => {
    let intervalId: any;
    if (isSimulating) {
      intervalId = setInterval(() => {
        setBlinkState("closed");
        setTimerText((prev) => {
          if (prev <= 0.1) {
            setAlarmTriggered(true);
            return 0.0;
          }
          return parseFloat((prev - 0.2).toFixed(1));
        });
      }, 200);
    } else {
      setBlinkState("open");
      setTimerText(3.0);
      setAlarmTriggered(false);
    }

    return () => clearInterval(intervalId);
  }, [isSimulating]);

  const resetBlinkSim = () => {
    setIsSimulating(false);
    setBlinkState("open");
    setTimerText(3.0);
    setAlarmTriggered(false);
  };

  return (
    <section id="social-projects" className="w-full bg-black py-20 border-t border-white/5 relative">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12">
        
        {/* Two-Column Grid (1 column on mobile, 3 columns total scale: 1 sticky col, 2 flow cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: STICKY on desktop */}
          <div className="lg:col-span-1 lg:sticky lg:top-32 self-start space-y-6">
            <span className="font-mono text-xs text-blue-500 uppercase tracking-widest block font-bold">
              [ IMPACT & HARDWARE ]
            </span>
            <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-5xl text-white uppercase tracking-tighter leading-none select-none">
              {SOCIAL_PROJECTS.header}
            </h2>
            <p className="font-serif italic text-lg text-neutral-300">
              "{SOCIAL_PROJECTS.stickyDescription}"
            </p>
            <div className="h-[1px] bg-white/10 w-24 my-6" />
            <div className="py-4 px-6 rounded-2xl bg-[#090909] border border-white/10 flex flex-col gap-4">
              <span className="font-mono text-[9px] text-[#444] tracking-widest block">GDG STATISTICS_</span>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="font-sans text-xs text-gray-400">Labs Conducted</span>
                <span className="font-mono text-xs text-white">8+ Workshops</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="font-sans text-xs text-gray-400">Total Audience reached</span>
                <span className="font-mono text-xs text-white">400+ Students</span>
              </div>
              <div className="flex justify-between">
                <span className="font-sans text-xs text-gray-400">Open-Source Utilities</span>
                <span className="font-mono text-xs text-white">4 Modules</span>
              </div>
            </div>
          </div>

          {/* Right Column flow: contains community detail & hardware simulator */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* GDG Community Highlight Card */}
            <div className="rounded-[32px] bg-gradient-to-br from-[#0c0c0c] to-[#010101] border border-white/10 p-8 relative overflow-hidden group hover:border-white/20 transition-all">
              <span className="font-mono text-[9px] text-blue-500 uppercase tracking-widest block mb-4">
                COMMUNITY ENGAGEMENT
              </span>
              <h3 className="font-sans font-black text-2xl md:text-3xl text-white tracking-tight uppercase mb-4">
                GDG Puducherry Tech Activism
              </h3>
              <p className="font-sans text-sm md:text-base text-gray-300 leading-relaxed mb-6">
                {SOCIAL_PROJECTS.communityParagraph}
              </p>

              {/* Grid of details/events */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-black border border-white/5 rounded-xl flex items-start gap-3">
                  <Users className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans font-bold text-xs text-white uppercase mb-1">Peer Learning Lab</h4>
                    <p className="font-none text-[10.5px] text-gray-400 leading-relaxed">Hosts interactive code sessions, syncing local branches and containerized systems for rookies.</p>
                  </div>
                </div>
                <div className="p-4 bg-black border border-white/5 rounded-xl flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans font-bold text-xs text-white uppercase mb-1">Resource Structurer</h4>
                    <p className="font-none text-[10.5px] text-gray-400 leading-relaxed">Developing open-source syllabi parsers and exam databases to optimize campus study routines.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Arduino Hardware Smart Simulator Frame Container */}
            <div className="rounded-[32px] bg-gradient-to-br from-neutral-950 via-black to-[#050515] border border-white/15 p-8 relative overflow-hidden group">
              <div className="absolute top-6 right-6 flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#ff8800]/10 border border-[#ff8800]/20 font-mono text-[9px] text-[#ff8800]">
                <HardDrive className="w-3.5 h-3.5 animate-pulse" />
                HARDWARE LABS
              </div>

              <span className="font-mono text-[9px] text-blue-500 uppercase tracking-widest block mb-2">
                INTERACTIVE SCHEMATIC MODEL
              </span>
              <h3 className="font-sans font-black text-2xl md:text-3xl text-white uppercase tracking-tight mb-2">
                {SOCIAL_PROJECTS.hardwareTitle}
              </h3>
              <p className="font-sans text-xs md:text-sm text-gray-400 leading-relaxed max-w-xl mb-6">
                {SOCIAL_PROJECTS.hardwareDescription}
              </p>

              {/* Grid with specs & simulation widget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                
                {/* Embedded dynamic vector hardware board spec list */}
                <div className="bg-[#0b0b14] border border-white/5 rounded-2xl p-5 flex flex-col justify-between max-h-[300px]">
                  <span className="font-mono text-[9px] text-[#555] uppercase block mb-3">🛠️ SCHEMATIC SPECIFICATION</span>
                  <div className="space-y-3">
                    {SOCIAL_PROJECTS.hardwareSpecs.map((spec) => (
                      <div key={spec} className="flex items-center gap-2 text-[10.5px] text-gray-300">
                        <span className="h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                        <span className="font-mono text-[#DDDDDD]">{spec}</span>
                      </div>
                    ))}
                  </div>
                  <div className="h-[1px] bg-white/5 my-3" />
                  <span className="font-mono text-[8px] text-[#444] uppercase tracking-wider block">
                    CODE: BLINK_LASER_CYCLE v1.0.4 • NANO CORE
                  </span>
                </div>

                {/* Simulation Widget Interface */}
                <div className="bg-black border border-white/10 rounded-2xl p-5 flex flex-col justify-between items-center relative min-h-[250px]">
                  
                  {/* Eye graphic showing closed / warning states */}
                  <div className="flex-1 flex flex-col items-center justify-center space-y-3 pb-4">
                    {alarmTriggered ? (
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 0.5 }}
                        className="flex flex-col items-center justify-center space-y-1"
                      >
                        <div className="w-14 h-14 rounded-full bg-red-600 border-2 border-white flex items-center justify-center text-white relative">
                          <AlertTriangle className="w-8 h-8" />
                          <span className="absolute -inset-2 rounded-full border border-red-600 animate-ping" />
                        </div>
                        <span className="font-mono text-xs text-red-500 font-extrabold tracking-widest uppercase">
                          🚨 BUZZER TRIGGERED! 🚨
                        </span>
                      </motion.div>
                    ) : blinkState === "closed" ? (
                      <div className="flex flex-col items-center justify-center space-y-1">
                        <EyeOff className="w-12 h-12 text-[#ff8800] animate-pulse" />
                        <span className="font-mono text-[10.5px] text-[#ff8800] tracking-wider uppercase font-bold animate-pulse">
                          Eyes Closed...
                        </span>
                        <span className="font-mono text-[10px] text-gray-500 text-center">
                          Sec count: <span className="text-white font-bold">{timerText}s</span>
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center space-y-1">
                        <div className="relative w-14 h-8 rounded-full border-2 border-blue-500/80 flex items-center justify-center overflow-hidden">
                          <div className="w-5 h-5 rounded-full bg-blue-300 flex items-center justify-center border border-white/20">
                            <div className="w-2.5 h-2.5 rounded-full bg-black" />
                          </div>
                        </div>
                        <span className="font-mono text-[10px] text-blue-400 uppercase font-bold tracking-wider">
                          👁️ Optical Scan: PASS
                        </span>
                        <span className="font-sans text-[9px] text-[#444] text-center">
                          Simulate fatigue by clicking trigger below.
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Operational control buttons */}
                  <div className="w-full flex gap-2">
                    {!isSimulating ? (
                      <button
                        onClick={() => {
                          setIsSimulating(true);
                          setBlinkState("closed");
                        }}
                        className="flex-1 bg-white hover:bg-neutral-200 text-black font-mono text-[9px] font-bold py-2.5 px-3 rounded uppercase tracking-wider transition-colors cursor-pointer min-h-[44px]"
                        style={{ touchAction: "manipulation" }}
                      >
                        ⚠️ Simulate Fatigue
                      </button>
                    ) : (
                      <button
                        onClick={resetBlinkSim}
                        className="flex-1 bg-neutral-900 border border-white/15 hover:bg-neutral-800 text-white font-mono text-[9px] font-bold py-2.5 px-3 rounded uppercase tracking-wider transition-colors cursor-pointer min-h-[44px]"
                        style={{ touchAction: "manipulation" }}
                      >
                        🔄 Reset Laser State
                      </button>
                    )}
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
