class Nave {
  constructor() {
    // nodo
    this.node = document.createElement("img");
    this.node.src = "./images/flappy.png"; 
    gameBoxNode.append(this.node);
    this.w = 50; //weight
    this.h = 50; //heigth
    this.x = 70; // posicion eje x (desde la derecha)
    this.y = 200; // posicion eje y (desde la arriba)
    this.gravitySpeed = 0.5;
    this.jumpSpeed = 30;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
  }

  gravityEffect = () => {  
    this.y += this.gravitySpeed;
    this.node.style.top = `${this.y}px`;
  };

  jump = () => {    
    this.y -= this.jumpSpeed;
  };

}
