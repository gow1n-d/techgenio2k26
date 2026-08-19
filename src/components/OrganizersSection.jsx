import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { organizersList } from '../data/techgenioData';

export default function OrganizersSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  return (
    <section id="organizers" className="relative bg-transparent py-20 md:py-28 px-6 overflow-hidden border-t border-white/10">
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-white/40 text-xs tracking-widest uppercase mb-2 block font-mono font-semibold">
            Institutional Leadership
          </span>
          <h2 className="text-4xl md:text-6xl text-white tracking-tight mb-3">
            Patrons & <span className="font-serif italic text-white/60">Organizers</span>
          </h2>
          <p className="text-white/60 text-sm md:text-base">
            Under the esteemed guidance of KLNCE Management, QC-IR, IIC, and IRP.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {organizersList.map((person, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ duration: 0.5, delay: 0.06 * idx }}
              whileHover={{ y: -3 }}
              className="liquid-glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400/90 px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40">
                  {person.role}
                </span>
                <span className="text-[11px] font-mono text-white/35">
                  {person.tag}
                </span>
              </div>
              <h3 className="text-white font-semibold text-lg tracking-tight mb-1 group-hover:text-emerald-300 transition-colors">
                {person.name}
              </h3>
              <p className="text-white/55 text-sm">
                {person.designation}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
