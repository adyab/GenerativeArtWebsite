// artSketches/sketch14.js
// SkewedTriangle

export function sketch14(p) {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      SkewedTriangle();
    };
  
    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      SkewedTriangle();
    };
  
    function SkewedTriangle() {
      console.log("SkewedTriangle");
      p.stroke(0);
      p.noFill();
      p.background(255);
  
      let minDim = Math.min(p.width, p.height);
      let margin = minDim * 0.02; // 2% of the smaller dimension for margin
  
      let topx = p.width / 2;
      let topy = margin;
      let brx = p.width / 2 + minDim / 2 - margin;
      let bry = p.height - margin;
      let blx = p.width / 2 - minDim / 2 + margin;
      let bly = p.height - margin;
  
      let skew = p.int(p.random(minDim * 0.003, minDim * 0.05)); // 0.3% to 5% of minDim
      p.strokeWeight(skew / 10);
  
      while (brx > blx) {   
        p.triangle(topx, topy, brx, bry, blx, bly);
        topx = topx + p.random(-skew, skew);
        topy = topy + p.random(skew);
        brx = brx - p.random(-0.5 * skew, 1.5 * skew);
        bry = bry - p.random(-0.5 * skew, 1.5 * skew);
        blx = blx + p.random(-0.5 * skew, 1.5 * skew);
        bly = bly - p.random(-0.5 * skew, 1.5 * skew);
      }
    }
  }
  