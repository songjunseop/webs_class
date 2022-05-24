// nav
// const menuList = document.querySelectorAll(".menuBox__list li a");

// document.querySelector(".nav__bar").addEventListener("click", () => {
//   document.querySelector(".nav__bar").classList.toggle("active");
// });

// gsap.to("#nav", {
//   duration: 2,
//   ease: "power4.out",
//   height: 95 + "%",
//   delay: 2,
//   opacity: 1,
// });

var menuBtn = document.querySelector(".menu-btn");
var nav = document.querySelector("nav");
var lineOne = document.querySelector("nav .menu-btn .line--1");
var lineTwo = document.querySelector("nav .menu-btn .line--2");
var lineThree = document.querySelector("nav .menu-btn .line--3");
var link = document.querySelector("nav .nav-links");
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  lineOne.classList.toggle("line-cross");
  lineTwo.classList.toggle("line-fade-out");
  lineThree.classList.toggle("line-cross");
  link.classList.toggle("fade-in");
});

// function resize() {
//   if (window.innerWidth <= 1000) {
//     gsap.to("#nav", {
//       width: 96 + "%",
//       height: 80,
//       duration: 0,
//       ease: "power4.out",
//     });
//   } else {
//     gsap.to("#nav", {
//       duration: 0,
//       ease: "power4.out",
//       width: 80,
//       height: 95 + "%",
//       opacity: 1,
//     });
//   }
//   requestAnimationFrame(resize);
// }
// resize();

// scroll
// window.addEventListener("scroll", () => {
//   let scrollTop =
//     window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
//   document.querySelector(".scrollTop").innerText = Math.round(scrollTop);
// });

// emailto
(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("GSs2Ez7xb-39AuLsy");
})();
window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("#submitBtn", function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs
        .sendForm(
          "#contact_number",
          "#user_name",
          "#user_email",
          "#user_phone",
          "#message",
          this
        )
        .then(
          function () {
            console.log("SUCCESS!");
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    });
};
