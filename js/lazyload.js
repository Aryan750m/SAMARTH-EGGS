/* lazyload.js - IntersectionObserver lazy load images helper */
document.addEventListener('DOMContentLoaded', () => {
  const lazyImages = document.querySelectorAll('img[loading="lazy"], .lazy-bg');

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target;
          
          if (image.tagName === 'IMG') {
            if (image.dataset.src) {
              image.src = image.dataset.src;
            }
          } else {
            // Background images
            if (image.dataset.bg) {
              image.style.backgroundImage = `url(${image.dataset.bg})`;
            }
          }
          
          image.classList.add('lazy-loaded');
          observer.unobserve(image);
        }
      });
    }, {
      rootMargin: "0px 0px 200px 0px" // pre-fetch images 200px before they enter viewport
    });

    lazyImages.forEach(image => imageObserver.observe(image));
  } else {
    // Fallback for older browsers
    lazyImages.forEach(image => {
      if (image.tagName === 'IMG') {
        if (image.dataset.src) image.src = image.dataset.src;
      } else {
        if (image.dataset.bg) image.style.backgroundImage = `url(${image.dataset.bg})`;
      }
    });
  }
});
