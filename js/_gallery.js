const GALLERY__CLASSNAME = "gallery__wrapper";
const CAROUSEL__CLASSNAME = "gallery__carousel";
const GALLERY = document.querySelector(`.${GALLERY__CLASSNAME}`);
const CAROUSEL = document.querySelector(`.${CAROUSEL__CLASSNAME}`);
const THUMBNAILS = document.querySelectorAll(`.${CAROUSEL__CLASSNAME}-img`);

const selectPhoto = (event) => {
  const target = event.currentTarget;
  const img = target.src;

  GALLERY.style.background = `url(${img}) no-repeat center
      center/cover`;
};

THUMBNAILS.forEach((thumbnail) => {
  thumbnail.addEventListener("click", selectPhoto);
});
