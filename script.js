// Simple interactivity: mobile nav toggle, copy-email, smooth scroll
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });

  // Copy email quick button
  const copyBtn = document.getElementById('copy-email');
  copyBtn.addEventListener('click', () => {
    navigator.clipboard?.writeText('vinaynasika@gmail.com')
      .then(() => {
        copyBtn.textContent = 'Copied!';
        setTimeout(() => copyBtn.textContent = 'Copy Email', 1800);
      })
      .catch(() => {
        alert('Copy failed — please copy manually: vinaynasika@gmail.com');
      });
  });

  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        // close mobile nav after click
        if (mainNav.classList.contains('open')) mainNav.classList.remove('open');
      }
    });
  });

  // Simple form submit handler (placeholder)
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    // If you have a real endpoint, remove this and let it submit
    e.preventDefault();
    alert('This demo form does not submit. Replace action with your form endpoint (e.g. Formspree).');
  });
});
