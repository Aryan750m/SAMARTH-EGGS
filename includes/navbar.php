<?php
require_once __DIR__ . '/config.php';
$activePage = isset($activePage) ? $activePage : 'home';
?>
  <!-- Navigation Header -->
  <header class="scrolled">
    <div class="container navbar">
      <a href="index.php" class="logo" style="display: flex; align-items: center; gap: var(--spacing-sm);">
        <img src="assets/images/logo/logo.webp" alt="Samarth Eggs Mascot Logo" width="58" height="58" style="border-radius: var(--radius-sm); border: 2px solid var(--primary);">
        <span class="logo-text">SAMARTH EGGS</span>
      </a>
      
      <button class="mobile-menu-toggle" aria-label="Toggle Navigation" aria-expanded="false" aria-controls="nav-links">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul class="nav-links" id="nav-links">
        <li><a href="index.php" class="<?php echo $activePage === 'home' ? 'active' : ''; ?>">Home</a></li>
        <li><a href="about.php" class="<?php echo $activePage === 'about' ? 'active' : ''; ?>">About</a></li>
        <li><a href="products.php" class="<?php echo $activePage === 'products' ? 'active' : ''; ?>">Products</a></li>
        <li><a href="gallery.php" class="<?php echo $activePage === 'gallery' ? 'active' : ''; ?>">Gallery</a></li>
        <li><a href="contact.php" class="<?php echo $activePage === 'contact' ? 'active' : ''; ?>">Contact</a></li>
        <li class="mobile-only-action" style="margin-top: var(--spacing-md);"><a href="tel:<?php echo PHONE_TEL; ?>" class="btn btn-primary" style="display: block; text-align: center; color: var(--dark) !important; padding: 0.8rem;"><i class="fas fa-phone"></i> Call Us</a></li>
        <li class="mobile-only-action" style="margin-top: var(--spacing-xs);"><a href="<?php echo WHATSAPP_LINK; ?>" target="_blank" class="btn btn-secondary whatsapp-chat-trigger" style="display: block; text-align: center; color: var(--white) !important; padding: 0.8rem;"><i class="fab fa-whatsapp"></i> Chat WhatsApp</a></li>
      </ul>

      <div class="nav-actions">
        <a href="tel:<?php echo PHONE_TEL; ?>" class="btn btn-primary" style="padding: 0.5rem 1.2rem; font-size: 0.75rem;"><i class="fas fa-phone"></i> Call</a>
        <a href="<?php echo WHATSAPP_LINK; ?>" target="_blank" class="btn btn-secondary whatsapp-chat-trigger" style="padding: 0.5rem 1.2rem; font-size: 0.75rem;"><i class="fab fa-whatsapp"></i> Chat</a>
      </div>
    </div>
  </header>
