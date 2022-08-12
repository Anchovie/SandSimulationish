import {Particle} from './Particle.js';

export class MatterSolidMovable extends Particle {

    constructor(x, y, color) {
        super(x, y, color);
    }

    update() {
        super.update();
        if (this.moved) {
            this.chunk = Chunk.getChunk(this.x*globals.PIXELSIZE, this.y*globals.PIXELSIZE);
            this.chunk.awake();
            this.moved = false;
        }

        //check vertical bounds and stop moving
        if (this.y>= globals.ROWS-1 ) {
            this.y = globals.ROWS-1;
            return false;
        } else if (this.y<=0) {
            this.y = 0;
            return false;
        }
        return true;
    }

}
