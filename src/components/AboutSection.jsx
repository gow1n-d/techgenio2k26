import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Zap, Compass, Cpu, ArrowUpRight } from 'lucide-react';
import { CONFIG } from '../data/techgenioData';

export default function AboutSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const highlights = [
    {
      icon: Cpu,
      title: "05 Flagship Arenas",
      desc: "Hardware Expo, Neural Quiz, Software Hackathon, Debugging & Idea Pitching.",
      accent: "text-amber-400"
    },
    {
      icon: Zap,
      title: "10-Day Tech Festival",
      desc: "Sprint phases starting 31 August leading to the Grand Engineers Day Finale on 09 Sept.",
      accent: "text-cyan-400"
    },
    {
      icon: Compass,
      title: "IIC × IRP under QC-IR",
      desc: "Architected by Institution's Innovation Council & Innovation Research Park at KLNCE.",
      accent: "text-emerald-400"
    },
    {
      icon: Award,
      title: "Prizes & Recognition",
      desc: "Prestigious cash awards, merit trophies, and institutional certificates for champions.",
      accent: "text-purple-400"
    }
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative bg-transparent pt-24 md:pt-36 pb-16 md:pb-24 px-6 overflow-hidden"
    >
      {/* Subtle radial ambient lighting to prevent empty black gaps */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.06)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass text-white/60 text-xs tracking-widest uppercase mb-6 font-mono border border-white/10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          About TechGenio 2K26 · KLNCE
        </motion.div>

        {/* Heading without 'then' */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.15] tracking-tight mb-12"
        >
          Pioneering{' '}
          <span className="font-serif italic text-white/70">engineering ideas</span> for{' '}
          <br className="hidden md:inline" />
          minds that{' '}
          <span className="font-serif italic text-white/70">create, build, and inspire.</span>
        </motion.h2>

        {/* Description intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/70 text-base md:text-lg max-w-3xl leading-relaxed mb-16"
        >
          Hosted at <strong>K.L.N. College of Engineering (Autonomous)</strong> to celebrate National Engineer's Day, TechGenio 2K26 is the ultimate proving ground for creative engineering, algorithmic mastery, and hardware invention.
        </motion.p>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ duration: 0.5, delay: 0.15 * idx }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="liquid-glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-5 border border-white/10 group-hover:border-white/25 transition-colors">
                    <Icon className={`w-5 h-5 ${item.accent} transition-transform group-hover:scale-110`} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
