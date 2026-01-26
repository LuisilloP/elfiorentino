document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const supportsIO = 'IntersectionObserver' in window;
  const revealElements = document.querySelectorAll('.reveal-on-scroll, .reveal-fade-in');

  const revealElement = (element, immediate = false) => {
    if (!element || element.dataset.revealed === 'true') return;
    element.dataset.revealed = 'true';

    if (prefersReducedMotion || immediate) {
      element.classList.add('is-visible');
      return;
    }

    // Wait two frames so Safari/iOS paints the initial state before transitioning
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        element.classList.add('is-visible');
      });
    });
  };

  if (prefersReducedMotion || !supportsIO) {
    revealElements.forEach((element) => revealElement(element, true));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -12% 0px',
    threshold: [0, 0.08, 0.2],
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        revealElement(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const hydrateInitial = () => {
    revealElements.forEach((element) => observer.observe(element));

    // Safari/iOS sometimes delays IO on first paint; ensure above-the-fold items animate
    requestAnimationFrame(() => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      revealElements.forEach((element) => {
        if (element.dataset.revealed === 'true') return;
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < viewportHeight * 0.92 && rect.bottom > 0;
        if (isVisible) {
          revealElement(element);
          observer.unobserve(element);
        }
      });
    });
  };

  // Defer observation until after the first paint to avoid instant visibility on fast devices
  requestAnimationFrame(hydrateInitial);
});
