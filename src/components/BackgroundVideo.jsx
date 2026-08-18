import React, { useRef, useEffect } from 'react';

const LOCAL_VIDEO = "/hero-3d.mp4";
const CLOUDFRONT_URL = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260601_110537_3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4";

export default function BackgroundVideo() {
  const videoRef = useRef(null);
  const targetTimeRef = useRef(0);
  const currentTimeRef = useRef(0);
  const isSeekingRef = useRef(false);
  const animFrameRef = useRef(null);
  const isInteractingRef = useRef(false);
  const idleTimeoutRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;
    video.loop = true;
    video.autoplay = true;

    // Start video playback immediately on load
    const startPlay = () => {
      video.play().catch(() => {
        const resumeOnEvent = () => {
          video.play().catch(() => {});
        };
        window.addEventListener('mousemove', resumeOnEvent, { once: true });
        window.addEventListener('scroll', resumeOnEvent, { once: true });
        window.addEventListener('click', resumeOnEvent, { once: true });
        window.addEventListener('touchstart', resumeOnEvent, { once: true });
      });
    };

    video.addEventListener('canplay', startPlay);
    startPlay();

    const handleSeeked = () => {
      isSeekingRef.current = false;
    };
    video.addEventListener('seeked', handleSeeked);

    // Smooth Lerp Animation Loop
    const smoothUpdate = () => {
      if (video && video.duration && isInteractingRef.current) {
        const duration = video.duration;
        const diff = targetTimeRef.current - currentTimeRef.current;

        // Smooth damping towards target time
        if (Math.abs(diff) > 0.02) {
          currentTimeRef.current += diff * 0.15;
          currentTimeRef.current = Math.max(0, Math.min(duration, currentTimeRef.current));

          if (!isSeekingRef.current) {
            isSeekingRef.current = true;
            video.currentTime = currentTimeRef.current;
          }
        }
      }
      animFrameRef.current = requestAnimationFrame(smoothUpdate);
    };

    animFrameRef.current = requestAnimationFrame(smoothUpdate);

    // 1. Mouse Movement Scrubbing (Desktop)
    const handleMouseMove = (e) => {
      if (window.innerWidth < 768) return;
      if (!video || !video.duration) return;

      isInteractingRef.current = true;
      video.pause();

      const mouseProgress = Math.max(0, Math.min(1, e.clientX / window.innerWidth));
      targetTimeRef.current = mouseProgress * video.duration;

      // Reset idle timer
      clearTimeout(idleTimeoutRef.current);
      idleTimeoutRef.current = setTimeout(() => {
        isInteractingRef.current = false;
        video.play().catch(() => {});
      }, 1200);
    };

    // 2. Scroll-Down Scrubbing
    const handleScroll = () => {
      if (!video || !video.duration) return;

      const heroElement = document.getElementById('hero');
      const heroHeight = heroElement ? heroElement.offsetHeight : window.innerHeight;
      const scrollY = window.scrollY;

      // Calculate scroll progress within hero / page
      const scrollProgress = Math.max(0, Math.min(1, scrollY / (heroHeight * 1.5)));

      isInteractingRef.current = true;
      video.pause();

      targetTimeRef.current = scrollProgress * video.duration;

      // Reset idle timer
      clearTimeout(idleTimeoutRef.current);
      idleTimeoutRef.current = setTimeout(() => {
        isInteractingRef.current = false;
        video.play().catch(() => {});
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      video.removeEventListener('canplay', startPlay);
      video.removeEventListener('seeked', handleSeeked);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animFrameRef.current);
      clearTimeout(idleTimeoutRef.current);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      {/* 3D Glossy Iridescent Mannequin Video */}
      <video
        ref={videoRef}
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover object-right md:object-[80%_center] lg:object-right opacity-100 transition-opacity duration-500"
      >
        <source src={LOCAL_VIDEO} type="video/mp4" />
        <source src={CLOUDFRONT_URL} type="video/mp4" />
      </video>

      {/* Soft gradient fade on left for crisp typography */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent lg:via-white/25 lg:to-transparent pointer-events-none" />
    </div>
  );
}
