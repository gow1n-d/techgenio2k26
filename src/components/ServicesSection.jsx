import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Cpu, HelpCircle, Code, Bug, Lightbulb, Calendar, CheckCircle2, Sparkles } from 'lucide-react';
import { eventShowcase } from '../data/techgenioData';

export default function ServicesSection({ onRegisterArena }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [selectedArenaModal, setSelectedArenaModal] = useState(null);

  const arenaIcons = {
    "techxpo": Cpu,
    "neuro-pulse": HelpCircle,
    "code-forge": Code,
    "bug-verse": Bug,
    "pitchup": Lightbulb,
  };

  const arenaColorStyles = {
    "techxpo": {
      accent: "text-amber-400",
      badgeBg: "bg-amber-400/10 text-amber-300 border-amber-400/30",
      borderHover: "hover:border-amber-400/40",
      dot: "bg-amber-400",
      glowBg: "group-hover:bg-amber-400/[0.03]",
    },
    "neuro-pulse": {
      accent: "text-purple-400",
      badgeBg: "bg-purple-400/10 text-purple-300 border-purple-400/30",
      borderHover: "hover:border-purple-400/40",
      dot: "bg-purple-400",
      glowBg: "group-hover:bg-purple-400/[0.03]",
    },
    "code-forge": {
      accent: "text-cyan-400",
      badgeBg: "bg-cyan-400/10 text-cyan-300 border-cyan-400/30",
      borderHover: "hover:border-cyan-400/40",
      dot: "bg-cyan-400",
      glowBg: "group-hover:bg-cyan-400/[0.03]",
    },
    "bug-verse": {
      accent: "text-rose-400",
      badgeBg: "bg-rose-400/10 text-rose-300 border-rose-400/30",
      borderHover: "hover:border-rose-400/40",
      dot: "bg-rose-400",
      glowBg: "group-hover:bg-rose-400/[0.03]",
    },
    "pitchup": {
      accent: "text-emerald-400",
      badgeBg: "bg-emerald-400/10 text-emerald-300 border-emerald-400/30",
      borderHover: "hover:border-emerald-400/40",
      dot: "bg-emerald-400",
      glowBg: "group-hover:bg-emerald-400/[0.03]",
    }
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
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
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

        {/* Completely Even & Uniform Grid of all 5 Arena Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventShowcase.map((item, idx) => {
            const Icon = arenaIcons[item.id] || Cpu;
            const style = arenaColorStyles[item.id] || arenaColorStyles["techxpo"];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ duration: 0.5, delay: 0.08 * idx }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedArenaModal(item)}
                className={`liquid-glass rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-white/10 ${style.borderHover} ${style.glowBg} transition-all cursor-pointer group shadow-xl relative overflow-hidden h-full min-h-[340px]`}
              >
                <div>
                  {/* Top Bar: Icon + Number + Stage Badge */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className={`w-6 h-6 ${style.accent}`} />
                      </div>
                      <div>
                        <span className={`text-xs font-mono uppercase tracking-widest font-semibold block ${style.accent}`}>
                          {item.category}
                        </span>
                        <span className="text-xs text-white/40 font-mono">
                          Arena #{item.number}
                        </span>
                      </div>
                    </div>

                    <div className="liquid-glass rounded-full p-2 text-white/70 group-hover:text-white group-hover:rotate-12 transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-1.5 group-hover:text-white transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-white/80 font-serif italic text-sm sm:text-base mb-3 line-clamp-1">
                    "{item.tagline}"
                  </p>

                  {/* Description */}
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Card Footer with Stage Badge & Motif */}
                <div className="pt-4 border-t border-white/10 space-y-2.5">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${style.badgeBg}`}>
                      {item.stage}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/40 font-mono">
                    <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                    <span className="truncate">{item.motif}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Arena Details Modal */}
        {selectedArenaModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
            <div className="liquid-glass rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-white/20 shadow-2xl relative">
              <button
                onClick={() => setSelectedArenaModal(null)}
                className="absolute top-6 right-6 text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close modal"
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

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-xs font-mono text-white/80">
                    <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Stage:</strong> {selectedArenaModal.stage}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-mono text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span><strong>Motif:</strong> {selectedArenaModal.motif}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setSelectedArenaModal(null)}
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-medium rounded-full py-2.5 px-8 text-center text-sm transition-all border border-white/20 hover:border-white/40 cursor-pointer"
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
