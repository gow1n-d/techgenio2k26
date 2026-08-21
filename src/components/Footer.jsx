import React from 'react';
import { ArrowUp, MapPin, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { REGISTRATION_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE, contactCoordinators } from '../data/techgenioData';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-white/10 pt-20 pb-12 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Top Tier: 4-Column Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-16 border-b border-white/10">
          {/* Col 1: TechGenio & Logos (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* High-Contrast Logos Showcase */}
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
                National Engineers' Day celebration hosted by <strong>K.L.N. College of Engineering (Autonomous)</strong>. Organized by Institution's Innovation Council (IIC) &amp; Innovation Research Park (IRP) under QC-IR.
              </p>
            </div>

            {/* Official Instagram Link Card / Pill */}
            <div className="pt-1">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-amber-500/10 border border-pink-500/30 hover:border-pink-500/60 text-white text-xs font-semibold group transition-all"
              >
                <div className="p-1 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white">
                  <InstagramIcon className="w-3.5 h-3.5" />
                </div>
                <span>Follow {INSTAGRAM_HANDLE}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-pink-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-white/50 font-mono pt-1">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Pottapalayam, Madurai - 630612, Tamil Nadu</span>
            </div>
          </div>

          {/* Col 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-4 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About</a></li>
              <li><a href="#arenas" className="text-white/70 hover:text-white transition-colors">6 Arenas</a></li>
              <li><a href="#schedule" className="text-white/70 hover:text-white transition-colors">Timeline</a></li>
              <li><a href="#philosophy" className="text-white/70 hover:text-white transition-colors">Philosophy</a></li>
              <li><a href="#organizers" className="text-white/70 hover:text-white transition-colors">Organizers</a></li>
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

          {/* Col 3: Arenas (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-4 font-mono">
              The 6 Arenas
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
              <li>TECHXPO</li>
              <li>NEURO PULSE</li>
              <li>CODE FORGE</li>
              <li>BUG VERSE</li>
              <li>PITCHUP</li>
              <li>FUN EVENTS</li>
            </ul>
          </div>

          {/* Col 4: Contact for Registration (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <h4 className="text-xs uppercase tracking-widest text-emerald-400 font-bold font-mono">
                Contact For Registration
              </h4>
            </div>

            <div className="space-y-3">
              {contactCoordinators.map((c) => (
                <div key={c.name} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-white/50">
                    {c.role}
                  </div>
                  <div className="text-xs font-semibold text-white mt-0.5">
                    {c.name}
                  </div>
                  <div className="flex items-center gap-3 mt-1.5 pt-1.5 border-t border-white/5">
                    <a
                      href={`tel:${c.phone}`}
                      className="text-xs font-mono text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3" />
                      <span>{c.formattedPhone}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2026 TechGenio · K.L.N. College of Engineering (Autonomous). All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-pink-400 transition-colors inline-flex items-center gap-1.5"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram: {INSTAGRAM_HANDLE}</span>
            </a>

            <button
              onClick={scrollToTop}
              className="liquid-glass rounded-full px-5 py-2.5 text-white/80 hover:text-white flex items-center gap-2 cursor-pointer transition-colors border border-white/10 shadow-sm hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

