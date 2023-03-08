const welcomePg = document.querySelector(".welcome");
const nav = document.querySelector("#navHeader");
const links = document.querySelector("#icons");

setTimeout(function () {
  welcomePg.style.opacity = 0;
  welcomePg.style.zIndex = -4;
}, 2370
)

setTimeout(function () {
  nav.style.zIndex = 1;
}, 2370
)

setTimeout(function () {
  links.style.zIndex = 1;
}, 2370
)
// setTimeout(function () {
//   turned.style.zIndex = 1;
// }, 2370
// )