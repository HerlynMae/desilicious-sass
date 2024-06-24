const burgerMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector("nav .header__nav");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
});

const headerScroll = document.querySelector(".header__wrapper");
// console.log.window;
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    headerScroll.classList.add("open");
  } else {
    headerScroll.classList.remove("open");
  }
});
