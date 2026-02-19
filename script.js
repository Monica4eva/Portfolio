// Simple mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
  });
}
