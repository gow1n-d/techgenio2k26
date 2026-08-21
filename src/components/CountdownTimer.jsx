import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Flame } from 'lucide-react';

export default function CountdownTimer() {
  // Target: 27th August 11:59:59 PM (uses current year, defaults to 2026)
  const getTargetDate = () => {
    const currentYear = new Date().getFullYear();
    // 27th August 23:59:59 local time
    return new Date(currentYear, 7, 27, 23, 59, 59).getTime();
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
      <div className="liquid-glass rounded-3xl p-4 sm:p-5 sm:px-6 border border-emerald-500/30 bg-neutral-950/60 shadow-2xl backdrop-blur-xl relative overflow-hidden group hover:border-emerald-500/50 transition-all">
        {/* Ambient Top Glow */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-20 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

        {/* Top Header Row */}
        <div className="flex items-center justify-between gap-2 mb-3.5 pb-2.5 border-b border-white/10 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              Registration Window Closing
            </span>
          </div>

          <span className="text-[10px] sm:text-[11px] font-mono text-white/50 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">
            27 Aug · 11:59 PM
          </span>
        </div>

        {/* Countdown Digits Matrix */}
        {timeLeft.isExpired ? (
          <div className="py-4 text-center">
            <p className="text-rose-400 font-mono text-sm uppercase tracking-wider font-semibold">
              Registration Window Closed
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {timeUnits.map((unit, index) => (
              <div
                key={unit.label}
                className="flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-2xl bg-white/[0.03] border border-white/10 group-hover:border-emerald-500/20 transition-colors"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-white tracking-tight leading-none mb-1">
                  {formatNumber(unit.value)}
                </div>
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-white/50">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
