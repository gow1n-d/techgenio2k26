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
    tagline: "Battle of Technical Acumen & Quick Thinking",
    description: "A high-octane technology-focused quiz testing knowledge, technical awareness, engineering reasoning, algorithmic logic, and rapid problem-solving speed.",
    icon: "zap",
    visualMotif: "Neural nodes · Brain · Data points · Technical trivia",
    statusBadge: "3-STAGE CHALLENGE",
    scheduleNote: "31 AUG (R1) · 07 SEP (R2) · 09 SEP (Final)",
    color: "#A66CFF"
  },
  {
    id: "code-forge",
    number: "03",
    name: "CODE FORGE",
    category: "Software Hackathon",
    tagline: "Sprint Development & Architecture Arena",
    description: "A multi-stage software development challenge focused on building innovative technology solutions, web/cloud applications, and algorithmic prototypes under time constraints.",
    icon: "code",
    visualMotif: "Code · Terminal · Brackets · Digital grid · Binary logic",
    statusBadge: "2-STAGE SPRINT",
    scheduleNote: "02 SEP (Round 1) · 08 SEP (Final)",
    color: "#5CE1E6"
  },
  {
    id: "bug-verse",
    number: "04",
    name: "BUG VERSE",
    category: "Code Debugging",
    tagline: "Forensic Analysis & Syntax Rectification",
    description: "A precision debugging competition where participants identify, analyze, and fix logic, memory, algorithmic, and syntactic programming errors under timed conditions.",
    icon: "terminal",
    visualMotif: "Bug hunter · Error inspection · Terminal · Code fragments",
    statusBadge: "2-STAGE ARENA",
    scheduleNote: "31 AUG (Prelims) · 07 SEP (Final)",
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
    scheduleNote: "01 SEP 2026 (Full Day)",
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
        name: "QUIZ",
        eventCode: "neuro-pulse",
        stage: "Round 1",
        duration: "FN (Forenoon)",
        badgeType: "round1",
        description: "Preliminary screening round evaluating core technology concepts and speed reasoning."
      },
      {
        name: "CODE DEBUGGING",
        eventCode: "bug-verse",
        stage: "Prelims",
        duration: "FN (Forenoon)",
        badgeType: "prelims",
        description: "Round 1 debugging trial across C/C++, Java, and Python codebases."
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
        name: "IDEA PITCHING",
        eventCode: "pitchup",
        stage: "Full Sprint",
        duration: "Full Day",
        badgeType: "fullday",
        description: "Presentation of innovative hardware/software solutions and prototype blueprints before the jury."
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
        name: "SOFTWARE HACKATHON",
        eventCode: "code-forge",
        stage: "Round 1",
        duration: "Half Day",
        badgeType: "round1",
        description: "Phase 1 architecture blueprinting, repo initialization, and core feature prototyping."
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
        name: "CODE DEBUGGING",
        eventCode: "bug-verse",
        stage: "FINAL",
        duration: "Full Day",
        badgeType: "final",
        description: "High-pressure finals with complex asynchronous race conditions, memory leaks, and logic faults."
      },
      {
        name: "QUIZ",
        eventCode: "neuro-pulse",
        stage: "Round 2",
        duration: "Half Day",
        badgeType: "round2",
        description: "Semi-final round with audiovisual clues, circuit analysis, and rapid-fire buzzers."
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
        name: "SOFTWARE HACKATHON",
        eventCode: "code-forge",
        stage: "FINAL",
        duration: "Full Day",
        badgeType: "final",
        description: "Final 24h sprint deployment, live application hosting, code quality audit, and jury showcase."
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
        name: "HARDWARE",
        subName: "Project Expo",
        eventCode: "techxpo",
        stage: "MAIN DAY EXPO",
        duration: "Full Day Grand Showcase",
        badgeType: "mainday",
        description: "Grand exhibition of physical engineering hardware prototypes, IoT devices, robotics, and embedded innovations."
      },
      {
        name: "QUIZ",
        subName: "Final Round",
        eventCode: "neuro-pulse",
        stage: "GRAND FINALE",
        duration: "Championship Stage",
        badgeType: "mainday",
        description: "Top qualifying teams battle on the auditorium stage for the championship trophy and honors."
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
