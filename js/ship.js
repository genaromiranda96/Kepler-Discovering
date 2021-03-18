class Ship {
  constructor(x,y) {
    this.positionX = 35;
    this.positionY = 10;
  }

  _drawShip(ctx) {
    ctx.fillStyle = 'green';
    ctx.fillRect(this.positionX, this.positionY, 60, 60);
    // //enlazado de imagen
    // let img = document.querySelector('#shiphammer');
    // this.ctx.drawImage(img, this.positionX, this.positionY);
  }

  fall_Down() {
    return this.positionX + 20;
  }

  moveRight() {
    return this.positionY + 20; 
  }

  moveLeft() {
    return this.positionY - 20; 
  }

  moveUp() {
    return this.positionX - 20;
  }


  move() {
    setInterval(this.fall_Down.bind(this), 300);
  }

}



// class Ship {
//     constructor(maxRows, maxColumns) {
//       this.positionBody = [{ row: 35, column: 10 }],
//       this.direction = 'down';
//       this.intervalId = undefined;
//       this.maxRows = maxRows;
//       this.maxColumns = maxColumns;
//       this.body = this.positionBody;
//       this.previousTail = undefined;
//     }
  

//     _moveForward() {

//     }
  

  
//     collidesWith(planet) {
//         return this.body[0].row === planet.row && this.body[0].column === planet.column;
//       }
  
  
//     move() {
//       this.intervalId = setInterval(this._moveForward.bind(this), 100);
//     }
  
//     stop() {
//       if (this.intervalId) {
//         clearInterval(this.intervalId);
//         this.intervalId = undefined;
//       }
//     }
//   }

