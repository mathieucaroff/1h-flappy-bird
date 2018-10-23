
import Bird from './Bird';
import Pipe from './Pipe';

var width = 400;
var height = 600;

var canvas;
var bird;

var pipeArray = [];
var pipePeriod = 100;
var count = 0;

window.pipeArray = pipeArray;

window.setup = function () {
    canvas = createCanvas(width, height);
    bird = new Bird(height);
    document.documentElement.addEventListener("keydown", handleKeydown);
};

window.draw = function () {
    if (count % pipePeriod == 0) {
        count = 1;
        pipeArray.push(new Pipe(width, height));
    } else {
        count++;
    }

    background(0, 0, 0);
    for (let i = pipeArray.length - 1; i >= 0; i--) {
        let p = pipeArray[i];
        p.update();
        if (p.hit(bird)) {
            p.highlight();
        }
        p.draw();
        if (p.finished()) {
            pipeArray.splice(i,1);
        }
    }

    bird.update();
    bird.draw();

}

function handleKeydown() {
    if (key = " ") {
        bird.flap();
    }
};

require('p5');