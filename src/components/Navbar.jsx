import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { REGISTRATION_URL } from '../data/techgenioData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Arenas", href: "#arenas" },
    { name: "Schedule", href: "#schedule" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "Organizers", href: "#organizers" }
  ];

  return (
    <header className="sticky top-0 z-40 px-4 sm:px-6 py-4 w-full flex justify-center backdrop-blur-md bg-black/40 border-b border-white/5 transition-all">
      <nav className="liquid-glass rounded-full max-w-5xl w-full mx-auto px-5 sm:px-7 py-2.5 flex items-center justify-between gap-4 md:gap-8 border border-white/15 shadow-xl">
        {/* Brand Name */}
        <a href="#" className="flex items-center gap-2 text-white group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-full px-2 py-1">
          <span className="font-semibold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5">
            TechGenio <span className="font-serif italic text-white/80 font-normal">2K26</span>
          </span>
        </a>

        {/* Centered Desktop Nav Links */}
        <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/75 hover:text-white text-sm font-medium transition-colors hover:scale-105 transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded px-2 py-1"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Register Button (Direct Link to Google Form) */}
        <div className="hidden sm:flex items-center shrink-0">
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass rounded-full px-5 py-2 text-white text-xs sm:text-sm font-medium hover:bg-white/10 transition-all shadow-md hover:shadow-white/5 active:scale-95 border border-white/20 inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <span>Register Now</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white/80 hover:text-white rounded-full bg-white/5 border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 z-50 liquid-glass rounded-3xl p-6 max-w-sm mx-auto flex flex-col gap-3 border border-white/20 animate-fadeIn shadow-2xl backdrop-blur-2xl bg-black/90">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/90 hover:text-white text-base font-medium py-2 px-3 rounded-xl hover:bg-white/10 transition-colors text-center"
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-white/10 my-1" />
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full bg-white text-black font-semibold rounded-full py-3 px-6 text-center text-sm shadow-lg hover:bg-neutral-200 transition-all flex items-center justify-center gap-1.5"
          >
            <span>Register for TechGenio</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
