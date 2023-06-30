let angle = 0;
let angleTwo = 0;
let isPressed = false;

function preload() {}

function setup() {
  canvas = createCanvas(576, 576);
  canvas.parent("sketch-holder");
  a1 = 0;
  a2 = 0;

  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(35, 35);

  for (var x = 0; x <= width; x += 100) {
    for (var y = 0; y <= height; y += 100) {
      klocka(x, y, 50, 5, angle + a1, angleTwo + a2);
    }
  }

  if (isPressed) {
    a1 = a1 + 2;
    a2 = a2 + 1;
  }
}

function klocka(xpos, ypos, diameterStor, diameterLiten, angle, angleTwo) {
  push();
  translate(xpos, ypos);

  fill(255);
  stroke(0, 255, 0);
  strokeWeight(2);
  ellipse(0, 0, diameterStor, diameterStor);

  fill(0);
  noStroke();
  ellipse(0, 0, diameterLiten, diameterLiten);

  rotate(angle);
  stroke(0);
  strokeWeight(2);
  line(0, 0, 0, 20);

  rotate(angleTwo);
  stroke(0);
  strokeWeight(3);
  line(0, 0, 0, 15);
  pop();
}

function mousePressed() {
  isPressed = !isPressed;
}
