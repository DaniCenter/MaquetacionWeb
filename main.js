const navEmail = document.querySelector(".navbar-email");
const dektopMenu = document.querySelector(".desktop-menu");

navEmail.addEventListener("click", toggleDesktopMenu);
function toggleDesktopMenu() {
  dektopMenu.classList.toggle("inactive");
}
