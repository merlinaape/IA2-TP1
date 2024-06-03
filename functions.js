function preload() {
  // Carga las imágenes antes de iniciar el programa
  textura = loadImage("img/textures/canvas_texture.jpg"); // Textura de fondo
  texturaFigura = loadImage("img/textures/tex.jpg"); // Textura de figura
  imgPaleta = loadImage("img/sonia3.jpeg"); // Imagen de referencia para la paleta de colores
}

function windowResized() {
  resizeCanvas(windowHeight / 1.5, windowHeight); // Ajusta el tamaño del lienzo cuando se redimensiona la ventana
}

function mouseClicked() {
  if (indiceFiguras < maxFiguras) {
    // Verifica si el número de figuras es menor al máximo permitido
    if (figuraActual) {
      fijarFiguraActual();
    } else {
      let posY = random(-height / 2 + 90, height / 2 - 90);
      let rotacion = Math.round(random());
      let colorFigura = [];
      let cantFiguras = int(random(6) + 2);
      //si la posicion de x es centrada o no segun la cantidad de figuras
      let posX;

      if (indiceFiguras > 5) {
        posX = random(width / 2 + 500, width - 500);
      } else {
        posX = random(-width / 2, width / 2);
      }

      // color de figura
      for (let i = 0; i < cantFiguras; i++) {
        colorFigura.push(paleta.darColor());
      }

      figuraActual = new Figura(
        posX,
        posY,
        radInicial,
        rotacion,
        colorFigura,
        cantFiguras
      );
      figuraActual.estado = "creciente";
    }
  }
}

function fijarFiguraActual() {
  figuraActual.estado = "fijo";
  figuras.push(figuraActual);
  figuraActual = null;
  indiceFiguras++;

  console.log(indiceFiguras);
}

// Desactiva el clic derecho
function rightClick() {
  document.oncontextmenu = function () {
    return false;
  };
}
