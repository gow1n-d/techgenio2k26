import React from 'react';
import { motion } from 'framer-motion';
import { organizersList } from '../data/techgenioData';

export default function OrganizersSection() {
  return (
    <section id="organizers" className="py-24 bg-[#0E140E] border-t border-neutral-800 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-800 text-neutral-300 font-mono text-xs font-semibold tracking-wider uppercase mb-4 border border-neutral-700">
            Leadership & Committee
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
            Officials & Organizers
          </h2>
          <p className="text-lg text-neutral-400">
            Conducted by the academic leadership, Quality Circle - Industrial Relations, IIC, and IRP at K.L.N. College of Engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizersList.map((org) => (
            <motion.div
              key={org.name + org.role}
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-[#141A14] border border-neutral-700/60 shadow-lg hover:border-emerald-700/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase px-2.5 py-1 rounded-md bg-emerald-950/50 border border-emerald-800/50">
                    {org.role}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-600">
                    {org.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {org.name}
                </h3>
                <p className="text-sm font-medium text-neutral-400">
                  {org.designation}
                </p>
              </div>
              <span className="text-xs font-mono text-neutral-600 mt-6 pt-4 border-t border-neutral-700/50">
                K.L.N. College of Engineering
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
