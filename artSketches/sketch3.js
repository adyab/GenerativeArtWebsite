// artSketches/sketch3.js
//BoxesTiltedBullseye

export function sketch3(p) {
    p.setup = () => {
      p.createCanvas(1304, 984); // Adjust the canvas size as needed
      p.background(255);
      BoxesTiltedBullseye();
    };
  
    function BoxesTiltedBullseye() {
      console.log("BoxesTiltedBullseye");
      let tlx;
      let tly;
      let boxSize;
      let j = 0;
      let i = 0;
      let numAcross;
      let numDown;
      let spacingAcross;
      let spacingDown;
      let skew;
      let numInner;
      let blackQ = -1;
  
      p.noStroke();
      p.rectMode(p.CENTER);
      
      boxSize = p.int(p.random(40, p.height / 2));
      p.strokeWeight(boxSize * 0.01);
      
      numAcross = p.int(p.width / boxSize);
      numDown = p.int(p.height / boxSize);
      
      spacingAcross = (p.width - (boxSize * numAcross)) / numAcross;
      spacingDown = (p.height - (boxSize * numDown)) / numDown;
      
      skew = p.random(1, 15);
      numInner = p.int(p.random(2, 25));
      
      while (j < p.height) {
        while (i < p.width) {
          tlx = i + spacingAcross / 2;
          tly = j + spacingDown / 2;
          
          p.push();
          p.translate(tlx + boxSize / 2, tly + boxSize / 2);
          p.rotate(p.radians(p.random(-skew, skew)));
          
          for (let c = 0; c < numInner; c++) {
            if (blackQ === -1) {
              p.fill(0);
            } else {
              p.fill(255);
            }
            blackQ *= -1;
  
            p.rect(0, 0, boxSize - (boxSize / numInner) * c, boxSize - (boxSize / numInner) * c);
          }
  
          p.pop();
  
          i += boxSize + spacingAcross;
        }
        i = 0;
        j += boxSize + spacingDown;
      }
    }
  }
  