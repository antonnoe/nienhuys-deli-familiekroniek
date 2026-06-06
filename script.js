document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".accordion-button");
  const panel = document.querySelector(".accordion-panel");

  if (!button || !panel) {
    return;
  }

  button.addEventListener("click", function () {
    const isOpen = panel.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
    button.textContent = isOpen
      ? "Verberg bronkritische aandachtspunten"
      : "Toon bronkritische aandachtspunten";
  });
});
