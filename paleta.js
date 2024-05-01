class Paleta {
    constructor(imagen_) {
        this.imagen = imagen_;
    }

    show(x_, y_) {
        image(this.imagen, x_, y_);
    }

    darColor() {
        let x = int(random(this.imagen.width));
        let y = int(random(this.imagen.height));

        return this.imagen.get(x, y);
    }
}