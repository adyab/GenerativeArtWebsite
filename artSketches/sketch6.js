// artSketches/sketch6.js
//Mountains3

import { createBackground } from '../utils.js';

export function sketch6(p) {
  let Background;

  p.setup = () => {
    p.createCanvas(1304, 984);
    Background = createBackground(p);
    Mountains3();
  };

  function Mountains3() {
    console.log("Mountains3");
    Background();
      let topx;
      let topy;
      let triHeight;
      let numTri;
      let sunx;
      let sunsize;
  
      Background(); // Ensure this function is defined if it does more than just setting a background color
  
      p.stroke(255);
      p.fill(255, 0, 0);
      
      sunx = p.random(p.width);
      sunsize = p.random(30, 800);
      
      p.ellipse(sunx, sunsize / 2, sunsize, sunsize);
      
      p.fill(0);
  
      numTri = p.int(p.random(2, 100));
      
      for (let c = 0; c < numTri; c++) {
        topx = p.random(p.width);
        topy = p.random(p.height);
        triHeight = p.random(50, p.height);
        
        p.strokeWeight(triHeight / 50 + 1);
  
        p.triangle(
          topx, topy,
          topx + triHeight / 2, topy + triHeight,
          topx - triHeight / 2, topy + triHeight
        );
      }
    }
  }
  