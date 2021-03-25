class Game {
    constructor(options) {
        this.ctx = options.ctx;
        this.ship = new Ship();
        this.enemys = new EnemyShip();
        this.enemys2 = new EnemyShip2();
        this.enemys3 = new EnemyShip3();
        this.damage = 0;
        this.lives = 3;
    }

    _assignControlsToKeys() {
      document.addEventListener('keydown', (event) => {
        switch (event.code) {
          case 'ArrowRight':
            this.ship.moveRight();
            break;
          case 'ArrowLeft':
            this.ship.moveLeft();
            break;
          default:
            break;
        }
        if (event.code === 'Space') {
            this.ship.moveUp();
          }
      });
    }

    _generateDamage() {
      this.damage = this.damage + this.enemys.damage;
    }


    _checkCollisions(){
      if ((this.enemys.positionY + 30 >= this.ship.positionY && this.enemys.positionY + 30 <= this.ship.positionY + 30) && 
      (this.enemys.positionX + 50 >= this.ship.positionX && this.enemys.positionX + 50 <= this.ship.positionX + 50)){
        this.ship.reciveDamage(this.damage + this.enemys.damage);} 
         else if ((this.enemys2.positionY + 30 >= this.ship.positionY && this.enemys2.positionY + 30 <= this.ship.positionY + 30) && 
      (this.enemys2.positionX + 50 >= this.ship.positionX && this.enemys2.positionX + 50 <= this.ship.positionX + 50)){
         alert('Crash');
      } else if ((this.enemys3.positionY + 30 >= this.ship.positionY && this.enemys3.positionY + 30 <= this.ship.positionY + 30) && 
      (this.enemys3.positionX + 50 >= this.ship.positionX && this.enemys3.positionX + 50 <= this.ship.positionX + 50)){
         alert('Crash');
      }
    }

    _clean(){
        this.ctx.clearRect(0, 0, 1040, 500);
    }

    _start(){
        this._assignControlsToKeys();
        this.ship.move();
        this.enemys.move();
        // this.enemys2.move();
        // this.enemys3.move();
        window.requestAnimationFrame(this._update.bind(this));
    }

    _update(){
        this._clean();
        this.ship._drawShip(this.ctx);
        this.ship._drawHealth(this.ctx);
        this.enemys._drawShipEnemy(this.ctx);
        this.enemys2._drawShipEnemy(this.ctx);
        this.enemys3._drawShipEnemy(this.ctx);
        this._checkCollisions();
        this.ship.stop();
        window.requestAnimationFrame(this._update.bind(this));
    }

}

