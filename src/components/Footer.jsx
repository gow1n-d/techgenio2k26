import React from 'react';
import { CONFIG } from '../data/techgenioData';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-12 border-t border-neutral-800 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1.5 bg-neutral-800 p-1.5 rounded-full border border-neutral-700">
                <img src="/klnce.png" alt="KLNCE" className="w-6 h-6 object-contain rounded-full" />
                <img src="/iic.png" alt="IIC" className="w-5 h-5 object-contain rounded-full" />
                <img src="/irp.png" alt="IRP" className="w-5 h-5 object-contain rounded-full" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                TECHGENIO&reg; 2K26
              </span>
            </div>
            <p className="text-xs font-mono text-emerald-400 font-semibold uppercase mb-3">
              ENGINEER'S DAY CELEBRATION · 09 SEP 2026
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
              K.L.N. College of Engineering (Autonomous)<br />
              Organized by IIC × IRP under QC-IR
            </p>
            <a
              href={CONFIG.REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold bg-white text-neutral-900 px-6 py-2.5 rounded-full shadow-xs hover:bg-neutral-100 transition-colors"
            >
              <span>Register Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li><a href="#about" className="hover:text-white transition-colors">About TechGenio</a></li>
              <li><a href="#events" className="hover:text-white transition-colors">05 Flagship Arenas</a></li>
              <li><a href="#timeline" className="hover:text-white transition-colors">Event Timeline (31 Aug – 09 Sep)</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors">Schedule Matrix</a></li>
              <li><a href="#organizers" className="hover:text-white transition-colors">Officials & Committee</a></li>
            </ul>
          </div>

          {/* Governance */}
          <div>
            <h4 className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-wider mb-5">
              Governance & Organizing Bodies
            </h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li>Institution's Innovation Council (IIC)</li>
              <li>Innovation Research Park (IRP)</li>
              <li>Quality Circle - Industrial Relations (QC-IR)</li>
              <li>K.L.N. College of Engineering Management</li>
              <li>
                <a
                  href={CONFIG.REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Delegate Registration Form</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <span>&copy; 2026 TechGenio 2K26 · K.L.N. College of Engineering. All rights reserved.</span>
          <span>ENGINEERING · INNOVATION · TECHNOLOGY · COMPETITION · CREATIVITY</span>
        </div>
      </div>
    </footer>
  );
}
