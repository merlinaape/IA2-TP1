let textura;
let figuras = [];
let indiceFiguras = 0;
let maxFiguras = 30; // cantidad max de figuras
let cantFiguras = 0;
let bandera = false; //detecta mouse
let figuraActual = null; // figura actual
let imgPaleta;
let paleta;

function setup() {
  createCanvas(windowHeight / 1.5, windowHeight - 50);
  paleta = new Paleta(imgPaleta);
}

function draw() {
  background(200);
  noStroke();

  for (let i = 0; i < figuras.length; i++) {//leer array
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

  // paleta.show(0, 0);
}

function mousePressed() {
  if (!bandera) {
    // si se detecta mouse en lienzo
    bandera = true;
  }

  if (indiceFiguras < maxFiguras) {
    // si la figura es menor al total de las posibilidades
    let posY = random(-height / 2 + 90, height / 2 - 90); // no superan margen del lienzo
    let radio = 0; // radio inicial
    let rotacion = Math.round(random());
    let esEntero = 0;
    let colorFigura = [];
    for (let i = 0; i < 3; i++) {
      colorFigura.push(paleta.darColor());
    }
    figuraActual = new Figura(posY, radio, rotacion, esEntero, colorFigura); // crea una nueva figura
    indiceFiguras++; //agrega otra figura
  }
}

function mouseDragged() {
  if (figuraActual) {
    let nuevoRadio = dist(mouseX, mouseY, figuraActual.y, width / 2); // dist del mouse con centro de la fig 
    // tamaño de figura según la cantidad de figuras
    if (cantFiguras < 10) { // grandes menores a 10 fig
      figuraActual.rad = constrain(nuevoRadio, 300, 550); // modif radio c/mouse entre 300 y 550 
    } else if (cantFiguras >= 10 && cantFiguras < 25) { // medianas entre 10 y 25 fig
      figuraActual.rad = constrain(nuevoRadio, 140, 240); //modif radio c/mouse entre 140 y 240 
    } else if (cantFiguras >= 25) { // pequeñas mayores a 25 fig
      figuraActual.rad = constrain(nuevoRadio, 20, 100); //modif radio c/mouse entre 20 y 100 
    }
  }
}

function mouseReleased() {//si suelta el mouse
  if (figuraActual) { // añade la figura actual al arreglo y la fija
    figuras.push(figuraActual);
    figuraActual = null; // reinicia la figura actual
    cantFiguras++; //suma fig a cantidad total
  }
}