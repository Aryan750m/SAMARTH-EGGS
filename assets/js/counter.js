/* counter.js - Smooth Zero-Shift Stats Counter Animation */
document.addEventListener('DOMContentLoaded', () => {
  const counterElements = document.querySelectorAll('.stat-number, .bento-card__number, .glass-stat-card__number');

  const startCounter = (el) => {
    const target = parseInt(el.getAttribute('data-target'), 10) || 0;
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1500; // 1.5 seconds smooth duration
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const easeOutQuad = t => t * (2 - t);

    const animate = () => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      const currentValue = Math.floor(progress * target);
      
      el.textContent = currentValue.toLocaleString() + suffix;

      if (frame < totalFrames) {
        requestAnimationFrame(animate);
      } else {
        el.textContent = target.toLocaleString() + suffix;
      }
    };

    animate();
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  counterElements.forEach(el => observer.observe(el));
});
