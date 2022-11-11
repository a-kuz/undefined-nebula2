/// <reference path="../node_modules/@types/p5/global.d.ts" />
import "p5";
import P5 from "p5";
import "p5/lib/addons/p5.dom";
// import "p5/lib/addons/p5.sound";	// Include if needed
import "./styles.scss";

// Creating the sketch itself
const sketch = (p5: P5) => {
  let p = p5.PI;
  let red,
    blue,
    green = 0xa1,
    blueBase = 0;
  let r = 7;
  let time = 0;
  let marginX = 250;
  let marginY = 250;
  let scale = 1;
  let starBrightess = 20;
  function randomChord() {
    if (p > p5.PI / 4) p -= 0.0009;
    else p = p5.PI;
    // find a random point on a circle

    red =
      p5.random(time > 1000 * 10 ? 100 : 190, time > 1000 * 10 ? 140 : 245) +
      255 -
      blueBase;
    blue = p5.random(40, 50) + blueBase;
    p5.noStroke();
    if (p5.random() < 2) {
      let angle1 = p5.random(0, 2 * p5.PI);
      let rr = p5.randomGaussian(r / 2, r * 5);
      let xpos1 = r + rr * p5.cos(angle1) + marginX;
      let ypos1 = r + rr * p5.sin(angle1) + marginY;
      let rrr = p5.randomGaussian(0.3, 3);
      p5.fill(0xff, 0xfb, 0xd4, starBrightess);
      p5.circle(xpos1, ypos1, rrr / 3);

      p5.fill(red, green - 0x30, blue, 6);

      p5.circle(xpos1, ypos1, rrr);
      p5.fill(red, green, blue, 4);
      p5.circle(xpos1, ypos1, rrr * 2);
      p5.fill(red, green, blue, 2);
      p5.circle(xpos1, ypos1, rrr * 3);
      p5.fill(red, green, blue, 2);
      p5.circle(xpos1, ypos1, rrr * 5);
      p5.fill(red, green, blue, 1);
      p5.circle(xpos1, ypos1, rrr * 20);
      p5.fill(red, green, (blue * 1) / 4, 1);
      p5.circle(xpos1, ypos1, rrr * 30);
    }
  }

  // The sketch setup method
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.background(0);
    p5.frameRate(120);

    // translucent stroke using alpha value

    //p5.noSmooth();
    //p5.pixelDensity(1);
    //p5.frameRate(910);
  };

  p5.mouseClicked = () => {
    p5.clear();
  };

  p5.mouseMoved = (event) => {
    green = p5.map(p5.mouseX, 0, p5.width, 0x60, 0xff);
    blueBase = p5.map(p5.mouseY, 0, p5.height, 0x00, 0xf0);
  };

  // The sketch draw method
  p5.draw = () => {
    // scale -= 0.0001;
    time += p5.deltaTime;
    for (let i = 0; i < 23; i++) {
      marginX = marginX + p5.randomGaussian(0, 12);
      marginY = marginY + p5.randomGaussian(0, 9);
      if (marginX < 0) marginX = p5.width;
      if (marginY < 20) marginY = p5.height - 50;
      if (marginX > p5.width) marginX = 0;
      if (marginY > p5.height - 50) marginY = 0;

      for (let i = 0; i < 2; i++) randomChord();
      let rectW = 450;
      let rectH = 40;
      p5.noFill();
      p5.fill(0, 0, 0);
      p5.rect(p5.width - rectW, p5.height - rectH, rectW, rectH);
      p5.fill(0, 255, 255);
      p5.noStroke();

      p5.textSize(14);
      p5.text(p5.frameRate().toFixed(0), p5.width - rectW, p5.height - 10);
    }
    // randomChord();
    // randomChord();
    // randomChord();
    // randomChord();
    // randomChord();
    // randomChord();
    // randomChord();
    // randomChord();
    // randomChord();
    // randomChord();
    // randomChord();
    // randomChord();
    // randomChord();
    // randomChord();
    // randomChord();
    // randomChord();
    // randomChord();
    // randomChord();
    // randomChord();
    // randomChord();
    // randomChord();
    // randomChord();
    // randomChord();
    // randomChord();
    // randomChord();
    // randomChord();
    // randomChord();
    // randomChord();
    // randomChord();
  };
};

new P5(sketch);
