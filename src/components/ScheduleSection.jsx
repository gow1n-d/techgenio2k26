import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { timelineData } from '../data/techgenioData';

export default function ScheduleSection() {
  const [activeTab, setActiveTab] = useState(0);
  const currentSlot = timelineData[activeTab];

  return (
    <section id="schedule" className="py-24 bg-[#0E140E] relative z-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-800 text-neutral-300 font-mono text-xs font-semibold tracking-wider uppercase mb-4 border border-neutral-700">
            Interactive Matrix
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
            The Road to TechGenio
          </h2>
          <p className="text-lg text-neutral-400">
            Select any date to view individual event slots, session timings, and stage descriptions.
          </p>
        </div>

        {/* Date Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin">
          {timelineData.map((slot, idx) => (
            <button
              key={slot.date}
              onClick={() => setActiveTab(idx)}
              type="button"
              className={`px-5 py-2.5 rounded-full font-mono text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                activeTab === idx
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/30 border-emerald-500'
                  : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 border-neutral-700 hover:text-neutral-200'
              }`}
            >
              {slot.date.split(' ')[0]} {slot.date.split(' ')[1]}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlot.date}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="p-8 sm:p-10 rounded-3xl bg-[#141A14] border border-neutral-700/60 shadow-lg"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-700/50">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {currentSlot.date} ({currentSlot.day})
                </h3>
                <span className="text-sm text-neutral-500 font-mono">
                  {currentSlot.isMainDay ? 'Engineer\'s Day Grand Finale' : 'Competition Session'}
                </span>
              </div>
              <span className={`text-xs font-mono font-bold px-3.5 py-1.5 rounded-full border ${
                currentSlot.isMainDay
                  ? 'bg-amber-500 text-black border-amber-400'
                  : 'bg-neutral-800 text-neutral-300 border-neutral-700'
              }`}>
                {currentSlot.badge}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentSlot.events.map((ev, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-neutral-800/50 border border-neutral-700/50 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-white text-lg">
                      {ev.name}
                    </span>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-emerald-950/50 text-emerald-400 border border-emerald-800/50">
                      {ev.stage}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {ev.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
