import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles, Trophy, Users, ShieldCheck } from 'lucide-react';
import { CONFIG } from '../data/techgenioData';

export default function CtaSection({ onOpenRegister }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section className="relative bg-transparent py-24 md:py-32 px-6 overflow-hidden border-t border-white/10">
      {/* Dynamic Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-5xl mx-auto relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.96 }}
          transition={{ duration: 0.8 }}
          className="liquid-glass rounded-3xl p-8 sm:p-12 md:p-16 border border-white/20 shadow-2xl text-center relative overflow-hidden"
        >
          {/* Top Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-mono text-xs uppercase font-bold tracking-wider mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>National Engineer's Day · 09 September 2026</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl text-white font-serif tracking-tight mb-4"
          >
            Ready to Conquer the <em className="italic text-white/75">5 Arenas?</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Join student engineers, innovators, and thinkers at <strong>K.L.N. College of Engineering</strong>. Compete for cash prizes, merit trophies, and institutional honors.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenRegister}
              className="w-full sm:w-auto bg-white text-black font-semibold rounded-full px-8 py-3.5 text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all shadow-xl cursor-pointer"
            >
              <span>Register for TechGenio</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </motion.button>

            <a
              href={CONFIG.REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto liquid-glass rounded-full px-8 py-3.5 text-white font-medium text-sm sm:text-base hover:bg-white/10 transition-colors border border-white/20 cursor-pointer"
            >
              Direct Google Form
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
