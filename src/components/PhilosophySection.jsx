import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Zap } from 'lucide-react';

export default function PhilosophySection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  return (
    <section id="philosophy" className="bg-transparent py-16 sm:py-20 md:py-28 px-4 sm:px-6 overflow-hidden relative border-t border-white/10">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10" ref={containerRef}>
        {/* Label & Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-16 text-center md:text-left"
        >
          <div className="text-white/40 text-xs tracking-widest uppercase mb-3 font-mono font-semibold">
            The Philosophy · K.L.N. College of Engineering
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-none font-normal">
            Innovation{' '}
            <span className="font-serif italic text-white/40">×</span>{' '}
            Vision
          </h2>
        </motion.div>

        {/* Responsive Grid without empty gaps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Column: Snug, Gapless Portrait Video Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] rounded-3xl overflow-hidden border border-white/15 liquid-glass shadow-2xl relative group bg-neutral-950/60">
              <video
                src="/Google_Veo_Image_to_Video_Prom.mp4"
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
                className="w-full h-auto block object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle bottom edge gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column: Text Blocks */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Block 1 */}
            <div className="liquid-glass rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-emerald-500/30 transition-all">
              <div className="text-emerald-400/90 text-xs tracking-widest uppercase mb-3 font-semibold font-mono flex items-center gap-2">
                <Target className="w-4 h-4" />
                Choose your space · 5 Arenas
              </div>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed font-normal">
                Every meaningful breakthrough begins at the intersection of disciplined strategy and remarkable creative vision. TechGenio 2K26 operates at that crossroads, turning bold engineering ideas into tangible outcomes that move people and reshape industries.
              </p>
            </div>

            {/* Block 2 */}
            <div className="liquid-glass rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-cyan-500/30 transition-all">
              <div className="text-cyan-400/90 text-xs tracking-widest uppercase mb-3 font-semibold font-mono flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Shape the future · IIC × IRP under QC-IR
              </div>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed font-normal">
                We believe that the best work emerges when curiosity meets conviction. Our process is designed to uncover hidden opportunities and translate them into experiences that resonate long after the first impression.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
