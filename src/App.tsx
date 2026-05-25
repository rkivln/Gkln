/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Ticker from "./components/Ticker";
import Hero from "./components/Hero";
import MarqueeDeck from "./components/MarqueeDeck";
import BentoGrid from "./components/BentoGrid";
import AboutStack from "./components/AboutStack";
import SocialCampus from "./components/SocialCampus";
import ArticlesUpdates from "./components/ArticlesUpdates";
import Manifesto from "./components/Manifesto";
import ProfileWidget from "./components/ProfileWidget";
import Contact from "./components/Contact";
import { Terminal, Globe, Shield } from "lucide-react";

export default function App() {
  const [timeStr, setTimeStr] = useState("15:32:05 UTC");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toUTCString().replace("GMT", "UTC"));
    };
    updateTime();
    const id = setInterval(updateTime, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-600 selection:text-white font-sans overflow-x-hidden antialiased">
      
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      {/* Implicit layout wrapper to avoid layout shifting or overflow breaks */}
      <main className="w-full max-w-[1440px] mx-auto overflow-hidden">
        
        {/* 2. Horizontal Status Pill Ticker */}
        <Ticker speed="running" />

        {/* 3. Hero Header Component */}
        <Hero />

        {/* 4. Infinite Horizontal Marquee Track with 3D Deck */}
        <MarqueeDeck />

        {/* 5. Bento Grid Solutions & Services Showcase */}
        <BentoGrid />

        {/* 6. About Me Collective & Capabilities Scroller */}
        <AboutStack />

        {/* 7. Social Projects & Hardware Simulator */}
        <SocialCampus />

        {/* 8. Articles & Updates Slider */}
        <ArticlesUpdates />

        {/* 9. Core Values Typography Manifesto */}
        <Manifesto />

        {/* 10. Team Profile Swapping Widget */}
        <ProfileWidget />

        {/* 11. Contact Inquiry Specification Queue */}
        <Contact />

      </main>

      {/* Elite Minimalist Footer */}
      <footer className="w-full border-t border-white/10 bg-[#060606] py-12 relative overflow-hidden select-none">
        
        <div className="absolute inset-0 bg-[#000000] opacity-30 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12 relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          
          <div className="space-y-2">
            <span className="font-sans font-black tracking-widest text-lg text-white">
              GKLN<span className="text-blue-500">.</span>
            </span>
            <p className="font-mono text-[9px] text-[#555] uppercase tracking-wider block">
              NEO-BRUTALIST PORTFOLIO OF GOKULAN R // FULL-STACK JS SPECIALIST
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-3 font-mono text-[10px]">
            <div className="flex items-center gap-2 text-white/50 bg-[#121212] px-3.5 py-1.5 rounded-full border border-white/5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>TIME_COORDS:</span>
              <span className="text-white font-bold">{timeStr}</span>
            </div>
            
            <div className="flex items-center gap-4 text-gray-500">
              <span className="flex items-center gap-1">
                <Globe className="w-3 h-3 text-blue-500" />
                REGION: INDIA // ASIA-SE
              </span>
              <span className="flex items-center gap-1">
                <Shield className="w-3 h-3 text-emerald-500" />
                SECURE_GATEWAY: ACT
              </span>
            </div>
          </div>

        </div>

        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12 mt-8 flex justify-between items-center text-[9px] text-[#333] font-mono border-t border-white/5 pt-4">
          <span>DESIGN PARADIGM: ABSOLUTE NEO-MINIMALISM</span>
          <span>BUILD CODE: v26.05.25 // AGENT FORGED</span>
        </div>
      </footer>

    </div>
  );
}
