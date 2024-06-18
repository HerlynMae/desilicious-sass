const burgerMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector("nav .header__nav");

burgerMenu = addEventListener("click", () => {
  burgerMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
});
