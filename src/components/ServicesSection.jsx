import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Cpu, HelpCircle, Code, Bug, Lightbulb, Sparkles, Calendar, CheckCircle2 } from 'lucide-react';
import { eventShowcase } from '../data/techgenioData';

export default function ServicesSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [selectedArenaModal, setSelectedArenaModal] = useState(null);

  // Lock background body scroll when modal is open
  useEffect(() => {
    if (selectedArenaModal) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setSelectedArenaModal(null);
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = prevOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedArenaModal]);

  const arenaIcons = {
    "techxpo": Cpu,
    "neuro-pulse": HelpCircle,
    "code-forge": Code,
    "bug-verse": Bug,
    "pitchup": Lightbulb,
    "fun-events": Sparkles,
  };

  const arenaColorStyles = {
    "techxpo": {
      accent: "text-amber-400",
      badgeBg: "bg-amber-400/10 text-amber-300 border-amber-400/30",
      borderHover: "hover:border-amber-400/40",
      dot: "bg-amber-400",
      glowBg: "group-hover:bg-amber-400/[0.02]",
    },
    "neuro-pulse": {
      accent: "text-purple-400",
      badgeBg: "bg-purple-400/10 text-purple-300 border-purple-400/30",
      borderHover: "hover:border-purple-400/40",
      dot: "bg-purple-400",
      glowBg: "group-hover:bg-purple-400/[0.02]",
    },
    "code-forge": {
      accent: "text-cyan-400",
      badgeBg: "bg-cyan-400/10 text-cyan-300 border-cyan-400/30",
      borderHover: "hover:border-cyan-400/40",
      dot: "bg-cyan-400",
      glowBg: "group-hover:bg-cyan-400/[0.02]",
    },
    "bug-verse": {
      accent: "text-rose-400",
      badgeBg: "bg-rose-400/10 text-rose-300 border-rose-400/30",
      borderHover: "hover:border-rose-400/40",
      dot: "bg-rose-400",
      glowBg: "group-hover:bg-rose-400/[0.02]",
    },
    "pitchup": {
      accent: "text-emerald-400",
      badgeBg: "bg-emerald-400/10 text-emerald-300 border-emerald-400/30",
      borderHover: "hover:border-emerald-400/40",
      dot: "bg-emerald-400",
      glowBg: "group-hover:bg-emerald-400/[0.02]",
    },
    "fun-events": {
      accent: "text-indigo-400",
      badgeBg: "bg-indigo-400/10 text-indigo-300 border-indigo-400/30",
      borderHover: "hover:border-indigo-400/40",
      dot: "bg-indigo-400",
      glowBg: "group-hover:bg-indigo-400/[0.02]",
    }
  };

  return (
    <section id="arenas" className="relative bg-transparent py-20 md:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Subtle Radial Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10" ref={containerRef}>
        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 md:mb-14"
        >
          <div>
            <div className="text-white/40 text-xs tracking-widest uppercase mb-2 font-mono font-semibold">
              The 6 Flagship Arenas
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
              Featured Competitions
            </h2>
          </div>
          <span className="text-white/50 text-xs tracking-widest uppercase font-mono px-3.5 py-1.5 rounded-full liquid-glass border border-white/10 self-start sm:self-auto">
            TechGenio 2K26 Arenas
          </span>
        </motion.div>

        {/* Balanced 6-Card Responsive Grid: 3 cols desktop (3 x 2), 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventShowcase.map((item, idx) => {
            const Icon = arenaIcons[item.id] || Cpu;
            const style = arenaColorStyles[item.id] || arenaColorStyles["techxpo"];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ duration: 0.5, delay: 0.06 * idx }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedArenaModal(item)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedArenaModal(item);
                  }
                }}
                className={`liquid-glass rounded-3xl p-5 sm:p-6 md:p-7 flex flex-col justify-between border border-white/10 ${style.borderHover} ${style.glowBg} transition-all cursor-pointer group shadow-xl relative overflow-hidden h-full min-h-[280px] sm:min-h-[320px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400`}
              >
                <div>
                  {/* Top Bar: Icon + Category/Number + Arrow */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center group-hover:scale-105 transition-transform">
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

                    <div className="liquid-glass rounded-full p-2 text-white/60 group-hover:text-white group-hover:rotate-12 transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>



                  {/* Title & Tagline */}
                  <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-1.5 group-hover:text-white transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-white/75 font-serif italic text-sm sm:text-base mb-3 line-clamp-1">
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
          <div 
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedArenaModal(null)}
          >
            <div 
              className="liquid-glass rounded-t-3xl sm:rounded-3xl w-full max-w-lg p-6 sm:p-8 border border-white/20 shadow-2xl relative bg-neutral-950/95 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedArenaModal(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white/70 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 z-10"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Modal Header with Icon */}
              {(() => {
                const Icon = arenaIcons[selectedArenaModal.id] || Cpu;
                const style = arenaColorStyles[selectedArenaModal.id] || arenaColorStyles["techxpo"];
                return (
                  <div className="flex items-center gap-3 mb-5 pr-10">
                    <div className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center shrink-0`}>
                      <Icon className={`w-6 h-6 ${style.accent}`} />
                    </div>
                    <div>
                      <span className={`text-xs font-mono uppercase tracking-widest font-semibold block ${style.accent}`}>
                        {selectedArenaModal.category} · Arena #{selectedArenaModal.number}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                        {selectedArenaModal.name}
                      </h3>
                    </div>
                  </div>
                );
              })()}

              <p className="text-white/70 font-serif italic text-base sm:text-lg mb-5 leading-snug">
                "{selectedArenaModal.tagline}"
              </p>

              <div className="space-y-4 mb-6">
                <p className="text-white/65 text-sm leading-relaxed">
                  {selectedArenaModal.description}
                </p>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <div className="flex items-start gap-2.5 text-xs font-mono text-white/80">
                    <Calendar className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white/90">Stage:</strong> {selectedArenaModal.stage}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs font-mono text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white/90">Motif:</strong> {selectedArenaModal.motif}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedArenaModal(null)}
                className="w-full bg-white/10 hover:bg-white/20 text-white font-medium rounded-2xl py-3 px-8 text-center text-sm transition-all border border-white/15 cursor-pointer active:scale-95"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
