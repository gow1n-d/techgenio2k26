import React from 'react';
import { motion } from 'framer-motion';
import { eventShowcase, CONFIG } from '../data/techgenioData';
import { ArrowUpRight, Cpu, Zap, Code, Bug, Lightbulb, Star } from 'lucide-react';

export default function EventsSection() {
  const getEventIcon = (id) => {
    switch (id) {
      case 'techxpo': return <Cpu className="w-5 h-5" />;
      case 'neuro-pulse': return <Zap className="w-5 h-5" />;
      case 'code-forge': return <Code className="w-5 h-5" />;
      case 'bug-verse': return <Bug className="w-5 h-5" />;
      case 'pitchup': return <Lightbulb className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  return (
    <section id="events" className="py-24 bg-[#0E140E] relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
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
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventShowcase.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6 }}
              className="bg-[#141A14] border border-neutral-700/60 rounded-3xl overflow-hidden flex flex-col hover:shadow-xl hover:shadow-emerald-950/30 transition-all duration-300 hover:border-emerald-700/50 group"
            >
              {/* Event Image */}
              {item.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141A14] via-[#141A14]/30 to-transparent" />

                  {/* Number badge */}
                  <span className="absolute top-3 left-3 text-xl font-mono font-bold text-white/80 drop-shadow-lg group-hover:text-emerald-300 transition-colors">
                    {item.number}
                  </span>

                  {/* Icon badge */}
                  <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white group-hover:bg-emerald-900/70 group-hover:text-emerald-300 group-hover:border-emerald-700/60 transition-all duration-300">
                    {getEventIcon(item.id)}
                  </div>
                </div>
              )}

              {/* Card content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm font-medium text-neutral-500 mb-3">
                    {item.tagline}
                  </p>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                <div>
                  <div className="p-3 bg-neutral-800/60 rounded-xl border border-neutral-700/50 mb-4 font-mono text-xs text-neutral-500">
                    {item.motif}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-neutral-700/50">
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border border-neutral-600 text-neutral-400 bg-neutral-800/50">
                      {item.stage}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
