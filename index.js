"use strict";

const MENU_BUTTON = document.querySelector(".nav__menu-btn");
const NAV = document.querySelector(".nav__navigation");
const navLink = document.querySelectorAll(".nav__navigation-link");
const OVERLAY = document.querySelector(".overlay");
const HEADER = document.querySelector(".hero");
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
    if (e.target.classList.contains("home__nav-link")) {
      const link = e.target;
      const siblings = link
        .closest(".home__nav")
        .querySelectorAll(".home__nav-link");

      siblings.forEach((el) => {
        if (el !== link) el.style.opacity = o;
      });
    }
  };
}

NAV.addEventListener("mouseover", listHover(0.5));
NAV.addEventListener("mouseout", listHover(1));

// TODO: Fix dis ↓↓↓
function textSlide(entries) {
  const [entry] = entries;
  // console.log(entry);
  entry.target.classList.remove("reveal");
}

const aboutObserver = new IntersectionObserver(textSlide, {
  root: document.querySelector(".content__text"),
  threshold: 1,
});

aboutObserver.observe(document.querySelector(".content__text"));

var rot = 360;

SEAL.addEventListener("click", function () {
  SEAL.style.transform = "rotate(" + rot + "deg)";
  rot += 360;
  // console.log(rot);
  // console.log(SEAL.style);
});
