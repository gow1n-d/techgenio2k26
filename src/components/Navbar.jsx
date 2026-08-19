import React, { useState } from 'react';
import { Globe, Menu, X, ArrowUpRight } from 'lucide-react';
import { CONFIG } from '../data/techgenioData';

export default function Navbar({ onOpenRegister }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Arenas", href: "#arenas" },
    { name: "Schedule", href: "#schedule" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "Organizers", href: "#organizers" }
  ];

  return (
    <header className="relative z-30 px-4 sm:px-6 py-5 w-full">
      <nav className="liquid-glass rounded-full max-w-6xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all duration-300 border border-white/15 shadow-xl">
        {/* Left Side: Prominent Institutional Logos & Title */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a href="#" className="flex items-center gap-3 text-white group">
            {/* Logos Capsule with high visibility */}
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-md group-hover:scale-105 transition-transform">
              <img
                src="/klnce.png"
                alt="KLNCE Shield"
                className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                title="K.L.N. College of Engineering (Autonomous)"
              />
              <div className="h-4 w-[1px] bg-neutral-300" />
              <img
                src="/iic.png"
                alt="IIC Logo"
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                title="Institution's Innovation Council"
              />
              <div className="h-4 w-[1px] bg-neutral-300" />
              <img
                src="/irp.png"
                alt="IRP Logo"
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                title="Innovation Research Park"
              />
            </div>

            <span className="font-semibold text-base sm:text-lg tracking-tight text-white flex items-center gap-1">
              TechGenio <span className="font-serif italic text-white/80 text-sm sm:text-base font-normal">2K26</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 ml-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors hover:scale-105 transform duration-150"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={CONFIG.REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white text-xs sm:text-sm font-medium transition-colors flex items-center gap-1 px-3 py-1.5 rounded-full hover:bg-white/5"
          >
            Rulebook
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>
          <button
            onClick={onOpenRegister}
            className="liquid-glass rounded-full px-5 sm:px-6 py-2 text-white text-xs sm:text-sm font-medium hover:bg-white/10 transition-all cursor-pointer shadow-md hover:shadow-white/5 active:scale-95 border border-white/20"
          >
            Register
          </button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white/80 hover:text-white rounded-full bg-white/5"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 liquid-glass rounded-3xl p-6 max-w-sm mx-auto flex flex-col gap-4 border border-white/15 animate-fadeIn shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/90 hover:text-white text-base font-medium py-1 px-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-white/10 my-1" />
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenRegister();
            }}
            className="liquid-glass rounded-full py-3 px-6 text-white text-center font-medium hover:bg-white/10 cursor-pointer border border-white/20"
          >
            Register Now
          </button>
        </div>
      )}
    </header>
  );
}
