import React from 'react';
import { motion } from 'framer-motion';
import { eventShowcase, CONFIG } from '../data/techgenioData';
import { ArrowUpRight, Cpu, Zap, Code, Bug, Lightbulb } from 'lucide-react';

export default function EventsSection() {
  const getEventIcon = (id) => {
    switch (id) {
      case 'techxpo': return <Cpu className="w-6 h-6" />;
      case 'neuro-pulse': return <Zap className="w-6 h-6" />;
      case 'code-forge': return <Code className="w-6 h-6" />;
      case 'bug-verse': return <Bug className="w-6 h-6" />;
      case 'pitchup': return <Lightbulb className="w-6 h-6" />;
      default: return <Cpu className="w-6 h-6" />;
    }
  };

  return (
    <section id="events" className="py-24 bg-[#0E140E] relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-800 text-neutral-300 font-mono text-xs font-semibold tracking-wider uppercase mb-4 border border-neutral-700">
              Competitive Arenas
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
              05 Flagship Events
            </h2>
            <p className="text-lg text-neutral-400 font-normal">
              Explore the five engineering domains tailored for hardware builders, software developers, debuggers, quizmasters, and startup innovators.
            </p>
          </div>

          <a
            href={CONFIG.REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-base font-semibold text-emerald-400 underline underline-offset-4 hover:text-emerald-300 transition-colors whitespace-nowrap"
          >
            <span>Register for all arenas</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventShowcase.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6 }}
              className="bg-[#141A14] border border-neutral-700/60 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:shadow-emerald-950/20 transition-all duration-300 hover:border-emerald-700/50 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-mono font-bold text-neutral-600 group-hover:text-emerald-400 transition-colors">
                    {item.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-neutral-800 border border-neutral-700 shadow-md flex items-center justify-center text-neutral-300 group-hover:bg-emerald-900 group-hover:text-emerald-300 group-hover:border-emerald-700 transition-all duration-300">
                    {getEventIcon(item.id)}
                  </div>
                </div>

                <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase block mb-1">
                  {item.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-sm font-medium text-neutral-500 mb-4">
                  {item.tagline}
                </p>
                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="p-3 bg-neutral-800/60 rounded-xl border border-neutral-700/50 mb-6 font-mono text-xs text-neutral-500">
                  {item.motif}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-700/50">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border border-neutral-600 text-neutral-400 bg-neutral-800/50">
                    {item.stage}
                  </span>
                  <a
                    href={CONFIG.REGISTRATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 uppercase hover:underline"
                  >
                    <span>Register</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
