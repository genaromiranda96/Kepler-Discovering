document.addEventListener('DOMContentLoaded', (event) => {
    //the DOM is ready, we can do what we want!
    console.log('DOM loaded');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

  
    let ship = {
      x: 30,
      y: 270,
    };
  
    let planet = {
      x: 1040,
      y: 240,
    };
  
    let planet2 = {
        x: 1040,
        y: 450,
      };
  

    let enemyship = {
      x: 1040,
      y: 100,
    };


    function drawPlayer() {
      let img = document.querySelector('#shiphammer')
      ctx.drawImage(img, ship.x, ship.y)
    }
  
    function drawPlanet() {
        let imgPlanet = document.querySelector('#enemyplanet')
        ctx.drawImage(imgPlanet, planet.x, planet.y)
    }
       
    function drawPlanet2() {
        let imgPlanet2 = document.querySelector('#enemyplanet2')
        ctx.drawImage(imgPlanet2, planet2.x, planet2.y)
      }
      
  
    function draEnemyShip() {
      let enemyShipImg = document.querySelector('#enemyship')  
      ctx.drawImage(enemyShipImg, enemyship.x, enemyship.y)
    }


  
    function movePlayer() {
      ship.y = ship.y +10;
    }
  
    function moveEnemy() {
      planet.x = planet.x - 10;
    }
  
    function moveEnemy2() {
      enemyship.x = enemyship.x - 10;
    }

    function moveEnemy3() {
        planet2.x = planet2.x - 10;
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
      drawPlanet();
      draEnemyShip();
      drawPlanet2();
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
        default:
          break;
      }
      if (key.keyCode === 32) {
        ship.y = ship.y - 22;
      }
    });
  
    setInterval(moveEnemy, 200);
    setInterval(moveEnemy2, 150);
    setInterval(moveEnemy3, 200);
    setInterval(movePlayer, 500);
    
  
    window.requestAnimationFrame(update);
  });
  