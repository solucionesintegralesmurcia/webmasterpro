document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const navItems = document.querySelectorAll(".nav-links a");
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });

    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navLinks.classList.remove("show");
      });
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const telefono = document.getElementById("telefono").value.trim();
      const negocio = document.getElementById("negocio").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();

      if (!nombre || !telefono || !negocio || !mensaje) {
        formMessage.textContent = "Por favor, completa todos los campos.";
        formMessage.style.color = "#ff8a8a";
        return;
      }

      formMessage.textContent =
        "Formulario validado. Si quieres recibir contactos reales, luego lo conectamos a Formspree o a otro sistema.";
      formMessage.style.color = "#7dffb2";

      contactForm.reset();
    });
  }
});
