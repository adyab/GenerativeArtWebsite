// artSketches/sketch17.js
// StripeMountains2

import { createBackground } from '../utils.js';

export function sketch17(p) {
  let Background;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    Background = createBackground(p);
    StripeMountains2();
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    StripeMountains2();
  };

  function StripeMountains2() {
    console.log("StripeMountains2");
    Background();
    p.noStroke();
    p.fill(255);
    p.rect(0, p.height / 4, p.width, p.height);

    // sun
    let sunQ = p.random(100);
    if (sunQ > 50) {
      p.noStroke();
      p.fill(255, 0, 0);
      p.ellipse(p.random(p.width), p.random(p.height / 4), 150, 150);
      p.fill(255);
      p.rect(0, p.height / 4, p.width, 200);
    }

    // clouds
    let numClouds = p.int(p.random(6));
    for (let c = 0; c < numClouds; c++) {
      cloud(p.int(p.random(p.width)), p.int(p.random(p.height / 6)), 80, 6);
    }

    p.noStroke();
    let stripe = 5;
    let sizemin = 4;
    let sizemax = 8;
    let mountainsOrWaves = p.int(p.random(3));
    let mountainChance = p.random(1, 80);

    for (let c = p.height / 4; c < p.height / 3; c = c + (stripe * 2)) {
      p.fill(0);
      p.rect(0, c, p.width, stripe);
      let mountainQ = p.random(50, 100);
      feature(c, stripe, mountainsOrWaves, mountainChance, mountainQ, sizemin, sizemax);
    }

    stripe = 10;
    sizemin = 3;
    sizemax = 7;
    mountainsOrWaves = p.int(p.random(3));
    mountainChance = p.random(5, 100);
    for (let c = p.height / 3 + stripe + 3; c < p.height / 2; c = c + (stripe * 2)) {
      p.fill(0);
      p.rect(0, c, p.width, stripe);
      let mountainQ = p.random(0, 90);
      feature(c, stripe, mountainsOrWaves, mountainChance, mountainQ, sizemin, sizemax);
    }

    stripe = 20;
    sizemin = 2;
    sizemax = 6;
    mountainsOrWaves = p.int(p.random(3));
    mountainChance = p.random(10, 150);
    for (let c = p.height / 2 + stripe - 1; c < (p.height / 7) * 5; c = c + (stripe * 2)) {
      p.fill(0);
      p.rect(0, c, p.width, stripe);
      let mountainQ = p.random(0, 80);
      feature(c, stripe, mountainsOrWaves, mountainChance, mountainQ, sizemin, sizemax);
    }

    stripe = 40;
    sizemin = 1;
    sizemax = 5;
    mountainsOrWaves = p.int(p.random(3));
    mountainChance = p.random(30, 200);
    for (let c = (p.height / 7 * 5) + stripe; c < p.height; c = c + (stripe * 2)) {
      p.fill(0);
      p.rect(0, c, p.width, stripe);
      let mountainQ = p.random(0, 80);
      feature(c, stripe, mountainsOrWaves, mountainChance, mountainQ, sizemin, sizemax);
    }
  }

  function feature(c, stripe, mountainsOrWaves, mountainChance, mountainQ, sizemin, sizemax) {
    if (mountainsOrWaves > 0) {
      mountainQ = p.random(50, 100);
      while (mountainQ > 0) {
        mountain(p.int(p.random(p.width)), c + stripe, stripe, p.int(p.random(sizemin, sizemax)), 1);
        mountainQ = mountainQ - mountainChance;
      }
    } else {
      if (c > p.height / 4 + stripe) {
        wave(p.int(p.random(p.width / 3)), c - stripe * 2, stripe);
        wave(p.int(p.random(p.width / 1.7, p.width)), c - stripe * 2, stripe);
      }
    }
  }

  function mountain(x, y, stripe, vert, startCol) {
    for (let z = vert; z > 0; z--) {
      if (startCol > 0) {
        p.fill(0);
      } else {
        p.fill(255);
      }
      startCol = startCol * -1;
      p.triangle(x - z * stripe, y, x, y - 2 * z * stripe, x + z * stripe, y);
    }
  }

  function wave(startx, starty, stripe) {
    p.noStroke();
    p.fill(255);
    p.rect(startx, starty + stripe, stripe * 3.5 * 3, stripe * 2);
    p.noFill();
    p.strokeWeight(stripe);
    p.stroke(0);
    p.arc(startx, starty - 1, stripe * 5, stripe * 5, p.radians(45), p.radians(90));
    p.arc(startx + stripe * 3.5, starty, stripe * 5, stripe * 5, p.radians(45), p.radians(135));
    p.arc(startx + stripe * 3.5 * 2, starty, stripe * 5, stripe * 5, p.radians(45), p.radians(135));
    p.arc(startx + stripe * 3.5 * 3, starty, stripe * 5, stripe * 5, p.radians(90), p.radians(135));
    p.noStroke();
  }

  function cloud(x, y, size, comp) {
    p.noStroke();
    p.fill(255);
    for (let z = 0; z < comp; z++) {
      p.ellipse(x, y, size, size);
      x = x + p.int(p.random(-size / 1.5, size / 1.5));
      y = y + p.int(p.random(-size / 5, size / 5));
    }
  }
}
