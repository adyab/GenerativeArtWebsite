// artSketches/sketch5.js
//ConcentricCircle

import { createBackground } from '../utils.js';

export function sketch5(p) {
  let Background;

  p.setup = () => {
    p.createCanvas(1304, 984); // Adjust the canvas size as needed
    Background = createBackground(p);
      ConcentricCircle();
    };
  
    function ConcentricCircle() {
      console.log("ConcentricCircle");
      let circSize = p.height * 0.85;
      let x = p.width / 2;
      let y = p.height / 2;
      let circChange = p.random(0.1, 5);
      let black = 1;
  
      p.background(255);
      Background(); // Ensure this function is defined if it does more than just setting a background color
  
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
