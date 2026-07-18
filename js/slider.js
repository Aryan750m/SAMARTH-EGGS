/* slider.js - Custom testimonals auto-slider engine */
document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.custom-slides-wrapper');
  const slides = document.querySelectorAll('.custom-slide');
  const dotsContainer = document.querySelector('.slider-dots');

  if (!wrapper || slides.length === 0) return;

  let currentIndex = 0;
  const slideCount = slides.length;
  let autoSlideInterval;

  // Initialize navigation dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < slideCount; i++) {
      const dot = document.createElement('span');
      dot.classList.add('slider-dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        goToSlide(i);
        resetAutoSlide();
      });
      dotsContainer.appendChild(dot);
    }
  }

  const updateDots = () => {
    if (!dotsContainer) return;
    const dots = dotsContainer.querySelectorAll('.slider-dot');
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  };

  const goToSlide = (index) => {
    currentIndex = index;
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
  };

  const nextSlide = () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= slideCount) {
      nextIndex = 0;
    }
    goToSlide(nextIndex);
  };

  const startAutoSlide = () => {
    autoSlideInterval = setInterval(nextSlide, 5000);
  };

  const resetAutoSlide = () => {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  };

  startAutoSlide();
});
