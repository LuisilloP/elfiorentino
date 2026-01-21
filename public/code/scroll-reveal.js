document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Animar solo una vez
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.reveal-on-scroll, .reveal-fade-in');
  revealElements.forEach(element => observer.observe(element));
});
