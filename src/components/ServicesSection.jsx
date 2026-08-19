import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Cpu, HelpCircle, Code, Bug, Lightbulb, Calendar, CheckCircle2, Sparkles } from 'lucide-react';
import { eventShowcase, CONFIG } from '../data/techgenioData';

export default function ServicesSection({ onRegisterArena }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });
  const [selectedArenaModal, setSelectedArenaModal] = useState(null);

  const arenaIcons = {
    "techxpo": Cpu,
    "neuro-pulse": HelpCircle,
    "code-forge": Code,
    "bug-verse": Bug,
    "pitchup": Lightbulb,
  };

  return (
    <section id="arenas" className="relative bg-transparent py-20 md:py-28 px-6 overflow-hidden">
      {/* Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10" ref={containerRef}>
        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <div className="text-white/40 text-xs tracking-widest uppercase mb-2 font-mono font-semibold">
              The 5 Flagship Arenas
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-white tracking-tight">
              What we host
            </h2>
          </div>
          <span className="text-white/50 text-xs tracking-widest uppercase font-mono px-3.5 py-1.5 rounded-full liquid-glass border border-white/10 self-start sm:self-auto">
            TechGenio 2K26 Competitions
          </span>
        </motion.div>

        {/* Featured Two-Card Grid with Live Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Card 1: TechXpo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="liquid-glass rounded-3xl overflow-hidden group border border-white/10 hover:border-white/25 transition-all cursor-pointer shadow-xl"
            onClick={() => setSelectedArenaModal(eventShowcase[0])}
          >
            <div className="relative aspect-video overflow-hidden">
              <video
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono text-amber-300 border border-amber-400/30">
                09 SEP · MAIN DAY
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-3">
                <span className="uppercase tracking-widest text-amber-400 text-xs font-semibold font-mono">
                  Hardware Expo
                </span>
                <div className="liquid-glass rounded-full p-2 text-white/80 group-hover:text-white group-hover:rotate-12 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-white text-xl sm:text-2xl mb-3 tracking-tight font-semibold">
                TECHXPO · Engineering Hardware & Prototype
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                We dig deep into embedded electronics, robotics, and physical computing to surface prototypes that deliver tangible engineering solutions.
              </p>
              <div className="flex items-center gap-2 text-xs text-white/40 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Hardware Circuit · PCB · Working Prototype
              </div>
            </div>
          </motion.div>

          {/* Card 2: Neuro Pulse */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="liquid-glass rounded-3xl overflow-hidden group border border-white/10 hover:border-white/25 transition-all cursor-pointer shadow-xl"
            onClick={() => setSelectedArenaModal(eventShowcase[1])}
          >
            <div className="relative aspect-video overflow-hidden">
              <video
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4"
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono text-purple-300 border border-purple-400/30">
                31 AUG · 07 SEP · 09 SEP
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-3">
                <span className="uppercase tracking-widest text-purple-400 text-xs font-semibold font-mono">
                  Technical Quiz
                </span>
                <div className="liquid-glass rounded-full p-2 text-white/80 group-hover:text-white group-hover:rotate-12 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-white text-xl sm:text-2xl mb-3 tracking-tight font-semibold">
                NEURO PULSE · Battle of Technical Acumen
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                From concept to rapid buzzers, test algorithmic logic, computer science fundamentals, and engineering trivia across 3 high-intensity rounds.
              </p>
              <div className="flex items-center gap-2 text-xs text-white/40 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Neural Nodes · Speed Deduction · Final Buzzer
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3 Arenas in Compact Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {eventShowcase.slice(2).map((item, idx) => {
            const Icon = arenaIcons[item.id] || Cpu;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ duration: 0.5, delay: 0.25 + idx * 0.1 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedArenaModal(item)}
                className="liquid-glass rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:bg-white/[0.04] transition-all cursor-pointer group border border-white/10 hover:border-white/25 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-mono text-xs text-white/40 tracking-wider">
                      #{item.number}
                    </span>
                  </div>

                  <span className="uppercase tracking-widest text-cyan-400 text-xs font-semibold font-mono block mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-semibold tracking-tight mb-2.5">
                    {item.name}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-white/70">
                    {item.stage}
                  </span>
                  <div className="liquid-glass rounded-full p-2 text-white/70 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal */}
        {selectedArenaModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
            <div className="liquid-glass rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-white/20 shadow-2xl relative">
              <button
                onClick={() => setSelectedArenaModal(null)}
                className="absolute top-6 right-6 text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                ✕
              </button>

              <div className="uppercase tracking-widest text-white/50 text-xs font-semibold mb-2 font-mono">
                {selectedArenaModal.category} · Arena #{selectedArenaModal.number}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {selectedArenaModal.name}
              </h3>
              <p className="text-white/80 font-serif italic text-lg mb-6">
                "{selectedArenaModal.tagline}"
              </p>

              <div className="space-y-4 mb-8">
                <p className="text-white/70 text-sm leading-relaxed">
                  {selectedArenaModal.description}
                </p>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-white/80">
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    <span><strong>Stage:</strong> {selectedArenaModal.stage}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span><strong>Motif:</strong> {selectedArenaModal.motif}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={CONFIG.REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white text-black font-semibold rounded-full py-3 px-6 text-center text-sm hover:bg-neutral-200 transition-colors shadow-lg"
                >
                  Register on Google Form
                </a>
                <button
                  onClick={() => setSelectedArenaModal(null)}
                  className="px-6 py-3 rounded-full text-white/60 hover:text-white text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
