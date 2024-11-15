// artSketches/sketch8.js
// OverlappingRays

import { createBackground } from '../utils.js';

export function sketch8(p) {
  let Background;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    Background = createBackground(p);
    OverlappingRays();
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    OverlappingRays();
  };

  function OverlappingRays() {
    console.log("OverlappingRays");
    p.background(255);
    Background();

    p.fill(255);
    p.stroke(0);

    let minDim = Math.min(p.width, p.height);
    let numRays = p.random(5, 30);

    for (let i = 0; i < numRays; i++) {
      let x1 = p.random(p.width);
      let x2 = p.random(p.width);
      let y1 = p.random(p.height);
      let y2 = p.random(p.height);
      let numLines = p.int(p.random(20, 150));
      let x1Space = p.random(-minDim * 0.03, minDim * 0.03);
      let y1Space = p.random(-minDim * 0.03, minDim * 0.03);
      let x2Space = p.random(-minDim * 0.03, minDim * 0.03);
      let y2Space = p.random(-minDim * 0.03, minDim * 0.03);

      p.strokeWeight(50 / numLines + 1);

      for (let j = 0; j < numLines; j++) {
        p.line(x1, y1, x2, y2);
        x1 += x1Space;
        y1 += y1Space;
        x2 += x2Space;
        y2 += y2Space;
      }
    }

    let numCirc = p.int(p.random(15));
    p.stroke(255);

    for (let k = 0; k < numCirc; k++) {
      let x = p.random(p.width);
      let y = p.random(p.height);
      let diam = p.random(p.height / numCirc);
      p.ellipse(x, y, diam, diam);
    }
  }
}
