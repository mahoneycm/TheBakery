const SEAL = document.querySelector(".seal");

var rot = 360;

SEAL.addEventListener("click", function () {
  SEAL.style.transform = "rotate(" + rot + "deg)";
  rot += 360;
});