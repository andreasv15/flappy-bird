// * GLOBAL VARIABLES

const startBtn = document.querySelector("#start-btn");
const restartBtn = document.querySelector("#restart-btn");
const startScreen = document.querySelector("#splash-screen");
const gameOverScreen = document.querySelector("#gameover-screen")
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
let game;


// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
    //console.log("probando");
    startScreen.style.display = "none";
    gameOverScreen.style.display = "none";
    canvas.style.display = "block";

    // logica del juego
    // nuestro juego será todo una nueva clase
    // crearemos un objeto de lo que será la clase game
    game = new Game();
    //console.log(game);

    game.gameLoop(); // inicia el loop del nuevo juego


}


const keyPress = (event) => {
    if (event.code === "Space") {
        //console.log("tecla espacio");
        game.pollo.jumpPollo();
    }
}

/*
const clickPress = () => {
    game.pollo.jumpPollo();
}
*/

// * ADD EVENT LISTENERS
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);

window.addEventListener("keydown", keyPress);
//window.addEventListener("click", clickPress);


