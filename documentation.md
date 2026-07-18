# Samarth Eggs Center Website Documentation

This document serves as the guide for installing, configuring, maintaining, and optimizing the Samarth Eggs Center corporate website.

---

## 1. Directory Structure

```text
Samarth-Eggs-Center/
├── index.html            # Main landing page
├── about.html            # Company background & story
├── products.html         # Catalog search & filtering
├── product-details.html  # Dynamic product specification
├── gallery.html          # Masonry lightbox gallery
├── quality.html          # Sourcing & grading protocols
├── bulk-order.html       # Wholesale inquiry form
├── blog.html             # Nutrition articles & guides
├── contact.html          # General support & mapping
│
├── css/
│   ├── variables.css     # Design tokens & color variables
│   ├── style.css         # Page wrappers & reset styles
│   ├── components.css    # Card elements, buttons, faq structures
│   ├── utilities.css     # Spacing, alignment, margin tokens
│   ├── animations.css    # Keyframe drives, scroll entry fades
│   └── responsive.css    # Responsive break-points adjustments
│
├── js/
│   ├── main.js           # Preloaders and intersection triggers
│   ├── navbar.js         # Sticky header scrolling behaviors
│   ├── slider.js         # Testimonials slider engine
│   ├── counter.js        # Statistics counting observers
│   ├── gallery.js        # Filters & lightboxes handling
│   ├── faq.js            # Accordion collapsible items
│   ├── contact.js        # Form validation & Ajax logic
│   ├── lazyload.js       # Deferred WebP image loads
│   └── scroll.js         # Scroll progress & back-to-top anchors
│
└── php/
    ├── config.php        # SMTP targets & spam honeypot settings
    ├── mail.php          # Secure PHP mail validator class
    ├── contact.php       # General inquiries router
    └── bulk-order.php    # Business bulk request router
```

---

## 2. Server Requirements & Installation

1. **Web Server**: Apache / Nginx.
2. **PHP Version**: 7.4 or higher.
3. **Database**: Optional (pure contact validation is done via PHP mail).
4. **SSL Config**: Required (recommended for secure AJAX form submissions over HTTPS).

### Quick Launch Steps
1. Transfer all files in the root folder to the server's public directory (e.g. `public_html` or `var/www/html`).
2. Point your domain registrar to the hosting namespace.
3. Install an SSL certificate (e.g. Let's Encrypt).
4. Open the site in your browser to verify resources load correctly.

---

## 3. Form & Security Configuration

Central email addresses and security parameters can be modified inside `php/config.php`:

```php
// Central email destination coordinates
define('CONTACT_RECEIVER_EMAIL', 'info@samartheggscenter.com');
define('BULK_RECEIVER_EMAIL', 'sales@samartheggscenter.com');

// Set rate limit cooldown in seconds (default is 30 seconds between posts)
define('RATE_LIMIT_COOLDOWN', 30);
```

### Spam Prevention
* **Honeypot Input**: The AJAX submit script checks if the hidden field `website_source_field` is filled out. If so, it instantly discards the request as spam without executing server resources.
* **Rate Limiting**: Users attempting to flood the forms with multiple submissions within 30 seconds will receive a `429 Too Many Requests` response.

---

## 4. SEO & Schema Management

1. **Meta Titles & Descriptions**: Set within the `<head>` of individual HTML files.
2. **JSON-LD Schema**:
   * **LocalBusiness Schema**: Present in `index.html` to assist Google search engines with geographical maps and opening hours recognition.
   * **Product Schema**: Injected dynamically inside `product-details.html` using JavaScript parameter reading.
3. **Sitemaps**: Update `sitemap.xml` whenever adding new pages or blog posts.

---

## 5. Performance Optimization Guide

* **Image Compression**: Always convert images to modern WebP format before uploading to `images/`.
* **Lazy Loading**: Use `loading="lazy"` on image tags. The lazyload engine will only request resources when they are 200px away from the viewer.
* **Defer JS**: JavaScript files are marked with the `defer` attribute. This guarantees scripts do not block HTML parsing, boosting critical Lighthouse metrics.
