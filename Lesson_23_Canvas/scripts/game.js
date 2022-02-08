class Game {
    constructor(width, height, context) {
        this.width = width;
        this.height = height;
        this.context = context;
    }

    drawScreen() {
        this.context.fillStyle = "green";
        this.context.fillRect(0, 0, this.width, this.height);
    }

}