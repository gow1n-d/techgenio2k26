import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

const faqsData = [
  {
    id: 1,
    question: "Who can participate in TECHGENIO 2K26?",
    answer: "TECHGENIO 2K26 is open to all 2nd, 3rd, and final year engineering students interested in technology, innovation, engineering, and problem-solving."
  },
  {
    id: 2,
    question: "What is the registration fee?",
    answer: (
      <span>
        The registration fee is <strong className="text-emerald-400 font-semibold">₹150 per participant</strong>.
      </span>
    )
  },
  {
    id: 3,
    question: "How many events can I participate in?",
    answer: (
      <span>
        Each participant can register for all events. <span className="text-amber-300 font-medium block mt-1">(NOTE: The finals of Quiz and Hardware Expo will happen on 9/9/26 at the same time).</span>
      </span>
    )
  },
  {
    id: 4,
    question: "Can I participate in both Quiz and Hardware Expo?",
    answer: (
      <span>
        No. <strong className="text-white">Quiz and Hardware Expo will be conducted simultaneously</strong> on the main day, so participants must choose prudently between them.
      </span>
    )
  },
  {
    id: 5,
    question: "Can I participate as a solo participant?",
    answer: (
      <span>
        No Solo Participation is allowed. All events must be attended with the <strong className="text-cyan-300">required number of team members</strong> specified for each arena.
      </span>
    )
  },
  {
    id: 6,
    question: "When will the preliminary rounds be conducted?",
    answer: (
      <span>
        The preliminary rounds of various events are scheduled starting from <strong className="text-emerald-400">31 August 2026</strong>.
      </span>
    )
  },
  {
    id: 7,
    question: "When is the main event?",
    answer: (
      <span>
        The TECHGENIO 2K26 grand finale celebration will be held on <strong className="text-amber-400">9 September 2026</strong> (National Engineers' Day).
      </span>
    )
  },
  {
    id: 8,
    question: "Are there any fun events?",
    answer: (
      <span>
        Yes! Multiple fun events and interactive spot challenges will be conducted on the <strong className="text-cyan-400">morning of 9 September</strong> and will be open to all registered participants.
      </span>
    )
  },
  {
    id: 9,
    question: "How will I receive event updates and instructions?",
    answer: (
      <span>
        Registered participants will be added to the <strong className="text-emerald-400">official TECHGENIO WhatsApp group</strong>, where schedules, instructions, venue details, and real-time announcements will be shared.
      </span>
    )
  },
  {
    id: 10,
    question: "Can I change my selected events after registration?",
    answer: "Participants are strongly advised to choose their events carefully before submitting the registration form. Any change requests after submission will be subject to organizer approval."
  },
  {
    id: 11,
    question: "Where will TECHGENIO 2K26 be conducted?",
    answer: (
      <span>
        The event will be conducted on-campus at <strong className="text-white">K.L.N. College of Engineering (Pottapalayam, Madurai)</strong>. Specific halls and laboratories for individual events will be communicated to registered participants.
      </span>
    )
  },
  {
    id: 12,
    question: "Whom should I contact if I have any queries?",
    answer: "You can contact the TECHGENIO organizing committee through the official contact numbers provided on the website or directly via the official WhatsApp group."
  }
];

export default function FaqSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative bg-transparent py-20 md:py-28 px-4 sm:px-6 overflow-hidden border-t border-white/10">
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass text-white/60 text-xs tracking-widest uppercase mb-4 font-mono border border-white/10">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-4 font-normal">
            Frequently Asked <span className="font-serif italic text-white/70">Questions</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            Everything you need to know about eligibility, event schedules, team limits, and registration for TechGenio 2K26.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqsData.map((faq, idx) => {
            const isOpen = openId === faq.id;
            const numberFormatted = faq.id < 10 ? `0${faq.id}` : faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.45, delay: 0.04 * idx }}
                className={`liquid-glass rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-emerald-500/40 bg-neutral-950/80 shadow-lg shadow-emerald-950/20'
                    : 'border-white/10 hover:border-white/20 bg-neutral-950/40'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 sm:px-6 flex items-center justify-between gap-4 text-left transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                    <span className={`text-xs sm:text-sm font-mono font-bold transition-colors ${
                      isOpen ? 'text-emerald-400' : 'text-white/40'
                    }`}>
                      {numberFormatted}
                    </span>
                    <h3 className={`text-sm sm:text-base md:text-lg font-semibold tracking-tight transition-colors ${
                      isOpen ? 'text-white' : 'text-white/85'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-transform duration-300 shrink-0 ${
                    isOpen
                      ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400 rotate-180'
                      : 'bg-white/5 border-white/10 text-white/60'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/5 ml-7 sm:ml-9">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
