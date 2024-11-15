// artSketches/sketch1.js
// ArcCross1

import { createBackground } from '../utils.js';

export function sketch1(p) {
    let newArt = true;
    let resetMinute = true;
    let Background;

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        Background = createBackground(p);
        p.background(255);
    };

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        newArt = true;
    };

    p.draw = () => {
        if (newArt) {
            ArcCross1();
            newArt = false;
        }

        if (p.second() == 30) {
            if (resetMinute) {
                p.background(255);
                newArt = true;
                resetMinute = false;
            }
        }
        if (p.second() == 45) {
            resetMinute = true;
        }
    };

    p.keyPressed = () => {
        p.background(255);
        newArt = true;
    };

    function ArcCross1() {
        Background();
        let minDim = p.min(p.width, p.height);
        let lineThick = p.int(p.map(p.random(1, 10), 1, 10, minDim * 0.001, minDim * 0.01));
        p.strokeWeight(lineThick);
        let circSize = p.random(lineThick * 3, minDim * 0.5);
        let step = p.random(lineThick * 2, minDim * 0.05);
        let multiplier = p.random(1.2, 6);
        let cMax = p.int(p.random(5, 60));
        let redQ = p.random(3);
        
        p.fill(255);
        p.noStroke();
        drawEllipses(circSize, step, cMax, multiplier);
        
        p.stroke(0);
        p.strokeWeight(lineThick);
        if (redQ > 2) {
            p.fill(255, 0, 0);
        }
        p.ellipse(p.width / 2, p.height / 2, circSize, circSize);
        
        p.noFill();
        for (let c = cMax; c > 0; c--) {
            drawEllipses(circSize, step, c, multiplier);
        }
    }

    function drawEllipses(circSize, step, c, multiplier) {
        p.ellipse(p.width / 2, p.height / 2, multiplier * circSize, circSize + step * c);
        p.ellipse(p.width / 2, p.height / 2, circSize + step * c, multiplier * circSize);
        p.ellipse(p.width / 2, p.height / 2, circSize + step * c, circSize + step * c);
    }
}
