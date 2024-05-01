function preload() {
  textura = loadImage("img/canvas_texture.jpg");
  imgPaleta = loadImage("img/sonia1.jpg");
}

function windowResized() {
  resizeCanvas(windowHeight / 1.5, windowHeight - 50);
}
