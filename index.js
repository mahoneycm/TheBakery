"use strict";

const MENU_BUTTON = document.querySelector(".hero__menu-btn");
const NAV = document.querySelector(".hero__nav");
const navLink = document.querySelectorAll(".hero__nav-link");
const OVERLAY = document.querySelector(".overlay");
const HEADER = document.querySelector(".hero");
const SEAL = document.querySelector(".seal");

// NAVIGATION

MENU_BUTTON.addEventListener("click", function () {
  MENU_BUTTON.classList.toggle("hidden");
  NAV.classList.toggle("opened");
  OVERLAY.classList.toggle("hidden");
});

OVERLAY.addEventListener("click", function () {
  NAV.classList.toggle("opened");
  MENU_BUTTON.classList.remove("hidden");
  OVERLAY.classList.add("hidden");
});

function listHover(o) {
  return function (e) {
    console.log(e.target);
    if (e.target.classList.contains("hero__nav-link")) {
      const link = e.target;
      const siblings = link
        .closest(".hero__nav")
        .querySelectorAll(".hero__nav-link");

      console.log(link);

      siblings.forEach((el) => {
        if (el !== link) el.style.opacity = o;
      });
    }
  };
}

NAV.addEventListener("mouseover", listHover(0.5));
NAV.addEventListener("mouseout", listHover(1));

// const handleHover = function (o) {
//   return function (e) {
//     if (e.target.classList.contains("nav__link")) {
//       const link = e.target;
//       const siblings = link.closest(".nav").querySelectorAll(".nav__link");
//       const logo = link.closest(".nav").querySelector("img");

//       siblings.forEach((el) => {
//         if (el !== link) el.style.opacity = o;
//       });

//       logo.style.opacity = o;
//     }
//   };
// };

// nav.addEventListener("mouseover", handleHover(0.5));
// nav.addEventListener("mouseout", handleHover(1));

var rot = 360;

SEAL.addEventListener("click", function () {
  SEAL.style.transform = "rotate(" + rot + "deg)";
  rot += 360;
  console.log(rot);
  console.log(SEAL.style);
});

// window.addEventListener("scroll", function () {
//   const distance = window.scrollY;
//   HERO.style.transform = `translateY(${distance * 1}px)`;
// });
