/**
 * TECHGENIO 2K26 — CENTRAL CONFIGURATION
 * -----------------------------------------------------------
 * Single source of truth for external registration and event metadata.
 */

export const CONFIG = {
  REGISTRATION_URL: "https://forms.gle/qcKEv7iHQ3k7cxVm7",
  
  EVENT: {
    NAME: "TECHGENIO 2K26",
    TYPE: "ENGINEERS' DAY CELEBRATION",
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
    { role: "CHIEF PATRON", name: "Er. K. N. K. Karthik", designation: "President" },
    { role: "CHIEF PATRON", name: "Dr. K. N. K. Ganesh", designation: "Secretary" },
    { role: "PATRON", name: "Dr. A. V. Ram Prasad", designation: "Principal" },
    { role: "CONVENER", name: "Dr. S. Parthasarathy", designation: "QC-IR Head" },
    { role: "EVENT COORDINATOR", name: "Mr. R. Thangasankaran", designation: "IRP Coordinator" },
    { role: "ORGANIZING COMMITTEE", name: "IRP Aspirants", designation: "Student Organizers" }
  ]
};
