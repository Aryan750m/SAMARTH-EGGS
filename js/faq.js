/* faq.js - FAQ Accordion Logic */
document.addEventListener('DOMContentLoaded', () => {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const isActive = faqItem.classList.contains('active');

      // Close all other items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        const answer = item.querySelector('.faq-answer');
        if (answer) answer.style.maxHeight = null;
      });

      // Toggle current item
      if (!isActive) {
        faqItem.classList.add('active');
        const answer = faqItem.querySelector('.faq-answer');
        if (answer) {
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      }
    });
  });
});
