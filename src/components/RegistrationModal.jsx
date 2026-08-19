import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, ExternalLink, Sparkles, AlertCircle } from 'lucide-react';
import { CONFIG, eventShowcase } from '../data/techgenioData';

export default function RegistrationModal({ isOpen, onClose, preselectedArena, initialEmail = '' }) {
  const [selectedArenas, setSelectedArenas] = useState(
    preselectedArena ? [preselectedArena] : []
  );
  const [email, setEmail] = useState(initialEmail);
  const [name, setName] = useState('');
  const [dept, setDept] = useState('');
  const [college, setCollege] = useState('K.L.N. College of Engineering');
  const [year, setYear] = useState('3rd Year');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleArena = (id) => {
    setSelectedArenas((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || selectedArenas.length === 0) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="liquid-glass rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-white/20 shadow-2xl relative my-8"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/40 text-xs tracking-widest uppercase font-mono">
                TechGenio 2K26 Registration
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
              Engineer's Day <span className="font-serif italic text-white/70">Registration</span>
            </h3>
            <p className="text-white/60 text-sm mb-6">
              Choose your competition arenas and secure your slot for 31 Aug – 09 Sep 2026.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                  Select Competition Arenas (Multi-Select)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {eventShowcase.map((event) => {
                    const isSelected = selectedArenas.includes(event.id);
                    return (
                      <button
                        type="button"
                        key={event.id}
                        onClick={() => toggleArena(event.id)}
                        className={`text-left p-3 rounded-xl border text-xs font-medium transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-white/20 border-white text-white shadow-sm'
                            : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                        }`}
                      >
                        <span>{event.name} ({event.category})</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs text-white/60 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/60 mb-1">College Email / Roll No.</label>
                  <input
                    type="email"
                    required
                    placeholder="student@klnce.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-white/60 mb-1">Department</label>
                  <input
                    type="text"
                    placeholder="e.g. CSE / IT / ECE / MECH"
                    value={dept}
                    onChange={(e) => setDept(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/60 mb-1">Institution</label>
                  <input
                    type="text"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40"
                  />
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={selectedArenas.length === 0}
                  className="flex-1 bg-white text-black font-semibold rounded-full py-3 px-6 hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Confirm Registration</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={CONFIG.REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-glass rounded-full py-3 px-6 text-white text-center text-xs sm:text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Google Form Link</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 mx-auto flex items-center justify-center mb-6">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">
              Registration Received!
            </h3>
            <p className="text-white/70 max-w-md mx-auto mb-6 text-sm">
              Thank you, <strong>{name || 'Participant'}</strong>! Your registration for{' '}
              <strong>{selectedArenas.length} event(s)</strong> has been logged. Please check your email for the detailed round rules and discord/communication links.
            </p>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-xs mx-auto mb-8 text-xs text-white/60 font-mono">
              Venue: KLNCE Campus · 09 Sep 2026
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-white text-black font-semibold rounded-full py-3 px-8 hover:bg-neutral-200 transition-colors"
            >
              Back to TechGenio
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
