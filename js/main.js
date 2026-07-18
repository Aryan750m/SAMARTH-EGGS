/* main.js - Core Page Coordinator */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Dismiss Preloader
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
    });
    // Fallback in case load event already fired or delayed
    setTimeout(() => {
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
    }, 1500);
  }

  // 2. Scroll Reveal Intersection Observer
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
      threshold: 0.15
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }
});
