import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import Navbar from './components/Navbar';
import BackgroundVideo from './components/BackgroundVideo';
import AboutSection from './components/AboutSection';
import PhilosophySection from './components/PhilosophySection';
import ServicesSection from './components/ServicesSection';
import TimelineSection from './components/TimelineSection';
import OrganizersSection from './components/OrganizersSection';
import CtaSection from './components/CtaSection';
import CountdownTimer from './components/CountdownTimer';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import { REGISTRATION_URL } from './data/techgenioData';

export default function App() {
  // Top scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white font-sans antialiased overflow-x-hidden relative">
      {/* Top Scroll Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-emerald-400 via-cyan-400 to-amber-400 transform origin-left z-50 pointer-events-none"
      />

      {/* Global Background Technical Grid & Soft Ambient Light */}
      <BackgroundVideo />

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* SECTION 1 -- HERO */}
        <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center items-center px-4 sm:px-6 py-12 md:py-20 text-center overflow-hidden">
          <div className="relative z-10 flex flex-col items-center justify-center max-w-5xl mx-auto my-auto">
            {/* Prominent Institutional Logos Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-white/[0.06] backdrop-blur-xl p-2.5 sm:p-3.5 rounded-3xl sm:rounded-full border border-white/15 mb-8 shadow-2xl hover:border-white/30 transition-all"
            >
              {/* White capsule holding institutional logos */}
              <div className="flex items-center gap-3.5 sm:gap-4 bg-white p-2 sm:p-2.5 px-4 sm:px-5 rounded-2xl sm:rounded-full shadow-md">
                <img
                  src="/klnce.png"
                  alt="K.L.N. College of Engineering"
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain hover:scale-105 transition-transform"
                  title="K.L.N. College of Engineering (Autonomous)"
                />
                <div className="h-7 sm:h-8 w-[1.5px] bg-neutral-300" />
                <img
                  src="/iic.png"
                  alt="Institution's Innovation Council"
                  className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain hover:scale-105 transition-transform"
                  title="Institution's Innovation Council (IIC)"
                />
                <div className="h-7 sm:h-8 w-[1.5px] bg-neutral-300" />
                <img
                  src="/irp.png"
                  alt="Innovation Research Park"
                  className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain hover:scale-105 transition-transform"
                  title="Innovation Research Park (IRP)"
                />
              </div>

              {/* Institution details */}
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

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight font-serif mb-3 select-none"
            >
              TechGenio <em className="italic font-serif text-white/80 font-normal">2K26</em>
            </motion.h1>

            {/* Second Edition Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <span className="text-xs sm:text-sm md:text-base font-mono uppercase tracking-[0.25em] text-emerald-400 font-semibold px-4 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 inline-flex items-center gap-2 shadow-lg shadow-emerald-950/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Second Edition
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </span>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-normal px-2"
            >
              Organized by <strong>IIC × IRP under QC-IR</strong>. Celebrate National Engineers' Day across 6 premier technical arenas: Hardware Expo, Neural Quiz, Software Hackathon, Precision Debugging, Idea Pitching & Main-Day Specials.
            </motion.p>

            {/* Primary & Secondary Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
            >
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm sm:text-base hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 shadow-xl inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
              >
                <span>Register Now</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </a>

              <a
                href="#arenas"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full liquid-glass text-white/90 hover:text-white font-medium text-sm sm:text-base hover:bg-white/10 transition-all border border-white/20 inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <span>Explore Arenas</span>
                <ArrowDown className="w-4 h-4 opacity-75" />
              </a>
            </motion.div>

            {/* Countdown Timer (Frozen at 00:00:00:00) */}
            <CountdownTimer />
          </div>
        </section>

        {/* SECTION 2 -- ABOUT SECTION */}
        <AboutSection />

        {/* SECTION 3 -- PHILOSOPHY / INNOVATION x VISION */}
        <PhilosophySection />

        {/* SECTION 4 -- 6 FLAGSHIP ARENAS */}
        <ServicesSection />

        {/* SECTION 5 -- TIMELINE & SCHEDULE */}
        <TimelineSection />

        {/* SECTION 6 -- PATRONS & ORGANIZERS */}
        <OrganizersSection />

        {/* SECTION 7 -- CALL TO ACTION */}
        <CtaSection />

        {/* SECTION 8 -- FREQUENTLY ASKED QUESTIONS (FAQ) */}
        <FaqSection />

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
}
