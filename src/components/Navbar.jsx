import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
    <header className="relative z-30 px-4 sm:px-6 py-5 w-full flex justify-center">
      <nav className="liquid-glass rounded-full max-w-5xl mx-auto px-6 sm:px-8 py-3 flex items-center justify-between sm:justify-center gap-6 md:gap-10 transition-all duration-300 border border-white/15 shadow-xl">
        {/* Brand Name */}
        <a href="#" className="flex items-center gap-2 text-white group shrink-0">
          <span className="font-semibold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5">
            TechGenio <span className="font-serif italic text-white/80 font-normal">2K26</span>
          </span>
        </a>

        {/* Centered Desktop Nav Links */}
        <div className="hidden lg:flex items-center justify-center gap-7 md:gap-8">
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

        {/* Register Button */}
        <div className="hidden sm:flex items-center shrink-0">
          <button
            onClick={onOpenRegister}
            className="liquid-glass rounded-full px-6 py-2 text-white text-xs sm:text-sm font-medium hover:bg-white/10 transition-all cursor-pointer shadow-md hover:shadow-white/5 active:scale-95 border border-white/20"
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
        <div className="lg:hidden fixed top-20 left-4 right-4 z-50 liquid-glass rounded-3xl p-6 max-w-sm mx-auto flex flex-col gap-4 border border-white/15 animate-fadeIn shadow-2xl backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/90 hover:text-white text-base font-medium py-1 px-2 rounded-lg hover:bg-white/5 transition-colors text-center"
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
