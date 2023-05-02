const words = document.getElementById("scroll--child");
const section = document.querySelector("#scrolling");

words.style.right = section.offsetWidth + "px";

const moveImage = () => {
  words.style.right = parseInt(words.style.right) - 1 + "px";

  if (parseInt(words.style.right) + words.offsetWidth <= 0) {
    words.style.right = section.offsetWidth + "px";
  }
};

const intervalId = setInterval(moveImage, 2);