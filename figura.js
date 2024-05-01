class Figura {
  constructor(y, rad, rot, col) {
    // creo constructor
    this.y = y;
    this.rad = rad; // Radio
    this.rot = rot; // Rotacion
    this.col = col; // Array de colores sacado de clase Paleta
    // tipo de arco
    this.tipo = random() < 0.5 ? "circulo" : "semicirculo";
  }

  show() {
    push();

    // translate(width / 2, height / 2); // division central de lienzo 

    // rotaciones
    if (this.rot == 0) {
      rotate(radians(90)); // derecha
    } else {
      rotate(radians(270)); // izquierda
    }

    // creo figuras
    if (this.tipo === "circulo") {
      // si dibuja circulo "TWO_PI"
      for (let i = 0; i < 3; i++) {
        fill(this.col[i]); // color sacado de la clase Paleta
        let radius = this.rad * (1 - i * 0.1); // radio menor para cada círculo
        arc(this.y, 0, radius, radius, 0, TWO_PI, PIE, 100); //circulo
      }
    } else {
      // si dibuja semicirculo "PI"
      for (let i = 0; i < 3; i++) {
        fill(this.col[i]); //color sacado de la clase Paleta
        let radius = this.rad * (1 - i * 0.8); // radio menor para cada semicírculo
        arc(this.y, 0, radius, radius, 0, PI, OPEN, 100); //semicirculo
      }
    }
    pop();
  }
}