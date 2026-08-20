/**
 * TECHGENIO 2K26 — CENTRAL DATA & CONFIGURATION
 * -----------------------------------------------------------
 * Single source of truth for TechGenio 2K26 Engineers' Day Celebration
 */

export const REGISTRATION_URL = "https://forms.gle/qcKEv7iHQ3k7cxVm7";

export const CONFIG = {
  REGISTRATION_URL: "https://forms.gle/qcKEv7iHQ3k7cxVm7",
  EVENT_NAME: "TECHGENIO 2K26",
  EVENT_TYPE: "ENGINEERS' DAY CELEBRATION",
  INSTITUTION: "K.L.N. COLLEGE OF ENGINEERING",
  INSTITUTION_TAGLINE: "An Autonomous Institution | Pottapalayam, Madurai - 630612",
  ORGANIZING_BODIES: "IIC × IRP under QC-IR",
  MAIN_DATE: "09 September 2026",
  DATE_RANGE: "31 August 2026 – 09 September 2026"
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
    badgeColor: "bg-amber-400/10 text-amber-300 border-amber-400/30",
    accentColor: "text-amber-400"
  },
  {
    id: "neuro-pulse",
    number: "02",
    name: "NEURO PULSE",
    category: "Technical Quiz",
    tagline: "Battle of Technical Acumen & Quick Thinking",
    description: "A high-octane technology quiz testing knowledge, engineering reasoning, algorithmic logic, and rapid deduction across preliminary and final rounds.",
    motif: "Neural nodes · Data points · Technical trivia",
    stage: "31 AUG (R1) · 07 SEP (R2) · 09 SEP (FINAL)",
    badgeColor: "bg-purple-400/10 text-purple-300 border-purple-400/30",
    accentColor: "text-purple-400"
  },
  {
    id: "code-forge",
    number: "03",
    name: "CODE FORGE",
    category: "Software Hackathon",
    tagline: "Sprint Development & Architecture Arena",
    description: "A multi-stage software development challenge focused on building innovative web, cloud, and algorithmic solutions under sprint conditions.",
    motif: "Code · Terminal · Brackets · Binary logic",
    stage: "02 SEP (R1) · 08 SEP (FINAL)",
    badgeColor: "bg-cyan-400/10 text-cyan-300 border-cyan-400/30",
    accentColor: "text-cyan-400"
  },
  {
    id: "bug-verse",
    number: "04",
    name: "BUG VERSE",
    category: "Code Debugging",
    tagline: "Forensic Analysis & Syntax Rectification",
    description: "A precision debugging competition where participants identify, analyze, and fix logic, concurrency, and syntactic programming errors.",
    motif: "Bug hunter · Error inspection · Code fragments",
    stage: "31 AUG (PRELIMS) · 07 SEP (FINAL)",
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
    stage: "01 SEP · FULL DAY SPRINT",
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
      { name: "QUIZ (Neuro Pulse)", stage: "Round 1 · FN", desc: "Forenoon preliminary screening round testing technical acumen and speed logic." },
      { name: "CODE DEBUGGING (Bug Verse)", stage: "Prelims · FN", desc: "Round 1 syntax error detection and logic fault-finding trial." }
    ]
  },
  {
    date: "01 SEP 2026",
    day: "Tuesday",
    badge: "FULL SPRINT",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    events: [
      { name: "IDEA PITCHING (PitchUp)", stage: "Full Day", desc: "Presentation of innovative project blueprints, startup concepts, and prototypes before jury." }
    ]
  },
  {
    date: "02 SEP 2026",
    day: "Wednesday",
    badge: "HACKATHON R1",
    badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-200",
    events: [
      { name: "SOFTWARE HACKATHON (Code Forge)", stage: "Round 1 · Half Day", desc: "Phase 1 software sprint, architecture modeling, and baseline prototype development." }
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
      { name: "CODE DEBUGGING (Bug Verse)", stage: "FINAL · Full Day", desc: "High-stakes final debugging round resolving complex algorithmic concurrency bugs." },
      { name: "QUIZ (Neuro Pulse)", stage: "Round 2 · Half Day", desc: "Semi-final speed buzzer round and advanced engineering trivia." }
    ]
  },
  {
    date: "08 SEP 2026",
    day: "Tuesday",
    badge: "HACKATHON FINALE",
    badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-200",
    events: [
      { name: "SOFTWARE HACKATHON (Code Forge)", stage: "FINAL · Full Day", desc: "Final 24h sprint deployment, live application demo, and code quality audit." }
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
      { name: "QUIZ (Neuro Pulse)", stage: "Grand Finale", desc: "Championship stage round conducted before the Engineers' Day assembly (Alternative Track)." },
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
  { role: "PRESIDENT", name: "Aravindh N K", designation: "Student Executive President", tag: "Student Committee" },
  { role: "VICE PRESIDENT", name: "Gowind B M", designation: "Student Executive Vice President", tag: "Student Committee" },
  { role: "SECRETARY", name: "Vipinayan P R K", designation: "Student Executive Secretary", tag: "Student Committee" },
  { role: "TREASURER", name: "Nehasri M S & Sindhamani V", designation: "Student Executive Treasurers", tag: "Student Committee" },
  { role: "ORGANIZING COMMITTEE", name: "IRP Aspirants", designation: "Event Organizing Team", tag: "Organizing Body" }
];

export const organizersList = [
  ...institutionalPatrons,
  ...studentCommittee
];
