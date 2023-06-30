const GALLERY_CLASSNAME = "gallery__wrapper";
const CAROUSEL_CLASSNAME = "gallery__carousel";
const BUTTON_CLASSNAME = "gallery__button";
const IMG_CLASSNAME = `${CAROUSEL_CLASSNAME}-img`;
const SELECTED_CLASSNAME = `${IMG_CLASSNAME}--selected`;
const GALLERY = document.querySelector(`.${GALLERY_CLASSNAME}`);
const CAROUSEL = document.querySelector(`.${CAROUSEL_CLASSNAME}`);
const THUMBNAILS = document.querySelectorAll(`.${IMG_CLASSNAME}`);
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

const prevImg = () => {
  const selectedImg = document.querySelector(`.${SELECTED_CLASSNAME}`);
  const prevImg = selectedImg.previousElementSibling;

  if (prevImg) prevImg.click();
};

const nextImg = () => {
  const selectedImg = document.querySelector(`.${SELECTED_CLASSNAME}`);
  const nextImg = selectedImg.nextElementSibling;

  if (nextImg) nextImg.click();
};

BUTTON_PREV.addEventListener("click", prevImg);
BUTTON_NEXT.addEventListener("click", nextImg);

THUMBNAILS.forEach((thumbnail) => {
  thumbnail.addEventListener("click", selectPhoto);
});

const init = () => {
  THUMBNAILS[0].classList.add(SELECTED_CLASSNAME);
};

init();
