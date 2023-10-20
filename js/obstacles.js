class Obstacle {
  constructor(type, yPosition) {
    // type => "top"  o "bottom"
    this.node = document.createElement("img");

    if (type === "top"){    
    this.node.src = "./images/obstacle_top.png";
    }else if(type === "bottom"){
      this.node.src = "./images/obstacle_bottom.png";
    }

    gameBoxNode.append(this.node);

    this.w = 50; //weight
    this.h = 200; //heigth
    this.x = 700; // posicion eje x (desde la derecha)
    this.y = yPosition; // posicion eje y (desde arriba)

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;

    this.speed = 1
  }

automaticMovement = () => {
  this.x -= this.speed
  this.node.style.left = `${this.x}px`;
}

}
