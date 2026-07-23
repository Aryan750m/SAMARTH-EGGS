<?php
require_once __DIR__ . '/config.php';
?>
  <!-- Footer -->
  <footer>
    <div class="container footer-grid">
      <div class="footer-col">
        <h3>Samarth Eggs Center</h3>
        <p style="color: var(--gray);">Leading wholesale &amp; retail egg supplier in Mumbai. Delivering fresh farm eggs daily to commercial culinary operations, hotels, bakeries, restaurants, and homes.</p>
        <p style="color: var(--gray); font-size: 0.85rem; margin-top: 8px;"><i class="fas fa-map-marker-alt"></i> Sewri West, Mumbai - 400015</p>
        <div class="footer-socials">
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          <a href="<?php echo WHATSAPP_LINK; ?>" target="_blank" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
        </div>
      </div>
      <div class="footer-col">
        <h3>Quick Links</h3>
        <ul class="footer-links">
          <li><a href="index.php">Home</a></li>
          <li><a href="about.php">About Us</a></li>
          <li><a href="products.php">Our Products</a></li>
          <li><a href="gallery.php">Photo Gallery</a></li>
          <li><a href="contact.php">Contact Us</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h3>Products Range</h3>
        <ul class="footer-links">
          <li><a href="products.php?filter=white">White Eggs (Nagpal)</a></li>
          <li><a href="products.php?filter=organic">Organic Eggs</a></li>
          <li><a href="products.php?filter=brown">Brown Country Eggs</a></li>
          <li><a href="products.php?filter=country">Country Eggs</a></li>
          <li><a href="products.php?filter=duck">Duck Eggs</a></li>
          <li><a href="products.php?filter=jumbo">Jumbo Farm Eggs</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h3>Newsletter</h3>
        <p style="color: var(--gray);">Subscribe for daily Mumbai egg market rates and bulk pricing updates.</p>
        <form class="newsletter-form" action="#" method="POST" onsubmit="event.preventDefault(); alert('Subscribed successfully!'); this.reset();">
          <input type="email" placeholder="Your Email Address" required>
          <button type="submit">Join</button>
        </form>
      </div>
    </div>
    <div class="container footer-bottom" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--spacing-sm);">
      <p style="margin: 0;">&copy; <?php echo date('Y'); ?> Samarth Eggs Center. All Rights Reserved. Fresh Farm Egg Supplier Mumbai.</p>
      <div style="display: flex; align-items: center; gap: 10px;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="90" height="30" style="vertical-align: middle;">
          <rect width="300" height="100" rx="15" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="2"/>
          <text x="35" y="65" font-family="'Inter', sans-serif" font-weight="900" font-size="42" fill="#018549">fssai</text>
          <path d="M150 25 C170 25, 185 45, 185 65 C185 67, 180 70, 178 70 C165 70, 150 55, 150 25 Z" fill="#f2aa34"/>
          <path d="M150 25 C130 25, 115 45, 115 65 C115 67, 120 70, 122 70 C135 70, 150 55, 150 25 Z" fill="#018549"/>
          <text x="200" y="45" font-family="'Inter', sans-serif" font-weight="700" font-size="16" fill="#333">FOOD SAFETY</text>
          <text x="200" y="65" font-family="'Inter', sans-serif" font-weight="700" font-size="14" fill="#666">CERTIFIED</text>
        </svg>
        <span style="font-size: 0.8rem; color: var(--gray);">Reg: <?php echo FSSAI_LICENSE; ?></span>
      </div>
    </div>
  </footer>

  <a href="#" id="back-to-top" aria-label="Back to top"><i class="fas fa-arrow-up"></i></a>

  <!-- Floating WhatsApp Widget -->
  <a href="<?php echo WHATSAPP_LINK; ?>" class="whatsapp-float" target="_blank" aria-label="Chat on WhatsApp">
    <i class="fab fa-whatsapp"></i>
  </a>

  <!-- Core JavaScript Imports -->
  <script src="assets/js/main.js" defer></script>
  <script src="assets/js/navbar.js" defer></script>
  <script src="assets/js/scroll.js" defer></script>
  <script src="assets/js/lazyload.js" defer></script>
</body>
</html>
