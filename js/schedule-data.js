/**
 * TECHGENIO 2K26 — EVENT SHOWCASE & SCHEDULE DATASET
 * -----------------------------------------------------------
 * Factual dataset strictly based on the TechGenio 2K26 official schedule.
 */

export const eventsShowcase = [
  {
    id: "techxpo",
    number: "01",
    name: "TECHXPO",
    category: "Hardware Expo",
    tagline: "Engineering Hardware & Prototype Exhibition",
    description: "Showcase innovative hardware projects, working prototypes, embedded systems, robotics, and engineering solutions to industry experts and academic evaluators.",
    icon: "cpu",
    visualMotif: "Hardware circuit · PCB · Components · Engineering prototype",
    statusBadge: "MAIN DAY EXHIBIT",
    scheduleNote: "09 SEP 2026 (Main Day Alternative)",
    color: "#4C9DFF"
  },
  {
    id: "neuro-pulse",
    number: "02",
    name: "NEURO PULSE",
    category: "Technical Quiz",
    tagline: "Neural Ignition · Mind Matrix · Neuro Nexus",
    description: "A high-octane 3-tier technology quiz testing aptitude, visual memory, logical deduction, and collaborative technical acumen.",
    icon: "zap",
    visualMotif: "Neural Ignition · Mind Matrix · Neuro Nexus",
    statusBadge: "3-STAGE CHALLENGE",
    scheduleNote: "31 AUG (R1) · 07 SEP (R2) · 09 SEP (Final)",
    color: "#A66CFF"
  },
  {
    id: "code-forge",
    number: "03",
    name: "CODE FORGE",
    category: "Software Hackathon",
    tagline: "Code Clash (R1) · Signal Lost (R2 Final)",
    description: "A premier 2-stage software development challenge: Round 1 'CODE CLASH' (Bid. Risk. Code. Win.) & Round 2 'SIGNAL LOST' (Afternoon 3-member team communication & development arena).",
    icon: "code",
    visualMotif: "Code · Terminal · Brackets · Digital grid · Binary logic",
    statusBadge: "2-STAGE SPRINT",
    scheduleNote: "01 SEP (Round 1) · 08 SEP (Afternoon Final)",
    color: "#5CE1E6"
  },
  {
    id: "bug-verse",
    number: "04",
    name: "BUG VERSE",
    category: "Code Debugging",
    tagline: "Think. Debug. Fix. Win!",
    description: "BugVerse is an exciting coding challenge that tests your programming knowledge, logical thinking, and debugging skills. The best debugger will be crowned the BugVerse Winner!",
    icon: "terminal",
    visualMotif: "30 Questions (C/Java/Python) · 10 Error Programs",
    statusBadge: "2-STAGE ARENA",
    scheduleNote: "31 AUG (Prelims) · 07 SEP (Half-Day Final)",
    color: "#FF5C7A"
  },
  {
    id: "pitchup",
    number: "05",
    name: "PITCHUP",
    category: "Idea Presentation",
    tagline: "Innovation Pitching & Venture Communication",
    description: "Participants present breakthrough engineering ideas, startup concepts, and technology solutions clearly and convincingly to an expert panel of evaluators.",
    icon: "lightbulb",
    visualMotif: "Lightbulb · Presentation screen · Idea nodes · Startup pitch",
    statusBadge: "FULL DAY SPRINT",
    scheduleNote: "02 SEP 2026 (Full Day)",
    color: "#FFB020"
  }
];

export const timelineSchedule = [
  {
    date: "2026-08-31",
    displayDate: "31 AUG 2026",
    dayName: "Monday",
    isMainDay: false,
    hasEvent: true,
    events: [
      {
        name: "QUIZ: NEURAL IGNITION",
        eventCode: "neuro-pulse",
        stage: "Round 1 (Qualifier)",
        duration: "FN (Forenoon)",
        badgeType: "round1",
        description: "Aptitude, basic technical, and logical reasoning questions to screen and seed top quiz teams."
      },
      {
        name: "BUGVERSE: PROGRAMMING CHALLENGE",
        eventCode: "bug-verse",
        stage: "Round 1",
        duration: "FN (Forenoon)",
        badgeType: "prelims",
        description: "30 questions covering C, Java, and Python, including MCQs, Fill in the Blanks, and Error Identification."
      }
    ]
  },
  {
    date: "2026-09-01",
    displayDate: "01 SEP 2026",
    dayName: "Tuesday",
    isMainDay: false,
    hasEvent: true,
    events: [
      {
        name: "SOFTWARE HACKATHON: CODE CLASH",
        eventCode: "code-forge",
        stage: "Round 1",
        duration: "Round 1 · 01 SEP",
        badgeType: "round1",
        description: "A high-stakes team coding challenge where teams bid TechCoins for unseen problems and race to solve them within the time limit. Bid smart, code fast, manage the risk, and win."
      }
    ]
  },
  {
    date: "2026-09-02",
    displayDate: "02 SEP 2026",
    dayName: "Wednesday",
    isMainDay: false,
    hasEvent: true,
    events: [
      {
        name: "IDEA PITCHING (PitchUp)",
        eventCode: "pitchup",
        stage: "Full Sprint",
        duration: "Full Day",
        badgeType: "fullday",
        description: "Presentation of innovative project blueprints, startup concepts, and prototypes before jury."
      }
    ]
  },
  {
    date: "2026-09-03",
    displayDate: "03 SEP 2026",
    dayName: "Thursday",
    isMainDay: false,
    hasEvent: false,
    events: [
      {
        name: "NO EVENT",
        stage: "Schedule Gap",
        duration: "Preparation & Development Buffer",
        badgeType: "noevent",
        description: "Technical buffer window for project builds, team synchronization, and prototype refinement."
      }
    ]
  },
  {
    date: "2026-09-04",
    displayDate: "04 SEP 2026",
    dayName: "Friday",
    isMainDay: false,
    hasEvent: false,
    events: [
      {
        name: "NO EVENT",
        stage: "Schedule Gap",
        duration: "Preparation & Development Buffer",
        badgeType: "noevent",
        description: "Technical buffer window for project builds, team synchronization, and prototype refinement."
      }
    ]
  },
  {
    date: "2026-09-05",
    displayDate: "05 SEP 2026",
    dayName: "Saturday",
    isMainDay: false,
    hasEvent: false,
    events: [
      {
        name: "NO EVENT",
        stage: "Schedule Gap",
        duration: "Preparation & Development Buffer",
        badgeType: "noevent",
        description: "Technical buffer window for project builds, team synchronization, and prototype refinement."
      }
    ]
  },
  {
    date: "2026-09-06",
    displayDate: "06 SEP 2026",
    dayName: "Sunday",
    isMainDay: false,
    hasEvent: false,
    events: [
      {
        name: "NO EVENT",
        stage: "Schedule Gap",
        duration: "Preparation & Development Buffer",
        badgeType: "noevent",
        description: "Technical buffer window for project builds, team synchronization, and prototype refinement."
      }
    ]
  },
  {
    date: "2026-09-07",
    displayDate: "07 SEP 2026",
    dayName: "Monday",
    isMainDay: false,
    hasEvent: true,
    events: [
      {
        name: "BUGVERSE: DEBUGGING CHALLENGE",
        eventCode: "bug-verse",
        stage: "Round 2 (Final)",
        duration: "Half Day",
        badgeType: "final",
        description: "Qualifiers log in to the provided website and debug 10 error-filled programs within the given time. Think. Debug. Fix. Win!"
      },
      {
        name: "QUIZ: MIND MATRIX",
        eventCode: "neuro-pulse",
        stage: "Round 2 (Eliminator)",
        duration: "Half Day",
        badgeType: "round2",
        description: "Picture-based round testing visual memory, tech/circuit identification, and rapid deduction under time pressure."
      }
    ]
  },
  {
    date: "2026-09-08",
    displayDate: "08 SEP 2026",
    dayName: "Tuesday",
    isMainDay: false,
    hasEvent: true,
    events: [
      {
        name: "SOFTWARE HACKATHON: SIGNAL LOST",
        eventCode: "code-forge",
        stage: "FINAL",
        duration: "Afternoon Session / Half-Day",
        badgeType: "final",
        description: "A 3-member team challenge where communication, development, and testing determine how accurately the team can turn an incomplete understanding into the right solution."
      }
    ]
  },
  {
    date: "2026-09-09",
    displayDate: "09 SEP 2026",
    dayName: "Wednesday",
    isMainDay: true,
    hasEvent: true,
    isAlternative: true,
    events: [
      {
        name: "HARDWARE (TechXpo)",
        subName: "Project Expo",
        eventCode: "techxpo",
        stage: "MAIN DAY EXPO",
        duration: "Full Day Grand Showcase",
        badgeType: "mainday",
        description: "Grand exhibition of physical engineering hardware prototypes, IoT devices, robotics, and embedded innovations."
      },
      {
        name: "QUIZ: NEURO NEXUS",
        subName: "Final Championship Round",
        eventCode: "neuro-pulse",
        stage: "GRAND FINALE",
        duration: "Championship Stage",
        badgeType: "mainday",
        description: "High-stakes final team-based technical quiz championship conducted live on the main celebration stage."
      }
    ]
  }
];

export const whyParticipateBenefits = [
  {
    id: "build",
    title: "BUILD",
    tagline: "Prototype to Deployment",
    desc: "Turn classroom theories and paper concepts into functional, testable engineering hardware and software demonstrations.",
    icon: "hammer"
  },
  {
    id: "think",
    title: "THINK",
    tagline: "Algorithmic & Technical Acumen",
    desc: "Challenge your technical knowledge, analytical reasoning, and rapid deduction against top engineering minds across colleges.",
    icon: "brain"
  },
  {
    id: "code",
    title: "CODE",
    tagline: "Software Craftsmanship",
    desc: "Architect scalable software products, build full-stack solutions, and deploy working applications within intense sprint windows.",
    icon: "code-xml"
  },
  {
    id: "debug",
    title: "DEBUG",
    tagline: "Precision Problem Solving",
    desc: "Perform root-cause analysis on complex software and logic failures under real-world time and accuracy constraints.",
    icon: "search-code"
  },
  {
    id: "pitch",
    title: "PITCH",
    tagline: "Impact & Communication",
    desc: "Articulate your innovation's technical value proposition, market impact, and feasibility convincingly to academic and industry jurors.",
    icon: "presentation"
  }
];
