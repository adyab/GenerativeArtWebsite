// artSketches/sketch13.js
// SkewedBoxes

export function sketch13(p) {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      SkewedBoxes();
    };
  
    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      SkewedBoxes();
    };
  
    function SkewedBoxes() {
      console.log("Skewed Boxes");
      p.background(255);
      p.stroke(0);
      p.noFill();
  
      let minDim = Math.min(p.width, p.height);
      let boxSize = p.int(p.random(minDim * 0.04, minDim));
      p.strokeWeight(boxSize * 0.01);
  
      let numAcross = p.int(p.width / boxSize);
      let numDown = p.int(p.height / boxSize);
      let spacingAcross = (p.width - (boxSize * numAcross)) / numAcross;
      let spacingDown = (p.height - (boxSize * numDown)) / numDown;
  
      let numBoxes = p.int(p.random(1, 40));
  
      for (let j = 0; j < p.height; j += boxSize + spacingDown) {
        for (let i = 0; i < p.width; i += boxSize + spacingAcross) {
          let tlx = i + spacingAcross / 2;
          let tly = j + spacingDown / 2;
          let trix = tlx + boxSize;
          let triy = tly;
          let blx = tlx;
          let bly = tly + boxSize;
          let brx = tlx + boxSize;
          let bry = tly + boxSize;
  
          for (let c = 0; c < numBoxes; c++) {
            p.line(tlx, tly, trix, triy);
            p.line(trix, triy, brx, bry);
            p.line(brx, bry, blx, bly);
            p.line(blx, bly, tlx, tly);
  
            let skewAmount = boxSize / numBoxes / 1.1;
            tlx += p.random(skewAmount);
            tly += p.random(skewAmount);
            trix -= p.random(skewAmount);
            triy += p.random(skewAmount);
            brx -= p.random(skewAmount);
            bry -= p.random(skewAmount);
            blx += p.random(skewAmount);
            bly -= p.random(skewAmount);
          }
        }
      }
    }
  }
  