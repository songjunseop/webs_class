// nav
const menuList = document.querySelectorAll(".menuBox__list li a");

document.querySelector(".nav__bar").addEventListener("click", () => {
  document.querySelector(".nav__bar").classList.toggle("active");
});

// scroll
window.addEventListener("scroll", () => {
  let scrollTop =
    window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
  document.querySelector(".scrollTop").innerText = Math.round(scrollTop);
});

// banner
gsap.to("#nav", {
  // top: 24,
  duration: 2,
  ease: "power4.out",
  height: 95 + "%",
  delay: 3,
  opacity: 1,
});

if (window.screen.width <= 1000) {
  gsap.to("#nav", {
    width: 96 + "%",
    duration: 2,
    ease: "power4.out",
    delay: 3,
  });
}

gsap.to(".circle", {
  duration: 2,
  ease: "power4.out",
  delay: 3,
  // width: 100 + "vw",
  // height: 100 + "vw",
  scale: 1,
});

gsap.to(".section__box__left", {
  duration: 3,
  ease: "power4.out",
  delay: 1,
  height: 100 + "%",
});

gsap.to(".section__box__left02", {
  duration: 2,
  ease: "power4.out",
  delay: 3,
  width: 100 + "%",
});

gsap.to(".banner__desc", {
  ease: "power4.out",
  delay: 4,
  duration: 2,
  y: 0,
  opacity: 1,
});

gsap.to(".section__box__right", {
  ease: "power4.out",
  delay: 1,
  duration: 3,
  height: 100 + "%",
  opacity: 1,
});

gsap.to(".section__box__right h4:nth-child(1)", {
  ease: "power4.out",
  delay: 4,
  duration: 1,
  y: 0,
  opacity: 1,
});
gsap.to(".section__box__right h4:nth-child(2)", {
  ease: "power4.out",
  delay: 4.5,
  duration: 1,
  y: 0,
  opacity: 1,
});
gsap.to(".section__box__right h4:nth-child(3)", {
  ease: "power4.out",
  delay: 5,
  duration: 1,
  y: 0,
  opacity: 1,
});
gsap.to(".section__box__right h4:nth-child(4)", {
  ease: "power4.out",
  delay: 5.5,
  duration: 1,
  y: 0,
  opacity: 1,
});
