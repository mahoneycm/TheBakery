/* eslint-disable no-unused-expressions */
const HEADER = document.querySelector(".header");
const HERO = document.querySelector(".hero");
const MENU_BUTTON = document.querySelector(".header__menu-btn");
const NAV = document.querySelector(".header__nav");
const OVERLAY = document.querySelector(".overlay");
const STICKY = "header--sticky";

let navOpen = false;

MENU_BUTTON.addEventListener("click", () => {
  MENU_BUTTON.classList.toggle("hidden");
  NAV.classList.toggle("opened");
  OVERLAY.classList.toggle("hidden");

  navOpen = !navOpen;
});

const closeNav = () => {
  NAV.classList.remove("opened");
  MENU_BUTTON.classList.remove("hidden");
  OVERLAY.classList.add("hidden");

  navOpen = false;
};

OVERLAY.addEventListener("click", closeNav);

window.onscroll = () => {
  if (navOpen) {
    closeNav();
  }
};

function listHover(o) {
  return function (e) {
    if (e.target.classList.contains("header__nav-link")) {
      const link = e.target;
      const siblings = link
        .closest(".header__nav")
        .querySelectorAll(".header__nav-link");

      siblings.forEach((el) => {
        const sibling = el;
        if (sibling !== link) sibling.style.opacity = o;
      });
    }
  };
};

NAV.addEventListener("mouseover", listHover(0.5));
NAV.addEventListener("mouseout", listHover(1));

const stickyHeader = (entries) => {
  entries.forEach((entry) => {
    entry.isIntersecting
      ? HEADER.classList.remove(STICKY)
      : HEADER.classList.add(STICKY);
  });
};

const heroObserver = new IntersectionObserver(stickyHeader, {
  root: null,
  threshold: 0.2,
});

heroObserver.observe(HERO);
