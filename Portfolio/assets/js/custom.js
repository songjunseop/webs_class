// nav
const menuList = document.querySelectorAll(".menuBox__list li a");

document.querySelector(".nav__bar").addEventListener("click", () => {
  document.querySelector(".nav__bar").classList.toggle("active");
});
