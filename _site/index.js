"use strict";

const MENU_BUTTON = document.querySelector(".header__menu-btn");
const NAV = document.querySelector(".header__nav");
const navLink = document.querySelectorAll(".header__nav-link");
const OVERLAY = document.querySelector(".overlay");
const HEADER = document.querySelector(".header");
const SEAL = document.querySelector(".seal");

// NAVIGATION

let navOpen = false;

MENU_BUTTON.addEventListener("click", function () {
  MENU_BUTTON.classList.toggle("hidden");
  NAV.classList.toggle("opened");
  OVERLAY.classList.toggle("hidden");
  navOpen = !navOpen;
});

function closeNav() {
  NAV.classList.remove("opened");
  MENU_BUTTON.classList.remove("hidden");
  OVERLAY.classList.add("hidden");

  navOpen = false;
}

OVERLAY.addEventListener("click", closeNav);

window.onscroll = function (e) {
  if (navOpen) {
    closeNav();
  }
};

function listHover(o) {
  return function (e) {
    console.log(e.target);
    if (e.target.classList.contains("hero__nav-link")) {
      const link = e.target;
      const siblings = link
        .closest(".hero__nav")
        .querySelectorAll(".hero__nav-link");

      siblings.forEach((el) => {
        if (el !== link) el.style.opacity = o;
      });
    }
  };
}

NAV.addEventListener("mouseover", listHover(0.5));
NAV.addEventListener("mouseout", listHover(1));

// TODO: Fix dis ↓↓↓
// function textSlide(entries) {
//   const [entry] = entries;
//   console.log(entry);
//   entry.target.classList.remove("reveal");
// }

// const aboutObserver = new IntersectionObserver(textSlide, {
//   root: document.querySelector(".content__text"),
//   threshold: 1,
// });

// aboutObserver.observe(document.querySelector(".content__text"));

var rot = 360;

console.log(SEAL);

SEAL.addEventListener("click", function () {
  console.log("CLICK");
  SEAL.style.transform = "rotate(" + rot + "deg)";
  rot += 360;
  console.log(rot);
  console.log(SEAL.style);
});
