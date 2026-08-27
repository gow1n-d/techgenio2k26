import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Flame, AlertTriangle, ArrowUpRight, Sparkles, BellRing } from 'lucide-react';
import { REGISTRATION_URL } from '../data/techgenioData';

export default function CountdownTimer() {
  // Target: Extended up to 28th August 2026, 11:59:59 PM (Tomorrow)
  const getTargetDate = () => {
    const currentYear = new Date().getFullYear();
    const year = currentYear > 2026 ? currentYear : 2026;
    // 28th August 23:59:59 local time (Month 7 is August, 0-indexed)
    return new Date(year, 7, 28, 23, 59, 59).getTime();
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    const target = getTargetDate();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isExpired: false
      });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="w-full max-w-xl mx-auto mt-8 sm:mt-10"
    >
      <div className="liquid-glass rounded-3xl p-4 sm:p-5 sm:px-6 border border-amber-500/40 bg-neutral-950/70 shadow-[0_0_40px_rgba(245,158,11,0.12)] backdrop-blur-xl relative overflow-hidden group hover:border-amber-500/60 transition-all">
        {/* Ambient Top Urgency Glow */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-24 bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* 🚨 DEADLINE EXTENSION ALERT BANNER */}
        <div className="flex items-center justify-between gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-rose-500/15 to-amber-500/15 border border-amber-500/30 text-amber-200 mb-3.5 shadow-inner">
          <div className="flex items-center gap-2 min-w-0">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
            </span>
            <div className="flex items-center gap-1.5 truncate">
              <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wide uppercase text-amber-300 truncate">
                Deadline Extended Alert!
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <span className="text-[10px] sm:text-[11px] font-mono font-bold text-amber-200 bg-amber-500/20 border border-amber-400/40 px-2 sm:px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <Clock className="w-3 h-3 text-amber-300" />
              <span>Till 28.08.2026 · 11:59 PM</span>
            </span>
          </div>
        </div>

        {/* Header Subtitle Row */}
        <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-white/10 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-1.5">
              <BellRing className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
              Final Registration Countdown
            </span>
          </div>

          <span className="text-[10px] sm:text-[11px] font-mono text-white/60 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">
            Closing 28 Aug · 11:59 PM
          </span>
        </div>

        {/* Countdown Digits Matrix */}
        {timeLeft.isExpired ? (
          <div className="py-5 text-center bg-rose-500/10 rounded-2xl border border-rose-500/30">
            <p className="text-rose-300 font-mono text-sm sm:text-base uppercase tracking-wider font-bold flex items-center justify-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              Registration Window Closed
            </p>
            <p className="text-white/60 text-xs mt-1">
              Please contact student coordinators for spot registration queries.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {timeUnits.map((unit) => (
                <div
                  key={unit.label}
                  className="flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:border-amber-500/30 transition-colors relative overflow-hidden"
                >
                  {/* Subtle Digit Glow */}
                  <div className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-white tracking-tight leading-none mb-1 font-variant-numeric tabular-nums">
                    {formatNumber(unit.value)}
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-white/50">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Urgency CTA Footer */}
            <div className="mt-3.5 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span className="text-[11px] sm:text-xs text-white/70 flex items-center gap-1.5 text-center sm:text-left">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Hurry! Slots filling fast across all 6 Flagship Arenas.</span>
              </span>

              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-400 text-black font-semibold text-xs hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center justify-center gap-1 shrink-0"
              >
                <span>Register Now</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}
