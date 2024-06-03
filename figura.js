class Figura {
  constructor(x, y, rad, rot, col, cant) {
    this.x = x;
    this.y = y; // Posición Y de la figura
    this.radio = Figura.count < 5 ? 200 : 50; // Radio inicial de la figura
    this.rot = rot; // Rotación de la figura (0 o 1)
    this.col = col; // Array de colores para la figura
    this.cant = cant; // Cantidad de subfiguras que componen la figura
    this.tipo = ""; // Tipo de figura (se establecerá en el método init())
    this.estado = "fijo"; // Estado inicial de la figura
    this.rotacionSeleccionada = Math.random() < 0.5 ? 90 : 270;
    this.init();
  }

  init() {
    if (Figura.count < 5) {
      this.tipo = "tres";
      Figura.count++;
    } else {
      this.tipo = this.obtenerTipoAleatorio();
    }
  }

  obtenerTipoAleatorio() {
    const tiposDisponibles = [
      "tres",
      "circulo",
      "semicirculo",
      "ovalo",
      "semiovalo",
    ];
    return tiposDisponibles[
      Math.floor(Math.random() * tiposDisponibles.length)
    ];
  }

  static count = 0;

  show() {
    push();

    // Aplica la rotación a la figura
    rotate(radians(this.rotacionSeleccionada)); // Aplica la rotación seleccionada

    // Si la figura está en estado creciente, incrementa el radio
    if (this.estado === "creciente") {
      this.radio += 3; // Ajusta el incremento (2) para aumentar la velocidad de crecimiento
    }

    // Dibuja la figura
    if (this.tipo === "circulo") {
      // Si es un círculo
      this.dibujarCirculo();
    } else if (this.tipo === "semicirculo") {
      // Si es un semicírculo
      this.dibujarSemicirculo();
    } else if (this.tipo === "tres") {
      this.dibujarTres();
    } else if (this.tipo == "ovalo") {
      this.dibujarOvalo();
    } else if (this.tipo == "semiovalo") {
      this.dibujarOvalo();
    }
    pop();
  }

  dibujarCirculo() {
    for (let i = 0; i < this.cant; i++) {
      fill(this.col[i]); // Asigna el color
      let radius = this.radio * ((this.cant / (i + 3)) * 0.8); // Calcula el radio del subcírculo
      arc(this.y, 0, radius, radius, 0, TWO_PI, PIE, 70); // Dibuja el subcírculo

      // Dibuja el subcírculo con textura
      push();
      tint(255, 30); // Aplica transparencia
      texture(texturaFigura); // Asigna la textura
      arc(this.y, 0, radius, radius, 0, TWO_PI, PIE, 70); // Dibuja el subcírculo con textura
      pop();
    }
  }

  dibujarSemicirculo() {
    for (let i = 0; i < this.cant; i++) {
      fill(this.col[i]); // Asigna el color
      let radius = this.radio * ((this.cant / (i + 5)) * 0.6); // Calcula el radio del subsemicírculo
      arc(this.y, 0, radius, radius, 0, PI, OPEN, 70); // Dibuja el subsemicírculo

      // Dibuja el subsemicírculo con textura
      push();
      tint(255, 30); // Aplica transparencia
      texture(texturaFigura); // Asigna la textura
      arc(this.y, 0, radius, radius, 0, PI, OPEN, 70); // Dibuja el subsemicírculo con textura
      pop();
    }
  }

  dibujarOvalo() {
    for (let i = 0; i < this.cant; i++) {
      fill(this.col[i]); // Asigna el color
      let radiusX = this.radio * ((this.cant / (i + 3)) * 0.8); // Calcula el radio en el eje X
      let radiusY = radiusX * 0.8; // Calcula el radio en el eje Y para hacer la elipse más ovalada
      arc(this.y, 100, radiusX, radiusY, 0, TWO_PI, PIE, 70); // Dibuja la elipse

      // Dibuja la elipse con textura
      push();
      tint(255, 30); // Aplica transparencia
      texture(texturaFigura); // Asigna la textura
      arc(this.y, 100, radiusX, radiusY, 0, TWO_PI, PIE, 70); // Dibuja la elipse con textura
      pop();
    }
  }
  dibujarSemiOvalo() {
    for (let i = 0; i < this.cant; i++) {
      fill(this.col[i]); // Asigna el color
      let radiusX = this.radio * ((this.cant / (i + 5)) * 0.6); // Calcula el radio en el eje X
      let radiusY = radiusX * 0.1; // Calcula el radio en el eje Y para hacer la elipse más ovalada

      arc(this.y, 0, radiusX, radiusY, 0, PI, OPEN, 70); // Dibuja el subsemiovalo

      // Dibuja el subsemiovalo con textura
      push();
      tint(255, 30); // Aplica transparencia
      texture(texturaFigura); // Asigna la textura
      arc(this.y, 0, radiusX, radiusY, 0, PI, OPEN, 70); // Dibuja el subsemiovalo con textura
      pop();
    }
  }

  dibujarTres() {
    // Repite el dibujo de círculos 3 veces
    for (let i = 0; i < 3; i++) {
      fill(this.col[i]); // Asigna el color
      // Posición Y aleatoria
      let radius = this.radio * ((this.cant / (i + 5)) * 0.8); // Calcula el radio del subcírculo
      arc(this.y - 300, 0, radius, radius, 0, TWO_PI, PIE, 70); // Dibuja el subcírculo
      arc(this.y, 0, radius, radius, 0, TWO_PI, PIE, 70); // Dibuja el subcírculo
      arc(this.y + 300, 0, radius, radius, 0, TWO_PI, PIE, 70); // Dibuja el subcírculo

      push();
      tint(255, 30); // Aplica transparencia
      texture(texturaFigura); // Asigna la textura
      arc(this.y - 300, 0, radius, radius, 0, TWO_PI, PIE, 70); // Dibuja el subcírculo
      arc(this.y, 0, radius, radius, 0, TWO_PI, PIE, 70); // Dibuja el subcírculo
      arc(this.y + 300, 0, radius, radius, 0, TWO_PI, PIE, 70); // Dibuja el subcírculo
      pop();
    }
  }
}
