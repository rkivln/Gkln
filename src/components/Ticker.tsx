/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

interface TickerProps {
  items?: string[];
  speed?: string;
  reverse?: boolean;
}

const DEFAULT_TICKERS = [
  "👉 Open for Opportunities",
  "🟢 Based in Puducherry, India",
  "⚡ MERN Stack Expert",
  "🛠️ Full-Stack JavaScript Developer",
  "💻 Campus Tech Specialist",
  "🌐 GenAI Orchestration Labs",
  "🚀 Interactive Art Direction"
];

export default function Ticker({ items = DEFAULT_TICKERS, speed = "running", reverse = false }: TickerProps) {
  // Duplicate ticker items to ensure infinite seamless overlap
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-[#0B0B0B] border-y border-white/5 py-3 overflow-hidden select-none flex">
      <div 
        className={`flex whitespace-nowrap gap-8 items-center ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ animationPlayState: speed }}
      >
        {repeatedItems.map((text, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121212] border border-white/10 font-mono text-xs text-white"
          >
            {text.includes("🟢") ? (
              <>
                <span className="text-[#333] text-stroke-sm">{text.replace("🟢", "")}</span>
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              </>
            ) : (
              <span>{text}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
