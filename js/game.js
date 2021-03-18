class Game {
    constructor(options) {
        this.ctx = options.ctx;
        this.ship = new Ship (x,y);
        this.enemys = new EnemyShip (x, y, r);
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
        if (event.code === 32) {
            this.ship.moveUp();
          }
      });
    }

    _generateEnemyShips(){

    }

    _checkCollisions(){

    }

    _clean(){
        this.ctx.clearRect(0, 0, 1040, 500);
    }

    _start(){
        this._assignControlsToKeys();
        this.ship.move();
        window.requestAnimationFrame(this._update.bind(this));
    }

    _update(){
        this._clean();
        this.ship._drawShip(this.ctx);
        this.enemys.forEach( enemy => enemy._drawShipEnemy(this.ctx));
        this._checkCollisions();
        window.requestAnimationFrame(this._update.bind(this));
    }
    
}




// class Game {
//     constructor(options, callback) {
//       this.ctx = options.ctx;
//       this.ship = options.ship;
//       this.rows = options.rows;
//       this.columns = options.columns;
//       this.maxCells = options.maxCells;
//       this.planet = undefined;
//       this.enemyship = undefined;
//       this.cb = callback;
//       this.positionShip = {x:55, y:200};
//       this.positionEnemyShip = {x:910 , y:100 }
//     }

    
  
//     _drawShip() {
//       let img = document.querySelector('#shiphammer')
//       this.ctx.drawImage(img, this.positionShip.x, this.positionShip.y);
//     }

//     goLeftShip(){
//         return this.positionShip.x - 20;
//      }

//      goRightShip(){
//         return this.positionShip.x + 20;
//      }


//     _drawPlanet() {
//         let imgPlanet = document.querySelector('#enemyplanet')
//         this.ctx.drawImage(imgPlanet, 940, 200);
//     }

//     _drawPlanet2() {
//         let imgPlanet2 = document.querySelector('#enemyplanet2')
//         this.ctx.drawImage(imgPlanet2, 890, 360);
//     }

//     _draEnemyShip() {
//         let enemyShipImg = document.querySelector('#enemyship')  
//         this.ctx.drawImage(enemyShipImg, this.positionEnemyShip.x, this.positionEnemyShip.y);
//       }

//      _moveForwardEnemyShip() {
//          this.positionEnemyShip.x = this.positionEnemyShip.x - 10;
//         }
     


//     _assignControlsToKeys() {
//       document.addEventListener('keydown', function (event) {
//         console.log(event.code);
//         switch (event.code) {
//           case 'ArrowLeft':
//             this.ship.goLeftShip();
//             break;
//           case 'ArrowRight':
//             this.ship.goRightShip();
//             break;
//           default:
//             break;
//         }
//         if (event.keyCode === 32) {
//             tecla spacio para subir
//             this.positionShip.y = this.positionShip.y - 22;
//           }
//       });
//     }
  
  
//     _clean() {
//       this.ctx.clearRect(0, 0, 1040, 500);
//     }
  
//     _update() {
//       this._clean();
//       this._drawShip();
//       this._drawPlanet();
//       this._drawPlanet2()
//       this._draEnemyShip();          
//       setInterval(_moveForwardEnemyShip, 200);
//       if (this.ship.collidesWith(this.planet)) {
//         this._generatePlanet();
//       }
//       window.requestAnimationFrame(this._update.bind(this));
//     }
        
//     start() {
//       this._assignControlsToKeys();
//       this.ship.move();
//       window.requestAnimationFrame(this._update.bind(this));
//     }


//   }
  
