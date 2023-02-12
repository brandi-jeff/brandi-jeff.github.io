const welcomeText = document.getElementById("welcome-text");
const welcomePage = document.getElementById("welcome-page");
const welcomeMessage = "welcome";
let i = 0;

const addLetter = () => {
  if (i < welcomeMessage.length) {
    const letter = welcomeMessage.charAt(i);
    welcomeText.innerHTML += `<span>${letter}</span>`;
    i++;
    setTimeout(addLetter, 500);
  } else {
    setTimeout(() => {
      welcomePage.style.opacity = 0;
      setTimeout(() => {
        welcomePage.style.display = "none";
      }, 1000);
    }, 1000);
  }
};

addLetter();
