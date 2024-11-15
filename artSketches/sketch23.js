// artSketches/sketch23.js
// WanderingBullseye

import { createBackground } from '../utils.js';

export function sketch23(p) {
  let Background;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    Background = createBackground(p);
    WanderingBullseye();
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    WanderingBullseye();
  };

  function WanderingBullseye() {
    console.log("WanderingBullseye");
    p.background(255);
    Background();
    p.noStroke();

    let minDim = Math.min(p.width, p.height);
    let numCirc = p.int(p.random(2, 70));
    let size = p.random(minDim * 0.3, minDim * 0.97);
    let x = p.width / 2;
    let y = p.height / 2;
    let blackQ = -1;
    let xwander = p.random(-minDim * 0.01, minDim * 0.01);
    let ywander = p.random(-minDim * 0.01, minDim * 0.01);
    let sizeFactor = p.random(1, 8);

    for (let c = 0; c < numCirc; c++) {
      if (blackQ === -1) {
        p.fill(0);
      } else {
        p.fill(255);
      }
      blackQ *= -1;
      p.ellipse(x, y, size, size);
      x += xwander;
      y += ywander;
      size -= (size / numCirc) * sizeFactor;
    }
  }
}
