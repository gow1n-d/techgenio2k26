import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { HelpCircle, ChevronDown, Sparkles, Filter, Layers, Users, Calendar, HelpCircle as HelpIcon } from 'lucide-react';

const categories = [
  { id: "all", label: "All Questions", icon: Layers },
  { id: "eligibility", label: "Eligibility & Teams", icon: Users },
  { id: "schedule", label: "Schedule & Arenas", icon: Calendar },
  { id: "registration", label: "Registration & Support", icon: HelpIcon },
];

const faqsData = [
  {
    id: 1,
    category: "eligibility",
    question: "Who can participate in TECHGENIO 2K26?",
    answer: "TECHGENIO 2K26 is open to all 2nd, 3rd, and final year engineering students interested in technology, innovation, engineering, and problem-solving."
  },
  {
    id: 2,
    category: "registration",
    question: "What is the registration fee?",
    answer: (
      <span>
        The registration fee is <strong className="text-emerald-400 font-semibold">₹150 per participant</strong>.
      </span>
    )
  },
  {
    id: 3,
    category: "eligibility",
    question: "How many events can I participate in?",
    answer: (
      <span>
        Each participant can register for all events. <span className="text-amber-300 font-medium block mt-1">(NOTE: The finals of Quiz and Hardware Expo will happen on 9/9/26 at the same time).</span>
      </span>
    )
  },
  {
    id: 4,
    category: "eligibility",
    question: "Can I participate as a solo participant?",
    answer: (
      <span>
        No Solo Participation is allowed. All events must be attended with the <strong className="text-cyan-300">required number of team members</strong> specified for each arena.
      </span>
    )
  },
  {
    id: 5,
    category: "schedule",
    question: "When will the preliminary rounds be conducted?",
    answer: (
      <span>
        The preliminary rounds of various events are scheduled starting from <strong className="text-emerald-400">31 August 2026</strong>.
      </span>
    )
  },
  {
    id: 6,
    category: "schedule",
    question: "When is the main event?",
    answer: (
      <span>
        The TECHGENIO 2K26 grand finale celebration will be held on <strong className="text-amber-400">9 September 2026</strong> (celebrating National Engineers' Day).
      </span>
    )
  },
  {
    id: 7,
    category: "schedule",
    question: "Are there any fun events?",
    answer: (
      <span>
        Yes! Multiple fun events and interactive spot challenges will be conducted on the <strong className="text-cyan-400">morning of 9 September</strong> and will be open to all registered participants.
      </span>
    )
  },
  {
    id: 8,
    category: "registration",
    question: "How will I receive event updates and instructions?",
    answer: (
      <span>
        Registered participants will be added to the <strong className="text-emerald-400">official TECHGENIO WhatsApp group</strong>, where schedules, instructions, venue details, and real-time announcements will be shared.
      </span>
    )
  },
  {
    id: 9,
    category: "registration",
    question: "Can I change my selected events after registration?",
    answer: "Participants are strongly advised to choose their events carefully before submitting the registration form. Any change requests after submission will be subject to organizer approval."
  },
  {
    id: 10,
    category: "schedule",
    question: "Where will TECHGENIO 2K26 be conducted?",
    answer: (
      <span>
        The event will be conducted on-campus at <strong className="text-white">K.L.N. College of Engineering (Pottapalayam, Madurai)</strong>. Specific halls and laboratories for individual events will be communicated to registered participants.
      </span>
    )
  },
  {
    id: 11,
    category: "registration",
    question: "Whom should I contact if I have any queries?",
    answer: "You can contact the TECHGENIO organizing committee through the official contact numbers provided on the website or directly via the official WhatsApp group."
  }
];

export default function FaqSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState("all");
  const [openId, setOpenId] = useState(null);

  const filteredFaqs = activeCategory === "all"
    ? faqsData
    : faqsData.filter(faq => faq.category === activeCategory);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative bg-transparent py-16 md:py-24 px-4 sm:px-6 overflow-hidden border-t border-white/10">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-8 md:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass text-white/80 text-xs tracking-widest uppercase mb-3.5 font-mono border border-white/15 shadow-md">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-3 font-normal">
            Frequently Asked <span className="font-serif italic text-white/80">Questions</span>
          </h2>
          <p className="text-white/70 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Everything you need to know about eligibility, event schedules, team limits, and registration for TechGenio 2K26.
          </p>
        </motion.div>

        {/* Category Filter Tabs to Regulate Content Size */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            const count = cat.id === "all" ? faqsData.length : faqsData.filter(f => f.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenId(null);
                }}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all inline-flex items-center gap-2 cursor-pointer border ${
                  isActive
                    ? 'bg-white text-black border-white shadow-lg shadow-white/10 scale-105'
                    : 'liquid-glass text-white/75 hover:text-white border-white/10 hover:border-white/25 hover:bg-white/10'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-black' : 'text-emerald-400'}`} />
                <span>{cat.label}</span>
                <span className={`text-[11px] font-mono px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-black/15 text-black font-bold' : 'bg-white/10 text-white/60'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Regulated 2-Column Responsive FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-4 items-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="contents"
            >
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openId === faq.id;
                const numberFormatted = faq.id < 10 ? `0${faq.id}` : faq.id;

                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.03 * idx }}
                    className={`liquid-glass rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'border-emerald-500/50 bg-neutral-950/90 shadow-xl shadow-emerald-950/30 ring-1 ring-emerald-500/30'
                        : 'border-white/10 hover:border-white/25 hover:bg-white/[0.04]'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-4 sm:p-4.5 flex items-center justify-between gap-3 text-left transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <span className={`text-xs font-mono font-bold shrink-0 px-2 py-0.5 rounded ${
                          isOpen ? 'bg-emerald-500/20 text-emerald-300' : 'bg-white/5 text-emerald-400/90 border border-white/10'
                        }`}>
                          {numberFormatted}
                        </span>
                        <h3 className={`text-sm sm:text-base font-semibold tracking-tight leading-snug transition-colors ${
                          isOpen ? 'text-white' : 'text-white/90 hover:text-white'
                        }`}>
                          {faq.question}
                        </h3>
                      </div>

                      <div className={`w-7 h-7 rounded-full flex items-center justify-center border transition-transform duration-300 shrink-0 ${
                        isOpen
                          ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 rotate-180'
                          : 'bg-white/5 border-white/10 text-white/60 group-hover:text-white'
                      }`}>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-4 pb-4.5 pt-1 text-xs sm:text-sm text-white/80 leading-relaxed border-t border-white/10 ml-9 sm:ml-10">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

