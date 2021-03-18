document.addEventListener('DOMContentLoaded', () => {
  //the DOM is ready, we can do what we want!
        let game ;

         function generateSplashScreen() {
         const intro = document.getElementById('introsplash');

         let playButton = document.querySelector('#buttonplay');
         playButton.addEventListener('click', () => {
         intro.classList.add('hide');
         const game = document.getElementById('game');
         game.classList.remove('hide');
         game.classList.add('show');
          
         let canvas = game.querySelector('#hammerhead');
         const ctx = canvas.getContext('2d');
         const hammerHeadGame = new Game(
             {
               ctx: ctx,
               rows: canvas.width / 10,
               columns: canvas.height / 10,
               ship: new Ship(canvas.width / 5, canvas.height / 5),
             },  
           );
           hammerHeadGame._start();
         });
     }
   
     generateSplashScreen();
   });



