<?php
require_once __DIR__ . '/config.php';

$pageTitle = isset($pageTitle) ? $pageTitle : SITE_NAME . ' | ' . SITE_TAGLINE;
$pageDesc = isset($pageDesc) ? $pageDesc : 'Samarth Eggs Center is a trusted wholesale and retail egg supplier in Mumbai. Fresh farm eggs, brown eggs, country eggs, daily delivery for hotels, bakeries, restaurants and homes.';
$pageCanonical = isset($pageCanonical) ? $pageCanonical : SITE_URL . '/';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo htmlspecialchars($pageTitle); ?></title>
  <meta name="description" content="<?php echo htmlspecialchars($pageDesc); ?>">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <meta name="author" content="Anti Gravity">
  <meta name="theme-color" content="#f4b400">

  <!-- Resource Hints & Preconnects -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>

  <!-- High-Priority Image Preload for LCP Hero -->
  <link rel="preload" href="assets/images/hero/hero-banner.webp" as="image" fetchpriority="high">
  <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" as="style">

  <!-- Canonical & Social Metas -->
  <link rel="canonical" href="<?php echo htmlspecialchars($pageCanonical); ?>">
  <meta property="og:locale" content="en_US">
  <meta property="og:site_name" content="Samarth Eggs Center">
  <meta property="og:title" content="<?php echo htmlspecialchars($pageTitle); ?>">
  <meta property="og:description" content="<?php echo htmlspecialchars($pageDesc); ?>">
  <meta property="og:type" content="website">
  <meta property="og:url" content="<?php echo htmlspecialchars($pageCanonical); ?>">
  <meta property="og:image" content="<?php echo SITE_URL; ?>/assets/images/logo/logo.webp">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Samarth Eggs Center - Fresh Egg Supplier in Mumbai">
  <meta name="twitter:description" content="Fresh Farm Eggs Delivered Across Mumbai. Wholesale &amp; Retail Egg Supply.">
  <meta name="twitter:image" content="<?php echo SITE_URL; ?>/assets/images/logo/logo.webp">

  <!-- Favicon Set & Web App Manifest -->
  <link rel="manifest" href="manifest.json">
  <link rel="icon" type="image/webp" sizes="32x32" href="assets/images/logo/logo.webp">
  <link rel="apple-touch-icon" href="assets/images/logo/logo.webp">

  <!-- Fonts & Icons CSS -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="stylesheet" href="assets/css/responsive.css">

  <!-- WebSite, Organization, LocalBusiness & FAQPage JSON-LD Schema -->
  <script type="application/ld+json">
  [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Samarth Eggs Center",
      "url": "https://samartheggscenter.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://samartheggscenter.com/products.php?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Samarth Eggs Center",
      "url": "https://samartheggscenter.com",
      "logo": "https://samartheggscenter.com/assets/images/logo/logo.webp",
      "telephone": "+918080515150",
      "email": "info@samartheggscenter.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ganesh Narayan Omkarmal Chawal No 99, Room No 05, Opp. Sunder Tower Building, T.J.Road, Sewri West",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400015",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://wa.me/917738515150"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Samarth Eggs Center",
      "image": "https://samartheggscenter.com/assets/images/logo/logo.webp",
      "@id": "https://samartheggscenter.com/#organization",
      "url": "https://samartheggscenter.com",
      "telephone": "+918080515150",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ganesh Narayan Omkarmal Chawal No 99, Room No 05, Opp. Sunder Tower Building, T.J.Road, Sewri West",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400015",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 18.994289,
        "longitude": 72.850510
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "06:00",
        "closes": "21:00"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the minimum volume for a wholesale order?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our minimum wholesale order starts at 5 trays (150 eggs) for local deliveries. For commercial contracts, custom parameters can be set."
          }
        },
        {
          "@type": "Question",
          "name": "How are the eggs transported to maintain freshness?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use dedicated temperature-controlled vans. This ensures minimal temperature fluctuations, keeping shell integrity and protein yolk structure intact during travel."
          }
        },
        {
          "@type": "Question",
          "name": "Do you supply organic, pasture-raised egg options?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We offer fully certified Organic Free-Range Eggs laid by hens fed exclusively organic feed with free outdoor access."
          }
        }
      ]
    }
  ]
  </script>
  <?php if (isset($extraHead)) echo $extraHead; ?>
</head>
<body>

  <!-- Preloader -->
  <div id="preloader">
    <div class="loader"></div>
  </div>

  <!-- Scroll Progress -->
  <div id="scroll-progress"></div>
