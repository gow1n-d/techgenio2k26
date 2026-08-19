import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Users, Award, Star } from 'lucide-react';
import { institutionalPatrons, studentCommittee } from '../data/techgenioData';

export default function OrganizersSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section id="organizers" className="relative bg-transparent py-20 md:py-28 px-6 overflow-hidden border-t border-white/10">
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-white/40 text-xs tracking-widest uppercase mb-2 block font-mono font-semibold">
            Leadership & Governance
          </span>
          <h2 className="text-4xl md:text-6xl text-white tracking-tight mb-3">
            Patrons & <span className="font-serif italic text-white/60">Organizers</span>
          </h2>
          <p className="text-white/60 text-sm md:text-base">
            Under the esteemed guidance of KLNCE Management, QC-IR, IIC, and IRP.
          </p>
        </motion.div>

        {/* 1. Institutional Patrons & Leadership */}
        <div className="mb-14">
          <div className="flex items-center gap-2.5 mb-6">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
              Institutional Leadership & Patrons
            </h3>
            <div className="flex-1 h-px bg-white/10 ml-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {institutionalPatrons.map((person, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.45, delay: 0.05 * idx }}
                whileHover={{ y: -3 }}
                className="liquid-glass rounded-2xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400/90 px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40 font-semibold">
                    {person.role}
                  </span>
                  <span className="text-[11px] font-mono text-white/35">
                    {person.tag}
                  </span>
                </div>
                <h4 className="text-white font-semibold text-lg tracking-tight mb-1 group-hover:text-emerald-300 transition-colors">
                  {person.name}
                </h4>
                <p className="text-white/55 text-sm">
                  {person.designation}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Student Committee & Organizing Body */}
        <div>
          <div className="flex items-center gap-2.5 mb-6">
            <Users className="w-4 h-4 text-cyan-400" />
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
              Student Committee & Organizing Body
            </h3>
            <div className="flex-1 h-px bg-white/10 ml-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {studentCommittee.map((person, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.45, delay: 0.25 + 0.05 * idx }}
                whileHover={{ y: -3 }}
                className="liquid-glass rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300/90 px-2.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 font-semibold">
                    {person.role}
                  </span>
                  <span className="text-[11px] font-mono text-white/35">
                    {person.tag}
                  </span>
                </div>
                <h4 className="text-white font-semibold text-lg tracking-tight mb-1 group-hover:text-cyan-300 transition-colors">
                  {person.name}
                </h4>
                <p className="text-white/55 text-sm">
                  {person.designation}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
