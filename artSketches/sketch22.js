// artSketches/sketch22.js
// TenPrint8

export function sketch22(p) {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      TenPrint8();
    };
  
    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      TenPrint8();
    };
  
    function TenPrint8() {
      console.log("TenPrint8");
      p.stroke(0);
      p.noFill();
  
      let minDim = Math.min(p.width, p.height);
      let lineSize = p.int(p.random(minDim * 0.04, minDim * 0.15));
      p.strokeWeight(lineSize * 0.1);
      let pipeGirth = p.random(0.12, 0.43);
      console.log("Pipe girth:", pipeGirth);
  
      let chances = [0, 0, 0, 0, 0, 0, 0];
      for (let i = 0; i < 7; i++) {
        chances[i] = (i > 0 ? chances[i-1] : 0) + p.random(10);
      }
  
      let symbolChance = p.random(60, 100);
  
      for (let j = 0; j < p.height; j += lineSize) {
        for (let i = 0; i < p.width; i += lineSize) {
          let symbolQ = p.random(99);
          if (symbolQ < symbolChance) {
            let shape = p.random(chances[6]);
            drawShape(i, j, lineSize, pipeGirth, shape, chances);
          }
        }
      }
    }
  
    function drawShape(i, j, lineSize, pipeGirth, shape, chances) {
      if (shape < chances[0]) {
        // dash =
        p.line(i, j + lineSize * pipeGirth, i + lineSize, j + lineSize * pipeGirth);
        p.line(i, j + lineSize * (1 - pipeGirth), i + lineSize, j + lineSize * (1 - pipeGirth));
      } else if (shape < chances[1]) {
        // vertical ||
        p.line(i + lineSize * pipeGirth, j, i + lineSize * pipeGirth, j + lineSize);
        p.line(i + lineSize * (1 - pipeGirth), j, i + lineSize * (1 - pipeGirth), j + lineSize);
      } else if (shape < chances[2]) {
        // 4-way cross
        p.arc(i, j, 2 * pipeGirth * lineSize, 2 * pipeGirth * lineSize, 0, p.HALF_PI);
        p.arc(i + lineSize, j + lineSize, 2 * pipeGirth * lineSize, 2 * pipeGirth * lineSize, p.PI, p.PI + p.HALF_PI);
        p.arc(i + lineSize, j, 2 * pipeGirth * lineSize, 2 * pipeGirth * lineSize, p.HALF_PI, p.PI);
        p.arc(i, j + lineSize, 2 * pipeGirth * lineSize, 2 * pipeGirth * lineSize, p.PI + p.HALF_PI, p.TWO_PI);
      } else if (shape < chances[3]) {
        // lr arc
        p.arc(i, j, (2 - 2 * pipeGirth) * lineSize, (2 - 2 * pipeGirth) * lineSize, 0, p.HALF_PI);
        p.arc(i, j, 2 * pipeGirth * lineSize, 2 * pipeGirth * lineSize, 0, p.HALF_PI);
      } else if (shape < chances[4]) {
        // ll arc
        p.arc(i + lineSize, j, (2 - 2 * pipeGirth) * lineSize, (2 - 2 * pipeGirth) * lineSize, p.HALF_PI, p.PI);
        p.arc(i + lineSize, j, 2 * pipeGirth * lineSize, 2 * pipeGirth * lineSize, p.HALF_PI, p.PI);
      } else if (shape < chances[5]) {
        // tl arc
        p.arc(i + lineSize, j + lineSize, (2 - 2 * pipeGirth) * lineSize, (2 - 2 * pipeGirth) * lineSize, p.PI, p.PI + p.HALF_PI);
        p.arc(i + lineSize, j + lineSize, 2 * pipeGirth * lineSize, 2 * pipeGirth * lineSize, p.PI, p.PI + p.HALF_PI);
      } else if (shape < chances[6]) {
        // tr arc
        p.arc(i, j + lineSize, (2 - 2 * pipeGirth) * lineSize, (2 - 2 * pipeGirth) * lineSize, p.PI + p.HALF_PI, p.TWO_PI);
        p.arc(i, j + lineSize, 2 * pipeGirth * lineSize, 2 * pipeGirth * lineSize, p.PI + p.HALF_PI, p.TWO_PI);
      }
    }
  }
  