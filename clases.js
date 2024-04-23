class Figura {
    constructor(y) {
        this.y = y;
    }

    show() {
        push();

        translate(width / 2, height / 2)
        fill(200, 100, 0);

        rotate(radians(90));
        arc(this.y, 0, 180, 180, 0, PI);
        fill(100, 200, 0);
        arc(this.y, 0, 140, 140, 0, PI);
        fill(100, 0, 100);
        arc(this.y, 0, 100, 100, 0, PI);

        pop();

    }
}