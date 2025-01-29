const button = document.querySelector("#menu-button");
const menuOpen = document.querySelector("#menu-open");
const navBtn = document.querySelectorAll(".nav-button-h");
const navBar = document.getElementById("navBar");

if (navBtn) {
  navBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-info"); //  ID del destino
      if (window.location.pathname !== "/") {
        // Guardar el destino en el almacenamiento local
        localStorage.setItem("scrollTarget", target || "");

        // Redirigir al index
        window.location.href = "/";
        return; // Detener ejecución hasta redirigir
      }

      menuOpen?.classList.add("hidden");

      const targetElement = document.querySelector(`#${target}`);

      if (targetElement) {
        const offset = -110; // Ajusta este valor según necesites
        const yOffset =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset +
          offset;
        window.scrollTo({ top: yOffset, behavior: "smooth" });
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 0) {
      navBar?.classList.add("bg-[#111111F2]");
    } else if (document.title != "El Fiorentino") {
      navBar?.classList.add("bg-[#111111F2]");
    } else {
      navBar?.classList.remove("bg-[#111111F2]");
      menuOpen?.classList.add("hidden");
    }
  };
  handleScroll();
  window.addEventListener("scroll", handleScroll);

  //local storage
  const scrollTarget = localStorage.getItem("scrollTarget");
  if (scrollTarget) {
    const targetElement = document.querySelector(`#${scrollTarget}`);
    if (targetElement) {
      const offset = -120; // Ajusta este valor según necesites
      const yOffset =
        targetElement.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
    localStorage.removeItem("scrollTarget"); // Limpiar el destino guardado
  }
});
