let textura;
let figuras = [];
let indiceFiguras = 0;
let maxFiguras = 25;
let cantFiguras = 0;
let bandera = false;

function setup() {
  createCanvas(windowHeight / 1.5, windowHeight - 50);
}

function draw() {
  background(200);
  noStroke();

  for (let i = 0; i < figuras.length; i++) {
    figuras[i].show();
  }

  push();
  blendMode(MULTIPLY);
  tint(255, 100);
  image(textura, 0, 0);
  pop();
}

function mouseClicked() {
  if (!bandera) {
    bandera = true;
  }

  if (indiceFiguras < maxFiguras) {
    let posY = random((-height / 2) + 80, (height / 2) - 80);
    let radio = random(20, 200);
    let rotacion = Math.round(random());;
    let esEntero = Math.round(random());;
    figuras[indiceFiguras] = new Figura(posY, radio, rotacion, esEntero);
    indiceFiguras++;
  }

}