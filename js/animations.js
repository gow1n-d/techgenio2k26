/**
 * TECHGENIO 2K26 — ANIMATIONS CONTROLLER
 * Native IntersectionObserver & Lightweight Transform Effects
 */

export function initScrollAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const revealElements = document.querySelectorAll('.reveal');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}

export function initParallaxEffects() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const glowElement = document.querySelector('.bg-ambient-glow');

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (glowElement) {
      glowElement.style.transform = `translate3d(-50%, ${scrolled * 0.15}px, 0)`;
    }
  }, { passive: true });
}
