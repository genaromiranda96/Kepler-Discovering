class Ship {
  constructor() {
    this.positionX = 35;
    this.positionY = 150;
    this.sWidth = 100;
    this.sHeight = 65;
    this.health = 7000;
    this.healthX = 65;
    this.healthY = 145;
    this.textY = 160;

  }

  reciveDamage(damage) {
    console.log(this.health - damage)
    this.health = this.health - damage;
  }

  _drawShip(ctx) {
    let img = document.querySelector('#shiphammer');
    ctx.drawImage(img, this.positionX, this.positionY, this.sWidth, this.sHeight);
  }

  _drawHealth(ctx) {
    ctx.fillStyle = 'green';
    ctx.fillRect(this.healthX, this.healthY, 32, 20);
    let health = this.health;
    ctx.font = '10pt Arial';
    ctx.fillStyle = 'white';
    ctx.fillText(this.health, this.healthX, this.textY);
  }

  fall_Down() {
    console.log(this.positionY);
    this.positionY = (this.positionY + 20 + 500) % 500;
    this.healthY = (this.healthY + 20 + 500) % 500;
    this.textY = (this.textY + 20 + 500) % 500;
  }

  moveRight() {
    this.positionX = this.positionX + 35; 
    this.healthX = this.healthX + 35; 
  }

  moveLeft() {
    this.positionX = this.positionX - 35; 
    this.healthX = this.healthX - 35; 
  }

  moveUp() {
    this.positionY = this.positionY - 35;
    this.healthY = this.healthY - 35;
    this.textY = this.textY - 35;
  }


  move() {
    setInterval(this.fall_Down.bind(this), 200);
  }

  stop() {
    if (this.health === 0) {
      alert(`The game is over`)
    }
  }

}

