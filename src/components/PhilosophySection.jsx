import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Target, Zap } from 'lucide-react';

export default function PhilosophySection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section id="philosophy" className="bg-transparent py-20 md:py-28 px-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10" ref={containerRef}>
        {/* Label & Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="text-white/40 text-xs tracking-widest uppercase mb-3 font-mono font-semibold">
            The Philosophy · K.L.N. College of Engineering
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-none">
            Innovation{' '}
            <span className="font-serif italic text-white/40">×</span>{' '}
            Vision
          </h2>
        </motion.div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* Left Column: Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl overflow-hidden aspect-[4/3] border border-white/10 relative shadow-2xl group"
          >
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Right Column: Two Text Blocks */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* Block 1 */}
            <div className="liquid-glass rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-white/20 transition-all">
              <div className="text-emerald-400/90 text-xs tracking-widest uppercase mb-3 font-semibold font-mono flex items-center gap-2">
                <Target className="w-4 h-4" />
                Choose your space · 5 Arenas
              </div>
              <p className="text-white/75 text-base leading-relaxed font-normal">
                Every meaningful breakthrough begins at the intersection of disciplined strategy and remarkable creative vision. TechGenio 2K26 operates at that crossroads, turning bold engineering ideas into tangible outcomes that move people and reshape industries.
              </p>
            </div>

            {/* Block 2 */}
            <div className="liquid-glass rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-white/20 transition-all">
              <div className="text-cyan-400/90 text-xs tracking-widest uppercase mb-3 font-semibold font-mono flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Shape the future · IIC × IRP under QC-IR
              </div>
              <p className="text-white/75 text-base leading-relaxed font-normal">
                We believe that the best work emerges when curiosity meets conviction. Our process is designed to uncover hidden opportunities and translate them into experiences that resonate long after the first impression.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
