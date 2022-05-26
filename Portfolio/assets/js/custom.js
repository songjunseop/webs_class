// nav

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
