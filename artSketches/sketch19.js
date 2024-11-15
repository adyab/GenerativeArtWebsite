// artSketches/sketch19.js
// TenPrint5

export function sketch19(p) {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      TenPrint5();
    };
  
    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      TenPrint5();
    };
  
    function TenPrint5() {
      console.log("TenPrint5");
      p.background(255);
      p.stroke(0);
  
      let minDim = Math.min(p.width, p.height);
      let lineSize = p.int(p.random(minDim * 0.01, minDim * 0.1));
      p.strokeWeight(lineSize * 0.1);
  
      let chances = [0, 0, 0, 0, 0, 0];
      for (let i = 0; i < 6; i++) {
        if (p.random(2) < 1) {
          chances[i] = (i > 0 ? chances[i-1] : 0) + p.random(10);
        } else {
          chances[i] = i > 0 ? chances[i-1] : 0;
        }
      }
  
      let symbolChance = p.random(1, 100);
      let fillChance = p.random(100);
  
      for (let j = 0; j < p.height / 2; j += lineSize) {
        for (let i = 0; i < p.width / 2; i += lineSize) {
          let fillQ = p.random(100);
          if (fillQ < fillChance) {
            p.fill(0);
          } else {
            p.noFill();
          }
  
          let symbolQ = p.random(99);
          if (symbolQ < symbolChance) {
            let shape = p.random(chances[5]);
            drawSymmetricalShape(i, j, lineSize, shape, chances);
          }
        }
      }
    }
  
    function drawSymmetricalShape(i, j, lineSize, shape, chances) {
      let positions = [
        [i, j],
        [p.width - i - lineSize, j],
        [i, p.height - j - lineSize],
        [p.width - i - lineSize, p.height - j - lineSize]
      ];
  
      positions.forEach(pos => {
        if (shape < chances[0]) {
          p.line(pos[0], pos[1], pos[0] + lineSize, pos[1] + lineSize);
        } else if (shape < chances[1]) {
          p.line(pos[0], pos[1] + lineSize, pos[0] + lineSize, pos[1]);
        } else if (shape < chances[2]) {
          p.line(pos[0], pos[1] + (lineSize / 2), pos[0] + lineSize, pos[1] + (lineSize / 2));
        } else if (shape < chances[3]) {
          p.line(pos[0] + (lineSize / 2), pos[1], pos[0] + (lineSize / 2), pos[1] + lineSize);
        } else if (shape < chances[4]) {
          p.ellipse(pos[0] + (lineSize / 2), pos[1] + (lineSize / 2), lineSize, lineSize);
        } else if (shape < chances[5]) {
          p.rect(pos[0], pos[1], lineSize, lineSize);
        }
      });
    }
  }
  