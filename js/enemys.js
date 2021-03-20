class EnemyShip {
    constructor(){
    this.positionX = 910;
    this.positionY = 400;
    this.radius = 20;   
    }

    _drawShipEnemy(ctx){
        let img = document.querySelector('#enemyship');
        ctx.drawImage(img, this.positionX, this.positionY);
        // //enlazado de imagen

    }

    moveForward() {
        this.positionX = (this.positionX - 20 + 1040) % 1040;
        this.positionY = (this.positionY - (Math.random() * (55 - (-55)) + (-55)) + 500) % 500;
      } 

    move() {
        setInterval(this.moveForward.bind(this), 300);
      }  
}

class EnemyShip2 {
  constructor(){
  this.positionX = 910;
  this.positionY = 50;
  this.radius = 20;   
  }

  _drawShipEnemy(ctx){
      let img = document.querySelector('#enemyship2');
      ctx.drawImage(img, this.positionX, this.positionY);
      // //enlazado de imagen

  }

  moveForward() {
      this.positionX = (this.positionX - 20 + 1040) % 1040;
      this.positionY = (this.positionY - (Math.random() * (55 - (-55)) + (-55)) + 500) % 500;
    } 

  move() {
      setInterval(this.moveForward.bind(this), 300);
    }  
}

class EnemyShip3 {
  constructor(){
  this.positionX = 910;
  this.positionY = 50;
  this.radius = 20;   
  }

  _drawShipEnemy(ctx){
      let img = document.querySelector('#enemyship3');
      ctx.drawImage(img, this.positionX, this.positionY);
      // //enlazado de imagen

  }

  moveForward() {
      this.positionX = (this.positionX - 20 + 1040) % 1040;
      this.positionY = (this.positionY - (Math.random() * (55 - (-55)) + (-55)) + 500) % 500;
    } 

  move() {
      setInterval(this.moveForward.bind(this), 300);
    }  
}
