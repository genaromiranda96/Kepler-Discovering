class EnemyShip {
    constructor(options){
    this.damage = options.damage;
    this.positionX = options.x;
    this.positionY = options.y;
    this.sWidth = options.sWidth;
    this.sHeight = options.sHeight;
    }

    _drawShipEnemy(ctx, selector){
        let img = document.querySelector(selector);
        ctx.drawImage(img, this.positionX, this.positionY, this.sWidth, this.sHeight);
    }


    moveForward() {
        this.positionX = (this.positionX - 20 + 1040) % 1040;
        this.positionY = (this.positionY   - (Math.random() * (55 - (-55)) + (-55)) + 500) % 500;
      }

    move() {
        setInterval(this.moveForward.bind(this), 300);
      }
}

