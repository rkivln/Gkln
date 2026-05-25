/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Github, Linkedin, Send, Copy, Check } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", projectType: "academic", message: "" });
  const [isCopied, setIsCopied] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("gokulan.rkivln@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSent(true);
  };

  const resetForm = () => {
    setIsSent(false);
    setFormData({ name: "", email: "", projectType: "academic", message: "" });
  };

  return (
    <section id="contact" className="w-full bg-black py-24 border-y border-white/5 relative">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12">
        
        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Coordinates & Information */}
          <div className="space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="font-mono text-xs text-blue-500 uppercase tracking-widest font-bold block">
                [ ESTABLISH INTERSECTION ]
              </span>
              <h2 className="font-sans font-black text-4xl md:text-6xl text-white tracking-tighter uppercase leading-none select-none">
                Get In Touch
              </h2>
              <p className="font-sans text-sm md:text-base text-gray-400 leading-relaxed max-w-md pt-2">
                Have a challenging campus solution to construct, an open-source tool blueprint to forge, or specialized academic tech support requirements? Submit your specifications directly into the queue below.
              </p>
            </div>

            {/* Practical Coordinates Box */}
            <div className="space-y-4 pt-4 border-t border-white/10 lg:pt-0 lg:border-t-0">
              <div 
                onClick={handleCopyEmail}
                className="group flex items-center justify-between p-4 rounded-xl bg-neutral-950 hover:bg-neutral-900 border border-white/5 hover:border-white/25 transition-all cursor-pointer min-h-[56px]"
                title="Click to copy email address!"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="font-mono text-xs md:text-sm text-[#DDDDDD] font-semibold">
                    gokulan.rkivln@gmail.com
                  </span>
                </div>
                {isCopied ? (
                  <span className="flex items-center gap-1 font-mono text-[10px] text-emerald-400 uppercase font-black">
                    COPIED <Check className="w-3.5 h-3.5" />
                  </span>
                ) : (
                  <span className="flex items-center gap-1 font-mono text-[10px] text-gray-500 uppercase font-bold group-hover:text-white transition-colors">
                    COPY <Copy className="w-3 h-3" />
                  </span>
                )}
              </div>

              {/* Social Channels Row */}
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="referrer"
                  className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-neutral-950 hover:bg-neutral-900 text-white font-mono text-xs border border-white/5 hover:border-blue-500/30 transition-all min-h-[50px]"
                >
                  <Github className="w-4 h-4 text-gray-400" />
                  GITHUB_
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="referrer"
                  className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-neutral-950 hover:bg-neutral-900 text-white font-mono text-xs border border-white/5 hover:border-blue-500/30 transition-all min-h-[50px]"
                >
                  <Linkedin className="w-4 h-4 text-blue-500" />
                  LINKEDIN_
                </a>
              </div>
            </div>

            <div className="font-mono text-[9px] text-[#444] uppercase tracking-wider hidden lg:block">
              © 2026 GOKULAN R • ALL SPECIFICATION CHANNELS SYNCED SECURE_
            </div>
          </div>

          {/* Right Column: Dynamic submission form or confirmation box */}
          <div className="bg-[#090909] border border-white/10 rounded-[32px] p-6 md:p-8 relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {!isSent ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleFormSubmit}
                  className="space-y-4"
                >
                  <span className="font-mono text-[9px] text-blue-500 uppercase tracking-widest block mb-4">
                    [ CONSTRUCT SPECIFICATION packet ]
                  </span>

                  <div>
                    <label className="font-mono text-[9.5px] text-neutral-500 uppercase block mb-1">
                      Identity Name
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Prof. Sarah Jenkins / Recruit Lead"
                      className="w-full bg-black border border-white/10 focus:border-blue-500 rounded-xl px-4 py-3 font-sans text-xs text-white placeholder-neutral-650 focus:outline-none transition-colors min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[9.5px] text-neutral-500 uppercase block mb-1">
                      Coordinate Email
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g., coordinate@organisation.org"
                      className="w-full bg-black border border-white/10 focus:border-blue-500 rounded-xl px-4 py-3 font-sans text-xs text-white placeholder-neutral-650 focus:outline-none transition-colors min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[9.5px] text-neutral-500 uppercase block mb-1">
                      Inquiry Category
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {["academic", "commercial", "gdg_work"].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`py-2 rounded-lg font-mono text-[9px] uppercase font-bold border transition-all cursor-pointer min-h-[36px] ${
                            formData.projectType === type
                              ? "bg-blue-600 border-blue-500 text-white"
                              : "bg-black border-white/10 text-[#777] hover:border-white/20"
                          }`}
                        >
                          {type.replace("_", " ")}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-[9.5px] text-neutral-500 uppercase block mb-1">
                      Inquiry details / message specifications
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Detail your requirements, technology priorities, and goals..."
                      className="w-full bg-black border border-white/10 focus:border-blue-500 rounded-xl px-4 py-3 font-sans text-xs text-white placeholder-neutral-650 focus:outline-none transition-colors resize-none mb-2"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white hover:bg-neutral-250 text-black font-mono text-xs font-bold py-3 px-4 rounded-xl uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer mt-4 min-h-[48px]"
                  >
                    SUBMIT SPECIFICATION_ <Send className="w-3.5 h-3.5" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center space-y-6 text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Check className="w-8 h-8 animate-pulse" />
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-[9px] text-emerald-400 uppercase tracking-widest block font-bold">
                      TRANSMISSION SUCCESSFUL
                    </span>
                    <h3 className="font-sans font-black text-2xl text-white uppercase tracking-tight">
                      Specification Enqueued!
                    </h3>
                    <p className="font-sans text-xs text-gray-400 max-w-sm mx-auto leading-relaxed">
                      Thank you, <span className="font-bold text-white">{formData.name}</span>. Your dispatch has been successfully registered on Gokulan's local mailbox index. Expect an architectural evaluation within 24 hours.
                    </p>
                  </div>

                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 bg-neutral-900 hover:bg-neutral-850 text-white font-mono text-[10px] rounded uppercase border border-white/10 font-bold tracking-wider transition-colors cursor-pointer min-h-[38px]"
                  >
                    Submit another packet_
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
