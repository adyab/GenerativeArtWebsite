// artSketches/sketch4.js
// CircleGrid

import { createBackground } from '../utils.js';

export function sketch4(p) {
    let Background;

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        Background = createBackground(p);
        CircleGrid();
    };

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        CircleGrid();
    };

    function CircleGrid() {
        console.log("CircleGrid");
        Background();
        
        let i = 0;
        let j = 0;
        let circleQ;
        
        p.background(255);
        p.noFill();
        p.stroke(0);
        
        // Calculate scale factor based on the original canvas size
        let scaleFactor = Math.min(p.width / 1304, p.height / 984);
        
        let circleSize = p.int(p.random(15, 100) * scaleFactor);
        let circleChance = p.random(100);
        p.strokeWeight(circleSize * 0.1);
        
        let multiplier = p.random(3);

        while (j < p.height) {
            while (i < p.width) {
                circleQ = p.random(100);
                if (circleQ > circleChance) {
                    p.ellipse(
                        i + circleSize / 2,
                        j + circleSize / 2,
                        circleSize + p.random(-multiplier * circleSize, multiplier * circleSize),
                        circleSize + p.random(-multiplier * circleSize, multiplier * circleSize)
                    );
                }
                i += circleSize;
            }
            i = 0;
            j += circleSize;
        }
    }
}
