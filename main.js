const navEmail = document.querySelector(".navbar-email");
const dektopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

function toggle(element) {
  element.classList.toggle("inactive");
}

navEmail.addEventListener("click", () => toggle(dektopMenu));
menuHamIcon.addEventListener("click", () => toggle(mobileMenu));
