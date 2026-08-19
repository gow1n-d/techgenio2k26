import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function BackgroundVideo() {
  const videoRef = useRef(null);
  const isFadingOutRef = useRef(false);
  const fadeAnimRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Helper: smoothly animate opacity using requestAnimationFrame
    const animateOpacity = (from, to, duration, onComplete) => {
      if (fadeAnimRef.current) {
        cancelAnimationFrame(fadeAnimRef.current);
      }
      const startTime = performance.now();

      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentOpacity = from + (to - from) * progress;

        if (video) {
          video.style.opacity = currentOpacity.toString();
        }

        if (progress < 1) {
          fadeAnimRef.current = requestAnimationFrame(step);
        } else if (onComplete) {
          onComplete();
        }
      };

      fadeAnimRef.current = requestAnimationFrame(step);
    };

    const handleCanPlay = () => {
      video.play().catch(() => {});
      animateOpacity(parseFloat(video.style.opacity || '0'), 1, 500);
    };

    const handleTimeUpdate = () => {
      if (!video.duration || isFadingOutRef.current) return;
      const remainingTime = video.duration - video.currentTime;

      if (remainingTime <= 0.55 && remainingTime > 0) {
        isFadingOutRef.current = true;
        const currentOpacity = parseFloat(video.style.opacity || '1');
        animateOpacity(currentOpacity, 0, 500);
      }
    };

    const handleEnded = () => {
      if (video) {
        video.style.opacity = '0';
      }
      setTimeout(() => {
        if (!video) return;
        video.currentTime = 0;
        isFadingOutRef.current = false;
        video.play().catch(() => {});
        animateOpacity(0, 1, 500);
      }, 100);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    video.play().catch(() => {});

    return () => {
      if (fadeAnimRef.current) {
        cancelAnimationFrame(fadeAnimRef.current);
      }
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Background Video looping seamlessly behind the entire site */}
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
        muted
        autoPlay
        playsInline
        preload="auto"
        style={{ opacity: 0 }}
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
      />

      {/* Floating Animated Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[30rem] h-[30rem] rounded-full bg-cyan-500/10 blur-3xl animate-pulse pointer-events-none" style={{ animationDuration: '6s' }} />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />

      {/* Dark tint gradient overlay for text readability while keeping full motion visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.6)_100%)] pointer-events-none" />
    </div>
  );
}
