# TECHGENIO 2K26 — Static Event Website

Official static event website for **TECHGENIO 2K26**, an Engineers Day celebration conducted at **K.L.N. College of Engineering** by **IIC (Institution's Innovation Council)** and **IRP (Innovation Research Park)** under **QC-IR (Quality Circle - Industrial Relations)**.

---

## 🚀 Quick Start & Deployment

This is a pure static frontend website (HTML5, CSS3, Vanilla JavaScript ES6+). It requires **no backend, no database, and no server-side build steps**.

### Local Preview
Open `index.html` directly in any web browser, or run a local static server:
```bash
# Using Python
python -m http.server 3000

# Using Node / npx
npx serve .
```

### Static Hosting
You can deploy this folder directly to:
- **GitHub Pages**
- **Vercel**
- **Netlify**
- **Cloudflare Pages**
- Any standard Apache/Nginx web server

---

## ⚙️ Central Registration Configuration

To update the external registration URL (Google Form, etc.), edit **one single file**:

📁 `js/config.js`:
```javascript
export const CONFIG = {
  // Replace this with your actual registration link:
  REGISTRATION_URL: "https://forms.gle/your-actual-form-url"
};
```
All registration CTA buttons across the Navbar, Hero, Event Cards, Schedule, Mid-page Banner, and Footer will automatically link to the updated URL in a new tab (`target="_blank" rel="noopener noreferrer"`).

---

## 📅 Official Schedule Source of Truth

- **31/08/2026**:
  - `QUIZ (Neuro Pulse)` — Round 1 · FN (Forenoon)
  - `CODE DEBUGGING (Bug Verse)` — FN (Forenoon)
- **01/09/2026**:
  - `IDEA PITCHING (PitchUp)` — Full Day
- **02/09/2026**:
  - `SOFTWARE HACKATHON (Code Forge)` — Round 1 · Half Day
- **03/09/2026 – 06/09/2026**:
  - *Schedule Buffer Window*
- **07/09/2026**:
  - `CODE DEBUGGING (Bug Verse)` — Final · Full Day
  - `QUIZ (Neuro Pulse)` — Round 2 · Half Day
- **08/09/2026**:
  - `SOFTWARE HACKATHON (Code Forge)` — Final · Full Day
- **09/09/2026** (MAIN DAY ★):
  - `HARDWARE (TechXpo)` — Project Expo
  - `QUIZ (Neuro Pulse)` — Final
  - *Designation: Alternative Tracks*

---

## 🏆 05 Major Events

1. **01 — TECHXPO**: Hardware Expo & Prototype Exhibition
2. **02 — NEURO PULSE**: Technology Acumen Quiz (3-Stage)
3. **03 — CODE FORGE**: Software Development Hackathon (2-Stage)
4. **04 — BUG VERSE**: Code Debugging Arena (2-Stage)
5. **05 — PITCHUP**: Innovation & Idea Presentation

---

## 🏛️ Officials & Leadership

- **Chief Patron**: Dr. K. N. K. Ganesh (Secretary)
- **Chief Patron**: Er. K. N. K. Karthik (President)
- **Patron**: Dr. A. V. Ram Prasad (Principal)
- **Convener**: Dr. S. Parthasarthy (QC-IR Head)
- **Event Coordinator**: Mr. R. Thangankaran (IRP Coordinator)
- **Organizers**: IRP Aspirants

---

## 📁 File Structure

```text
techgenio2k26/
├── index.html                  # Semantic single-page HTML architecture
├── css/
│   ├── style.css               # Design tokens, typography, layout, cards, components
│   ├── animations.css          # Keyframes, scroll-reveals, reduced-motion
│   └── responsive.css          # Breakpoints (Desktop 1200px+, Tablet, Mobile 320px)
├── js/
│   ├── config.js               # Central REGISTRATION_URL & event metadata
│   ├── schedule-data.js        # Strict schedule dataset (31 Aug to 09 Sep)
│   ├── animations.js           # IntersectionObserver scroll reveals & parallax
│   └── main.js                 # App controller (nav, tabs, mobile drawer, scrollspy)
├── assets/
│   ├── images/
│   └── icons/
├── robots.txt                  # Search engine directives
├── sitemap.xml                 # XML sitemap
└── README.md                   # Documentation
```
