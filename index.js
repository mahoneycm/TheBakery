"use strict";

const MENU_BUTTON = document.querySelector(".hero__menu-btn");
const NAV = document.querySelector(".hero__nav");
const OVERLAY = document.querySelector(".overlay");
const SEAL = document.querySelector(".seal");

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

var rot = 360;

SEAL.addEventListener("click", function () {
  SEAL.style.transform = "rotate(" + rot + "deg)";
  rot += 360;
  console.log(rot);
  console.log(SEAL.style);
});
