// function play() {
//   const homeScreen = document.querySelector("#home-screen");
//   homeScreen.classList.add("hidden");

//   // show here play-ground
//   const playgroundSection = document.getElementById("play-ground");
//   playgroundSection.classList.remove("hidden");
// }

function handleKeyboardKeyUpEvent(event) {
  const playerPressed = event.key;

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
  // console.log(playerPressed, expectedAlphabet);

  // checked match or not
  if (playerPressed === expectedAlphabet) {
    //updated score
    // 1. get current score
    const currentScoreElement = document.getElementById("current-score");
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    console.log(currentScore);

    // 2. increase the score
    const newScore = currentScore + 1;

    // 3. show update score
    currentScoreElement.innerText = newScore;

    // start a new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    // step-1: get the current life number
    // step-2: reduce the life current
    // step-3: display the updated life count
  }
}

// capture keyboard key press
document.addEventListener("keyup", handleKeyboardKeyUpEvent);

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
