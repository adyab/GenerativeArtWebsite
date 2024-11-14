// artSketches/sketch1.js
// ArcCross1

import { createBackground } from '../utils.js';

export function sketch1(p) {
    let newArt = true;
    let resetMinute = true;
    let Background;

    p.setup = () => {
        p.createCanvas(1304, 984);
        Background = createBackground(p);
        p.background(255);
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
        Background(); // Now using the imported Background function
        let lineThick = p.int(p.random(1, 10));
        p.strokeWeight(lineThick);
        let circSize = p.random(lineThick * 3, 500);
        let step = p.random(lineThick * 2, 50);
        let multiplier = p.random(1.2, 6);
        let cMax = p.int(p.random(5, 60));
        let redQ = p.random(3);
        
        p.fill(255);
        p.noStroke();
        p.ellipse(p.width / 2, p.height / 2, circSize + step * cMax, circSize + step * cMax);
        p.ellipse(p.width / 2, p.height / 2, multiplier * circSize, circSize + step * cMax);
        p.ellipse(p.width / 2, p.height / 2, circSize + step * cMax, multiplier * circSize);
        
        p.stroke(0);
        p.strokeWeight(lineThick);
        if (redQ > 2) {
            p.fill(255, 0, 0);
        }
        p.ellipse(p.width / 2, p.height / 2, circSize, circSize);
        
        p.noFill();
        for (let c = cMax; c > 0; c--) {
            p.ellipse(p.width / 2, p.height / 2, multiplier * circSize, circSize + step * c);
            p.ellipse(p.width / 2, p.height / 2, circSize + step * c, multiplier * circSize);
            p.ellipse(p.width / 2, p.height / 2, circSize + step * c, circSize + step * c);
        }
    }
}
