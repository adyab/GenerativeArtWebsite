// artSketches/sketch21.js
// TenPrint7

export function sketch21(p) {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      TenPrint7();
    };
  
    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      TenPrint7();
    };
  
    function TenPrint7() {
      console.log("TenPrint7");
      p.background(255);
      p.stroke(0);
  
      let minDim = Math.min(p.width, p.height);
      let lineSize = p.int(p.random(minDim * 0.04, minDim * 0.15));
      p.strokeWeight(lineSize * 0.1);
  
      let chances = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (let i = 0; i < 9; i++) {
        if (p.random(2) < 1) {
          if (i < 2) chances[i] = (i > 0 ? chances[i-1] : 0) + p.random(10);
          else if (i < 4) chances[i] = chances[i-1] + p.random(3);
          else if (i < 8) chances[i] = chances[i-1] + p.random(30);
          else chances[i] = chances[i-1] + p.random(10);
        } else {
          chances[i] = i > 0 ? chances[i-1] : 0;
        }
      }
  
      let symbolChance = p.random(100);
      let fillChance = p.random(100);
  
      for (let j = 0; j < p.height; j += lineSize) {
        for (let i = 0; i < p.width; i += lineSize) {
          let fillQ = p.random(80);
          if (fillQ < fillChance) {
            p.fill(0);
          } else {
            p.noFill();
          }
  
          let symbolQ = p.random(100);
          if (symbolQ < symbolChance) {
            let shape = p.random(chances[8]);
            drawShape(i, j, lineSize, shape, chances);
          }
        }
      }
    }
  
    function drawShape(i, j, lineSize, shape, chances) {
      if (shape < chances[0]) {
        p.line(i, j, i + lineSize, j + lineSize); // backslash
      } else if (shape < chances[1]) {
        p.line(i, j + lineSize, i + lineSize, j); // forward slash
      } else if (shape < chances[2]) {
        p.line(i, j + (lineSize / 2), i + lineSize, j + (lineSize / 2)); // dash -
      } else if (shape < chances[3]) {
        p.line(i + lineSize / 2, j, i + lineSize / 2, j + lineSize); // vertical |
      } else if (shape < chances[4]) {
        p.noFill();
        p.arc(i, j, 2 * lineSize, 2 * lineSize, 0, p.HALF_PI); // lr arc
      } else if (shape < chances[5]) {
        p.noFill();
        p.arc(i + lineSize, j, 2 * lineSize, 2 * lineSize, p.HALF_PI, p.PI); // ll arc
      } else if (shape < chances[6]) {
        p.noFill();
        p.arc(i + lineSize, j + lineSize, 2 * lineSize, 2 * lineSize, p.PI, p.PI + p.HALF_PI); // tl arc
      } else if (shape < chances[7]) {
        p.noFill();
        p.arc(i, j + lineSize, 2 * lineSize, 2 * lineSize, p.PI + p.HALF_PI, p.TWO_PI); // tr arc
      } else if (shape < chances[8]) {
        p.ellipse(i + lineSize / 2, j + lineSize / 2, lineSize, lineSize); // circle
      }
    }
  }
  