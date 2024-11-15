// artSketches/sketch15.js
// Skyline2

import { createBackground } from '../utils.js';

export function sketch15(p) {
  let Background;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    Background = createBackground(p);
    Skyline2();
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    Skyline2();
  };

  function Skyline2() {
    console.log("Skyline2");
    p.rectMode(p.CORNER);
    Background();

    let minDim = Math.min(p.width, p.height);
    
    p.noStroke();
    p.fill(255, 0, 0);
    let sunx = p.random(p.width);
    let sunsize = p.random(minDim * 0.03, minDim * 0.5);
    p.ellipse(sunx, sunsize / 2, sunsize, sunsize);
    p.fill(0);

    let numRect = p.int(p.random(2, 30));
    for (let c = 0; c < numRect; c++) {
      let topx = p.random(p.width);
      let topy = p.random(p.height);
      let rectWidth = p.random(minDim * 0.04, p.width / 3);
      p.strokeWeight(rectWidth / 50 + 1);
      p.stroke(255);
      p.fill(0);
      p.rect(topx, topy, rectWidth, p.height - topy);

      let x = topx;
      let y = topy;
      let windowWidth = p.random(minDim * 0.003, minDim * 0.05);
      let windowHeight = p.random(minDim * 0.001, minDim * 0.1);
      let spacing = p.random(minDim * 0.001, minDim * 0.05);

      while (y < p.height) {
        while (x < topx + rectWidth - windowWidth - spacing) {
          p.noStroke();
          p.fill(255);
          p.rect(x + spacing, y + spacing, windowWidth, windowHeight);
          x = x + spacing + windowWidth;
        }
        x = topx;
        y = y + spacing + windowHeight;
      }
    }
  }
}
