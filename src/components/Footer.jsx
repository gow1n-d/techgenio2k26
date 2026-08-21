import React from 'react';
import { ArrowUp, MapPin, ArrowUpRight } from 'lucide-react';
import { REGISTRATION_URL } from '../data/techgenioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-white/10 pt-20 pb-12 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Top Tier */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-16 border-b border-white/10">
          {/* Col 1: TechGenio & Big Visible Logos */}
          <div className="md:col-span-2 space-y-6">
            {/* Big High-Contrast Logos Showcase */}
            <div className="flex items-center gap-4 bg-white p-3 sm:p-3.5 px-5 sm:px-6 rounded-2xl w-fit shadow-xl">
              <img
                src="/klnce.png"
                alt="KLNCE Official Shield"
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                title="K.L.N. College of Engineering (Autonomous)"
              />
              <div className="h-8 sm:h-9 w-[1.5px] bg-neutral-300" />
              <img
                src="/iic.png"
                alt="IIC Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                title="Institution's Innovation Council"
              />
              <div className="h-8 sm:h-9 w-[1.5px] bg-neutral-300" />
              <img
                src="/irp.png"
                alt="IRP Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                title="Innovation Research Park"
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                TechGenio <span className="font-serif italic text-white/70">2K26</span>
              </h3>
              <p className="text-white/60 text-sm max-w-md leading-relaxed">
                National Engineers' Day celebration hosted by <strong>K.L.N. College of Engineering (Autonomous)</strong>. Organized by Institution's Innovation Council (IIC) & Innovation Research Park (IRP) under QC-IR.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-white/50 font-mono pt-1">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Pottapalayam, Madurai - 630612, Tamil Nadu</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-4 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About TechGenio</a></li>
              <li><a href="#arenas" className="text-white/70 hover:text-white transition-colors">6 Flagship Arenas</a></li>
              <li><a href="#schedule" className="text-white/70 hover:text-white transition-colors">Schedule & Timeline</a></li>
              <li><a href="#philosophy" className="text-white/70 hover:text-white transition-colors">Innovation Philosophy</a></li>
              <li><a href="#organizers" className="text-white/70 hover:text-white transition-colors">Patrons & Organizers</a></li>
              <li><a href="#faq" className="text-white/70 hover:text-white transition-colors">FAQs</a></li>
              <li>
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1 font-medium"
                >
                  <span>Register Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Arenas */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-4 font-mono">
              The 6 Arenas
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>TECHXPO (Hardware Expo)</li>
              <li>NEURO PULSE (Technical Quiz)</li>
              <li>CODE FORGE (Software Hackathon)</li>
              <li>BUG VERSE (Code Debugging)</li>
              <li>PITCHUP (Idea Presentation)</li>
              <li>MULTIPLE FUN EVENTS (Main-Day Specials)</li>
            </ul>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2026 TechGenio · K.L.N. College of Engineering (Autonomous). All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="liquid-glass rounded-full px-5 py-2.5 text-white/80 hover:text-white flex items-center gap-2 cursor-pointer transition-colors border border-white/10 shadow-sm hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
