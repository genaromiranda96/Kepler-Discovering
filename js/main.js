document.addEventListener('DOMContentLoaded', () => {
    let game;

    function generateSplashScreen() {
    const intro = document.getElementById('introsplash');
  
      const playButton = document.querySelector('#buttonplay');
      playButton.addEventListener('click', () => {
        intro.classList.add('hide');
        const game = document.getElementById('game');
        game.classList.remove('hide');
        game.classList.add('show');
  
        const startButton = game.querySelector('#buttonstart');
        startButton.addEventListener('click', () => {
          let canvas = game.querySelector('#hammerhead');
          const ctx = canvas.getContext('2d');
          const hammerHeadGame = new Game(
            {
              ctx: ctx,
              rows: canvas.width / 10,
              columns: canvas.height / 10,
              maxCells: 10,
              ship: new Ship(canvas.width / 5, canvas.height / 5),
            },
            
          );
  
          hammerHeadGame.start();
        });
      });
    }
  
    generateSplashScreen();
  });
  