const GALLERY_CLASSNAME = "gallery__wrapper";
const CAROUSEL_CLASSNAME = "gallery__carousel";
const IMG_CLASSNAME = `${CAROUSEL_CLASSNAME}-img`;
const SELECTED_CLASSNAME = `${IMG_CLASSNAME}--selected`;
const GALLERY = document.querySelector(`.${GALLERY_CLASSNAME}`);
const CAROUSEL = document.querySelector(`.${CAROUSEL_CLASSNAME}`);
const THUMBNAILS = document.querySelectorAll(`.${IMG_CLASSNAME}`);

const selectPhoto = (event) => {
  const target = event.currentTarget;
  const img = target.src;
  const selectedImg = document.querySelector(`.${SELECTED_CLASSNAME}`);

  selectedImg.classList.remove(SELECTED_CLASSNAME);
  target.classList.add(SELECTED_CLASSNAME);
  GALLERY.style.background = `url(${img}) no-repeat center
      center/cover`;
};

THUMBNAILS.forEach((thumbnail) => {
  thumbnail.addEventListener("click", selectPhoto);
});

const init = () => {
  THUMBNAILS[0].classList.add(SELECTED_CLASSNAME);
};

init();
