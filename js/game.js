class Game {
    constructor(options, callback) {
      this.ctx = options.ctx;
      this.ship = options.ship;
      this.rows = options.rows;
      this.columns = options.columns;
      this.maxCells = options.maxCells;
      this.planet = undefined;
      this.cb = callback;
    }

    
  
    _drawShip() {
      let img = document.querySelector('#shiphammer')
      this.ctx.drawImage(img, 55, 200);
    }
  

    _drawPlanet() {
      this.ctx.fillStyle = 'red';
      this.ctx.fillRect(this.planet.column * 10, this.planet.row * 11, 40, 40);
    }

    


    _assignControlsToKeys() {
      document.addEventListener('keydown', (event) => {
        switch (event.code) {
          case 'ArrowLeft':
            this.ship.goLeft();
            break;
          case 'ArrowRight':
            this.ship.goRight();
            break;
          default:
            break;
        }
        if (key.keyCode === 32) {
            this.ship.goUP();
          }
      });
    }
  
    _generatePlanet() {
      this.planet = {
        row: Math.floor(Math.random() * this.rows),
        column: Math.floor(Math.random() * this.columns),
      };
    }
  
    _clean() {
      this.ctx.clearRect(0, 0, 1040, 500);
    }
  
    _update() {
      this._clean();
      this._drawShip();
      this._drawPlanet();
      if (this.ship.collidesWith(this.planet)) {
        this._generatePlanet();
      }
      window.requestAnimationFrame(this._update.bind(this));
    }
  
    start() {
      this._assignControlsToKeys();
      this._generatePlanet();
      this.ship.move();
      window.requestAnimationFrame(this._update.bind(this));
    }
  }
  
