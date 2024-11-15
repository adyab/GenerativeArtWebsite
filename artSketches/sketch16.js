// artSketches/sketch16.js
// StretchedCircleGrid

export function sketch16(p) {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      StretchedCircleGrid();
    };
  
    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      StretchedCircleGrid();
    };
  
    function StretchedCircleGrid() {
      console.log("StretchedCircleGrid");
      p.background(255);
      p.fill(255);
      p.stroke(0);
  
      let minDim = Math.min(p.width, p.height);
      let centerX = p.random(p.width);
      let centerY = p.random(p.height);
      let circleSize = p.int(p.random(minDim * 0.015, minDim * 0.04));
      let circleChance = p.random(20, 100);
      let skew = p.random(1, 5);
      p.strokeWeight(circleSize * 0.1);
  
      for (let j = 0; j < p.height; j += circleSize) {
        for (let i = 0; i < p.width; i += circleSize) {
          let circleQ = p.random(100);
          if (circleQ > circleChance) {
            let xStretch = circleSize * ((Math.abs(i - centerX) / p.width) * skew);
            let yStretch = circleSize * ((Math.abs(j - centerY) / p.height) * skew);
            p.ellipse(
              i + circleSize / 2,
              j + circleSize / 2,
              xStretch,
              yStretch
            );
          }
        }
      }
    }
  }
  