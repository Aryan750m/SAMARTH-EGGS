/* main.js - Core Page Coordinator */

// Bulletproof Preloader Dismissal
(function() {
  function dismissPreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader && preloader.style.display !== 'none') {
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
      preloader.style.pointerEvents = 'none';
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 400);
    }
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(dismissPreloader, 100);
  } else {
    document.addEventListener('DOMContentLoaded', dismissPreloader);
    window.addEventListener('load', dismissPreloader);
  }

  // Guaranteed Safety Backup Timer (500ms max)
  setTimeout(dismissPreloader, 500);
})();

// Scroll Reveal & Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal-item');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0,
      rootMargin: '0px 0px 50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Safety Fallback: Reveal all elements after delay
    setTimeout(() => {
      revealElements.forEach(el => el.classList.add('revealed'));
    }, 600);
  }
});
