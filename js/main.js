/**
 * TECHGENIO 2K26 — MAIN APPLICATION CONTROLLER
 * Vanilla JavaScript (ES6 Modules)
 */

import { CONFIG } from './config.js';
import { eventsShowcase, timelineSchedule, whyParticipateBenefits } from './schedule-data.js';
import { initScrollAnimations, initParallaxEffects } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
  initRegistrationLinks();
  initStickyHeader();
  initMobileNav();
  initScheduleTabs();
  initScrollSpy();
  initScrollAnimations();
  initParallaxEffects();
});

/**
 * Binds all registration buttons to the single source of truth CONFIG.REGISTRATION_URL
 */
function initRegistrationLinks() {
  const registerButtons = document.querySelectorAll('[data-register-btn]');
  registerButtons.forEach(btn => {
    btn.setAttribute('href', CONFIG.REGISTRATION_URL);
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');
  });
}

/**
 * Sticky Navigation Blur on Scroll
 */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
}

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileNav() {
  const hamburger = document.getElementById('hamburgerBtn');
  const drawer = document.getElementById('mobileNavDrawer');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!hamburger || !drawer) return;

  hamburger.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.innerHTML = isOpen 
      ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
      : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });
  });
}

/**
 * Interactive Schedule Section Tabs ("The Road to TechGenio")
 */
function initScheduleTabs() {
  const tabsContainer = document.getElementById('scheduleTabs');
  const paneContainer = document.getElementById('schedulePane');
  if (!tabsContainer || !paneContainer) return;

  // Render Tabs
  tabsContainer.innerHTML = timelineSchedule.map((item, idx) => `
    <button 
      class="schedule-tab-btn ${idx === 0 ? 'active' : ''}" 
      data-tab-index="${idx}"
      type="button"
    >
      ${item.displayDate.split(' ')[0]} ${item.displayDate.split(' ')[1]}
    </button>
  `).join('');

  // Render Initial Pane
  renderSchedulePane(0);

  // Tab click event
  tabsContainer.addEventListener('click', (e) => {
    const tabBtn = e.target.closest('.schedule-tab-btn');
    if (!tabBtn) return;

    const idx = parseInt(tabBtn.dataset.tabIndex, 10);
    tabsContainer.querySelectorAll('.schedule-tab-btn').forEach(btn => btn.classList.remove('active'));
    tabBtn.classList.add('active');

    renderSchedulePane(idx);
  });

  function renderSchedulePane(index) {
    const day = timelineSchedule[index];
    if (!day) return;

    paneContainer.innerHTML = `
      <div class="schedule-display-pane glass-panel">
        <div class="schedule-pane-header">
          <h3 class="schedule-pane-date">${day.displayDate} ${day.isMainDay ? '<span class="badge badge-mainday" style="margin-left:8px;">★ MAIN DAY</span>' : ''}</h3>
          <span class="schedule-pane-day">${day.dayName} · Session Schedule</span>
        </div>

        <div class="schedule-cards-grid">
          ${day.events.map(ev => `
            <div class="schedule-item-card" style="border-left: 4px solid ${getBadgeColor(ev.badgeType)}">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <span class="badge badge-${ev.badgeType}">${ev.stage || 'STAGE'}</span>
                <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--cyan);">${ev.duration}</span>
              </div>
              <h4 style="font-size:1.2rem; color:var(--white); margin-bottom:4px;">${ev.name} ${ev.subName ? `— ${ev.subName}` : ''}</h4>
              <p style="font-size:0.85rem; color:var(--muted); line-height:1.5;">${ev.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  function getBadgeColor(type) {
    switch (type) {
      case 'mainday': return 'var(--badge-mainday)';
      case 'final': return 'var(--badge-final)';
      case 'round2': return 'var(--badge-round2)';
      case 'round1': return 'var(--badge-round1)';
      case 'noevent': return 'var(--badge-noevent)';
      default: return 'var(--blue)';
    }
  }
}

/**
 * ScrollSpy to update active link in navbar
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}
