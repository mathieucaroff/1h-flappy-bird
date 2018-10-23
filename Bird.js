export default class Bird {
    constructor(height) {
        this.x = 50;
        this.y = height/2;
        this.vy = 0;

        this.radius = 30;
        this.height = height;

        this.gravity = 0.5;
        this.lift = -10;
    }
    update() {
        this.vy += this.gravity;
        this.y += this.vy;
        if (this.y < 0) {
            this.y = 0;
        }
        if (this.y > this.height) {
            this.y = this.height;
        }
    }
    draw() {
        fill(255, 255, 255);
        noStroke();
        ellipse(this.x, this.y, this.radius, this.radius);
    }
    flap() {
        this.vy = this.lift;
    }
};