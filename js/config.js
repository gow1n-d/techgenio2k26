/**
 * TECHGENIO 2K26 — CENTRAL CONFIGURATION
 * -----------------------------------------------------------
 * Single source of truth for external registration and event metadata.
 * Update REGISTRATION_URL here, and all registration buttons across
 * the entire website will automatically update.
 */

export const CONFIG = {
  // Update this with your actual Google Form or external registration platform URL
  REGISTRATION_URL: "https://docs.google.com/forms/d/e/1FAIpQLSeTechGenio2K26Registration/viewform",
  
  EVENT: {
    NAME: "TECHGENIO 2K26",
    TYPE: "ENGINEER'S DAY CELEBRATION",
    TAGLINE: "Engineering · Innovation · Technology · Competition · Creativity",
    MAIN_DATE: "09 September 2026",
    MAIN_DATE_ISO: "2026-09-09T09:00:00+05:30",
    TIMELINE_START: "31 August 2026",
    TIMELINE_END: "09 September 2026",
    INSTITUTION: "K.L.N. COLLEGE OF ENGINEERING",
    INSTITUTION_TAGLINE: "An Autonomous Institution | Pottapalayam, Madurai - 630612",
    ORGANIZING_BODIES: "IIC × IRP under QC-IR",
    ORGANIZERS_FULL: {
      IIC: "Institution's Innovation Council",
      IRP: "Innovation Research Park",
      QC_IR: "Quality Circle - Industrial Relations"
    }
  },

  OFFICIALS: [
    { role: "CONVENER", name: "Dr. S. Parthasarthy", designation: "QC-IR Head" },
    { role: "CHIEF PATRON", name: "Dr. K. N. K. Ganesh", designation: "Secretary" },
    { role: "CHIEF PATRON", name: "Er. K. N. K. Karthik", designation: "President" },
    { role: "PATRON", name: "Dr. A. V. Ram Prasad", designation: "Principal" },
    { role: "EVENT COORDINATOR", name: "Mr. R. Thangankaran", designation: "IRP Coordinator" },
    { role: "ORGANIZING COMMITTEE", name: "IRP Aspirants", designation: "Student Organizers" }
  ]
};
