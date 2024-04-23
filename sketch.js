let textura;
let figura;
let cantFiguras = 0;

function setup() {
  createCanvas(windowHeight / 1.5, windowHeight - 50);
  figura = new Figura(random(50, height - 50));
}

function draw() {
  background(200);
  noStroke();

  figura.show();

  push();
  blendMode(MULTIPLY);
  tint(255, 100);
  image(textura, 0, 0);
  pop();
}

function mouseClicked() {
  figura = new Figura(random(50, height - 50));
}