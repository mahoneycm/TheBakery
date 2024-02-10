const SEAL = document.querySelector(".seal");

let rot = 360;

SEAL.addEventListener("click", () => {
  SEAL.style.transform = `rotate(${rot}deg)`;
  rot += 360;
});
