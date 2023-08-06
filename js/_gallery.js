/* eslint-disable no-unused-expressions */
const GALLERY_CLASSNAME = "gallery__wrapper";
const CAROUSEL_CLASSNAME = "gallery__carousel";
const BUTTON_CLASSNAME = "gallery__button";
const IMG_CLASSNAME = `${CAROUSEL_CLASSNAME}-img`;
const SELECTED_CLASSNAME = `${IMG_CLASSNAME}--selected`;
const GALLERY = document.querySelector(`.${GALLERY_CLASSNAME}`);
const THUMBNAILS = document.querySelectorAll(`.${IMG_CLASSNAME}`);
const LAST_IMG_INDEX = THUMBNAILS.length;
const FIRST_IMG = THUMBNAILS[0];
const LAST_IMG = THUMBNAILS[LAST_IMG_INDEX - 1];
const BUTTON_PREV = document.querySelector(`.${BUTTON_CLASSNAME}--prev`);
const BUTTON_NEXT = document.querySelector(`.${BUTTON_CLASSNAME}--next`);

const selectPhoto = (event) => {
  const target = event.currentTarget;
  const img = target.src;
  const selectedImg = document.querySelector(`.${SELECTED_CLASSNAME}`);

  selectedImg.classList.remove(SELECTED_CLASSNAME);
  target.classList.add(SELECTED_CLASSNAME);
  target.scrollIntoView({ behavior: "smooth", block: "nearest" });
  GALLERY.style.background = `url(${img}) no-repeat center
      center/cover`;
};

const selectPrevImg = () => {
  const selectedImg = document.querySelector(`.${SELECTED_CLASSNAME}`);
  const prevImg = selectedImg.previousElementSibling;

  prevImg ? prevImg.click() : LAST_IMG.click();
};

const selectNextImg = () => {
  const selectedImg = document.querySelector(`.${SELECTED_CLASSNAME}`);
  const nextImg = selectedImg.nextElementSibling;

  nextImg ? nextImg.click() : FIRST_IMG.click();
};

const init = () => {
  FIRST_IMG.classList.add(SELECTED_CLASSNAME);

  BUTTON_PREV.addEventListener("click", selectPrevImg);
  BUTTON_NEXT.addEventListener("click", selectNextImg);

  THUMBNAILS.forEach((thumbnail) => {
    thumbnail.addEventListener("click", selectPhoto);
  });
};

if (GALLERY) {
  init();
}
