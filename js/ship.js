class Ship {
    constructor(maxRows, maxColumns) {
        this.positionBody = [  
            {row: 505, column: 300}, 
        ];
        this.maxRows = maxRows;
        this.maxColumns = maxColumns;
        this.body = [...this.positionBody]
        this.direction = 'down';
        this.intervalId = undefined;
    }

    _moveForward() {
        let headShip = this.body[0]

        if (this.direction === 'down') {
            headship.column = headShip.column +1;
        }
        
    }

    goLeft() {
        if (this.direction === 'left') {
            this.positionBody.row = (this.positionBody.row - 20 + 1040) % 1040;
        }
    }

    goRight() {
        if (this.direction === 'right') {
            this.positionBody.row = (this.positionBody.row + 20) % 1040;
        }
    }   

    goUp() {
        if (this.direction === 'up') {
            this.positionBody.column = this.positionBody.column - 20;
        }
    }

    move() {
        this.intervalId = setInterval(this._moveForward.bind(this), 100);
    }

    stop() {
        if(this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = undefined;
        }
    }

}

