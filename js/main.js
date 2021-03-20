document.addEventListener('DOMContentLoaded', () => {
        //the DOM is ready, we can do what we want!
        console.log("Dom ready");

        //Elements of the DOM i will need
        let playButton = document.querySelector('#buttonplay');
        const intro = document.getElementById('introsplash');
        let canvas = game.querySelector('#hammerhead');
        const ctx = canvas.getContext('2d');

        //Instance of the Game and give the context
        const hammerHeadGame = new Game(
          {
            ctx: ctx,
          },  
        );

        //Define the function for create the Splash Screen
         function generateSplashScreen() {
        intro.classList.add('hide');
        const game = document.getElementById('game');
        game.classList.remove('hide');
        game.classList.add('show');
       }

         playButton.addEventListener('click', () => {
          generateSplashScreen();
          hammerHeadGame._start();
         });
     
   });



