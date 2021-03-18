class EnemyShip {
    constructor(x, y, r){
    this.positionX = 910;
    this.positionY = 100;
    this.radius = 20;
    this.color = 'red';    
    }

    _drawShipEnemy(ctx){
    ctx.fillStyle = this.color;
    ctx.arc(this.positionX, this.positionY, this.radius, 0, 2);
        // //enlazado de imagen
    // let img = document.querySelector('#enemyship');
    // this.ctx.drawImage(img, this.positionX, this.positionY);
    }

    moveForward() {
        return this.positionX - 20;
      }

    move() {
        setInterval(this.moveForward.bind(this), 300);
      }  
}