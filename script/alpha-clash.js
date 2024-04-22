// function play() {
//   const homeScreen = document.querySelector("#home-screen");
//   homeScreen.classList.add("hidden");

//   // show here play-ground
//   const playgroundSection = document.getElementById("play-ground");
//   playgroundSection.classList.remove("hidden");
// }

function continueGame() {
  // step-1 : generate random alphabet
  const alphabet = getARandomAlphabet();

  // step-2: set randomly generated alphabet to the screen (show it)
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  // set background color
  setBackgroundColorById(alphabet);
}

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}
