# TECHGENIO 2K26 — COMPLETE STATIC WEBSITE MASTER PROMPT

## ROLE

Act as a senior frontend architect, UI/UX designer, motion designer, accessibility engineer, and performance-focused web developer.

Your task is to design and build a **complete, production-ready, fully animated static website** for **TECHGENIO 2K26**, an Engineers Day celebration conducted at **K.L.N. College of Engineering**.

The website must use **only frontend technologies**.

### Mandatory technology constraints

Use:

- HTML5
- CSS3
- Vanilla JavaScript

Optional lightweight frontend libraries are permitted only when they provide clear value. Prefer native browser APIs such as:

- Intersection Observer
- CSS animations
- CSS transitions
- Web Animations API

Do NOT implement:

- Backend
- Database
- Authentication
- User accounts
- API endpoints
- Server-side rendering
- CMS
- Payment system
- Real-time collaboration
- AI backend
- Registration database

The website is a **static event information and registration website**.

Registration must redirect users to an external registration platform such as Google Forms or another URL.

---

# 1. PROJECT IDENTITY

## Event

**TECHGENIO 2K26**

## Event Type

**ENGINEER'S DAY CELEBRATION**

## Institution

**K.L.N. COLLEGE OF ENGINEERING**

## Organizing Bodies

**IIC — Institution's Innovation Council**

**IRP — Innovation Research Park**

under:

**QC-IR — Quality Circle - Industrial Relations**

## Main Event Date

**09 September 2026**

The supplied event poster and event schedule image are the primary sources for the event identity, official names, event names, and schedule. Use them as the source of truth rather than inventing event information.

The original specification establishes TechGenio as an Engineers Day technology celebration organized by IIC and IRP under QC-IR at K.L.N. College of Engineering.

---

# 2. DESIGN DIRECTION

Create a visual identity inspired by the supplied TechGenio poster.

The website should feel:

- Modern
- Technical
- Futuristic
- Professional
- Institutional
- Minimal
- Energetic
- Premium
- Student-friendly

Use the poster's visual language as inspiration, including:

- Technology blue
- Violet/purple accents
- Soft white/light backgrounds where appropriate
- Engineering motifs
- Circuit patterns
- Scientific symbols
- Digital grid elements
- Geometric lines
- Technical typography

Do NOT simply place the poster as the website background.

Instead:

> Transform the poster identity into a modern interactive digital experience.

The supplied specification explicitly states that the poster should inspire the design system rather than constrain the website layout.

---

# 3. CORE WEBSITE GOAL

The website must answer these questions immediately:

1. What is TechGenio?
2. What is the event about?
3. When is it happening?
4. Where is it happening?
5. Who organizes it?
6. What events are available?
7. When does each event happen?
8. How can a participant register?

The website should make registration extremely easy.

The visitor should never need to search around the website to find the registration button.

---

# 4. WEBSITE STRUCTURE

Create the following single-page architecture:

```text
TECHGENIO 2K26
│
├── Navigation
│
├── Hero
│
├── About TechGenio
│
├── Event Timeline
│
├── Events Showcase
│
├── Event Schedule
│
├── Why Participate
│
├── Event Experience / Highlights
│
├── Registration CTA
│
├── Officials & Organizers
│
└── Footer
```

Use smooth scrolling between all major sections.

---

# 5. NAVIGATION

Create a sticky responsive navigation bar.

Desktop:

```text
TECHGENIO 2K26

Home
About
Events
Schedule
Organizers

[ REGISTER NOW ]
```

Mobile:

```text
TECHGENIO
        ☰
```

Open a fullscreen or elegant mobile navigation panel.

Navigation requirements:

- Sticky header
- Transparent initially
- Glass/blur background after scrolling
- Smooth transitions
- Active section indication
- Keyboard accessible
- Touch-friendly
- Registration button always visually prominent

---

# 6. HERO SECTION

Create a visually powerful opening section.

Display:

### ENGINEER'S DAY CELEBRATION

# TECHGENIO

## 2K26

Then:

**K.L.N. COLLEGE OF ENGINEERING**

Organized by:

**IIC × IRP**

under:

**QC-IR**

Create a short supporting statement:

> Engineering. Innovation. Technology. Competition. Creativity.

Primary CTA:

**REGISTER NOW ↗**

Secondary CTA:

**EXPLORE EVENTS ↓**

---

# 7. HERO ANIMATION

Implement an elegant page-load sequence.

Animation order:

```text
Background grid
       ↓
Circuit elements
       ↓
Engineer’s Day label
       ↓
TECHGENIO
       ↓
2K26
       ↓
Description
       ↓
CTA buttons
       ↓
Organizer identity
```

Use:

- Fade-in
- Slide-up
- Scale
- Stagger
- Blur-to-sharp transitions
- Subtle circuit animation

Do not use excessive animation.

The hero should feel premium, not like a game loading screen.

---

# 8. ABOUT SECTION

Create an informative section titled:

## ABOUT TECHGENIO 2K26

Explain that TechGenio is an Engineers Day celebration focused on:

- Engineering
- Innovation
- Technology
- Competition
- Creativity

Explain the role of:

### IIC

Institution's Innovation Council

### IRP

Innovation Research Park

### QC-IR

Quality Circle - Industrial Relations

Use a visual relationship:

```text
             TECHGENIO 2K26
                    │
        ┌───────────┼───────────┐
        │           │           │
       IIC         IRP        QC-IR
        │           │           │
   Innovation    Research    Industry
    Council        Park      Relations
```

---

# 9. MOST IMPORTANT ADDITION: EVENT TIMELINE

Create a visually engaging **TechGenio Event Timeline** using the exact schedule from the supplied handwritten schedule image.

Do NOT invent dates or timings.

Use the following event schedule.

---

## 31 AUGUST 2026

### QUIZ

**Round 1**

Duration:

**FN / Forenoon**

Display as:

```text
31 AUG 2026
│
├── QUIZ
│   └── Round 1 · FN
│
└── CODE DEBUGGING
    └── FN
```

### CODE DEBUGGING

**FN / Forenoon**

---

# 10. 01 SEPTEMBER 2026

### IDEA PITCHING

Duration:

**Full Day**

Display:

```text
01 SEP 2026

IDEA PITCHING
FULL DAY
```

Use a presentation/lightbulb/innovation visual.

---

# 11. 02 SEPTEMBER 2026

### SOFTWARE HACKATHON

**Round 1**

Duration:

**Half Day**

Display:

```text
02 SEP 2026

SOFTWARE HACKATHON
ROUND 1
HALF DAY
```

Use code/terminal/developer visuals.

---

# 12. 03, 04, 05 AND 06 SEPTEMBER 2026

These dates have:

**NO EVENT**

Do not hide this information.

Represent the gap elegantly within the timeline.

Example:

```text
03 SEP
NO EVENT

04 SEP
NO EVENT

05 SEP
NO EVENT

06 SEP
NO EVENT
```

Use a quieter visual treatment so visitors understand these are schedule gaps.

---

# 13. 07 SEPTEMBER 2026

Two events occur.

### CODE DEBUGGING

**FINAL**

Duration:

**Full Day**

### QUIZ

**Round 2**

Duration:

**Half Day**

Represent:

```text
07 SEP 2026

┌─────────────────────┐
│ CODE DEBUGGING      │
│ FINAL               │
│ FULL DAY            │
└─────────────────────┘

┌─────────────────────┐
│ QUIZ                │
│ ROUND 2             │
│ HALF DAY            │
└─────────────────────┘
```

---

# 14. 08 SEPTEMBER 2026

### SOFTWARE HACKATHON

**FINAL**

Duration:

**Full Day**

Display prominently because this is the final stage immediately before the main day.

---

# 15. 09 SEPTEMBER 2026 — MAIN DAY

Make this the visual climax of the timeline.

Label:

# 09 SEPTEMBER 2026

## MAIN DAY

The supplied schedule indicates:

### HARDWARE

**Project Expo**

and:

### QUIZ

**Final**

These are marked as **alternative** activities in the supplied schedule.

Represent clearly:

```text
09 SEPTEMBER 2026
MAIN DAY

        ALTERNATIVE

┌────────────────────┐
│ HARDWARE           │
│ PROJECT EXPO       │
└────────────────────┘

              OR

┌────────────────────┐
│ QUIZ               │
│ FINAL              │
└────────────────────┘
```

Do not reinterpret the schedule beyond what the supplied source supports.

---

# 16. EVENT TIMELINE DESIGN

Create a vertical timeline on desktop:

```text
31 AUG
   │
   ● QUIZ
   ● CODE DEBUGGING
   │
01 SEP
   │
   ● IDEA PITCHING
   │
02 SEP
   │
   ● SOFTWARE HACKATHON
   │
03 SEP
   │
   ○ NO EVENT
   │
04 SEP
   │
   ○ NO EVENT
   │
05 SEP
   │
   ○ NO EVENT
   │
06 SEP
   │
   ○ NO EVENT
   │
07 SEP
   │
   ● CODE DEBUGGING FINAL
   ● QUIZ ROUND 2
   │
08 SEP
   │
   ● SOFTWARE HACKATHON FINAL
   │
09 SEP
   ★ MAIN DAY
```

On mobile, convert it into a compact vertical card timeline.

Each event should animate into view as the user scrolls.

---

# 17. EVENTS SHOWCASE

Create five major event cards.

## 01 — TECHXPO

### Hardware Expo

Description:

Showcase innovative hardware projects, prototypes, engineering systems and technology solutions.

Visual direction:

- Hardware circuit
- PCB
- Components
- Engineering prototype

---

## 02 — NEURO PULSE

### Quiz

Description:

A technology-focused quiz testing knowledge, awareness, reasoning and quick thinking.

Visual direction:

- Brain
- Neural nodes
- Question marks
- Connected data points

---

## 03 — CODE FORGE

### Software Hackathon

Description:

A software development challenge focused on building innovative technology solutions.

Visual direction:

- Code
- Terminal
- Brackets
- Digital grid
- Binary

---

## 04 — BUG VERSE

### Code Debugging

Description:

A debugging competition where participants identify, analyze and fix programming errors.

Visual direction:

- Bug
- Error symbols
- Terminal
- Code fragments

---

## 05 — PITCHUP

### Idea Presentation

Description:

Participants present innovative ideas and communicate solutions clearly and convincingly.

Visual direction:

- Lightbulb
- Presentation screen
- Idea nodes
- Startup pitch

The original event specification identifies these five event categories and descriptions.

---

# 18. EVENT CARD INTERACTION

Every event card should have:

- Event number
- Event name
- Category
- Description
- Visual icon
- Schedule reference
- Explore button
- Register button

Hover:

```text
Card
 ↓
translateY(-8px)
 ↓
slight scale
 ↓
border glow
 ↓
icon animation
 ↓
arrow movement
```

Use CSS transforms and opacity wherever possible.

On mobile:

- Remove hover dependency
- Use tap-friendly interactions
- Maintain clear information hierarchy

---

# 19. EVENT STATUS SYSTEM

Add visual status badges.

Examples:

```text
ROUND 1
ROUND 2
FINAL
FULL DAY
HALF DAY
FN
MAIN DAY
NO EVENT
ALTERNATIVE
```

Use distinct but restrained colors.

Example:

- Round 1 → blue
- Round 2 → violet
- Final → cyan
- Main Day → bright gradient
- No Event → muted gray
- Alternative → amber/violet outline

---

# 20. EVENT SCHEDULE SECTION

Create a dedicated section:

# THE ROAD TO TECHGENIO

Show the entire schedule as an interactive chronological experience.

Desktop:

```text
AUG 31 → SEP 1 → SEP 2 → SEP 3 → SEP 4 → SEP 5 → SEP 6 → SEP 7 → SEP 8 → SEP 9
```

Users can hover or click dates.

Display the events associated with each date.

For mobile, use:

```text
31 AUG
Quiz · Round 1
Code Debugging

01 SEP
Idea Pitching · Full Day

02 SEP
Software Hackathon · Round 1
```

etc.

---

# 21. WHY PARTICIPATE

Create a benefits section.

Use four or five interactive cards.

### BUILD

Turn ideas into technical demonstrations.

### THINK

Challenge knowledge, logic and problem-solving ability.

### CODE

Build software and solve technical problems.

### DEBUG

Analyze failures and find precise solutions.

### PITCH

Communicate ideas and create impact.

Cards should reveal additional information on hover.

---

# 22. EXPERIENCE SECTION

Create a visual section communicating:

```text
ENGINEERING
     +
INNOVATION
     +
TECHNOLOGY
     +
COMPETITION
     +
CREATIVITY
```

Animate each word into the viewport sequentially.

Use large typography and technical visual elements.

---

# 23. SOCIAL PROOF / EVENT ENERGY

Because no real testimonials have been provided, **do not invent participant testimonials or fake quotes**.

Instead, create an honest event-energy section using factual categories:

```text
05
TECHNICAL EVENTS

IIC
INNOVATION

IRP
RESEARCH

QC-IR
INDUSTRY RELATIONS

09 SEP
MAIN DAY
```

If real testimonials are supplied later, provide a component where they can be added.

---

# 24. REGISTRATION SYSTEM

Registration is external.

Create a centralized JavaScript configuration:

```javascript
const CONFIG = {
    REGISTRATION_URL: "YOUR_EXTERNAL_REGISTRATION_URL"
};
```

Every registration button must use this value.

Do NOT hard-code different registration URLs in multiple places.

Registration CTA must appear in:

1. Navbar
2. Hero
3. Event cards
4. Schedule section
5. Mid-page CTA
6. Footer

Use:

```html
target="_blank"
rel="noopener noreferrer"
```

for external registration links.

---

# 25. REGISTRATION CTA

Create a large CTA section:

# READY TO ENTER?

Supporting text:

> Choose your arena. Bring your skills. Make your mark at TechGenio 2K26.

Button:

**REGISTER FOR TECHGENIO 2K26 ↗**

Add a subtle animated technical background.

---

# 26. OFFICIALS AND ORGANIZERS

Use the official names from the supplied event poster.

### CONVENER

**Dr. S. Parthasarthy**

QC-IR Head

### CHIEF PATRON

**Dr. K. N. K. Ganesh**

Secretary

### CHIEF PATRON

**Er. K. N. K. Karthik**

President

### PATRON

**Dr. A. V. Ram Prasad**

Principal

### EVENT COORDINATOR

**Mr. R. Thangankaran**

IRP Coordinator

### ORGANIZERS

**IRP Aspirants**

Present these in a professional hierarchy.

The supplied specification lists these official roles and names.

---

# 27. FOOTER

Footer should contain:

**TECHGENIO 2K26**

**ENGINEER'S DAY CELEBRATION**

**K.L.N. COLLEGE OF ENGINEERING**

**IIC × IRP · QC-IR**

Navigation links:

- Home
- About
- Events
- Schedule
- Organizers
- Register

Include registration CTA again.

Copyright:

**© 2026 TechGenio 2K26**

---

# 28. ANIMATION SYSTEM

Implement a unified animation system.

## Page-load animations

Use:

- Fade
- Slide
- Scale
- Blur reveal
- Stagger

## Scroll animations

Use:

**Intersection Observer API**

Each section should reveal when approximately 10–20% enters the viewport.

## Card animations

Use:

- translateY
- scale
- border glow
- shadow
- icon movement

## Timeline animations

Animate:

- Date
- Timeline line
- Event nodes
- Event cards

as they enter the viewport.

---

# 29. PARALLAX

Use only lightweight parallax.

Suitable elements:

- Hero circuit lines
- Background grid
- Decorative nodes
- Large typography

Use:

```text
transform: translate3d(...)
```

Avoid manipulating layout properties such as:

- top
- left
- width
- height

during continuous animation.

---

# 30. PERFORMANCE

Target:

### Lighthouse

90+ where practical.

### Core Web Vitals

Aim for:

- LCP < 2.5s
- CLS < 0.1
- INP < 200ms

Use:

- CSS transforms
- Opacity
- Intersection Observer
- Lazy-loaded images
- Compressed images
- WebP/AVIF where appropriate
- Minimal JavaScript
- No unnecessary dependencies

The original specification also establishes performance targets of FCP <1.5s, LCP <2.5s, INP <200ms and CLS <0.1.

---

# 31. IMAGE OPTIMIZATION

All non-critical images must use:

```html
loading="lazy"
decoding="async"
```

Hero-critical images should not be lazy-loaded.

Use responsive images where appropriate:

```html
srcset
sizes
```

Do not ship unnecessarily large images.

---

# 32. RESPONSIVE DESIGN

Support:

### Desktop

1200px+

### Laptop

1024px–1199px

### Tablet

768px–1023px

### Mobile

320px–767px

The design must not simply shrink desktop layouts.

Recompose the layout for mobile.

---

# 33. MOBILE HERO

Mobile hero should prioritize:

```text
ENGINEER'S DAY

TECHGENIO
2K26

IIC × IRP
under QC-IR

[ REGISTER NOW ]

[ EXPLORE EVENTS ]
```

Keep the visual identity strong without pushing the main CTA below an enormous animation.

---

# 34. ACCESSIBILITY

Use semantic HTML:

```text
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Implement:

- Proper heading hierarchy
- Accessible labels
- Keyboard navigation
- Visible focus states
- Good contrast
- Descriptive link text
- Alt text for meaningful images
- Decorative graphics marked appropriately
- Touch-friendly controls

All interactive elements must be keyboard accessible.

---

# 35. REDUCED MOTION

Implement:

```css
@media (prefers-reduced-motion: reduce)
```

When enabled:

- Disable parallax
- Disable continuous orbit animations
- Reduce transitions
- Remove unnecessary motion
- Preserve content visibility

Never hide important information behind animations.

---

# 36. SEO

Include:

- `<title>`
- Meta description
- Open Graph metadata
- Canonical URL placeholder
- Semantic headings
- Structured event metadata where appropriate
- Sitemap-ready structure
- robots.txt-ready deployment

Suggested title:

**TechGenio 2K26 | Engineers Day Celebration | K.L.N. College of Engineering**

Suggested description:

**TechGenio 2K26 is an Engineers Day celebration at K.L.N. College of Engineering featuring TECHXPO, NEURO PULSE, CODE FORGE, BUG VERSE and PITCHUP.**

---

# 37. FILE STRUCTURE

Create:

```text
techgenio-2k26/
│
├── index.html
│
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
│
├── js/
│   ├── main.js
│   ├── animations.js
│   └── schedule.js
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── README.md
├── robots.txt
└── sitemap.xml
```

If keeping the project simpler, CSS and JavaScript may also be consolidated into:

```text
index.html
styles.css
script.js
```

The final implementation must remain easy for another developer to maintain.

---

# 38. JAVASCRIPT ARCHITECTURE

Create modules/functions for:

```text
Navigation
Registration URL
Scroll Reveal
Timeline
Mobile Menu
Parallax
Micro-interactions
Accessibility
```

Avoid putting everything into one giant function.

---

# 39. CENTRAL EVENT DATA

Store schedule information in a JavaScript data structure.

Example:

```javascript
const eventSchedule = [
  {
    date: "2026-08-31",
    events: [
      {
        name: "Quiz",
        stage: "Round 1",
        duration: "FN"
      },
      {
        name: "Code Debugging",
        stage: "",
        duration: "FN"
      }
    ]
  },
  {
    date: "2026-09-01",
    events: [
      {
        name: "Idea Pitching",
        stage: "",
        duration: "Full Day"
      }
    ]
  }
];
```

Continue the structure for every supplied date.

This makes future schedule changes easy.

---

# 40. IMPORTANT SCHEDULE DATA

The implementation MUST include:

```text
31/08/2026
Quiz — Round 1 — FN
Code Debugging — FN

01/09/2026
Idea Pitching — Full Day

02/09/2026
Software Hackathon — Round 1 — Half Day

03/09/2026
No Event

04/09/2026
No Event

05/09/2026
No Event

06/09/2026
No Event

07/09/2026
Code Debugging — Final — Full Day
Quiz — Round 2 — Half Day

08/09/2026
Software Hackathon — Final — Full Day

09/09/2026
MAIN DAY
Hardware — Project Expo
Quiz — Final
Alternative
```

Do not silently change:

- dates
- rounds
- duration
- final status
- alternative designation

---

# 41. CONTENT ACCURACY

Do not fabricate:

- Sponsors
- Winners
- Testimonials
- Prize amounts
- Registration deadlines
- Venue details not supplied
- Participant counts
- Contact numbers
- Email addresses
- Social media handles

Where information is unavailable, use a clear placeholder or omit the field.

Never create fake institutional information simply to fill visual space.

---

# 42. VISUAL DETAILS

Add tasteful technical details:

- Circuit traces
- Grid backgrounds
- Animated dots
- Thin connector lines
- Digital coordinates
- Small labels
- Event numbers
- Technical metadata
- Geometric outlines

Use them as atmosphere rather than clutter.

---

# 43. COLOR SYSTEM

Suggested design tokens:

```css
--navy: #061329;
--dark-blue: #0A1D3A;
--blue: #4C9DFF;
--cyan: #5CE1E6;
--violet: #A66CFF;
--white: #F5F8FF;
--muted: #9EABC3;
```

Create a coherent gradient:

```text
Blue → Cyan → Violet
```

Use gradients sparingly.

---

# 44. TYPOGRAPHY

Use a strong condensed display font for:

- TECHGENIO
- Event names
- Large headings

Use a clean sans-serif for:

- Body
- Navigation
- Metadata
- Buttons

Maintain readable line height and contrast.

---

# 45. INTERACTIVE DETAILS

Add polished micro-interactions:

### Buttons

- Arrow movement
- Slight lift
- Glow

### Event cards

- Lift
- Border glow
- Icon animation

### Timeline

- Node activation
- Line progression

### Navigation

- Active state
- Underline/indicator

### Links

- Arrow translation

Keep every interaction fast and subtle.

---

# 46. NO HEAVY 3D REQUIREMENT

Do not use Three.js or WebGL unless absolutely necessary.

This is a static event website.

Prefer:

```text
CSS
SVG
DOM
Transforms
Gradients
Pseudo-elements
```

for the technical visual effects.

This keeps the website fast and easy to deploy.

---

# 47. DEPLOYMENT

The final website must work by simply uploading the project to static hosting.

It must be compatible with:

- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages
- Any standard static web server

No server-side code should be required.

---

# 48. REGISTRATION CONFIGURATION

Before deployment, replace:

```javascript
const CONFIG = {
    REGISTRATION_URL: "YOUR_EXTERNAL_REGISTRATION_URL"
};
```

with the actual registration URL.

Every CTA must reference:

```javascript
CONFIG.REGISTRATION_URL
```

Do not duplicate the URL across files.

---

# 49. TESTING CHECKLIST

Test:

### Desktop

- Chrome
- Edge
- Firefox
- Safari

### Mobile

- Android Chrome
- iOS Safari

### Functional

- Navigation
- Smooth scrolling
- Mobile menu
- Registration buttons
- External registration link
- Timeline
- Event cards
- Footer links

### Animation

- Hero animation
- Scroll reveals
- Hover states
- Timeline animation
- Parallax

### Accessibility

- Keyboard navigation
- Focus states
- Reduced motion
- Screen-reader semantics
- Color contrast

### Performance

- Lighthouse
- Image sizes
- JavaScript execution
- Layout shifts
- Animation smoothness

---

# 50. FINAL DESIGN EXPERIENCE

The final website should feel like:

```text
              ENGINEER'S DAY
                    ↓
             TECHGENIO 2K26
                    ↓
          IIC × IRP × QC-IR
                    ↓
        ┌─────────────────────┐
        │   05 EVENTS         │
        │                     │
        │ TECHXPO             │
        │ NEURO PULSE         │
        │ CODE FORGE          │
        │ BUG VERSE           │
        │ PITCHUP             │
        └─────────────────────┘
                    ↓
             EVENT TIMELINE
                    ↓
       31 AUG → 09 SEP 2026
                    ↓
              MAIN DAY
                    ↓
             REGISTER NOW
```

The experience should gradually build anticipation toward **09 September 2026**, making the main day feel like the culmination of the entire event journey.

---

# 51. FINAL IMPLEMENTATION COMMAND

Build the entire website now.

Do not return a conceptual mockup.

Generate the actual:

```text
index.html
styles.css
script.js
README.md
```

and any required static assets.

The final website must be:

- Fully functional
- Responsive
- Animated
- Accessible
- Performance optimized
- Static
- Deployable
- Easy to maintain
- Registration-ready

Use the supplied TechGenio poster and schedule image as source material.

Do not invent unsupported event information.

The **event schedule must be integrated as a first-class section**, not buried inside an event card.

The website should make the journey from:

**Discover → Explore → Understand Schedule → Choose Event → Register**

feel effortless.

## FINAL PRIORITY

**1. Event information accuracy**

**2. Registration visibility**

**3. Visual quality**

**4. Animation quality**

**5. Mobile experience**

**6. Performance**

**7. Accessibility**

**8. Maintainability**

Build **TechGenio 2K26** as a polished digital event experience that feels worthy of an Engineers Day celebration at an engineering institution.