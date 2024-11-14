// artSketches/sketch4.js
//CircleGrid

export function sketch4(p) {
    p.setup = () => {
      p.createCanvas(1304, 984); // Adjust the canvas size as needed
      p.background(255);
      CircleGrid();
    };
  
    function CircleGrid() {
      console.log("CircleGrid");
      let i = 0;
      let j = 0;
      let circleQ;
      
      p.background(255);
      p.noFill();
      p.stroke(0);
      
      let circleSize = p.int(p.random(15, 100));
      let circleChance = p.random(100);
      p.strokeWeight(circleSize * 0.1);
      
      let multiplier = p.random(3);
  
      while (j < p.height) {
        while (i < p.width) {
          circleQ = p.random(100);
          if (circleQ > circleChance) {
            p.ellipse(
              i + circleSize / 2,
              j + circleSize / 2,
              circleSize + p.random(-multiplier * circleSize, multiplier * circleSize),
              circleSize + p.random(-multiplier * circleSize, multiplier * circleSize)
            );
          }
          i += circleSize;
        }
        i = 0;
        j += circleSize;
      }
    }
  }
