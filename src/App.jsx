import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Check } from 'lucide-react';
import Navbar from './components/Navbar';
import BackgroundVideo from './components/BackgroundVideo';
import AboutSection from './components/AboutSection';
import PhilosophySection from './components/PhilosophySection';
import ServicesSection from './components/ServicesSection';
import TimelineSection from './components/TimelineSection';
import OrganizersSection from './components/OrganizersSection';
import CtaSection from './components/CtaSection';
import RegistrationModal from './components/RegistrationModal';
import Footer from './components/Footer';

const TECHGENIO_PILLS = [
  { id: "techxpo", label: "TECHXPO (Hardware)" },
  { id: "neuro-pulse", label: "NEURO PULSE (Quiz)" },
  { id: "code-forge", label: "CODE FORGE (Hackathon)" },
  { id: "bug-verse", label: "BUG VERSE (Debugging)" },
  { id: "pitchup", label: "PITCHUP (Idea Pitch)" }
];

export default function App() {
  const [selectedPills, setSelectedPills] = useState(["techxpo", "code-forge"]);
  const [modalOpen, setModalOpen] = useState(false);
  const [preselectedArena, setPreselectedArena] = useState(null);

  // Top scroll progress bar for smooth animation feedback
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const togglePill = (id) => {
    setSelectedPills((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const openRegisterWithArena = (arenaId) => {
    setPreselectedArena(arenaId);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white font-sans antialiased overflow-x-hidden relative">
      {/* Top Scroll Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-emerald-400 via-cyan-400 to-amber-400 transform origin-left z-50 pointer-events-none"
      />

      {/* GLOBAL BACKGROUND ANIMATION: Stretches from Hero across all sections down to before Footer */}
      <BackgroundVideo />

      {/* Main Content Wrapper (Z-10 so it sits atop the animated background) */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* SECTION 1 -- HERO (full-viewport) */}
        <section className="relative min-h-screen flex flex-col justify-between overflow-hidden pb-12">
          {/* Navbar */}
          <Navbar onOpenRegister={() => setModalOpen(true)} />

          {/* Hero Content */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-12 text-center max-w-5xl mx-auto">
            {/* BIG, PROMINENT INSTITUTIONAL LOGOS SHOWCASE */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 bg-white/[0.08] backdrop-blur-xl p-3 sm:p-4 rounded-3xl sm:rounded-full border border-white/20 mb-8 shadow-2xl hover:border-white/35 transition-all"
            >
              {/* White pill holding the 3 high-res logos */}
              <div className="flex items-center gap-4 sm:gap-5 bg-white p-2.5 sm:p-3 px-5 sm:px-6 rounded-2xl sm:rounded-full shadow-lg">
                <img
                  src="/klnce.png"
                  alt="K.L.N. College of Engineering (Autonomous)"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain hover:scale-110 transition-transform"
                  title="K.L.N. College of Engineering (Autonomous)"
                />
                <div className="h-8 sm:h-10 w-[1.5px] bg-neutral-200" />
                <img
                  src="/iic.png"
                  alt="Institution's Innovation Council"
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain hover:scale-110 transition-transform"
                  title="Institution's Innovation Council (IIC)"
                />
                <div className="h-8 sm:h-10 w-[1.5px] bg-neutral-200" />
                <img
                  src="/irp.png"
                  alt="Innovation Research Park"
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain hover:scale-110 transition-transform"
                  title="Innovation Research Park (IRP)"
                />
              </div>

              {/* Accompanying Institution Badges */}
              <div className="flex flex-col text-left px-2 sm:pr-4">
                <span className="text-white text-xs sm:text-sm font-semibold tracking-tight uppercase">
                  K.L.N. College of Engineering
                </span>
                <span className="text-emerald-400 font-mono text-[11px] sm:text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  IIC × IRP under QC-IR · 09 SEP 2026
                </span>
              </div>
            </motion.div>

            {/* Heading with Instrument Serif */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight whitespace-nowrap font-serif mb-5 select-none"
            >
              TechGenio <em className="italic font-serif text-white/80 font-normal">2K26</em>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/85 text-sm md:text-base leading-relaxed px-4 max-w-2xl mb-8 font-normal"
            >
              Organized by <strong>IIC × IRP under QC-IR</strong>. Celebrate National Engineer's Day with 5 premier technical arenas: Hardware Expo, Neural Quiz, Software Hackathon, Precision Debugging & Startup Pitching.
            </motion.p>

            {/* Arena Multi-Select Pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="flex flex-wrap justify-center gap-2 max-w-2xl"
            >
              {TECHGENIO_PILLS.map((pill) => {
                const isSelected = selectedPills.includes(pill.id);
                return (
                  <button
                    key={pill.id}
                    onClick={() => togglePill(pill.id)}
                    type="button"
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? 'bg-white text-black font-semibold shadow-md'
                        : 'liquid-glass text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 text-black stroke-[3]" />}
                    <span>{pill.label}</span>
                  </button>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 -- ABOUT SECTION */}
        <AboutSection />

        {/* SECTION 3 -- PHILOSOPHY / INNOVATION x VISION */}
        <PhilosophySection />

        {/* SECTION 4 -- SERVICES / WHAT WE DO (THE 5 ARENAS) */}
        <ServicesSection onRegisterArena={openRegisterWithArena} />

        {/* SECTION 5 -- TIMELINE & SCHEDULE */}
        <TimelineSection />

        {/* SECTION 6 -- PATRONS & ORGANIZERS */}
        <OrganizersSection />

        {/* SECTION 7 -- CALL TO ACTION */}
        <CtaSection onOpenRegister={() => setModalOpen(true)} />

        {/* REGISTRATION MODAL */}
        <RegistrationModal
          isOpen={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setPreselectedArena(null);
          }}
          preselectedArena={preselectedArena}
        />

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
}
