class Game {
    constructor(options, callback) {
        this.ctx = options.ctx;
        this.ship = options.ship;

    }

    _assigControlsKeys(){
        document.addEventListener('keydown', function (key) {
            console.log(key.code);
            switch (key.code) {
                case 'ArrowLeft':
                this.positionBody.x = (this.positionBody.x - 20 + 1040) % 1040;
                    break;
                case 'ArrowRight':
                this.positionBody.y = (this.positionBody.y + 20) % 1040;
                    break;
                case 'Space':
                this.positionBody.y = this.positionBody.y + 20;
                    break;
                default:
                    break;          
            }
         });
        }

    _clean(){
        this.ctx.clearRect(0, 0, 1040, 500)
    }

    _drawShip(){
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(this.positionBody.x, this.positionBody.y, 50, 50);
    }

    _update() {
        this._drawShip();
        window.requestAnimationFrame(this._update.bind(this));

    }

    start(){
        this._assigControlsKeys();
        window.requestAnimationFrame(this._update.bind(this));

    }

}