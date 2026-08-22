import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowUpRight, Cpu, HelpCircle, Code, Bug, Lightbulb, Sparkles, X, ExternalLink } from 'lucide-react';
import { eventShowcase, REGISTRATION_URL } from '../data/techgenioData';

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

                  {/* Event Showcase Image on Card */}
                  {item.image && (
                    <div className="relative w-full h-40 sm:h-44 rounded-2xl overflow-hidden mb-4 border border-white/10 group-hover:border-white/25 transition-all shadow-md bg-neutral-950">
                      <picture>
                        <source srcSet={item.image.replace('.png', '.webp')} type="image/webp" />
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </picture>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-2 group-hover:text-white transition-colors">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-white/65 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Card Footer with Stage Badge */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className={`text-[11px] font-mono px-3 py-1 rounded-full border ${style.badgeBg}`}>
                    {item.stage}
                  </span>
                  <span className="text-[11px] text-white/40 font-mono group-hover:text-white/70 transition-colors flex items-center gap-1">
                    View Brochure <ArrowUpRight className="w-3 h-3 inline" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Arena Details Brochure Modal */}
        <AnimatePresence>
          {selectedArenaModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/85 backdrop-blur-md"
              onClick={() => setSelectedArenaModal(null)}
            >
              <motion.div 
                initial={{ scale: 0.94, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.94, opacity: 0, y: 15 }}
                transition={{ type: "spring", duration: 0.35, bounce: 0.15 }}
                className="liquid-glass rounded-3xl w-full max-w-2xl border border-white/20 shadow-2xl relative bg-neutral-950/95 max-h-[92vh] flex flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                {(() => {
                  const Icon = arenaIcons[selectedArenaModal.id] || Cpu;
                  const style = arenaColorStyles[selectedArenaModal.id] || arenaColorStyles["techxpo"];
                  return (
                    <div className="flex items-center justify-between gap-3 p-4 sm:p-5 border-b border-white/10 shrink-0">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center shrink-0">
                          <Icon className={`w-5 h-5 ${style.accent}`} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className={`text-[10px] sm:text-xs font-mono uppercase tracking-widest font-semibold ${style.accent}`}>
                              {selectedArenaModal.category} · Arena #{selectedArenaModal.number}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-neutral-700 bg-neutral-800/80 text-neutral-300">
                              {selectedArenaModal.stage}
                            </span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                            {selectedArenaModal.name}
                          </h3>
                        </div>
                      </div>

                      {/* Close Button */}
                      <button
                        onClick={() => setSelectedArenaModal(null)}
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white/70 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 shrink-0"
                        aria-label="Close modal"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })()}

                {/* Brochure Image Display Area (Texts removed as requested) */}
                <div className="flex-1 overflow-y-auto p-3 sm:p-4 bg-black/40 flex items-center justify-center">
                  {selectedArenaModal.brochure ? (
                    <div className="relative w-full max-h-[65vh] flex items-center justify-center overflow-auto rounded-2xl border border-white/10 bg-neutral-900/50 shadow-inner">
                      <img
                        src={selectedArenaModal.brochure}
                        alt={`${selectedArenaModal.name} Event Brochure`}
                        className="w-auto h-auto max-h-[65vh] max-w-full object-contain rounded-xl shadow-2xl"
                        loading="eager"
                      />
                    </div>
                  ) : (
                    <div className="p-12 text-center text-white/50 text-sm font-mono">
                      Brochure image not available
                    </div>
                  )}
                </div>

                {/* Modal Footer Actions */}
                <div className="p-3 sm:p-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 bg-neutral-950">
                  {selectedArenaModal.brochure ? (
                    <a
                      href={selectedArenaModal.brochure}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto text-xs font-mono text-white/80 hover:text-white flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open Full Size Brochure</span>
                    </a>
                  ) : <div />}

                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                    <a
                      href={REGISTRATION_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-2 rounded-xl bg-white text-black font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-all active:scale-95 shadow-md flex items-center justify-center gap-1.5"
                    >
                      <span>Register Now</span>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </a>
                    <button
                      onClick={() => setSelectedArenaModal(null)}
                      className="w-full sm:w-auto px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm transition-all border border-white/15 cursor-pointer active:scale-95"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
