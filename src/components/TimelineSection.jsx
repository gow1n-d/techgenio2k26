import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Star, Sparkles, Clock, CheckCircle2, Trophy } from 'lucide-react';
import { timelineData } from '../data/techgenioData';

export default function TimelineSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section id="schedule" className="relative bg-transparent py-20 md:py-32 px-4 sm:px-6 overflow-hidden border-t border-white/10">
      {/* Background subtle ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-emerald-500/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] bg-cyan-500/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-amber-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10" ref={containerRef}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-mono tracking-widest uppercase mb-4 backdrop-blur-md">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span>31 August – 09 September 2026</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl text-white tracking-tight mb-4 font-normal">
            Event <span className="font-serif italic text-white/70">Timeline</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Follow the chronological path from preliminary rounds to the grand Engineers' Day showcase celebration.
          </p>
        </motion.div>

        {/* Chronological Timeline Container */}
        <div className="relative">
          {/* Mobile connecting spine (left-aligned) */}
          <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-gradient-to-b from-cyan-500/40 via-emerald-500/50 via-purple-500/50 to-amber-400 md:hidden" />
          
          {/* Desktop connecting spine (centered) */}
          <div className="hidden md:block absolute left-1/2 top-6 bottom-6 -translate-x-1/2 w-[2px] bg-gradient-to-b from-cyan-500/30 via-emerald-500/40 via-purple-500/40 to-amber-400/80 shadow-[0_0_15px_rgba(52,211,153,0.2)]" />

          {/* Timeline Nodes */}
          <div className="space-y-10 md:space-y-16">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isMain = item.isMainDay;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.55, delay: 0.07 * idx }}
                  className={`relative flex items-start md:items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Left / Right Content Card (Desktop) */}
                  <div className="w-full pl-16 md:pl-0 md:w-[calc(50%-2.5rem)]">
                    <div
                      className={`liquid-glass rounded-2xl md:rounded-3xl p-6 sm:p-7 border transition-all duration-300 relative group overflow-hidden ${
                        isMain
                          ? 'border-amber-400/50 bg-gradient-to-br from-amber-950/20 via-neutral-900/80 to-amber-900/10 shadow-[0_0_30px_rgba(251,191,36,0.1)] hover:border-amber-400/80'
                          : 'border-white/10 hover:border-white/25 hover:bg-white/[0.03]'
                      }`}
                    >
                      {/* Top date + badge */}
                      <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`text-xl sm:text-2xl font-bold tracking-tight ${
                              isMain ? 'text-amber-300' : 'text-white'
                            }`}
                          >
                            {item.date}
                          </span>
                          <span className="text-xs text-white/50 uppercase tracking-widest font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10">
                            {item.day}
                          </span>
                        </div>

                        <span
                          className={`text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border flex items-center gap-1.5 ${
                            isMain
                              ? 'bg-amber-400/20 text-amber-300 border-amber-400/40 shadow-sm shadow-amber-400/20'
                              : 'bg-white/5 text-white/70 border-white/10'
                          }`}
                        >
                          {isMain && <Star className="w-3 h-3 fill-amber-300 text-amber-300 animate-pulse" />}
                          {item.badge}
                        </span>
                      </div>

                      {/* Divider */}
                      <div
                        className={`w-full h-px mb-4 ${
                          isMain ? 'bg-gradient-to-r from-amber-400/30 via-amber-400/10 to-transparent' : 'bg-white/10'
                        }`}
                      />

                      {/* Events for this date */}
                      <div className="space-y-3.5">
                        {item.events.map((ev, evIdx) => (
                          <div
                            key={evIdx}
                            className={`p-3.5 rounded-xl transition-colors ${
                              isMain
                                ? 'bg-amber-400/[0.04] border border-amber-400/10 hover:border-amber-400/30'
                                : 'bg-white/[0.02] border border-white/5 hover:border-white/15'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2 mb-1.5">
                              <h4
                                className={`font-semibold text-sm sm:text-base tracking-tight ${
                                  isMain ? 'text-amber-200' : 'text-white'
                                }`}
                              >
                                {ev.name}
                              </h4>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-700/50 text-emerald-300/90 whitespace-nowrap">
                                {ev.stage}
                              </span>
                            </div>
                            <p className="text-xs text-white/55 leading-relaxed">
                              {ev.desc}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Highlight for Main Day */}
                      {isMain && (
                        <div className="mt-5 pt-3.5 border-t border-amber-400/20 flex items-center justify-between text-xs text-amber-300/90 font-mono flex-wrap gap-2">
                          <div className="flex items-center gap-2">
                            <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
                            <span>Grand Engineers' Day Finale & Awards Assembly</span>
                          </div>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-amber-400/20 text-amber-200 uppercase tracking-widest font-bold">
                            Main Event
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile Node Position */}
                  <div className="absolute left-6 -translate-x-1/2 top-7 md:hidden flex items-center justify-center">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center border-2 transition-all ${
                        isMain
                          ? 'bg-amber-500 border-amber-300 text-black shadow-[0_0_15px_rgba(251,191,36,0.6)]'
                          : 'bg-neutral-900 border-emerald-400 text-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.3)]'
                      }`}
                    >
                      {isMain ? (
                        <Star className="w-3.5 h-3.5 fill-black text-black" />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      )}
                    </div>
                  </div>

                  {/* Desktop Node Position (Center Spine) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-20">
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center border-2 backdrop-blur-md transition-transform duration-300 hover:scale-110 shadow-lg ${
                        isMain
                          ? 'bg-gradient-to-br from-amber-400 to-amber-600 border-amber-200 text-neutral-950 shadow-[0_0_25px_rgba(251,191,36,0.5)]'
                          : 'bg-neutral-900/95 border-emerald-400/80 text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.2)]'
                      }`}
                    >
                      {isMain ? (
                        <Star className="w-5 h-5 fill-neutral-950 text-neutral-950 animate-pulse" />
                      ) : (
                        <span className="text-xs font-mono font-bold">
                          {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                        </span>
                      )}
                    </div>

                    {/* Connector Line */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 h-[2px] w-6 ${
                        isEven
                          ? 'right-full bg-gradient-to-l from-emerald-400/60 to-transparent'
                          : 'left-full bg-gradient-to-r from-emerald-400/60 to-transparent'
                      } ${isMain ? '!from-amber-400 !to-transparent' : ''}`}
                    />
                  </div>

                  {/* Desktop spacer */}
                  <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
