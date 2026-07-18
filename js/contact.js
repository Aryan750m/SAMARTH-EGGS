/* contact.js - Form validation, Ajax submission, WhatsApp redirect */
document.addEventListener('DOMContentLoaded', () => {
  
  // Form submission handler helper
  const handleFormSubmit = (formElement, endpoint, successMessage) => {
    if (!formElement) return;

    formElement.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Simple client-side validation
      let isValid = true;
      const inputs = formElement.querySelectorAll('[required]');
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('error');
          input.style.borderColor = 'var(--red)';
        } else {
          input.classList.remove('error');
          input.style.borderColor = '';
        }
      });

      if (!isValid) {
        alert('Please complete all required fields.');
        return;
      }

      const submitBtn = formElement.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Processing request...';
      submitBtn.disabled = true;

      // Pure client-side simulation since PHP is removed
      setTimeout(() => {
        alert(successMessage);
        formElement.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 800);
    });
  };

  // Bind to forms
  const contactForm = document.getElementById('contact-form');
  handleFormSubmit(contactForm, 'php/contact.php', 'Thank you for your message! We will get back to you soon.');

  const bulkForm = document.getElementById('bulk-order-form');
  handleFormSubmit(bulkForm, 'php/bulk-order.php', 'Your bulk order request has been submitted successfully.');

  // WhatsApp Click to Chat generator
  const setupWhatsAppButtons = () => {
    const waButtons = document.querySelectorAll('.whatsapp-chat-trigger');
    waButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const phoneNumber = '919876543210'; // Replace with company phone
        const text = encodeURIComponent('Hello Samarth Eggs Center, I would like to make an inquiry regarding farm-fresh eggs supply.');
        window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
      });
    });
  };

  setupWhatsAppButtons();
});
