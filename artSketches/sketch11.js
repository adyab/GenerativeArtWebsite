// artSketches/sketch11.js
// SimpleCircleGrid

import { createBackground } from '../utils.js';

export function sketch11(p) {
  let Background;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    Background = createBackground(p);
    SimpleCircleGrid();
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    SimpleCircleGrid();
  };

  function SimpleCircleGrid() {
    console.log("SimpleCircleGrid");
    p.background(255);
    Background();

    p.fill(255);
    p.stroke(0);

    let minDim = Math.min(p.width, p.height);
    let circleSize = p.int(p.random(minDim * 0.04, minDim * 0.4));
    console.log("Circle size:", circleSize);

    let circleChance = p.random(99);
    let innerChance = p.random(100);
    p.strokeWeight(circleSize * 0.1);

    for (let j = 0; j < p.height; j += circleSize * 1.1) {
      for (let i = 0; i < p.width; i += circleSize * 1.1) {
        let circleQ = p.random(1, 100);
        if (circleQ > circleChance) {
          p.ellipse(i + circleSize / 2, j + circleSize / 2, circleSize, circleSize);
          let innerQ = p.random(100);
          if (innerQ > innerChance) {
            let range = p.random(10, 190);
            let startang = p.random(0, 360);
            let spacing = p.random(circleSize * 0.22, circleSize * 0.85);
            for (let c = circleSize; c > 0; c -= spacing) {
              p.arc(
                i + circleSize / 2,
                j + circleSize / 2,
                c,
                c,
                p.radians(startang - range),
                p.radians(startang + range)
              );
            }
          }
        }
      }
    }
  }
}
