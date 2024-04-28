class Figura {
  constructor(y, rad, rot, ent) {
    // creo contructor
    this.y = y;
    this.rad = rad;
    this.rot = rot;
    this.ent = ent;

    // colores varian
    this.hue = random([0, 96, 360]);
    this.saturation = map(this.rad, 50, 700, 10, 100);
    this.brightness = random(10, 50);

    // tipo de arco
    this.tipo = random() < 0.5 ? "circulo" : "semicirculo";

    //DESCOMENTA CON CTR + K + C en windows
    // this.conBorde = random() < 0.5; // random si tiene borde o no
    // if (this.conBorde) {
    //   // si tiene borde, define color
    //   this.bordeHue = (this.hue + 180) % 360;
    //   this.bordeSaturation = this.saturation;
    //   this.bordeBrightness = this.brightness + random(0, 20);
    // }
  }

  show() {
    push();

    translate(width / 2, height / 2); // division de pantalla
    //blendMode(HARD_LIGHT); //modo de fusion lienzo y figuras

    //rotaciones
    if (this.rot == 0) {
      rotate(radians(90)); //derecha
    } else {
      rotate(radians(270)); //izquierda
    }

    // // borde
    // if (this.conBorde) {
    //   // tiene borde
    //   stroke(this.bordeHue, this.bordeSaturation, this.bordeBrightness);
    //   strokeWeight(10);
    // } else {
    //   noStroke(); //no tiene borde
    // }
    //creo figuras
    fill(this.hue, this.saturation, this.brightness); //color
    if (this.tipo === "circulo") {
      //si dibuja circulo "TWO_PI"
      arc(this.y, 0, this.rad / 1.6, this.rad / 1.6, 0, TWO_PI);
      arc(this.y, 0, this.rad / 1.4, this.rad / 1.4, 0, TWO_PI);
    } else {
      //si dibuja semicirculo "PI"
      arc(0, 0, this.rad, this.rad, 0, PI);
      arc(0, 0, this.rad / 1.2, this.rad / 1.2, 0, PI);
      arc(0, 0, this.rad / 1.7, this.rad / 1.7, 0, PI);
    }
    pop();

    //  console.log(this.rot);
  }
}
