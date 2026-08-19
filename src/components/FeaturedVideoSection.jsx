import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FeaturedVideoSection({ onExploreMore }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section className="bg-transparent py-16 md:py-24 px-6 overflow-hidden relative">
      {/* Background glow to smoothly bridge sections */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden aspect-[16/10] sm:aspect-video border border-white/10 shadow-2xl group"
        >
          {/* Video */}
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4"
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover scale-[1.02] group-hover:scale-105 transition-transform duration-1000"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

          {/* Bottom Overlay Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 flex flex-col md:flex-row md:items-end justify-between gap-6 z-10">
            {/* Left Card */}
            <div className="liquid-glass rounded-2xl p-6 sm:p-7 max-w-lg backdrop-blur-md border border-white/15">
              <div className="text-white/60 text-xs tracking-widest uppercase mb-2.5 font-semibold flex items-center gap-2 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Our Approach · TechGenio 2K26
              </div>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed font-normal">
                We believe in the power of curiosity-driven engineering exploration. Every project starts with a question, and every prototype opens a new door to innovation at KLNCE.
              </p>
            </div>

            {/* Right Button */}
            <div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onExploreMore || (() => {
                  const el = document.getElementById('arenas');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                })}
                className="liquid-glass rounded-full px-8 py-3.5 text-white text-sm font-medium hover:bg-white/10 transition-all flex items-center gap-2.5 cursor-pointer shadow-lg active:scale-95 border border-white/20 whitespace-nowrap"
              >
                <span>Explore Arenas</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
