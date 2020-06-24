window.onload = function() {
    document.getElementById("start-button").onclick = function() {
        startGame();
    };

    function startGame() {
        const myGame = game();
        myGame.init();
    }
};
