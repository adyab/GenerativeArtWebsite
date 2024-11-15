// artSketches/sketch10.js
// RotatingSquares

import { createBackground } from '../utils.js';

export function sketch10(p) {
  let Background;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    Background = createBackground(p);
    RotatingSquares();
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    RotatingSquares();
  };

  function RotatingSquares() {
    console.log("RotatingSquares");
    p.background(255);
    Background();

    let skew, numSquares, size;
    let blackQ = -1;

    p.noStroke();
    p.rectMode(p.CENTER);

    let minDim = Math.min(p.width, p.height);
    skew = p.random(-15, 15);
    size = minDim * 0.9;
    numSquares = p.int(p.random(3, 350));

    p.push();
    p.translate(p.width / 2, p.height / 2);

    for (let c = 0; c < numSquares; c++) {
      if (blackQ === -1) {
        p.fill(0);
      } else {
        p.fill(255);
      }
      blackQ *= -1;
      p.rect(0, 0, size, size);
      p.rotate(p.radians(p.random(skew)));
      size = size - (size / numSquares) * 10;
    }

    p.pop();
  }
}
