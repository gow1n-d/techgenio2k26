/**
 * TECHGENIO 2K26 — CENTRAL DATA & CONFIGURATION
 * -----------------------------------------------------------
 * Single source of truth for TechGenio 2K26 Engineers' Day Celebration
 */

import neuroPulseBrochure from '../assets/brochures/neuro-pulse-brochure.jpeg';
import funEventsBrochure from '../assets/brochures/fun-events-brochure.jpeg';
import pitchupBrochure from '../assets/brochures/pitchup-brochure.jpeg';
import pitchupThemes from '../assets/brochures/pitchup-themes.jpeg';
import bugVerseBrochure from '../assets/brochures/bug-verse-brochure.jpeg';
import codeForgeBrochure from '../assets/brochures/code-forge-brochure.jpeg';
import techxpoBrochure from '../assets/brochures/techxpo-brochure.jpeg';

export const REGISTRATION_URL = "https://forms.gle/xCnKSrtyqEJFAXcD8";
export const INSTAGRAM_URL = "https://www.instagram.com/klnce_irp_official?igsi=MTI2cmNvYW56cjgwaQ==";
export const INSTAGRAM_HANDLE = "@klnce_irp_official";

export const contactCoordinators = [
  {
    role: "Student President",
    name: "Mr. NK Aravindh",
    phone: "9345281586",
    formattedPhone: "+91 93452 81586",
    badgeColor: "bg-emerald-400/10 text-emerald-300 border-emerald-400/30",
    accentColor: "text-emerald-400",
    glowColor: "hover:border-emerald-500/40",
    waMessage: "Hi Mr. NK Aravindh, I have a query regarding TechGenio 2K26 registration/events."
  },
  {
    role: "Student Vice President",
    name: "Mr. B.M. Gowind",
    phone: "9629088585",
    formattedPhone: "+91 96290 88585",
    badgeColor: "bg-cyan-400/10 text-cyan-300 border-cyan-400/30",
    accentColor: "text-cyan-400",
    glowColor: "hover:border-cyan-500/40",
    waMessage: "Hi Mr. B.M. Gowind, I have a query regarding TechGenio 2K26 registration/events."
  },
  {
    role: "Student Secretary",
    name: "Mr. P.R.K. Vipinayan",
    phone: "8438634334",
    formattedPhone: "+91 84386 34334",
    badgeColor: "bg-amber-400/10 text-amber-300 border-amber-400/30",
    accentColor: "text-amber-400",
    glowColor: "hover:border-amber-500/40",
    waMessage: "Hi Mr. P.R.K. Vipinayan, I have a query regarding TechGenio 2K26 registration/events."
  }
];

export const CONFIG = {
  REGISTRATION_URL: "https://forms.gle/xCnKSrtyqEJFAXcD8",
  INSTAGRAM_URL: "https://www.instagram.com/klnce_irp_official?igsi=MTI2cmNvYW56cjgwaQ==",
  INSTAGRAM_HANDLE: "@klnce_irp_official",
  EVENT_NAME: "TECHGENIO 2K26",
  EVENT_TYPE: "ENGINEERS' DAY CELEBRATION",
  INSTITUTION: "K.L.N. COLLEGE OF ENGINEERING",
  INSTITUTION_TAGLINE: "An Autonomous Institution | Pottapalayam, Madurai - 630612",
  ORGANIZING_BODIES: "IIC × IRP under QC-IR",
  MAIN_DATE: "09 September 2026",
  DATE_RANGE: "31 August 2026 – 09 September 2026",
  CONTACT_PHONE_PRESIDENT: "9345281586",
  CONTACT_PHONE_VICE_PRESIDENT: "9629088585",
  CONTACT_PHONE_SECRETARY: "8438634334"
};

export const eventShowcase = [
  {
    id: "techxpo",
    number: "01",
    name: "TECHXPO",
    category: "Hardware Expo",
    tagline: "Engineering Hardware & Prototype Exhibition",
    description: "Showcase innovative hardware projects, working prototypes, embedded automation systems, robotics, and physical engineering solutions.",
    motif: "Hardware circuit · PCB · Components · Prototype",
    stage: "09 SEP · MAIN DAY EXPO",
    image: "/techxpo.png",
    brochure: techxpoBrochure,
    badgeColor: "bg-amber-400/10 text-amber-300 border-amber-400/30",
    accentColor: "text-amber-400"
  },
  {
    id: "neuro-pulse",
    number: "02",
    name: "NEURO PULSE",
    category: "Technical Quiz",
    tagline: "Neural Ignition · Mind Matrix · Neuro Nexus",
    description: "A high-octane 3-tier technology quiz testing aptitude, visual memory, logical deduction, and collaborative technical acumen.",
    motif: "Neural Ignition · Mind Matrix · Neuro Nexus",
    stage: "31 AUG (R1) · 07 SEP (R2) · 09 SEP (FINAL)",
    brochure: neuroPulseBrochure,
    rounds: [
      {
        round: "Round 1 (Qualifier) · 31 August 2026",
        title: "Qualifier: Neural Ignition",
        desc: "Aptitude, basic technical, and logical reasoning questions to screen and seed top quiz teams."
      },
      {
        round: "Round 2 (Eliminator) · 07 September 2026 (Half Day)",
        title: "Eliminator: Mind Matrix",
        desc: "Picture-based round testing visual memory, tech/circuit identification, and rapid reasoning under time pressure."
      },
      {
        round: "Round 3 (Final) · 09 September 2026 (Main Day)",
        title: "Final: Neuro Nexus",
        desc: "Grand team-based technical quiz championship conducted live on the main celebration stage."
      }
    ],
    image: "/neuro-pulse.png",
    badgeColor: "bg-purple-400/10 text-purple-300 border-purple-400/30",
    accentColor: "text-purple-400"
  },
  {
    id: "code-forge",
    number: "03",
    name: "CODE FORGE",
    category: "Software Hackathon",
    tagline: "Code Clash (R1) · Signal Lost (R2 Final)",
    description: "A premier 2-stage software development challenge: Round 1 'CODE CLASH' (Bid. Risk. Code. Win.) & Round 2 'SIGNAL LOST' (Afternoon 3-member team communication & development arena).",
    motif: "TechCoins bidding · Team architecture · Signal deduction",
    stage: "01 SEP (R1) · 08 SEP (R2 · AFTERNOON)",
    brochure: codeForgeBrochure,
    rounds: [
      {
        round: "Round 1 · 01 September 2026",
        title: "CODE CLASH — Bid. Risk. Code. Win.",
        desc: "A high-stakes team coding challenge where teams bid TechCoins for unseen problems and race to solve them within the time limit. Bid smart, code fast, manage the risk, and win."
      },
      {
        round: "Round 2 · 08 September 2026 (Afternoon Session / Half-Day)",
        title: "SIGNAL LOST",
        desc: "A 3-member team challenge where communication, development, and testing determine how accurately the team can turn an incomplete understanding into the right solution."
      }
    ],
    image: "/code-forge.png",
    badgeColor: "bg-cyan-400/10 text-cyan-300 border-cyan-400/30",
    accentColor: "text-cyan-400"
  },
  {
    id: "bug-verse",
    number: "04",
    name: "BUG VERSE",
    category: "Code Debugging",
    tagline: "Think. Debug. Fix. Win!",
    description: "BugVerse is an exciting coding challenge that tests your programming knowledge, logical thinking, and debugging skills. The best debugger will be crowned the BugVerse Winner!",
    motif: "30 Questions (C/Java/Python) · 10 Error Programs",
    stage: "31 AUG (PRELIMS) · 07 SEP (FINAL)",
    brochure: bugVerseBrochure,
    rounds: [
      {
        round: "Round 1 · 31 August 2026",
        title: "Round 1: Programming Challenge",
        desc: "30 questions covering C, Java, and Python, including MCQs, Fill in the Blanks, and Error Identification."
      },
      {
        round: "Round 2 · 07 September 2026 (Half Day)",
        title: "Round 2: Debugging Challenge (Final)",
        desc: "Qualifiers log in to the provided website and debug 10 error-filled programs within the given time. Think. Debug. Fix. Win!"
      }
    ],
    image: "/bug-verse.png",
    badgeColor: "bg-rose-400/10 text-rose-300 border-rose-400/30",
    accentColor: "text-rose-400"
  },
  {
    id: "pitchup",
    number: "05",
    name: "PITCHUP",
    category: "Idea Presentation",
    tagline: "Innovation Pitching & Venture Communication",
    description: "Participants present innovative engineering concepts, startup blueprints, and practical solutions convincingly before an expert jury.",
    motif: "Lightbulb · Presentation screen · Startup pitch",
    stage: "02 SEP · FULL DAY SPRINT",
    brochure: pitchupBrochure,
    themesImage: pitchupThemes,
    image: "/pitchup.png",
    badgeColor: "bg-emerald-400/10 text-emerald-300 border-emerald-400/30",
    accentColor: "text-emerald-400"
  },
  {
    id: "fun-events",
    number: "06",
    name: "Multiple Fun Events",
    category: "Main-Day Specials",
    tagline: "Engaging Challenges & Interactive Activities",
    description: "A collection of quick challenges, engaging activities and fun events happening throughout the main day of TechGenio 2K26.",
    motif: "Spot challenges · Interactive games · Main-day excitement",
    stage: "09 SEP · MAIN DAY SPECIAL",
    brochure: funEventsBrochure,
    image: "/fun-events.png",
    badgeColor: "bg-indigo-400/10 text-indigo-300 border-indigo-400/30",
    accentColor: "text-indigo-400"
  }
];

export const timelineData = [
  {
    date: "31 AUG 2026",
    day: "Monday",
    badge: "PRELIMS",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    events: [
      { 
        name: "QUIZ: NEURAL IGNITION (Round 1 Qualifier)", 
        stage: "Round 1 · FN", 
        desc: "Aptitude, basic technical, and logical reasoning questions to screen and seed top quiz teams." 
      },
      { 
        name: "BUGVERSE: PROGRAMMING CHALLENGE (Round 1)", 
        stage: "Prelims · FN", 
        desc: "30 questions covering C, Java, and Python (MCQs, Fill in the Blanks, and Error Identification)." 
      }
    ]
  },
  {
    date: "01 SEP 2026",
    day: "Tuesday",
    badge: "HACKATHON R1",
    badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-200",
    events: [
      { 
        name: "SOFTWARE HACKATHON: CODE CLASH (Round 1)", 
        stage: "Round 1 · 01 SEP", 
        desc: "A high-stakes team coding challenge where teams bid TechCoins for unseen problems and race to solve them within the time limit. Bid smart, code fast, manage the risk, and win." 
      }
    ]
  },
  {
    date: "02 SEP 2026",
    day: "Wednesday",
    badge: "IDEA PITCHING",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    events: [
      { 
        name: "IDEA PITCHING (PitchUp)", 
        stage: "Full Day · 02 SEP", 
        desc: "Presentation of innovative project blueprints, startup concepts, and prototypes before jury." 
      }
    ]
  },
  {
    date: "03 – 06 SEP 2026",
    day: "Thu – Sun",
    badge: "DEVELOPMENT BUFFER",
    badgeColor: "bg-neutral-100 text-neutral-600 border-neutral-200",
    events: [
      { name: "NO EVENT (Preparation Window)", stage: "Schedule Gap", desc: "Technical buffer window for project builds, team synchronization, and prototype refinement." }
    ]
  },
  {
    date: "07 SEP 2026",
    day: "Monday",
    badge: "FINALS SPRINT",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    events: [
      { 
        name: "BUGVERSE: DEBUGGING CHALLENGE (Round 2 Final)", 
        stage: "FINAL · Half Day", 
        desc: "Qualifiers log in to the provided platform and debug 10 error-filled programs within the given time limit. Think. Debug. Fix. Win!" 
      },
      { 
        name: "QUIZ: MIND MATRIX (Round 2 Eliminator)", 
        stage: "Round 2 · Half Day", 
        desc: "Picture-based round testing visual memory, tech/circuit identification, and rapid deduction under time pressure." 
      }
    ]
  },
  {
    date: "08 SEP 2026",
    day: "Tuesday",
    badge: "HACKATHON FINALE (AFTERNOON)",
    badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-200",
    events: [
      { 
        name: "SOFTWARE HACKATHON: SIGNAL LOST (Round 2 Final)", 
        stage: "FINAL · Afternoon Session / Half-Day", 
        desc: "A 3-member team challenge where communication, development, and testing determine how accurately the team can turn an incomplete understanding into the right solution." 
      }
    ]
  },
  {
    date: "09 SEP 2026",
    day: "Wednesday",
    badge: "★ MAIN DAY CELEBRATION",
    badgeColor: "bg-amber-500 text-white border-amber-600 font-bold",
    isMainDay: true,
    events: [
      { name: "HARDWARE (TechXpo)", stage: "Project Expo · Full Day", desc: "Grand exhibition of physical engineering hardware prototypes, IoT systems, and robotics." },
      { name: "QUIZ: NEURO NEXUS (Grand Championship Finale)", stage: "Grand Finale", desc: "High-stakes final team-based technical quiz championship conducted live on the main celebration stage." },
      { name: "MULTIPLE FUN EVENTS", stage: "Throughout Main Day", desc: "Engaging quick-fire challenges, interactive tech games, and main-day special activities." }
    ]
  }
];

/**
 * Organizers & Patrons in Institutional Hierarchy
 * Order requirement: Principal -> Dr. S. Parthasarathy -> Management & Co-Patrons -> Event Coordinator
 */
export const institutionalPatrons = [
  { role: "CHIEF PATRON", name: "Er. K. N. K. Karthik", designation: "President", tag: "Management" },
  { role: "CHIEF PATRON", name: "Dr. K. N. K. Ganesh", designation: "Secretary", tag: "Management" },
  { role: "PATRON", name: "Dr. A. V. Ram Prasad", designation: "Principal", tag: "Institution" },
  { role: "CONVENER", name: "Dr. S. Parthasarathy", designation: "QC-IR Head", tag: "QC-IR" },
  { role: "EVENT COORDINATOR", name: "Mr. R. Thangasankaran", designation: "IRP Coordinator", tag: "IRP" }
];

export const studentCommittee = [
  { role: "STUDENT PRESIDENT", name: "Mr. NK Aravindh", designation: "Student Executive President", phone: "9345281586", tag: "Student Committee" },
  { role: "STUDENT VICE PRESIDENT", name: "Mr. B.M. Gowind", designation: "Student Executive Vice President", phone: "9629088585", tag: "Student Committee" },
  { role: "STUDENT SECRETARY", name: "Mr. P.R.K. Vipinayan", designation: "Student Executive Secretary", phone: "8438634334", tag: "Student Committee" },
  { role: "TREASURER", name: "Nehasri M S & Sindhamani V", designation: "Student Executive Treasurers", tag: "Student Committee" },
  { role: "ORGANIZING COMMITTEE", name: "IRP Aspirants", designation: "Event Organizing Team", tag: "Organizing Body" }
];

export const organizersList = [
  ...institutionalPatrons,
  ...studentCommittee
];
