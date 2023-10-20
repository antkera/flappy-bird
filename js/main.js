// * DOM ELEMENTS & GLOBAL VARIABLES
let startButtonNode = document.querySelector("#start-btn");
let splashScreenNode = document.querySelector("#splash-screen");
let gameScreenNode = document.querySelector("#game-screen");
let gameBoxNode = document.querySelector("#game-box");
let gameOverScreenNode = document.querySelector("#gameover-screen");
let gameObject;

// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  splashScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";
  gameObject = new Game();
  gameObject.gameLoop();
};

// * EVENT LISTENERS
startButtonNode.addEventListener("click", startGame);
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    gameObject.pollito.jump();
  }
});
