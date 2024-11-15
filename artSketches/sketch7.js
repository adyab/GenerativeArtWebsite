// artSketches/sketch7.js (or whatever number is appropriate)
// Mountains4

import { createBackground } from '../utils.js';

export function sketch7(p) {
  let Background;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    Background = createBackground(p);
    Mountains4();
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    Mountains4();
  };

  function Mountains4() {
    console.log("Mountains4");
    let topx, topy, triHeight, sunx, sunsize;
    let numTri;

    p.background(255);
    Background();

    p.stroke(255);
    p.fill(255, 0, 0);

    // Scale sun size based on the smaller dimension of the canvas
    let minDim = Math.min(p.width, p.height);
    sunx = p.random(p.width);
    sunsize = p.random(minDim * 0.03, minDim * 0.8);
    p.ellipse(sunx, sunsize / 2, sunsize, sunsize);

    p.fill(0);

    numTri = p.int(p.random(2, 100));
    for (let c = 0; c < numTri; c++) {
      topx = p.random(p.width);
      topy = p.random(p.height);
      triHeight = p.random(minDim * 0.05, p.height);
      p.strokeWeight(triHeight / 50 + 1);

      p.triangle(
        topx, topy, 
        topx + triHeight / 2, p.height, 
        topx - triHeight / 2, p.height
      );
    }
  }
}
