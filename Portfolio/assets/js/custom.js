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

function resize() {
  if (window.innerWidth <= 1000) {
    if (document.querySelector(".nav__bar").classList.contains("nav-open")) {
      gsap.to("#header", {
        width: 96 + "%",
        height: 400,
      });
      gsap.to(".nav__bar", {
        width: 100 + "%",
        height: 400,
      });
      gsap.to(".menu-btn", {
        top: 30,
        right: 5 + "%",
      });
    } else {
      gsap.to("#header", {
        width: 96 + "%",
        height: 80,
      });
      gsap.to(".nav__bar", {
        width: 100 + "%",
        height: 80,
      });
      gsap.to(".menu-btn", {
        top: 30,
        right: 5 + "%",
      });
      gsap.to(".nav__text", {
        top: 6 + "%",
      });
    }
  } else {
    if (document.querySelector(".nav__bar").classList.contains("nav-open")) {
      gsap.to(".nav__bar", {
        width: 400,
        duration: 1,
        ease: "power4.out",
      });
      gsap.to(".nav__text", {
        top: 6.8 + "%",
      });
      gsap.to(".menu-btn", {
        top: 8 + "%",
        right: 8 + "%",
      });
      // gsap.to(".nav__text", {
      //   top: 6.5 + "%",
      // });
    } else {
      gsap.to("#header", {
        width: 80,
        height: 95 + "%",
      });
      gsap.to(".nav__bar", {
        width: 100 + "%",
        height: 100 + "%",
      });
      gsap.to(".menu-btn", {
        top: 8 + "%",
        right: 30 + "%",
      });
    }
  }
  requestAnimationFrame(resize);
}
resize();
