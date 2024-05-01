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
    // this.estado = "inicial";
    // console.log(this.cantFiguras);
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

    if(this.estado === "inicial"){
      
    }
    
    // creo figuras
    if (this.tipo === "circulo") {
      // si dibuja circulo "TWO_PI"
      for (let i = 0; i < this.cant; i++) {
        fill(this.col[i]); // color sacado de la clase Paleta
        let radius = this.rad * (this.cant / i * 0.4); // radio menor para cada círculo segun la cantidad de figuras
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
        fill(this.col[i]); // Color sacado de la clase Paleta
        let radius = this.rad * (this.cant / i * 0.5); // radio menor para cada semicírculo segun la cantidad de figuras
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