import { sketch1 } from './artSketches/sketch1.js';
import { sketch2 } from './artSketches/sketch2.js';
import { sketch3 } from './artSketches/sketch3.js';
import { sketch4 } from './artSketches/sketch4.js';
import { sketch5 } from './artSketches/sketch5.js';
import { sketch6 } from './artSketches/sketch6.js';
import { sketch7 } from './artSketches/sketch7.js';
import { sketch8 } from './artSketches/sketch8.js';
import { sketch9 } from './artSketches/sketch9.js';
import { sketch10 } from './artSketches/sketch10.js';
import { sketch11 } from './artSketches/sketch11.js';
import { sketch12 } from './artSketches/sketch12.js';
import { sketch13 } from './artSketches/sketch13.js';
import { sketch14 } from './artSketches/sketch14.js';
import { sketch15 } from './artSketches/sketch15.js';
import { sketch16 } from './artSketches/sketch16.js';
import { sketch17 } from './artSketches/sketch17.js';
import { sketch18 } from './artSketches/sketch18.js';
import { sketch19 } from './artSketches/sketch19.js';
import { sketch20 } from './artSketches/sketch20.js';
import { sketch21 } from './artSketches/sketch21.js';
import { sketch22 } from './artSketches/sketch22.js';
import { sketch23 } from './artSketches/sketch23.js';
// ... import all your sketches

const sketches = [
  { sketch: sketch1, weight: 30 },  
  { sketch: sketch2, weight: 0 },   
  { sketch: sketch3, weight: 0 },   // 3% chance
  { sketch: sketch4, weight: 20 },   // 3% chance
  { sketch: sketch5, weight: 30 },   // 3% chance
  { sketch: sketch6, weight: 0 },   // 3% chance
  { sketch: sketch7, weight: 10 },   // 3% chance
  { sketch: sketch8, weight: 10 },   // 3% chance
  { sketch: sketch9, weight: 10 },   // 3% chance
  { sketch: sketch10, weight: 10 },   
  { sketch: sketch11, weight: 20 },  
  { sketch: sketch12, weight: 8 },
  { sketch: sketch13, weight: 25 },
  { sketch: sketch14, weight: 5 },
  { sketch: sketch15, weight: 10 },
  { sketch: sketch16, weight: 8 },
  { sketch: sketch17, weight: 30 },
  { sketch: sketch18, weight: 30 },
  { sketch: sketch19, weight: 10 },
  { sketch: sketch20, weight: 15 },
  { sketch: sketch21, weight: 20 },
  { sketch: sketch22, weight: 25 },
  { sketch: sketch23, weight: 30 },

  // ... add all your sketches with their respective weights
];

let currentSketch;

function weightedRandomSketch(items) {
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
  let random = Math.random() * totalWeight;
  
  for (let i = 0; i < items.length; i++) {
    random -= items[i].weight;
    if (random <= 0) {
      return items[i].sketch;
    }
  }
  
  return items[items.length - 1].sketch;
}

function setup() {
  const randomSketch = weightedRandomSketch(sketches);
  currentSketch = new p5(randomSketch, 'sketch-container');
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
    // Resize the canvas when the window is resized
    resizeCanvas(windowWidth, windowHeight);
  }
  

window.onload = setup;

