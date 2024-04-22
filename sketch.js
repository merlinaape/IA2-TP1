let textura;

function preload() {
  textura = loadImage('img/canvas_texture.jpg');
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(200);
  noStroke();

  push();

  translate(width / 2, height / 2)
  fill(200, 100, 0);

  rotate(radians(90));
  arc(0, 0, 180, 180, 0, PI);
  fill(100, 200, 0);
  arc(0, 0, 140, 140, 0, PI);
  fill(100, 0, 100);
  arc(0, 0, 100, 100, 0, PI);

  pop();

  push();
  blendMode(MULTIPLY);
  tint(255, 100);
  image(textura, 0, 0);
  pop();
}