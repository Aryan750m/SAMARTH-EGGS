/* gallery.js - Masonry Filters and Lightbox Viewer */
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item-wrapper');

  // Filter functionality
  if (filterBtns.length > 0 && galleryItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Toggle active button class
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  // Lightbox Modal Setup
  const createLightbox = () => {
    const lightbox = document.createElement('div');
    lightbox.id = 'gallery-lightbox';
    lightbox.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(17, 17, 17, 0.95);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2000;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    `;

    const contentWrapper = document.createElement('div');
    contentWrapper.style.cssText = `
      position: relative;
      max-width: 90%;
      max-height: 85%;
    `;

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
      position: absolute;
      top: -50px;
      right: 0;
      background: none;
      border: none;
      color: var(--white, #fff);
      font-size: 2.5rem;
      cursor: pointer;
    `;

    lightbox.appendChild(contentWrapper);
    contentWrapper.appendChild(closeBtn);
    document.body.appendChild(lightbox);

    // Open logic
    const openLightbox = (element) => {
      // Clear previous content
      const existingMedia = contentWrapper.querySelector('img, video');
      if (existingMedia) existingMedia.remove();

      let mediaElement;
      if (element.tagName === 'IMG') {
        mediaElement = document.createElement('img');
        mediaElement.src = element.getAttribute('data-fullsrc') || element.src;
        mediaElement.style.cssText = 'max-width: 100%; max-height: 80vh; border-radius: 8px; display: block; margin: auto;';
      } else if (element.tagName === 'VIDEO' || element.classList.contains('video-play-trigger')) {
        mediaElement = document.createElement('video');
        mediaElement.src = element.getAttribute('data-videosrc');
        mediaElement.controls = true;
        mediaElement.autoplay = true;
        mediaElement.style.cssText = 'max-width: 100%; max-height: 80vh; border-radius: 8px; display: block; margin: auto;';
      }

      if (mediaElement) {
        contentWrapper.appendChild(mediaElement);
        lightbox.style.opacity = '1';
        lightbox.style.pointerEvents = 'auto';
      }
    };

    // Close logic
    const closeLightbox = () => {
      lightbox.style.opacity = '0';
      lightbox.style.pointerEvents = 'none';
      const video = contentWrapper.querySelector('video');
      if (video) video.pause();
    };

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    // Attach click events to gallery images
    document.querySelectorAll('.lightbox-trigger').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        openLightbox(trigger.querySelector('img') || trigger);
      });
    });
  };

  createLightbox();
});
