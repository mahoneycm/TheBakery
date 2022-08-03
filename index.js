'use strict';

const MENU_BUTTON = document.querySelector('.hero__menu-btn');
const NAV = document.querySelector('.hero__nav');
const navLink = document.querySelectorAll('.hero__nav-link');
const OVERLAY = document.querySelector('.overlay');
const HEADER = document.querySelector('.hero');
const SEAL = document.querySelector('.seal');

// NAVIGATION

MENU_BUTTON.addEventListener('click', function () {
  MENU_BUTTON.classList.toggle('hidden');
  NAV.classList.toggle('opened');
  OVERLAY.classList.toggle('hidden');
});

OVERLAY.addEventListener('click', function () {
  NAV.classList.toggle('opened');
  MENU_BUTTON.classList.remove('hidden');
  OVERLAY.classList.add('hidden');
});

function listHover(o) {
  return function (e) {
    console.log(e.target);
    if (e.target.classList.contains('hero__nav-link')) {
      const link = e.target;
      const siblings = link
        .closest('.hero__nav')
        .querySelectorAll('.hero__nav-link');

      siblings.forEach((el) => {
        if (el !== link) el.style.opacity = o;
      });
    }
  };
}

NAV.addEventListener('mouseover', listHover(0.5));
NAV.addEventListener('mouseout', listHover(1));

// TODO: Fix dis ↓↓↓
function textSlide(entries) {
  const [entry] = entries;
  console.log(entry);
  entry.target.classList.remove('reveal');
}

const aboutObserver = new IntersectionObserver(textSlide, {
  root: null,
  threshold: 1,
});

aboutObserver.observe(document.querySelector('.content__text'));

var rot = 360;

SEAL.addEventListener('click', function () {
  SEAL.style.transform = 'rotate(' + rot + 'deg)';
  rot += 360;
  console.log(rot);
  console.log(SEAL.style);
});
