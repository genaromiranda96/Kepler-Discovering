class Game {
    constructor(options, callback) {
        this.ctx = options.ctx;
        this.ship = options.ship;
        this.rows = options.rows;
        this.columns = options.columns;
        this.maxCells = options.maxCells;
        this.cb = callback;

    }


    _drawShip(){
        this.ctx.fillStyle = 'white';
        this.ship.body.forEach((position) => {
            this.ctx.fillRect(
                position.column * this.maxCells,
                position.row * this.maxCells,
                10,
                10
            );
        });
    }

    _assigControlsKeys(){
        document.addEventListener('keydown', function (key) {
            console.log(key.code);
            switch (key.code) {
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
                this.ship.goUp(); 
              }
         });
        }

    _clean(){
        this.ctx.clearRect(0, 0, 1040, 500)
    }


    _update() {
        this._clean();
        this._drawShip();
        window.requestAnimationFrame(this._update.bind(this));

    }

    start(){
        this._assigControlsKeys();
        this.ship.move();
        window.requestAnimationFrame(this._update.bind(this));

    }

}