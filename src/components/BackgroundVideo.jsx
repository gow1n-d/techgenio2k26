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
      {/* Background Video looping smoothly behind the entire site */}
      <video
        ref={videoRef}
        src="/Image_to_Video_Prompt_Animate.mp4"
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-opacity duration-1000 opacity-80"
      />

      {/* Floating Animated Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-emerald-500/15 blur-3xl animate-pulse pointer-events-none" />
      <div
        className="absolute top-2/3 right-10 w-[30rem] h-[30rem] rounded-full bg-cyan-500/15 blur-3xl animate-pulse pointer-events-none"
        style={{ animationDuration: '7s' }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-purple-500/15 blur-3xl animate-pulse pointer-events-none"
        style={{ animationDuration: '9s' }}
      />

      {/* Atmospheric dark gradient overlays: preserves video motion while guaranteeing crystal-clear contrast for text and glass containers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_15%,_rgba(0,0,0,0.65)_100%)] pointer-events-none" />
    </div>
  );
}
