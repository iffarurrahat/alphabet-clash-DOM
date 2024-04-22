// function play() {
//   const homeScreen = document.querySelector("#home-screen");
//   homeScreen.classList.add("hidden");

//   // show here play-ground
//   const playgroundSection = document.getElementById("play-ground");
//   playgroundSection.classList.remove("hidden");
// }

function handleKeyboardKeyUpEvent(event) {
  const playerPressed = event.key;
  console.log("player pressed", playerPressed);

  // stop the game if pressed 'Escape
  if (playerPressed === "Escape") {
    gameOver();
  }

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
  // console.log(playerPressed, expectedAlphabet);

  // checked match or not
  if (playerPressed === expectedAlphabet) {
    const currentScore = getTextElementValueById("current-score");
    const updatedScore = currentScore + 1;
    setTextElementValueById("current-score", updatedScore);

    // <-!------------long way code--------------!->
    // // updated score
    // // 1. get current score
    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);

    // // 2. increase the score
    // const newScore = currentScore + 1;

    // // 3. show update score
    // currentScoreElement.innerText = newScore;

    // start a new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    const currentLife = getTextElementValueById("current-life");
    const updatedLife = currentLife - 1;
    setTextElementValueById("current-life", updatedLife);

    if (updatedLife === 0) {
      gameOver();
    }

    // <-!------------long way code--------------!->
    // // step-1: get the current life number
    // const currentLifeElement = document.getElementById("current-life");
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // // step-2: reduce the life current
    // const newLife = currentLife - 1;
    // // step-3: display the updated life count
    // currentLifeElement.innerText = newLife;
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
  // hide everything show only playground
  hideElementById("home-screen");
  hideElementById("final-score");
  showElementById("play-ground");

  // reset score and life
  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);

  continueGame();
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");

  // updated final score
  // 1. get the final score
  const lastScore = getTextElementValueById("current-score");
  setTextElementValueById("game-score", lastScore);

  // clear the last selected alphabet highlight
  const currentAlphabet = getTextElementById("current-alphabet");
  // console.log(currentAlphabet);
  removeBackgroundColorById(currentAlphabet);
}
