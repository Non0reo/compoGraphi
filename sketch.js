const MAX_SIZE = 130;
const SQUARE_COUNT = 11;
const space = {
  x: 100,
  y: 100,
}
let img;

function setup() {
  createCanvas((SQUARE_COUNT + 1) * space.x, (SQUARE_COUNT + 1) * space.y);
  background(250);
  strokeWeight(6);
}

function draw() {
  background(30);
  let index = 0;
  let rotationCooef = map(mouseX, 0, width, -0.05, 0.05);
  //0.01, 0.03, 0.07

  for (let x = 0; x < SQUARE_COUNT; x++) 
    for (let y = 0; y < SQUARE_COUNT; y++) {
      
      push()
      rectMode(CENTER)

      const scaleX = x * space.x;
      const scaleY = y * space.y;

      const mapX = (255 - x * 30) / 255;
      const mapY = MAX_SIZE - y * 15;

      translate(scaleX + space.x, scaleY + space.y)
      rotate(index * rotationCooef)

      fill(255, mapX);
      stroke(255, index % 2 == 0 ? 0 : 255);
      rect(0, 0, mapY, mapY)

      pop()

      index++
    }
  }

}
