(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Typewriter ---------- */
  var roles = [
    'Robotics Software Developer',
    'AI/ML Enthusiast',
    'CSE Undergrad @ IUT',
    'Full-Stack Developer'
  ];

  var typewriterEl = document.getElementById('typewriter-text');

  if (typewriterEl) {
    if (prefersReducedMotion) {
      typewriterEl.textContent = roles[0];
    } else {
      var roleIndex = 0;
      var charIndex = 0;
      var deleting = false;
      var holdTicks = 0;
      var HOLD_TICKS = Math.round(1000 / 55);

      var tick = function () {
        var current = roles[roleIndex];

        if (!deleting) {
          if (charIndex <= current.length) {
            typewriterEl.textContent = current.slice(0, charIndex);
            charIndex++;
          } else if (holdTicks < HOLD_TICKS) {
            holdTicks++;
          } else {
            deleting = true;
            holdTicks = 0;
          }
        } else {
          if (charIndex >= 0) {
            typewriterEl.textContent = current.slice(0, charIndex);
            charIndex--;
          } else {
            deleting = false;
            charIndex = 0;
            roleIndex = (roleIndex + 1) % roles.length;
          }
        }
      };

      var intervalId = setInterval(tick, 55);
      window.addEventListener('beforeunload', function () {
        clearInterval(intervalId);
      });
    }
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll('[data-reveal]');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach(function (el) {
      observer.observe(el);
    });

    window.addEventListener('beforeunload', function () {
      observer.disconnect();
    });
  }

  /* ---------- Hero mouse spotlight (rAF-throttled) ---------- */
  var hero = document.querySelector('.hero');
  var spotlight = document.getElementById('hero-spotlight');

  if (hero && spotlight && !prefersReducedMotion) {
    var pendingX = null;
    var pendingY = null;
    var rafId = null;

    var applySpotlight = function () {
      rafId = null;
      if (pendingX === null) return;
      spotlight.style.setProperty('--mx', pendingX + 'px');
      spotlight.style.setProperty('--my', pendingY + 'px');
    };

    hero.addEventListener('mousemove', function (e) {
      var rect = hero.getBoundingClientRect();
      pendingX = e.clientX - rect.left;
      pendingY = e.clientY - rect.top;
      if (rafId === null) {
        rafId = requestAnimationFrame(applySpotlight);
      }
    });
  }
})();
