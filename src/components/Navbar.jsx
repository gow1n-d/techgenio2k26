import React, { useState } from 'react';
import { CONFIG } from '../data/techgenioData';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Events", href: "#events" },
    { label: "Timeline", href: "#timeline" },
    { label: "Schedule", href: "#schedule" },
    { label: "Organizers", href: "#organizers" }
  ];

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 px-6 sm:px-10 py-4 flex flex-row justify-between items-center bg-white/80 backdrop-blur-md border-b border-neutral-200/50 shadow-xs transition-all duration-300">
        {/* Left Side: Clean TechGenio Brand */}
        <a href="#hero" className="flex items-center gap-1.5 group">
          <span className="text-[21px] sm:text-[25px] tracking-tight text-neutral-950 font-bold select-none">
            TECHGENIO<span className="text-emerald-700">&reg;</span> 2K26
          </span>
          <span className="text-[22px] sm:text-[26px] text-neutral-950 select-none tracking-[-0.02em] font-medium leading-none mb-0.5 group-hover:rotate-45 transition-transform duration-300">
            &#10033;
          </span>
        </a>

        {/* Center: Desktop Nav Links (Clean without commas) */}
        <nav className="hidden md:flex flex-row items-center gap-7 lg:gap-9 text-[17px] lg:text-[19px] text-neutral-700 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-black transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Side: Desktop Registration CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={CONFIG.REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] lg:text-[16px] font-semibold text-white bg-[#1C2E1E] px-6 py-2.5 rounded-full shadow-sm hover:bg-[#28422B] hover:shadow-md transition-all duration-200"
          >
            Register Now &rarr;
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] z-20 focus:outline-none cursor-pointer"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </header>

      {/* Fullscreen Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-md flex flex-col justify-center items-center gap-8 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-2xl font-medium text-black">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-emerald-800 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CONFIG.REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 text-lg font-bold bg-[#1C2E1E] text-white px-8 py-3 rounded-full shadow-md"
          >
            Register Now &rarr;
          </a>
        </div>
      </div>
    </>
  );
}
