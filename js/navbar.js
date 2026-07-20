/* navbar.js - Sticky Header and Accessibility-driven Mobile Menu Toggle */
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const navLinks = document.querySelector('.nav-links');
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  
  // Sticky Navbar logic
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
      if (header.classList.contains('transparent-dark')) {
        header.classList.remove('transparent-dark');
      }
    } else {
      header.classList.remove('scrolled');
      if (document.body.classList.contains('has-hero-overlay')) {
        header.classList.add('transparent-dark');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // Mobile Menu Toggle logic
  if (mobileToggle && navLinks) {
    const toggleMenu = (open) => {
      const isExpanded = open !== undefined ? open : mobileToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        // Close menu
        navLinks.classList.remove('active');
        mobileToggle.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      } else {
        // Open menu
        navLinks.classList.add('active');
        mobileToggle.classList.add('open');
        mobileToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
        
        // Trap focus to mobile navigation
        const focusableElements = navLinks.querySelectorAll('a, button');
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        }
      }
    };

    mobileToggle.addEventListener('click', () => toggleMenu());

    // Close menu when clicking links
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        toggleMenu(true); // Close it
        mobileToggle.focus();
      }
    });
  }

  // Active Link Highlight matching current page path
  const currentPath = window.location.pathname;
  const pageName = currentPath.split('/').pop() || 'index.html';
  
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === pageName || (pageName === '' && href === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
});
