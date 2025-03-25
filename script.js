
// JavaScript
document.addEventListener('DOMContentLoaded', function() {
   // Initialize Masonry layout for graphic design grid
   if (document.querySelector('[data-masonry]')) {
       new Masonry('[data-masonry]', {
           itemSelector: '.col',
           percentPosition: true
       });
   }

   // Smooth scrolling for anchor links
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
       anchor.addEventListener('click', function(e) {
           e.preventDefault();
           document.querySelector(this.getAttribute('href')).scrollIntoView({
               behavior: 'smooth'
           });
       });
   });

   // Form submission handler
   const contactForm = document.getElementById('contactForm');
   if (contactForm) {
       contactForm.addEventListener('submit', function(e) {
           e.preventDefault();
           alert('Thank you for your message! We will get back to you soon.');
           this.reset();
       });
   }

   // Add animation class to sections when they come into view
   const sections = document.querySelectorAll('section');
   const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
           if (entry.isIntersecting) {
               entry.target.classList.add('fade-in');
           }
       });
   }, { threshold: 0.1 });

   sections.forEach(section => {
       observer.observe(section);
   });
});
