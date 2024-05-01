class Figura {
  constructor(y, rad, rot, col, cant) {
    // creo constructor
    this.y = y;
    this.rad = rad; // Radio
    this.rot = rot; // Rotacion
    this.col = col; // Array de colores sacado de clase Paleta
    this.cant = cant;
    // tipo de arco
    this.tipo = random() < 0.5 ? "circulo" : "semicirculo";
    // this.cantFiguras = int(random(7) + 1);
    console.log(this.cantFiguras);
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
      for (let i = 0; i < this.cant; i++) {
        fill(this.col[i]); // color sacado de la clase Paleta
        let radius = this.rad * (1 - i * 0.1); // radio menor para cada círculo
        arc(this.y, 0, radius, radius, 0, TWO_PI, PIE, 100); //circulo  


        // Misma figura pero con textura 
        push();
        blendMode(SCREEN);
        tint(255, 200);
        texture(texturaFigura);
        arc(this.y, 0, radius, radius, 0, TWO_PI, PIE, 100); //circulo

        pop();
      }
    } else {
      // si dibuja semicirculo "PI"
      for (let i = 0; i < this.cant; i++) {
        let rSeed = random(0.5);
        fill(this.col[i]); // Color sacado de la clase Paleta
        let radius = this.rad * (1 - i * 0.3); // radio menor para cada semicírculo
        arc(this.y, 0, radius, radius, 0, PI, OPEN, 100); // Semicirculo

        // Misma figura pero con textura 
        push();
        blendMode(SCREEN);
        tint(255, 200);
        texture(texturaFigura);
        arc(this.y, 0, radius, radius, 0, PI, OPEN, 100); // Semicirculo

        pop();
      }
    }
    pop();
  }
}