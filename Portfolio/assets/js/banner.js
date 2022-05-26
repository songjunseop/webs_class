// banner

// 한글자씩 올라오기
// gsap.from(".section__box .section__box__right h4", {
//   opacity: 0,
// });

// setTimeout(() => {
//   gsap.to(".section__box .section__box__right h4", {
//     opacity: 1,
//   });
// }, 3000);

// gsap.from(".section__box .section__box__right h4 span span", {
//   stagger: {
//     amount: 2,
//   },
//   y: 100,
//   delay: 3,
//   opacity: 0,
// });
// setTimeout(() => {
//   gsap.to(".section__box .section__box__right h4 span span", {
//     stagger: {
//       amount: 2,
//     },
//     y: 0,
//     delay: 3,
//     opacity: 1,
//   });
// }, 3000);

// let content = document.querySelectorAll(".banner__title");
// content.forEach((el) => {
//   let splitText = el.innerText;
//   let splitWrap = splitText
//     .split("")
//     .join("</span></span><span><span aria-hidden='true'>");
//   splitWrap = "<span aria-hidden='true'><span>" + splitWrap + "</span></span>";
//   el.innerHTML = splitWrap;
//   el.setAttribute("aria-label", splitText);
// });

// 한번에 올라오기
// gsap.to(".section__box__right h4:nth-child(1)", {
//   ease: "power4.out",
//   delay: 3,
//   duration: 1,
//   y: 0,
//   opacity: 1,
// });
// gsap.to(".section__box__right h4:nth-child(2)", {
//   ease: "power4.out",
//   delay: 3.5,
//   duration: 1,
//   y: 0,
//   opacity: 1,
// });
// gsap.to(".section__box__right h4:nth-child(3)", {
//   ease: "power4.out",
//   delay: 4,
//   duration: 1,
//   y: 0,
//   opacity: 1,
// });
// gsap.to(".section__box__right h4:nth-child(4)", {
//   ease: "power4.out",
//   delay: 4.5,
//   duration: 1,
//   y: 0,
//   opacity: 1,
// });
