import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import BackgroundVideo from './components/BackgroundVideo';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import TimelineSection from './components/TimelineSection';
import ScheduleSection from './components/ScheduleSection';
import WhyParticipate from './components/WhyParticipate';
import OrganizersSection from './components/OrganizersSection';
import Footer from './components/Footer';
import { useTypewriter } from './hooks/useTypewriter';
import { CONFIG } from './data/techgenioData';

const TECHGENIO_PILLS = [
  "TECHXPO (Hardware)",
  "NEURO PULSE (Quiz)",
  "CODE FORGE (Hackathon)",
  "BUG VERSE (Debugging)",
  "PITCHUP (Idea Presentation)"
];

export default function App() {
  const [selectedServices, setSelectedServices] = useState([]);
  const { displayed, done } = useTypewriter("TECHGENIO 2K26\nEngineer's Day", 38, 500);

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <div className="relative bg-white text-neutral-900 font-sans selection:bg-[#EAECE9] selection:text-[#1C2E1E] antialiased overflow-x-hidden">
      {/* 1. Interactive Navbar */}
      <Navbar />

      {/* 2. Hero Section with Bounded 3D Video Background */}
      <section id="hero" className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-white">
        <BackgroundVideo />

        {/* Hero Content Layer */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 pt-28 lg:pt-32 flex flex-col justify-center flex-1">
          {/* Institutional Logos Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6"
          >
            <div className="flex items-center gap-2.5 sm:gap-3 bg-white/95 backdrop-blur-md p-2 sm:p-2.5 px-3 sm:px-4 rounded-2xl border border-neutral-200/90 shadow-sm hover:shadow-md transition-shadow">
              <img
                src="/klnce.png"
                alt="KLNCE Official Shield"
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
                title="K.L.N. College of Engineering (Autonomous)"
              />
              <div className="h-7 w-[1px] bg-neutral-200" />
              <img
                src="/iic.png"
                alt="IIC Logo"
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
                title="Institution's Innovation Council"
              />
              <div className="h-7 w-[1px] bg-neutral-200" />
              <img
                src="/irp.png"
                alt="IRP Logo"
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
                title="Innovation Research Park"
              />
            </div>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-emerald-100/90 text-emerald-950 font-mono text-xs font-bold tracking-wider uppercase border border-emerald-300 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-700 animate-pulse" />
              K.L.N. COLLEGE OF ENGINEERING · 09 SEP 2026
            </span>
          </motion.div>

          {/* Typewriter Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-[76px] font-bold tracking-tight text-black leading-[1.05] mb-6 select-none w-full whitespace-pre-wrap">
              {displayed}
              {!done && (
                <span className="inline-block w-[3px] h-[1.05em] bg-black align-middle ml-[3px] animate-blink" />
              )}
            </h1>
          </motion.div>

          {/* Description Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg md:text-xl text-[#5A635A] leading-relaxed font-normal mb-10 max-w-2xl">
              Organized by <strong>IIC × IRP under QC-IR</strong>.<br />
              Engineering · Innovation · Technology · Competition · Creativity.
            </p>
          </motion.div>

          {/* Interactive Multi-Select Service Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-3xl"
          >
            <h2 className="text-2xl font-medium tracking-tight mb-2 text-black">
              Which arena will you conquer?
            </h2>
            <p className="opacity-85 text-[#738273] mb-6 text-sm sm:text-base">
              Select all events you want to register for (31 Aug – 09 Sep 2026)
            </p>

            {/* Event Pills Container */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-6">
              {TECHGENIO_PILLS.map((service) => {
                const isSelected = selectedServices.includes(service);
                return (
                  <motion.button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    whileTap={{ scale: 0.96 }}
                    className={`px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-[#1C2E1E] text-white shadow-md shadow-emerald-950/10 transform'
                        : 'bg-white text-[#1C2E1E] border border-neutral-200 hover:bg-[#F1F3F1]/70'
                    }`}
                  >
                    <AnimatePresence>
                      {isSelected && (
                        <motion.span
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 20,
                          }}
                          className="flex items-center justify-center"
                        >
                          <Check className="w-4 h-4 text-white stroke-[2.5]" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                    <span>{service}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Contingent Feedback Status Banner */}
            <div className="min-h-[60px] flex items-center">
              <AnimatePresence mode="wait">
                {selectedServices.length === 0 ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="italic text-xs sm:text-sm text-[#738273]"
                  >
                    Please click to select event arenas above to register.
                  </motion.div>
                ) : (
                  <motion.div
                    key="active"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 25,
                    }}
                    className="w-full overflow-hidden"
                  >
                    <div className="bg-[#FAFBF9] border border-[#EAECE9] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <span className="text-sm font-medium text-[#1C2E1E]">
                        Ready to register for:{' '}
                        <strong className="font-semibold text-black">
                          {selectedServices.join(', ')}
                        </strong>
                      </span>
                      <a
                        href={CONFIG.REGISTRATION_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-white bg-[#1C2E1E] px-5 py-2 rounded-full uppercase text-xs font-semibold tracking-wider hover:bg-[#28422B] transition-colors whitespace-nowrap shadow-xs"
                      >
                        <span>Register Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Full Section Architecture */}
      <AboutSection />
      <EventsSection />
      <TimelineSection />
      <ScheduleSection />
      <WhyParticipate />
      <OrganizersSection />
      <Footer />
    </div>
  );
}
