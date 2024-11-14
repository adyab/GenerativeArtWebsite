import { sketch1 } from './artSketches/sketch1.js';
import { sketch2 } from './artSketches/sketch2.js';
import { sketch3 } from './artSketches/sketch3.js';
import { sketch4 } from './artSketches/sketch4.js';
import { sketch5 } from './artSketches/sketch5.js';
import { sketch6 } from './artSketches/sketch6.js';
// ... import all your sketches

const sketches = [
  { sketch: sketch1, weight: 10 },  // 10% chance
  { sketch: sketch2, weight: 5 },   // 5% chance
  { sketch: sketch3, weight: 3 },   // 3% chance
  { sketch: sketch4, weight: 3 },   // 3% chance
  { sketch: sketch5, weight: 3 },   // 3% chance
  { sketch: sketch6, weight: 3 },   // 3% chance
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
}

window.onload = setup;

