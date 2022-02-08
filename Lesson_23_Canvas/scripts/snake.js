class Snake {
    constructor(speed, context) {
        this.speed = speed;
        this.direction = DOWN;
        this.points = [
            [0, 150],
            [0, 100],
            [0, 50],
            [0, 0],
        ];

        this.context = context;
    }

    move() {

        console.log(LEFT);

        let snake_x = this.points[0][0];
        let snake_y = this.points[0][1];

        switch (this.direction) {
            case LEFT:
                snake_x -= this.speed;
                break;
            case RIGHT:
                snake_x += this.speed;
                break;
            case UP:
                snake_y -= this.speed;
                break;
            case DOWN:
                snake_y += this.speed;
                break;
        }
        
        this.points.pop();
        this.points.unshift([ snake_x, snake_y ]);
        console.log(this.points);
    }

    turnLeft() {
        this.direction = LEFT;
    }

    turnRight() {
        this.direction = RIGHT;
    }

    turnUp() {
        this.direction = UP;
    }

    turnDown() {
        this.direction = DOWN;
    }

    changeSpeed(speed) {
        this.speed = speed;
    }

    draw() {
        this.context.fillStyle = "yellow";
        let snakes = this.points;
        for (let i = 0; i < snakes.length; i++) {
            let x = snakes[i][0];
            let y = snakes[i][1];
            this.context.fillRect(x, y, 50, 50);
        }
    }
}