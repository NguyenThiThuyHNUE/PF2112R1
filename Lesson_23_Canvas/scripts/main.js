let canvas = document.getElementById("game_screen");
let context = canvas.getContext("2d");

const LEFT = 1, RIGHT = 2, UP = 3, DOWN = 4;
const KEY_LEFT = 37, KEY_RIGHT = 39, KEY_UP = 38, KEY_DOWN = 40, SPACE = 32;
const DEFAULT_SPEED = 50;

let game = new Game(500, 500, context);
let snake = new Snake(DEFAULT_SPEED, context);


function runGame() {
    game.drawScreen();
    snake.move();
    snake.draw();
}
let interval = setInterval(runGame, 300);

function changeSpeed() {
    clearInterval(interval);
    interval = setInterval(runGame, 150);
}

window.addEventListener("keydown", function(e) {
    let keyCode = e.keyCode;

    switch (keyCode) {
        case KEY_LEFT: snake.turnLeft(); break;
        case KEY_RIGHT: snake.turnRight(); break;
        case KEY_UP: snake.turnUp(); break;
        case KEY_DOWN: snake.turnDown(); break;
        case SPACE: changeSpeed(); break;
    }
});