class EnemyShip {
    constructor(){
    this.positionX = 910;
    this.positionY = 400;
    this.sWidth = 120;
    this.sHeight = 41;
    }

    _drawShipEnemy(ctx){
        let img = document.querySelector('#enemyship');
        ctx.drawImage(img, this.positionX, this.positionY, this.sWidth, this.sHeight);
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
  this.positionY = 230;
  this.sWidth = 168;
  this.sHeight = 56;
  }

  _drawShipEnemy(ctx){
      let img = document.querySelector('#enemyship2');
      ctx.drawImage(img, this.positionX, this.positionY, this.sWidth, this.sHeight);
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
  this.sWidth = 149;
  this.sHeight = 86; 
  }

  _drawShipEnemy(ctx){
      let img = document.querySelector('#enemyship3');
      ctx.drawImage(img, this.positionX, this.positionY, this.sWidth, this.sHeight);
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
