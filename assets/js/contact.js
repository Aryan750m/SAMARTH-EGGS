/* contact.js - Form validation, Ajax submission, WhatsApp redirect */
document.addEventListener('DOMContentLoaded', () => {
  
  // Form submission handler helper
  const handleFormSubmit = (formElement, endpoint, successMessage) => {
    if (!formElement) return;

    // Get or create a message container
    let messageContainer = formElement.querySelector('#form-message');
    if (!messageContainer) {
      messageContainer = document.createElement('div');
      messageContainer.id = 'form-message';
      messageContainer.style.display = 'none';
      messageContainer.style.marginTop = '15px';
      messageContainer.style.padding = '12px';
      messageContainer.style.borderRadius = 'var(--radius-sm)';
      messageContainer.style.fontSize = '0.9rem';
      messageContainer.style.textAlign = 'center';
      messageContainer.style.fontWeight = '500';
      formElement.appendChild(messageContainer);
    }

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
        messageContainer.style.display = 'block';
        messageContainer.style.background = '#ffebee';
        messageContainer.style.color = '#c62828';
        messageContainer.style.border = '1px solid #ef9a9a';
        messageContainer.textContent = 'Please complete all required fields.';
        return;
      }

      const submitBtn = formElement.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending request...';
      submitBtn.disabled = true;

      // Hide previous messages
      messageContainer.style.display = 'none';

      try {
        const formData = new FormData(formElement);
        const response = await fetch(endpoint, {
          method: 'POST',
          body: formData
        });

        const resultText = await response.text();

        if (response.ok && resultText.trim() === 'success') {
          formElement.reset();
          messageContainer.style.display = 'block';
          messageContainer.style.background = '#e8f5e9';
          messageContainer.style.color = '#2e7d32';
          messageContainer.style.border = '1px solid #a5d6a7';
          messageContainer.innerHTML = `<strong>Thank you!</strong><br>${successMessage}`;
        } else {
          throw new Error('Something went wrong. Please try again.');
        }
      } catch (error) {
        messageContainer.style.display = 'block';
        messageContainer.style.background = '#ffebee';
        messageContainer.style.color = '#c62828';
        messageContainer.style.border = '1px solid #ef9a9a';
        messageContainer.innerHTML = `<strong>Submission Failed</strong><br>${error.message}`;
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  };

  // Bind to forms
  const contactForm = document.getElementById('contact-form');
  handleFormSubmit(contactForm, 'contact-form.php', 'Thank you for your message! We will get back to you soon.');

  const bulkForm = document.getElementById('bulk-order-form');
  handleFormSubmit(bulkForm, 'contact-form.php', 'Your bulk order request has been submitted successfully.');

  // WhatsApp Click to Chat generator
  const setupWhatsAppButtons = () => {
    const waButtons = document.querySelectorAll('.whatsapp-chat-trigger');
    waButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const phoneNumber = '917738515150'; // Replace with company phone
        const text = encodeURIComponent('Hello Samarth Eggs Center, I would like to make an inquiry regarding farm-fresh eggs supply.');
        window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
      });
    });
  };

  setupWhatsAppButtons();
});
