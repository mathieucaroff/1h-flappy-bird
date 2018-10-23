export default class Pipe {
    constructor(width, height) {
        this.height = height;
        this.width = width;
        this.w = 20;
        this.x = this.width;
        this.vx = -2  ;

        this._highlight = false;

        this.top = random(this.height / 2);
        this.bottom = this.height - random(this.height / 2);
    }
    update() {
        this.x += this.vx;
    }
    draw() {
        fill(200, 200, 200);
        if (this._highlight) {
            this._highlight = false;
            fill(255, 0, 0);
        }
        rect(this.x, 0, this.w, this.top);
        rect(this.x, this.bottom, this.w, this.height - this.bottom);
    }
    finished() {
        if (this.x + this.w < 0) {
            return true;
        } else {
            return false;
        }
    }
    hit(point) {
        if (
            point.x > this.x &&
            point.x < this.x + this.w &&
            (point.y < this.top || point.y > this.bottom)
        ) {
            return true;
        }
        return false;
    }
    highlight() {
        this._highlight = true;
    }
};