class Ship {
    constructor(maxRows, maxColumns) {
      this.positionBody = [{ row: 35, column: 10 }],
      this.direction = 'down';
      this.intervalId = undefined;
      this.maxRows = maxRows;
      this.maxColumns = maxColumns;
      this.body = this.positionBody;
      this.previousTail = undefined;
    }
  

    _moveForward() {

    }
  

  
    collidesWith(planet) {
        return this.body[0].row === planet.row && this.body[0].column === planet.column;
      }
  
  
    move() {
      this.intervalId = setInterval(this._moveForward.bind(this), 100);
    }
  
    stop() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = undefined;
      }
    }
  }

