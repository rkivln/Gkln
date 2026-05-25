/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header id="navbar" className="sticky top-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-white/10">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12 py-4 flex items-center justify-between">
        {/* Left aligned text logo */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="font-sans font-black tracking-tighter text-xl text-white">
            GKLN<span className="text-blue-600">.</span>
          </span>
        </motion.div>

        {/* Right aligned Navigation text links */}
        <motion.nav
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-6"
        >
          {["Work", "Services", "About", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="font-mono text-xs uppercase tracking-widest text-[#888888] hover:text-white transition-colors duration-200 cursor-pointer py-2 focus:outline-none min-h-[44px] px-2 flex items-center justify-center"
            >
              {item}
            </button>
          ))}
        </motion.nav>
      </div>
    </header>
  );
}
