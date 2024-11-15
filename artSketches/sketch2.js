// artSketches/sketch2.js
// Autoglyph3

import { createBackground } from '../utils.js';

export function sketch2(p) {
    let Background;

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        Background = createBackground(p);
        Autoglyph3();
    };

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        Autoglyph3();
    };

    function Autoglyph3() {
        console.log("Autoglyph3");
        Background();
        
        p.background(255);
        p.strokeWeight(2);
        p.noFill();
        p.rectMode(p.CENTER);

        let scaleFactor = Math.min(p.width / 1304, p.height / 984);
        let chance = p.random(5, 35);
        let shapesDrawn = 0;

        // i and j loop to walk through x and y coordinate in upper left quadrant only
        let i = 1;
        while (i <= p.width / 10 / 2) {
            let j = 1;
            while (j <= p.height / 10 / 2) {
                // chance of drawing a shape
                let rand = p.random(1, 100);
                if (rand < chance) {
                    // picks a random shape (circle or square)
                    let shape = p.random(2);
                    if (shape < 1) {
                        let ellSize = p.random(60) * scaleFactor;
                        drawSymmetricalEllipse(i * 10, j * 10, ellSize);
                    } else {
                        let rectSize = p.random(40) * scaleFactor;
                        drawSymmetricalRect(i * 10, j * 10, rectSize);
                    }
                    shapesDrawn++;
                }
                j++;
            }
            i++;
        }

        // Ensure at least one shape is drawn to prevent blank screens
        if (shapesDrawn === 0) {
            let x = p.width / 4;
            let y = p.height / 4;
            let size = p.random(20, 60) * scaleFactor;
            p.random() < 0.5 ? drawSymmetricalEllipse(x, y, size) : drawSymmetricalRect(x, y, size);
        }

        console.log(`Shapes drawn: ${shapesDrawn}`);
    }

    function drawSymmetricalEllipse(x, y, size) {
        p.ellipse(x, y, size, size);
        p.ellipse((p.width / 10 - x / 10) * 10, y, size, size);
        p.ellipse(x, (p.height / 10 - y / 10) * 10, size, size);
        p.ellipse((p.width / 10 - x / 10) * 10, (p.height / 10 - y / 10) * 10, size, size);
    }

    function drawSymmetricalRect(x, y, size) {
        p.rect(x, y, size, size);
        p.rect((p.width / 10 - x / 10) * 10, y, size, size);
        p.rect(x, (p.height / 10 - y / 10) * 10, size, size);
        p.rect((p.width / 10 - x / 10) * 10, (p.height / 10 - y / 10) * 10, size, size);
    }
}
