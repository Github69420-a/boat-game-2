class Boat {
    constructor(x, y, width, height) {
        
        this.body = Bodies.rectangle(x, y, width, height);
        this.w = width;
        this.h = height;
        World.add(world, this.body);
        this.image = loadImage("assets/boatMain.png");
    }

    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        //var index = floor(this.speed % this.animation.length);

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0, this.w, this.h);
        pop();
    }
}