// artSketches/sketch2.js
//Autoglyph3

export function sketch2(p) {
    p.setup = () => {
      p.createCanvas(1304, 984);
      p.background(255);
      Autoglyph3();
    };
  
    p.draw = () => {
      // Optionally, you could redraw the art here if needed
    };
  
    function Autoglyph3() {
      console.log("Autoglyph3");
      let i = 1;
      let j = 1;
      p.background(255);
      p.strokeWeight(2);
      p.noFill();
      p.rectMode(p.CENTER);
      let chance = p.random(5, 35);
  
      // Loop through x and y coordinates in the upper left quadrant only
      while (i <= p.width / 10 / 2) {
        j = 1;
        while (j <= p.height / 10 / 2) {
          // Chance of drawing a shape
          let rand = p.random(1, 100);
          if (rand < chance) {
            // Picks a random shape (circle or square)
            let shape = p.random(2);
            if (shape < 1) {
              let ellSize = p.random(60);
              p.ellipse(i * 10, j * 10, ellSize, ellSize);
              p.ellipse((p.width / 10 - i) * 10, j * 10, ellSize, ellSize);
              p.ellipse(i * 10, (p.height / 10 - j) * 10, ellSize, ellSize);
              p.ellipse((p.width / 10 - i) * 10, (p.height / 10 - j) * 10, ellSize, ellSize);
            } else {
              let rectSize = p.random(40);
              p.rect(i * 10, j * 10, rectSize, rectSize);
              p.rect((p.width / 10 - i) * 10, j * 10, rectSize, rectSize);
              p.rect(i * 10, (p.height / 10 - j) * 10, rectSize, rectSize);
              p.rect((p.width / 10 - i) * 10, (p.height / 10 - j) * 10, rectSize, rectSize);
            }
          }
          j++;
        }
        i++;
      }
    }
  }
  