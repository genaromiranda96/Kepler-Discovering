document.addEventListener('DOMContentLoaded', () => {
    let game;

    function generateSplashScreen() {
        const intro = document.getElementById('introsplash');

        const playButton = document.querySelector('#play');
        playButton.addEventListener('click', () => {
            intro.classList.add('hide');
            const game = document.getElementById('game');
            game.classList.remove('hide');
            game.classList.add('show');
        });
        
    }
    
    generateSplashScreen();
})
