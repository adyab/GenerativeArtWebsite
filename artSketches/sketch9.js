// artSketches/sketch9.js
// ConnectedCircles

import { createBackground } from '../utils.js';

export function sketch9(p) {
  let Background;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    Background = createBackground(p);
    ConnectedCircles();
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    ConnectedCircles();
  };

  function ConnectedCircles() {
    console.log("ConnectedCircles");
    Background();

    let i = 0;
    let j = 0;
    let circleQ, connectQ;
    let connectX1, connectX2 = 0;
    let connectY1, connectY2 = 0;
    let redQ = p.random(100);

    p.background(255);
    p.fill(255);
    p.stroke(0);

    let minDim = Math.min(p.width, p.height);
    let circleSize = p.int(p.random(minDim * 0.04, minDim * 0.2));
    let circleChance = p.random(95);
    p.strokeWeight(circleSize * 0.1);
    let connectChance = p.random(1, 10);
    console.log("Connect chance:", connectChance);

    while (j < p.height) {
      while (i < p.width) {
        circleQ = p.random(5, 100);
        if (circleQ > circleChance) {
          p.ellipse(i + circleSize / 2, j + circleSize / 2, circleSize, circleSize);
          connectQ = p.random(80);
          if (connectQ < connectChance) {
            connectX1 = connectX2;
            connectY1 = connectY2;
            connectX2 = i + circleSize / 2;
            connectY2 = j + circleSize / 2;
            if (connectX1 > 0) {
              if (redQ < 20) {
                p.stroke(255, 0, 0);
              }
              p.noFill();
              p.ellipse(connectX1, connectY1, circleSize, circleSize);
              p.ellipse(connectX2, connectY2, circleSize, circleSize);
              p.line(connectX1, connectY1, connectX2, connectY2);
              p.stroke(0);
              p.fill(255);
            }
          }
        }
        i = i + p.int(circleSize * 1.1);
      }
      i = 0;
      j = j + p.int(circleSize * 1.1);
    }
  }
}
