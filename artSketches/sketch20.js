// artSketches/sketch20.js
// TenPrint6

export function sketch20(p) {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      TenPrint6();
    };
  
    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      TenPrint6();
    };
  
    function TenPrint6() {
      console.log("TenPrint6");
      p.background(255);
      p.stroke(0);
  
      let minDim = Math.min(p.width, p.height);
      let lineSize = p.int(p.random(minDim * 0.015, minDim * 0.1));
      p.strokeWeight(lineSize * 0.1);
  
      let chances = [0, 0, 0, 0, 0, 0, 0];
      for (let i = 0; i < 7; i++) {
        if (p.random(2) < 1) {
          chances[i] = (i > 0 ? chances[i-1] : 0) + p.random(10);
        } else {
          chances[i] = i > 0 ? chances[i-1] : 0;
        }
      }
  
      let symbolChance = p.random(1, 100);
      let fillChance = p.random(100);
  
      for (let j = 0; j < p.height; j += lineSize) {
        for (let i = 0; i < p.width; i += lineSize) {
          let fillQ = p.random(100);
          if (fillQ < fillChance) {
            p.fill(0);
          } else {
            p.noFill();
          }
  
          let symbolQ = p.random(1, 100);
          if (symbolQ < symbolChance) {
            let shape = p.random(chances[6]);
            drawShape(i, j, lineSize, shape, chances);
          }
        }
      }
    }
  
    function drawShape(i, j, lineSize, shape, chances) {
      if (shape < chances[0]) {
        p.line(i, j, i + lineSize, j + lineSize);
      } else if (shape < chances[1]) {
        p.line(i, j + lineSize, i + lineSize, j);
      } else if (shape < chances[2]) {
        p.line(i, j + (lineSize / 2), i + lineSize, j + (lineSize / 2));
      } else if (shape < chances[3]) {
        p.line(i + (lineSize / 2), j, i + (lineSize / 2), j + lineSize);
      } else if (shape < chances[4]) {
        p.ellipse(i + (lineSize / 2), j + (lineSize / 2), lineSize, lineSize);
      } else if (shape < chances[5]) {
        p.rect(i, j, lineSize, lineSize);
      } else if (shape < chances[6]) {
        p.line(i, j + (lineSize / 2), i + lineSize, j + (lineSize / 2));
        p.line(i + (lineSize / 2), j, i + (lineSize / 2), j + lineSize);
      }
    }
  }
  