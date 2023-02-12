setTimeout(function () {
  document.querySelector(".welcome").style.opacity = 0;
  setTimeout(function () {
    document.querySelector(".welcome").style.display = "none";
  }, 1000);
}, 2300);
