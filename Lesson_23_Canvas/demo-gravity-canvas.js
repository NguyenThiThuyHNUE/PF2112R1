class Score {
    constructor(x, y, score) {
        this.x = x;
        this.y = y;
        this.score = score;
    }

    updateScore(score) {
        this.score = score;
    }

    draw(ctx) {
        ctx.font = "20px Georgia";
        ctx.fillText("Score: " + this.score, this.x, this.y);
    }
}

class Rect {
    constructor(x, y, width, height, color, bottom) {
        this.color = color;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y; 
        this.fall(); // rơi
        this.bottom = bottom;
    }

    fall() {
        this.gravity = 0.05;
        this.gravitySpeed = 1;
    }

    jump() {
        this.gravity = -2;
        this.gravitySpeed = -1;
    }

    hitTopJumping() {
        let top = 300;
        if (this.y < top) {
            this.fall();
        }
    }


    hitGround() {
        let ground = this.bottom - this.height;
        if (this.y > ground) {
            this.y = ground;
        }
    }

    newPos() {
        this.gravitySpeed += this.gravity;
        this.y += this.gravitySpeed; 

        this.hitTopJumping();
        this.hitGround();

        console.log(this.y);
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Game {
    constructor() {
        this.game_screen = document.getElementById("game_screen");
        this.context = this.game_screen.getContext("2d");
    }

    init() {
        let bar_width = 100;
        let bar_height = 10;
        let x = this.game_screen.width / 2 - bar_width / 2;
        let y = this.game_screen.height  - bar_height ;
        this.rect = new Rect(x, y, bar_width, bar_height, "blue", this.game_screen.height);

        this.score_number = 10;
        this.score = new Score(10, 20, this.score_number);

        this.redraw_screen();
    }

    jump() {
        this.rect.jump();
    }

    clear_screen() {
        this.context.clearRect(0, 0, this.game_screen.width, this.game_screen.height);
    }

    redraw_screen() {
        let self = this;

        setInterval(function() {
            self.score.updateScore(self.score_number++);
        }, 1000);

        // Lặp lại thao tác vẽ màn hình sau 1 khoảng thời gian
        setInterval(function() {
            self.clear_screen();
            self.rect.newPos();
            self.rect.draw(self.context);
            self.score.draw(self.context);
        }, 10);
    }
}

let game = new Game();
game.init();

document.getElementById('jump_button').addEventListener('click', function() {
    game.jump();
});
