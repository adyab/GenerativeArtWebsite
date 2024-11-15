// artSketches/sketch6.js

export function sketch6(p) {
    p.setup = () => {
      p.createCanvas(1304, 984); // Adjust the canvas size as needed
      p.background(255);
      Mountains3();
    };
  
    function Mountains3() {
      console.log("Mountains3");
      let topx;
      let topy;
      let triHeight;
      let numTri;
      let sunx;
      let sunsize;
  
      Background(); // Ensure this function is defined if it does more than just setting a background color
  
      p.stroke(255);
      p.fill(255, 0, 0);
      
      sunx = p.random(p.width);
      sunsize = p.random(30, 800);
      
      p.ellipse(sunx, sunsize / 2, sunsize, sunsize);
      
      p.fill(0);
  
      numTri = p.int(p.random(2, 100));
      
      for (let c = 0; c < numTri; c++) {
        topx = p.random(p.width);
        topy = p.random(p.height);
        triHeight = p.random(50, p.height);
        
        p.strokeWeight(triHeight / 50 + 1);
  
        p.triangle(
          topx, topy,
          topx + triHeight / 2, topy + triHeight,
          topx - triHeight / 2, topy + triHeight
        );
      }
    }
  
    function Background() {
      // Implement your Background function here if it does more than just setting a background color
      // For example, if you want to add a gradient or any other effect
      // If it's just setting a color, you can use p.background() directly in setup
    }
  }
  