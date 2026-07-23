/* main.js - Core Page Coordinator */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Dismiss Preloader
  const preloader = document.getElementById('preloader');
  if (preloader) {
    const hidePreloader = () => {
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
      preloader.style.pointerEvents = 'none';
      setTimeout(() => { preloader.style.display = 'none'; }, 500);
    };

    if (document.readyState === 'complete') {
      hidePreloader();
    } else {
      window.addEventListener('load', hidePreloader);
      setTimeout(hidePreloader, 1000);
    }
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
      threshold: 0,
      rootMargin: '0px 0px 50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Safety Fallback: Reveal all elements after delay to prevent unrevealed elements on mobile or slow devices
    setTimeout(() => {
      revealElements.forEach(el => el.classList.add('revealed'));
    }, 800);
  }
});
