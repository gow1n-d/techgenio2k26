import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Trophy, Users, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { REGISTRATION_URL } from '../data/techgenioData';

export default function CtaSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section className="relative bg-transparent py-24 md:py-32 px-4 sm:px-6 overflow-hidden border-t border-white/10">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-emerald-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 35, scale: 0.98 }}
          transition={{ duration: 0.7 }}
          className="liquid-glass rounded-3xl p-8 sm:p-12 md:p-16 border border-white/20 shadow-2xl text-center relative overflow-hidden bg-neutral-950/40"
        >
          {/* Top Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-mono text-xs uppercase font-bold tracking-wider mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>National Engineers' Day · 09 September 2026</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl text-white font-serif tracking-tight mb-4"
          >
            Ready to Conquer the <em className="italic text-white/80">6 Arenas?</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Join student engineers, innovators, and thinkers at <strong>K.L.N. College of Engineering</strong>. Compete for cash prizes, merit trophies, and institutional honors.
          </motion.p>

          {/* Direct Google Form CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mb-10 flex justify-center"
          >
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-white text-black font-semibold text-sm sm:text-base hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
            >
              <span>Register for TechGenio 2K26</span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </a>
          </motion.div>

          {/* Trust badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10 text-xs font-mono text-white/60">
            <div className="flex items-center justify-center gap-2">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Cash Prizes & Merit Trophies</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Autonomous Accreditation (KLNCE)</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>Organized by IIC × IRP under QC-IR</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
