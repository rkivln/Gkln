/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { BENTO_SERVICES } from "../data";
import { Terminal, CreditCard, LayoutGrid, CheckSquare, Sparkles, Plus, Minus } from "lucide-react";

export default function BentoGrid() {
  // GPA calculator widget state for Gokulan's Academic Tech box
  const [gpaCourses, setGpaCourses] = useState([
    { id: 1, name: "Database Sys", grade: "S (10)", points: 10 },
    { id: 2, name: "Web Frameworks", grade: "A (9)", points: 9 },
    { id: 3, name: "Compiler Design", grade: "B (8)", points: 8 }
  ]);

  const updateGrade = (id: number) => {
    setGpaCourses(prev =>
      prev.map(c => {
        if (c.id === id) {
          const nextPoints = c.points >= 10 ? 7 : c.points + 1; // cycle 7 to 10
          const gradeString = nextPoints === 10 ? "S (10)" : nextPoints === 9 ? "A (9)" : nextPoints === 8 ? "B (8)" : "C (7)";
          return { ...c, points: nextPoints, grade: gradeString };
        }
        return c;
      })
    );
  };

  const calculateGpa = () => {
    const totalPoints = gpaCourses.reduce((sum, c) => sum + c.points, 0);
    return (totalPoints / gpaCourses.length).toFixed(2);
  };

  // Node Console widget simulator logs
  const [consoleLogs, setConsoleLogs] = useState<string[]>([
    "[SYSTEM] Booting MERN application context...",
    "[EXPRESS] Listening on port 3000...",
    "[MONGO] MongoDB Database synced on cluster-0."
  ]);

  const triggerApiRequest = () => {
    const endpoints = ["/api/v1/auth/session", "/api/v1/projects", "/api/v1/health-check", "/api/v1/user/gokulan"];
    const randomEndpoint = endpoints[Math.floor(Math.random() * endpoints.length)];
    const timestamp = new Date().toLocaleTimeString();
    const newLog = `[${timestamp}] GET ${randomEndpoint} - 200 OK - 14ms`;
    setConsoleLogs(prev => [...prev.slice(-3), newLog]);
  };

  return (
    <section id="services" className="w-full bg-black py-20 border-t border-white/5">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12">
        
        {/* Stark Uppercase Header */}
        <div className="text-center mb-16 space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#555555]">
            [ CORE CAPABILITIES ]
          </span>
          <h2 className="font-sans font-black text-4xl md:text-6xl text-white tracking-tighter uppercase">
            SERVICES & SOLUTIONS
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-4" />
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[310px]">
          
          {/* Bento Card 1: Web Development (Console Mockup) */}
          <div className="md:col-span-2 md:row-span-1 rounded-3xl bg-[#090909] border border-white/10 p-6 flex flex-col md:flex-row justify-between gap-6 overflow-hidden relative group hover:border-white/20 transition-colors">
            <div className="flex-1 flex flex-col justify-between z-10">
              <div>
                <span className="font-mono text-[10px] text-blue-500 uppercase tracking-widest block mb-2">
                  {BENTO_SERVICES[0].category}
                </span>
                <h3 className="font-sans font-extrabold text-xl md:text-2xl text-white tracking-tight mb-2">
                  {BENTO_SERVICES[0].title}
                </h3>
                <p className="font-sans text-xs text-gray-400 leading-relaxed max-w-sm">
                  {BENTO_SERVICES[0].description}
                </p>
              </div>
              <span className="font-mono text-[9px] text-gray-500 mt-4 block">
                STATUS: PRODUCTION_STABLE // {BENTO_SERVICES[0].accentText}
              </span>
            </div>
            
            {/* The Interactive Node Console mockup */}
            <div className="flex-1 bg-black border border-white/10 rounded-2xl p-4 font-mono text-[10px] flex flex-col justify-between h-[160px] md:h-full shrink-0 relative">
              <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <span className="text-[9px] text-[#444] tracking-widest uppercase">MERN LOGS</span>
              </div>
              
              <div className="flex-1 flex flex-col gap-1 text-[#aaaaaa] no-scrollbar overflow-y-auto mb-2 select-text">
                {consoleLogs.map((log, index) => (
                  <div key={index} className="leading-3 break-all">
                    <span className="text-blue-500 select-none">{"$ "}</span>{log}
                  </div>
                ))}
              </div>

              <button
                onClick={triggerApiRequest}
                className="w-full bg-neutral-900 border border-white/10 hover:bg-neutral-800 text-white font-mono text-[9px] py-2 rounded uppercase font-bold tracking-wider transition-colors cursor-pointer min-h-[36px]"
              >
                ⚡ Fetch Live REST API Metric
              </button>
            </div>
          </div>

          {/* Bento Card 2: UI/UX Design (Bezier Graph representation) */}
          <div className="rounded-3xl bg-[#090909] border border-white/10 p-6 flex flex-col justify-between overflow-hidden relative group hover:border-white/20 transition-colors">
            
            {/* SVG Interactive bezier curves reacting on hover */}
            <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
              <svg className="w-full h-full p-4" viewBox="0 0 200 200" fill="none">
                <path d="M 10 180 C 40 10, 160 10, 190 180" stroke="white" strokeWidth="2" className="group-hover:stroke-blue-500 transition-colors duration-500" />
                <circle cx="10" cy="180" r="4" fill="white" />
                <circle cx="100" cy="95" r="3" fill="blue" className="animate-ping" />
                <circle cx="190" cy="180" r="4" fill="white" />
                <line x1="10" y1="180" x2="100" y2="95" stroke="#FFFFFF" strokeDasharray="3 3" />
                <line x1="190" y1="180" x2="100" y2="95" stroke="#FFFFFF" strokeDasharray="3 3" />
              </svg>
            </div>

            <div className="z-10">
              <span className="font-mono text-[10px] text-blue-500 uppercase tracking-widest block mb-2">
                {BENTO_SERVICES[1].category}
              </span>
              <h3 className="font-sans font-extrabold text-xl text-white tracking-tight leading-snug">
                {BENTO_SERVICES[1].title}
              </h3>
            </div>
            
            <div className="z-10 mt-4">
              <p className="font-sans text-xs text-gray-400 mb-4">
                {BENTO_SERVICES[1].description}
              </p>
              <span className="font-mono text-[9.5px] text-[#444444] uppercase tracking-wider block">
                {BENTO_SERVICES[1].accentText}
              </span>
            </div>
          </div>

          {/* Bento Card 3: Mini-Projects (Glowing Spheres) */}
          <div className="rounded-3xl bg-[#090909] border border-white/10 p-6 flex flex-col justify-between overflow-hidden relative group hover:border-white/20 transition-colors">
            {/* Sphere glow */}
            <div 
              className="absolute -right-16 -top-16 w-36 h-36 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none"
              style={{ backgroundColor: BENTO_SERVICES[2].glowingColor || "rgba(37,99,235,0.2)" }}
            />
            
            <div>
              <span className="font-mono text-[10px] text-blue-500 uppercase tracking-widest block mb-2">
                {BENTO_SERVICES[2].category}
              </span>
              <h3 className="font-sans font-extrabold text-xl text-white tracking-tight">
                {BENTO_SERVICES[2].title}
              </h3>
            </div>

            <div className="z-10 mt-4">
              <p className="font-sans text-xs text-gray-400 mb-3">
                {BENTO_SERVICES[2].description}
              </p>
              <div className="font-mono text-[9.5px] uppercase tracking-wider bg-white/5 border border-white/10 rounded px-2.5 py-1 text-[#999] inline-block font-bold">
                {BENTO_SERVICES[2].accentText}
              </div>
            </div>
          </div>

          {/* Bento Card 4: End-Sem Docs (Interactive Clickable syllabus) */}
          <div className="md:col-span-2 md:row-span-1 rounded-3xl bg-[#0a0a0a] border border-white/10 p-6 flex flex-col md:flex-row justify-between gap-6 overflow-hidden relative group hover:border-white/20 transition-colors">
            <div className="flex-1 flex flex-col justify-between z-10">
              <div>
                <span className="font-mono text-[10px] text-blue-500 uppercase tracking-widest block mb-2">
                  {BENTO_SERVICES[3].category}
                </span>
                <h3 className="font-sans font-extrabold text-xl md:text-2xl text-white tracking-tight mb-2">
                  {BENTO_SERVICES[3].title}
                </h3>
                <p className="font-sans text-xs text-gray-400 leading-relaxed max-w-sm">
                  {BENTO_SERVICES[3].description}
                </p>
              </div>
              <span className="font-mono text-[9px] text-[#444] mt-4 block">
                COMPREHENSIVE UTILITIES // {BENTO_SERVICES[3].accentText}
              </span>
            </div>

            {/* Simulated Interactive Syllabus Preparer */}
            <div className="flex-1 bg-black border border-white/10 rounded-2xl p-4 flex flex-col h-[180px] md:h-full justify-between overflow-hidden shrink-0">
              <span className="font-mono text-[9px] text-[#777] uppercase tracking-wider block mb-2">
                📂 Live Campus Resources
              </span>
              <div className="flex-1 flex flex-col gap-1.5 overflow-y-auto no-scrollbar pr-1">
                {BENTO_SERVICES[3].detailsList?.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 rounded bg-neutral-950 border border-white/5 hover:border-blue-500/50 hover:bg-neutral-900 transition-all cursor-pointer group/syllabus text-[10px] text-white"
                  >
                    <span className="truncate pr-2 font-sans font-medium">{item}</span>
                    <span className="font-mono text-[8px] px-1.5 py-0.5 rounded bg-blue-950 text-blue-300 uppercase shrink-0 font-bold group-hover/syllabus:bg-blue-600 group-hover/syllabus:text-white transition-colors">
                      LOAD_
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bento Card 5: Academic Tech Support (Interactive GPA Calculator) */}
          <div className="rounded-3xl bg-[#090909] border border-white/10 p-6 flex flex-col justify-between overflow-hidden relative group hover:border-white/20 transition-colors md:col-span-1">
            <div className="z-10">
              <span className="font-mono text-[10px] text-blue-500 uppercase tracking-widest block mb-1">
                {BENTO_SERVICES[4].category}
              </span>
              <h3 className="font-sans font-extrabold text-lg text-white tracking-tight mb-2">
                {BENTO_SERVICES[4].title}
              </h3>
            </div>

            {/* GPA interactive widget */}
            <div className="mt-2 bg-black border border-white/10 rounded-xl p-3 flex flex-col gap-2 z-10">
              <div className="flex justify-between items-center bg-zinc-950 px-2 py-1 rounded border border-white/5">
                <span className="font-mono text-[8.5px] text-[#999]">EST G.P.A</span>
                <span className="font-mono text-[11px] text-emerald-400 font-black tracking-widest">
                  🏆 {calculateGpa()} / 10.00
                </span>
              </div>
              
              <div className="flex flex-col gap-1.5">
                {gpaCourses.map((course) => (
                  <div
                    key={course.id}
                    onClick={() => updateGrade(course.id)}
                    className="flex justify-between items-center text-[9px] bg-neutral-900 hover:bg-neutral-800 p-1.5 rounded cursor-pointer border border-[#1a1a1a]"
                    title="Click to toggle grade simulation!"
                  >
                    <span className="font-mono text-white max-w-[80px] truncate">{course.name}</span>
                    <span className="font-mono text-blue-400 font-bold bg-black px-1.5 py-0.5 rounded border border-white/5">
                      {course.grade} 🔄
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="z-10 mt-2">
              <span className="font-mono text-[9px] text-[#444] uppercase block">
                {BENTO_SERVICES[4].accentText}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
