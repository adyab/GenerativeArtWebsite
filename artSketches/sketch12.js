// artSketches/sketch12.js
// Skewed1Box

export function sketch12(p) {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      Skewed1Box();
    };
  
    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      Skewed1Box();
    };
  
    function Skewed1Box() {
      console.log("Skewed1Box");
      p.background(255);
      p.stroke(0);
      p.noFill();
  
      let minDim = Math.min(p.width, p.height);
      let skew = p.random(3, 40);
      p.strokeWeight(skew / 10);
  
      let tlx = p.width / 2 - minDim / 2;
      let tly = 0;
      let trix = tlx + minDim;
      let triy = tly;
      let blx = tlx;
      let bly = tly + minDim;
      let brx = tlx + minDim;
      let bry = tly + minDim;
  
      while ((trix - tlx) > 0) {
        p.line(tlx, tly, trix, triy);
        p.line(trix, triy, brx, bry);
        p.line(brx, bry, blx, bly);
        p.line(blx, bly, tlx, tly);
  
        tlx += p.random(skew);
        tly += p.random(skew);
        trix -= p.random(skew);
        triy += p.random(skew);
        brx -= p.random(skew);
        bry -= p.random(skew);
        blx += p.random(skew);
        bly -= p.random(skew);
      }
    }
  }
  
