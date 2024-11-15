// artSketches/sketch18.js
// TenPrint2

export function sketch18(p) {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      TenPrint2();
    };
  
    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      TenPrint2();
    };
  
    function TenPrint2() {
      console.log("TenPrint2");
      p.background(255);
      p.stroke(0);
  
      let minDim = Math.min(p.width, p.height);
      let lineSize = p.int(p.random(minDim * 0.02, minDim * 0.08));
      console.log("Line size:", lineSize);
  
      p.strokeWeight(lineSize * 0.1);
  
      let chance1 = p.random(10);
      let chance2 = chance1 + p.random(10);
      let chance3 = chance2 + p.random(10);
      let chance4 = chance3 + p.random(10);
      let chance5 = chance4 + p.random(10);
      let chance6 = chance5 + p.random(10);
      let symbolChance = p.random(100);
      let fillChance = p.random(100);
  
      for (let j = 0; j < p.height; j += lineSize) {
        for (let i = 0; i < p.width; i += lineSize) {
          let fillQ = p.random(100);
          if (fillQ < fillChance) {
            p.fill(0);
          } else {
            p.noFill();
          }
  
          let symbolQ = p.random(100);
          if (symbolQ < symbolChance) {
            let shape = p.random(chance6);
            if (shape < chance1) {
              p.line(i, j, i + lineSize, j + lineSize);
            } else if (shape < chance2) {
              p.line(i, j + lineSize, i + lineSize, j);
            } else if (shape < chance3) {
              p.line(i, j + (lineSize / 2), i + lineSize, j + (lineSize / 2));
            } else if (shape < chance4) {
              p.line(i + (lineSize / 2), j, i + (lineSize / 2), j + lineSize);
            } else if (shape < chance5) {
              p.ellipse(i + (lineSize / 2), j + (lineSize / 2), lineSize, lineSize);
            } else if (shape < chance6) {
              p.noFill();
              p.rect(i, j, lineSize, lineSize);
            }
          }
        }
      }
    }
  }
  