class Game {
  constructor() {
    // Propiedades del juego (cosas)
    this.isGameOn = true;
    this.timer = 0;
    this.obstacleArr = [];
    this.pollito = new Nave();
  }

  // Métodos (acciones)

  collisionCheckPollitoObstacles = () => {
    this.obstacleArr.forEach((eachObstacle) => {
      if (
        eachObstacle.x < this.pollito.x + this.pollito.w &&
        eachObstacle.x + eachObstacle.w > this.pollito.x &&
        eachObstacle.y < this.pollito.y + this.pollito.h &&
        eachObstacle.y + eachObstacle.h > this.pollito.y
      ) {
        console.log("el pollito se estrelló");
        this.gameOver();
      }
    });
  };

  gameOver = () => {
    this.isGameOn = false;
    gameScreenNode.style.display = "none";
    gameOverScreenNode.style.display = "flex";
  };

  obstacleDestroy = () => {
    if (this.obstacleArr[0].x < -60) {
      this.obstacleArr[0].node.remove();
      this.obstacleArr.shift();
    }
  };

  obstacleAppear = () => {
    if (this.timer % 180 === 0) {
      let randomPosition = Math.random() * -100;
      let randomPosition2 = randomPosition + 350;

      this.obstacleArr.push(new Obstacle("top", randomPosition));
      this.obstacleArr.push(new Obstacle("bottom", randomPosition2));
    }
  };

  gameLoop = () => {
    this.pollito.gravityEffect();
    this.obstacleAppear();
    this.obstacleDestroy();
    
    this.obstacleArr.forEach((eachObstacle) => {
      eachObstacle.automaticMovement();
    });

    this.collisionCheckPollitoObstacles();
    this.timer++;
    
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
