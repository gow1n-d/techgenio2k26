import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lightbulb, Cpu, Trophy, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    { name: "ENGINEERING", icon: <Cpu className="w-5 h-5" /> },
    { name: "INNOVATION", icon: <Lightbulb className="w-5 h-5" /> },
    { name: "TECHNOLOGY", icon: <Sparkles className="w-5 h-5" /> },
    { name: "COMPETITION", icon: <Trophy className="w-5 h-5" /> },
    { name: "CREATIVITY", icon: <ShieldCheck className="w-5 h-5" /> }
  ];

  return (
    <section id="about" className="py-24 bg-[#0A0F0A] border-t border-neutral-800 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/50 text-emerald-300 font-mono text-xs font-semibold tracking-wider uppercase mb-4 border border-emerald-700/50">
            Institutional Legacy
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            About TechGenio 2K26
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed font-normal">
            Conducted at <strong className="text-neutral-200">K.L.N. College of Engineering</strong> in celebration of <strong className="text-neutral-200">Engineer's Day</strong>, TechGenio 2K26 brings together budding engineers in competitive arenas designed to cultivate technical excellence, problem-solving, and multidisciplinary invention.
          </p>
        </div>

        {/* Organizational Architecture Hierarchy */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-[#141A14] p-8 rounded-3xl border border-neutral-700/60 shadow-lg flex flex-col justify-between hover:border-emerald-700/50 transition-colors"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-950/50 border border-amber-700/40 p-2 flex items-center justify-center mb-6">
                <img src="/iic.png" alt="IIC Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase block mb-1">
                Council Body
              </span>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Institution's Innovation Council
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Fosters an innovation ecosystem on campus, mentoring student prototypes, ideation challenges, and intellectual property.
              </p>
            </div>
            <span className="text-xs font-mono text-neutral-600 mt-6 pt-4 border-t border-neutral-700/50">
              EST. 2018 · IIC KLNCE
            </span>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="bg-[#141A14] p-8 rounded-3xl border border-neutral-700/60 shadow-lg flex flex-col justify-between hover:border-emerald-700/50 transition-colors"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-950/50 border border-blue-700/40 p-2 flex items-center justify-center mb-6">
                <img src="/irp.png" alt="IRP Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xs font-mono font-bold tracking-wider text-blue-400 uppercase block mb-1">
                Research Facility
              </span>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Innovation Research Park
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Hands-on development laboratories and high-performance computing centers providing incubation for deep-tech student hardware & software.
              </p>
            </div>
            <span className="text-xs font-mono text-neutral-600 mt-6 pt-4 border-t border-neutral-700/50">
              IRP KLNCE
            </span>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="bg-[#141A14] p-8 rounded-3xl border border-neutral-700/60 shadow-lg flex flex-col justify-between hover:border-emerald-700/50 transition-colors"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-950/50 border border-emerald-700/40 p-2 flex items-center justify-center mb-6">
                <img src="/klnce.png" alt="KLNCE Crest" className="w-full h-full object-contain" />
              </div>
              <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase block mb-1">
                Apex Committee
              </span>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Quality Circle - Industrial Relations
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Coordinates industry partnerships, judging juries, sponsorships, and technical benchmarking under the leadership of Convener Dr. S. Parthasarthy.
              </p>
            </div>
            <span className="text-xs font-mono text-neutral-600 mt-6 pt-4 border-t border-neutral-700/50">
              QC-IR APEX BODY
            </span>
          </motion.div>
        </div>

        {/* 5 Core Pillars Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.name}
              className="bg-[#141A14] p-5 rounded-2xl border border-neutral-700/50 text-center flex flex-col items-center justify-center gap-2 shadow-md hover:border-emerald-600/50 transition-colors"
            >
              <div className="text-emerald-400">{pillar.icon}</div>
              <span className="text-xs font-mono font-bold tracking-wider text-neutral-300">
                {pillar.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
