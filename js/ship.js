class Ship {
  constructor() {
    this.positionX = 35;
    this.positionY = 10;
  }

  _drawShip(ctx) {
    // //enlazado de imagen
    let img = document.querySelector('#shiphammer');
    ctx.drawImage(img, this.positionX, this.positionY);
  }

  fall_Down() {
    this.positionY = (this.positionY + 20 + 500) % 500;
  }

  moveRight() {
    this.positionX = this.positionX + 20; 
  }

  moveLeft() {
    this.positionX = this.positionX - 35; 
  }

  moveUp() {
    this.positionY = this.positionY - 35;
  }


  move() {
    setInterval(this.fall_Down.bind(this), 200);
  }

}

