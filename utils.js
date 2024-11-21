// utils.js

export function createBackground(p) {
    return function Background() {
      console.log("Background");
      
      let inverseQ = p.int(p.random(4));
      if (inverseQ > 1) {
        p.background(251,247,245);
        p.stroke(0);
      } else {
        p.background(0);
        p.stroke(255);
      }
      p.strokeWeight(1);
      
      let backgroundType = p.int(p.random(1, 7));
  
      if (backgroundType == 1) {   //overlapping arcs background
        console.log("arcs");
        p.noFill();
        let g = p.random(7, 100);
        let ellipseQ1 = 0;
        let ellipseQ2 = 0;
        let ellipseQ3 = 0;
        let ellipseQ4 = 0;
        let ellipseQ5 = 0;
  
        while (ellipseQ1 == 0 && ellipseQ2 == 0 && ellipseQ3 == 0 && ellipseQ4 == 0) {
          ellipseQ1 = p.int(p.random(2));
          ellipseQ2 = p.int(p.random(2));
          ellipseQ3 = p.int(p.random(2));
          ellipseQ4 = p.int(p.random(2));
          ellipseQ5 = p.int(p.random(2));
        }
  
        for (let c = 0; c < p.width * 2 + p.height; c += g) {
          if (ellipseQ1 == 1) p.ellipse(0, 0, c, c);
          if (ellipseQ2 == 1) p.ellipse(p.width, 0, c, c);
          if (ellipseQ3 == 1) p.ellipse(0, p.height, c, c);
          if (ellipseQ4 == 1) p.ellipse(p.width, p.height, c, c);
          if (ellipseQ5 == 1) p.ellipse(p.width / 2, p.height / 2, c, c);
        }
      } else if (backgroundType == 2) {              //slashed background
        console.log("slash");
        let backslashQ = 0;
        let frontslashQ = 0;
        while (backslashQ == 0 && frontslashQ == 0) {
          backslashQ = p.int(p.random(2));
          frontslashQ = p.int(p.random(2));
          let darkness = p.int(p.random(2, 30));
          for (let x = -p.height; x < p.width; x = x + darkness) {
            if (backslashQ == 1) p.line(x, 0, x + p.height, p.height);
            if (frontslashQ == 1) p.line(x, p.height, x + p.height, 0);
          }
        }
      } else if (backgroundType == 3) { //outward rays
        console.log("rays");
        let x = p.random(p.width);
        let y = p.random(p.height);
        let spacing = p.random(1, 8);
        console.log(spacing);
        for (let c = 0; c <= 360; c += spacing) {
          p.line(x, y, x + p.cos(p.radians(c)) * p.width * 1.5, y + p.sin(p.radians(c)) * p.width * 1.5);
        }
      } else if (backgroundType == 4) { // black background
        console.log("black");
        p.background(0);
      } else if (backgroundType == 5) {  //pixelated spotty background
        console.log("spotty");
        let g = p.random(0.5, 3);
        console.log("stroke = ", g);
        p.strokeWeight(g);
        
        let tint = p.random(5, 90);
        console.log("tint", tint);
        for (let y = 0; y < p.height; y++) {
          let x = 0;
          while (x < p.width) {
            let pointQ = p.random(100);
            if (pointQ < tint) p.point(x, y);
            x++;
          }
        }
      } else if (backgroundType == 6) {    //dot grid
        console.log("dot");
        let tint = p.int(p.random(2, 80));
        let rot = p.random(0, 45);
        console.log("rotate ", rot);
        let tiltQ = p.int(p.random(3));
        p.strokeWeight(1 + tint / 5);
        console.log("tint", tint);
        p.push();
        if (tiltQ < 1) p.rotate(p.radians(rot));
        for (let y = -p.height; y < p.height; y += tint) {
          let x = 0;
          while (x < p.width * 1.5) {      
            p.point(x, y);
            x = x + tint;
          }
        }  
        p.pop();
      } else {                       //white background
        console.log("white");
        p.background(255);
      }
    };
  }
  