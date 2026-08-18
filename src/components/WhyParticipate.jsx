import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, Brain, Terminal, Bug, Mic } from 'lucide-react';

export default function WhyParticipate() {
  const benefits = [
    {
      title: "BUILD",
      tagline: "Prototype to Deployment",
      desc: "Turn engineering theories into functional, testable hardware and software systems.",
      icon: <Hammer className="w-6 h-6" />
    },
    {
      title: "THINK",
      tagline: "Logic & Deduction",
      desc: "Challenge your technical acumen and algorithmic reasoning against top peers.",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "CODE",
      tagline: "Full-Stack Sprints",
      desc: "Architect scalable software products and write clean code under timed sprint constraints.",
      icon: <Terminal className="w-6 h-6" />
    },
    {
      title: "DEBUG",
      tagline: "Precision Problem Solving",
      desc: "Perform root-cause analysis on complex concurrency and memory exceptions.",
      icon: <Bug className="w-6 h-6" />
    },
    {
      title: "PITCH",
      tagline: "Venture Impact",
      desc: "Articulate your innovation's technical value proposition convincingly to industry jurors.",
      icon: <Mic className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-[#0A0F0A] border-t border-neutral-800 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/50 text-emerald-300 font-mono text-xs font-semibold tracking-wider uppercase mb-4 border border-emerald-800/50">
            Growth & Recognition
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
            Why Participate?
          </h2>
          <p className="text-lg text-neutral-400">
            TechGenio 2K26 is a proving ground to build real competencies, showcase prototypes, and gain institutional honours.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              whileHover={{ y: -6 }}
              className="bg-[#141A14] p-7 rounded-3xl border border-neutral-700/60 shadow-lg flex flex-col justify-between hover:border-emerald-700/50 hover:shadow-xl hover:shadow-emerald-950/20 transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-emerald-400 mb-6">
                  {b.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {b.title}
                </h3>
                <span className="text-xs font-mono font-semibold text-emerald-400 block mb-3">
                  {b.tagline}
                </span>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
