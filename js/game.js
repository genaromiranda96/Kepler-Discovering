class Game {
    constructor(options) {
        this.ctx = options.ctx;
        this.ship = new Ship();
        this.enemys = new EnemyShip({ damage: 150, x: 910, y: 400, sWidth: 120, sHeight: 56 });
        this.enemys2 = new EnemyShip({ damage: 200, x: 910, y: 230, sWidth: 168, sHeight: 56 });
        this.enemys3 = new EnemyShip({ damage: 250, x: 910, y: 50, sWidth: 149, sHeight: 86 });
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
        this.ship.reciveDamage(this.damage + this.enemys2.damage);
      } else if ((this.enemys3.positionY + 30 >= this.ship.positionY && this.enemys3.positionY + 30 <= this.ship.positionY + 30) && 
      (this.enemys3.positionX + 50 >= this.ship.positionX && this.enemys3.positionX + 50 <= this.ship.positionX + 50)){
        this.ship.reciveDamage(this.damage + this.enemys3.damage);
      }
    }

    _clean(){
        this.ctx.clearRect(0, 0, 1040, 500);
    }

    _start(){
        this._assignControlsToKeys();
        this.ship.move();
        this.enemys.move();
        this.enemys2.move();
        this.enemys3.move();
        window.requestAnimationFrame(this._update.bind(this));
    }

    _update(){
        this._clean();
        this.ship._drawShip(this.ctx);
        this.ship._drawHealth(this.ctx);
        this.enemys._drawShipEnemy(this.ctx, "#enemyship");
        this.enemys2._drawShipEnemy(this.ctx, "#enemyship2");
        this.enemys3._drawShipEnemy(this.ctx, "#enemyship3");
        this._checkCollisions();
        this.ship.stop();
        window.requestAnimationFrame(this._update.bind(this));
    }

}

