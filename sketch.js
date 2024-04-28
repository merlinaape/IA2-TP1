let textura;
let figuras = [];
let indiceFiguras = 0;
let maxFiguras = 30; // cantidad max de figuras
let cantFiguras = 0;
let bandera = false; //detecta mouse
let figuraActual = null; // Figura actual

function setup() {
  createCanvas(windowHeight / 1.5, windowHeight - 50);
}

function draw() {
  background(200);
  noStroke();

  for (let i = 0; i < figuras.length; i++) {
    //leer array
    figuras[i].show(); //mostrar las figuras
  }
  if (figuraActual) {
    figuraActual.show(); // mostrar figura actual en proceso
  }

  push();
  blendMode(MULTIPLY); //modo de fusion lienzo y figuras
  tint(255, 100); // color de lienzo
  image(textura, 0, 0); //imagen lienzo
  pop();
}

function mousePressed() {
  if (!bandera) {
    // si se detecta mouse en lienzo
    bandera = true;
  }

  if (indiceFiguras < maxFiguras) {
    // si la figura es menor al total de las posibilidades
    let posY = random(-height / 2 + 90, height / 2 - 90); // se dibujan en la mitad de la pantalla
    let radio = 0; // radio inicial
    let rotacion = Math.round(random());
    let esEntero = 0;
    figuraActual = new Figura(posY, radio, rotacion, esEntero); // crea una nueva figura
    indiceFiguras++;
  }
}

function mouseDragged() {
  if (figuraActual) {
    let nuevoRadio = dist(mouseX, mouseY, figuraActual.y, width / 2);
    // tamaño de figura según la cantidad de figuras
    if (cantFiguras < 10) {
      figuraActual.rad = constrain(nuevoRadio, 550, 700); // grandes
    } else if (cantFiguras >= 10 && cantFiguras < 25) {
      figuraActual.rad = constrain(nuevoRadio, 350, 540); // medianas
    } else if (cantFiguras >= 25) {
      figuraActual.rad = constrain(nuevoRadio, 50, 340); // pequeñas
    }
  }
}

function mouseReleased() {
  //si suelta el mouse
  if (figuraActual) {
    // añade la figura actual al arreglo y la fija
    figuras.push(figuraActual);
    figuraActual = null; // reinicia la figura actual
    cantFiguras++;
  }
}
