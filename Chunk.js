class Chunk {
    constructor(x,y) {
        this.size = globals.CHUNKSIZE;
        this.shouldUpdate = true;
        this.shouldUpdateNextFrame = false;
        this.x = x;
        this.y = y;
    }

    static getChunk(x,y) {
        return globals.chunks[Math.floor(x/globals.CHUNKSIZE)][Math.floor(y/globals.CHUNKSIZE)];
    }

    awake() {
        this.shouldUpdate = true;
        this.shouldUpdateNextFrame = true;
    }

    update() {
        this.shouldUpdate = this.shouldUpdateNextFrame;
        this.shouldUpdateNextFrame = false;
    }

    draw(p5) {
        p5.strokeWeight(1);
        p5.stroke(255,0,0);
        p5.noFill();
        p5.rectMode(p5.CORNER);
        p5.rect(this.x,this.y,this.size, this.size);
        p5.rectMode(p5.CENTER);
        //text(this.x +", " + this.y, this.x, this.y);
    }
}
