import React, { useEffect, useRef } from 'react';

export default function BackgroundVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const setSlowMotion = () => {
      // Slower playback rate for a calm, ultra-smooth, premium cinematic background
      video.playbackRate = 0.55;
    };

    video.addEventListener('loadedmetadata', setSlowMotion);
    video.addEventListener('play', setSlowMotion);

    // Initial setup
    setSlowMotion();
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn("Background video autoplay caught:", err);
      });
    }

    return () => {
      video.removeEventListener('loadedmetadata', setSlowMotion);
      video.removeEventListener('play', setSlowMotion);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Background Video looping slowly & smoothly behind the entire site */}
      <video
        ref={videoRef}
        src="/Google_Veo_Prompt_Premium_Mec.mp4"
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-opacity duration-1000 opacity-75"
      />

      {/* Floating Animated Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl animate-pulse pointer-events-none" />
      <div
        className="absolute top-2/3 right-10 w-[30rem] h-[30rem] rounded-full bg-cyan-500/10 blur-3xl animate-pulse pointer-events-none"
        style={{ animationDuration: '7s' }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl animate-pulse pointer-events-none"
        style={{ animationDuration: '9s' }}
      />

      {/* Dark tint gradient overlay for pristine text readability while keeping full mechanical motion visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/85 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_15%,_rgba(0,0,0,0.7)_100%)] pointer-events-none" />
    </div>
  );
}
