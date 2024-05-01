class Figura {
  constructor(y, rad, rot, ent, col) {
    // creo constructor
    this.y = y;
    this.rad = rad;
    this.rot = rot;
    this.ent = ent;
    this.col = col;
    // tipo de arco
    this.tipo = random() < 0.5 ? "circulo" : "semicirculo";

    // colores arcos random entre unos tonos
    // this.colors = [];
    // for (let i = 0; i < 3; i++) {
    //   this.colors.push(color(random(150, 255), random(10, 255), random(150, 255)));
    // }
  }

  show() {
    push();

    translate(width / 2, height / 2); // division central de lienzo 

    // rotaciones
    if (this.rot == 0) {
      rotate(radians(90)); // derecha
    } else {
      rotate(radians(270)); // izquierda
    }

    // creo figuras
    // fill(this.colors); // color
    if (this.tipo === "circulo") {
      // si dibuja circulo "TWO_PI"
      for (let i = 0; i < 3; i++) {
        // for (let i = 0; i < 3; i++) {
          fill(this.col[i]); //color aleatorio a cada arco
        // }
          let radius = this.rad * (1 - i * 0.1); // radio menor para cada círculo
          arc(this.y, 0, radius, radius, 0, TWO_PI); //circulo
      }
    } else {
      // si dibuja semicirculo "PI"
      for (let i = 0; i < 3; i++) {
        fill(this.col[i]); // color aleatorio a cada arco 
        let radius = this.rad * (1 - i * 0.8); // radio menor para cada semicírculo
        arc(this.y, 0, radius, radius, 0, PI); //semicirculo
      }
    }

    pop();
  }
}