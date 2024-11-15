// artSketches/sketch5.js
// ConcentricCircle

import { createBackground } from '../utils.js';

export function sketch5(p) {
  let Background;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    Background = createBackground(p);
    ConcentricCircle();
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    ConcentricCircle();
  };

  function ConcentricCircle() {
    console.log("ConcentricCircle");
    let minDim = Math.min(p.width, p.height);
    let circSize = minDim * 0.85;
    let x = p.width / 2;
    let y = p.height / 2;
    let circChange = p.map(p.random(0.1, 5), 0.1, 5, minDim * 0.0001, minDim * 0.005);
    let black = 1;

    p.background(255);
    Background();

    while (circSize > 1) {
      if (black === 1) {
        p.stroke(0);
        p.fill(0);
      } else {
        p.stroke(255);
        p.fill(255);
      }
      black *= -1;
      p.ellipse(x, y, circSize, circSize);
      x += p.random(-4 * circChange, 4 * circChange);
      y += p.random(-4 * circChange, 4 * circChange);
      circSize -= circChange;
    }
  }
}
