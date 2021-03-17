document.addEventListener('DOMContentLoaded', (event) => {
    //the DOM is ready, we can do what we want!
    console.log('DOM loaded');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

  
    let ship = {
      x: 0,
      y: 480,
    };
  
    let planet = {
      x: 1040,
      y: 340,
    };
  
    let planet2 = {
      x: 1040,
      y: 140,
    };

    let planet3 = {
        x: 1040,
        y: 500,
      };
  
    function drawPlayer() {
      ctx.fillStyle = 'red';
      ctx.fillRect(ship.x, ship.y, 60, 60);
    }
  
    function drawEnemy() {
      ctx.fillStyle = 'green';
      ctx.fillRect(planet.x, planet.y, 30, 30);
    }
  
    function drawEnemy2() {
      ctx.fillStyle = 'purple';
      ctx.fillRect(planet2.x, planet2.y, 60, 60);
    }

    function drawEnemy3() {
        ctx.fillStyle = 'black';
        ctx.fillRect(planet3.x, planet3.y, 70, 70);
      }
  
    function movePlayer() {
      ship.y = ship.y +10;
    }
  
    function moveEnemy() {
      planet.x = planet.x - 10;
    }
  
    function moveEnemy2() {
      planet2.x = planet2.x - 10;
    }

    function moveEnemy3() {
        planet3.x = planet3.x - 10;
      }
  
    function cleanKH7() {
      ctx.clearRect(0, 0, 1040, 650);
    }
  
    function checkCollision() {
      if (planet.y + 20 >= ship.y && planet.y + 20 <= ship.y + 20) {
        console.log('crash');
      }
    }
  
    function update() {
      cleanKH7();
      drawPlayer();
      drawEnemy();
      drawEnemy2();
      drawEnemy3();
      checkCollision();
      window.requestAnimationFrame(update);
    }
  
    document.addEventListener('keydown', function (key) {
      console.log(key.code);
      switch (key.code) {
        case 'ArrowLeft':
          ship.x = (ship.x - 22 + 1040) % 1040;
          break;
        case 'ArrowRight':
          ship.x = (ship.x + 22) % 1040;
          break;
        case 'ArrowDown':
          ship.y = ship.y + 22;
          break;
        case key.code === 32:
          ship.y = ship.y - 22;
          break;
        default:
          break;
      }
      if (key.keyCode === 32) {
        ship.y = ship.y - 22;
      }
    });
  
    setInterval(moveEnemy, 800);
    setInterval(moveEnemy2, 1200);
    setInterval(moveEnemy3, 1200);
    setInterval(movePlayer, 500);
    
  
    window.requestAnimationFrame(update);
  });
  