import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Users, Award, Building2, Utensils, Coffee, Sparkles } from 'lucide-react';
import { institutionalPatrons, studentCommittee } from '../data/techgenioData';

export default function OrganizersSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section id="organizers" className="relative bg-transparent py-20 md:py-28 px-4 sm:px-6 overflow-hidden border-t border-white/10">
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14 md:mb-16"
        >
          <span className="text-white/40 text-xs tracking-widest uppercase mb-2 block font-mono font-semibold">
            Leadership & Governance
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl text-white tracking-tight mb-3">
            Patrons & <span className="font-serif italic text-white/70">Organizers</span>
          </h2>
          <p className="text-white/60 text-sm md:text-base">
            Under the visionary guidance of KLNCE Management, QC-IR, IIC, and IRP.
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
                className="liquid-glass rounded-2xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Role Badge (Tertiary hierarchy) */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-950/50 border border-emerald-700/40 font-semibold">
                      {person.role}
                    </span>
                    <span className="text-[11px] font-mono text-white/35">
                      {person.tag}
                    </span>
                  </div>

                  {/* Name (Highest visual prominence) */}
                  <h4 className="text-white font-bold text-xl tracking-tight mb-1 group-hover:text-emerald-300 transition-colors">
                    {person.name}
                  </h4>

                  {/* Designation (Secondary hierarchy) */}
                  <p className="text-white/70 text-sm font-medium">
                    {person.designation}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-white/40 font-mono">
                  <Building2 className="w-3.5 h-3.5 text-white/30" />
                  <span>K.L.N. College of Engineering</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Student Committee & Organizing Body */}
        <div className="mb-14">
          <div className="flex items-center gap-2.5 mb-6">
            <Users className="w-4 h-4 text-cyan-400" />
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
              Student Executive Committee & Team
            </h3>
            <div className="flex-1 h-px bg-white/10 ml-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {studentCommittee.map((person, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.45, delay: 0.2 + 0.05 * idx }}
                whileHover={{ y: -3 }}
                className="liquid-glass rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Role Badge (Tertiary hierarchy) */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 px-2.5 py-1 rounded-full bg-cyan-950/50 border border-cyan-700/40 font-semibold">
                      {person.role}
                    </span>
                    <span className="text-[11px] font-mono text-white/35">
                      {person.tag}
                    </span>
                  </div>

                  {/* Name (Highest visual prominence) */}
                  <h4 className="text-white font-bold text-lg sm:text-xl tracking-tight mb-1 group-hover:text-cyan-300 transition-colors">
                    {person.name}
                  </h4>

                  {/* Designation (Secondary hierarchy) */}
                  <p className="text-white/70 text-sm font-medium">
                    {person.designation}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-white/40 font-mono">
                  <Award className="w-3.5 h-3.5 text-white/30" />
                  <span>TechGenio 2K26 Coordination</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Food & Refreshments Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="liquid-glass rounded-2xl p-5 sm:p-6 border border-amber-500/30 bg-gradient-to-r from-amber-950/30 via-neutral-900/50 to-amber-950/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg shadow-amber-950/20"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 shadow-inner">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/25">
                  <Sparkles className="w-3 h-3" /> Hospitality Note
                </span>
              </div>
              <h4 className="text-white font-bold text-base sm:text-lg tracking-tight">
                Food and Refreshments will be provided
              </h4>
              <p className="text-white/70 text-xs sm:text-sm mt-0.5">
                Complimentary lunch and refreshments will be provided for all registered participants and attendees.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-amber-300/90 bg-amber-950/60 border border-amber-500/30 px-4 py-2 rounded-full shrink-0">
            <Coffee className="w-4 h-4 text-amber-400" />
            <span>Lunch & Refreshments Included</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
