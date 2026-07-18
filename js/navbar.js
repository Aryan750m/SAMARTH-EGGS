/* navbar.js - Sticky Header and Mobile Menu Toggle */
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const navLinks = document.querySelector('.nav-links');
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  
  // Sticky Navbar logic
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      if (header.classList.contains('transparent-dark')) {
        header.classList.remove('transparent-dark');
      }
    } else {
      header.classList.remove('scrolled');
      // If on landing/hero pages, we might want transparency overlay back
      if (document.body.classList.contains('has-hero-overlay')) {
        header.classList.add('transparent-dark');
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check

  // Mobile Menu Toggle logic
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navLinks.classList.contains('active')) {
          icon.className = 'fas fa-times';
        } else {
          icon.className = 'fas fa-bars';
        }
      }
    });

    // Close menu when clicking links
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      });
    });
  }

  // Active Link Styling
  const currentPath = window.location.pathname;
  const pageName = currentPath.split('/').pop() || 'index.html';
  
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === pageName || (pageName === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
