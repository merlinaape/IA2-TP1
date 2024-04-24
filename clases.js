class Figura {
    constructor(y, rad, rot, ent) {
        this.y = y;
        this.rad = rad;
        this.rot = rot;
        this.ent = ent;
    }

    show() {
        push();

        translate(width / 2, height / 2)
        
        if(this.rot == 0 ){
            rotate(radians(90));
        }else{
            rotate(radians(270));
        }
        
        if(this.ent == 0){
            
            fill(200, 100, 0);
            arc(this.y, 0, this.rad, this.rad, 0, PI);
            fill(100, 200, 0);
            arc(this.y, 0, this.rad / 1.2, this.rad / 1.2, 0, PI);
            fill(100, 0, 100);
            arc(this.y, 0, this.rad / 1.7, this.rad / 1.7, 0, PI);
        }else{
            fill(200, 0, 0);
            circle(this.y, 0, this.rad);
        }

        pop();
        console.log(this.rot);
    }
}