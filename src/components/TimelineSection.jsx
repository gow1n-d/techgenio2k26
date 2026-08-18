import React from 'react';
import { motion } from 'framer-motion';
import { timelineData } from '../data/techgenioData';
import { Calendar } from 'lucide-react';

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-24 bg-[#0A0F0A] border-t border-neutral-800 relative z-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 text-blue-300 font-mono text-xs font-semibold tracking-wider uppercase mb-4 border border-blue-800/50">
            Chronological Roadmap
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
            Event Timeline
          </h2>
          <p className="text-lg text-neutral-400">
            From the opening preliminary rounds on 31 August 2026 to the grand celebration on 09 September 2026 Main Day.
          </p>
        </div>

        {/* Vertical Timeline Track */}
        <div className="relative border-l-2 border-neutral-700 ml-4 md:ml-8 space-y-12 pb-6">
          {timelineData.map((slot, index) => (
            <motion.div
              key={slot.date}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative pl-8 md:pl-10"
            >
              {/* Bullet Node */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                  slot.isMainDay
                    ? 'w-6 h-6 -left-[13px] border-amber-500 bg-amber-500 shadow-md shadow-amber-500/50 ring-4 ring-amber-900/40'
                    : 'border-emerald-500 bg-emerald-500/30'
                }`}
              />

              {/* Date Card */}
              <div
                className={`p-6 sm:p-8 rounded-3xl border transition-all ${
                  slot.isMainDay
                    ? 'bg-gradient-to-br from-amber-950/40 via-[#141A14] to-amber-950/20 border-amber-700/60 shadow-lg shadow-amber-900/20'
                    : 'bg-[#141A14] border-neutral-700/60 shadow-md'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-neutral-500" />
                    <span className="font-mono font-bold text-base sm:text-lg text-white">
                      {slot.date}
                    </span>
                    <span className="text-xs font-medium text-neutral-500">
                      ({slot.day})
                    </span>
                  </div>

                  <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
                    slot.isMainDay
                      ? 'bg-amber-500 text-black border-amber-400 font-bold'
                      : 'bg-neutral-800 text-neutral-300 border-neutral-700'
                  }`}>
                    {slot.badge}
                  </span>
                </div>

                <div className="space-y-4">
                  {slot.events.map((ev, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-neutral-800/50 border border-neutral-700/50"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <span className="font-bold text-white text-base">
                          {ev.name}
                        </span>
                        <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded-md border border-emerald-800/50">
                          {ev.stage}
                        </span>
                      </div>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {ev.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
