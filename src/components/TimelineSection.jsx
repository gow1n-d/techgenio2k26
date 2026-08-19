import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Star } from 'lucide-react';
import { timelineData } from '../data/techgenioData';

export default function TimelineSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  return (
    <section id="schedule" className="relative bg-transparent py-20 md:py-28 px-6 overflow-hidden border-t border-white/10">
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-white/40 text-xs tracking-widest uppercase mb-2 block font-mono font-semibold">
            Program Schedule · 31 Aug to 09 Sep
          </span>
          <h2 className="text-4xl md:text-6xl text-white tracking-tight mb-3">
            Event <span className="font-serif italic text-white/60">Timeline</span>
          </h2>
          <p className="text-white/60 text-sm md:text-base">
            From preliminary screening rounds to the grand Engineers Day celebration on 09 September 2026.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {timelineData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.08 * idx }}
              whileHover={{ y: -3 }}
              className={`liquid-glass rounded-3xl p-6 sm:p-7 flex flex-col justify-between border transition-all ${
                item.isMainDay
                  ? 'border-amber-400/40 shadow-2xl shadow-amber-500/10 bg-white/[0.04]'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                {/* Date & Day Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-white tracking-tight block">
                      {item.date}
                    </span>
                    <span className="text-xs text-white/50 uppercase tracking-wider font-mono">
                      {item.day}
                    </span>
                  </div>

                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border font-mono ${
                      item.isMainDay
                        ? 'bg-amber-400/20 text-amber-300 border-amber-400/40'
                        : 'bg-white/5 text-white/70 border-white/10'
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/10 my-4" />

                {/* Events list */}
                <div className="space-y-4">
                  {item.events.map((ev, evIdx) => (
                    <div key={evIdx} className="space-y-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <h4 className="text-white font-medium text-sm sm:text-base">
                          {ev.name}
                        </h4>
                        <span className="text-[11px] font-mono text-emerald-400/90 whitespace-nowrap">
                          {ev.stage}
                        </span>
                      </div>
                      <p className="text-xs text-white/50 leading-relaxed">
                        {ev.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {item.isMainDay && (
                <div className="mt-6 pt-4 border-t border-amber-400/20 flex items-center gap-2 text-xs text-amber-300/90 font-mono">
                  <Star className="w-3.5 h-3.5 fill-amber-300/30 text-amber-300" />
                  <span>Grand Celebration & Awards Assembly</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
