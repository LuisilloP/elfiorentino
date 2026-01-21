const header = document.querySelector("[data-site-header]");
const menuButton = document.querySelector("[data-menu-button]");
const mobileOverlay = document.querySelector("[data-mobile-overlay]");
const mobilePanel = document.querySelector("[data-mobile-panel]");
const closeButton = document.querySelector("[data-menu-close]");
const navLinks = Array.from(document.querySelectorAll("[data-nav-link]"));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const SCROLL_PADDING = 12;

const setMenuState = (isOpen) => {
  if (!mobileOverlay) return;
  mobileOverlay.classList.toggle("is-open", isOpen);
  mobileOverlay.setAttribute("aria-hidden", (!isOpen).toString());
  document.body.classList.toggle("mobile-menu-open", isOpen);
  menuButton?.setAttribute("aria-expanded", isOpen.toString());
  menuButton?.classList.toggle("is-open", isOpen);
  if (isOpen) {
    mobilePanel?.focus({ preventScroll: true });
  }
};

const closeMenu = () => setMenuState(false);
const openMenu = () => setMenuState(true);

const toggleMenu = () => {
  const isOpen = mobileOverlay?.classList.contains("is-open");
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
};

const handleOverlayClick = (event) => {
  const target = event.target;
  if (target?.hasAttribute?.("data-overlay-backdrop")) {
    closeMenu();
  }
};

const handleResize = () => {
  if (window.innerWidth >= 768) {
    closeMenu();
  }
};

const updateHeaderState = () => {
  const threshold = 8;
  const isHome = window.location.pathname === "/";
  if (!header) return;
  if (window.scrollY > threshold || !isHome) {
    header.classList.add("is-scrolled");
  } else {
    header.classList.remove("is-scrolled");
  }
};

const scrollToTarget = (targetId) => {
  if (!targetId) return false;
  const targetElement = document.getElementById(targetId);
  if (!targetElement) return false;

  const headerHeight = header?.offsetHeight ?? 0;
  const offset = headerHeight + SCROLL_PADDING;
  const yOffset = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({
    top: yOffset,
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });

  return true;
};

const handleNavClick = (event) => {
  const link = event.currentTarget;
  if (!(link instanceof HTMLElement)) return;

  const href = link.getAttribute("href") ?? "";
  const target = link.getAttribute("data-nav-target") ?? href.replace("#", "");
  if (!target) return;

  if (window.location.pathname !== "/") {
    localStorage.setItem("scrollTarget", target);
    window.location.href = "/";
    return;
  }

  event.preventDefault();
  closeMenu();
  scrollToTarget(target);
};

const hydrateSavedScroll = () => {
  const savedTarget = localStorage.getItem("scrollTarget");
  const hashTarget = window.location.hash ? window.location.hash.replace("#", "") : "";
  const target = savedTarget || hashTarget;
  if (!target) return;

  const runScroll = () => {
    const didScroll = scrollToTarget(target);
    if (didScroll && savedTarget) {
      localStorage.removeItem("scrollTarget");
    }
  };

  requestAnimationFrame(runScroll);
};

menuButton?.addEventListener("click", toggleMenu);
mobileOverlay?.addEventListener("click", handleOverlayClick);
closeButton?.addEventListener("click", closeMenu);
navLinks.forEach((link) => link.addEventListener("click", handleNavClick));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener("resize", handleResize);
window.addEventListener("scroll", updateHeaderState, { passive: true });

updateHeaderState();
hydrateSavedScroll();
