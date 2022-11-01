const navEmail = document.querySelector(".navbar-email");
const dektopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

function toggle(element, element2) {
  element.classList.toggle("inactive");

  if (element2 && !element2.classList.contains("inactive")) {
    element2.classList.toggle("inactive");
  }
}

navEmail.addEventListener("click", () => toggle(dektopMenu, aside));
menuHamIcon.addEventListener("click", () => toggle(mobileMenu, aside));
if (window.matchMedia("(min-width: 641px)").matches) {
  menuCarritoIcon.addEventListener("click", () => toggle(aside, dektopMenu));
} else {
  menuCarritoIcon.addEventListener("click", () => toggle(aside, mobileMenu));
}
