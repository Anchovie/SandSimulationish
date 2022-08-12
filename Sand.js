import {MatterSolidMovable} from './MatterSolidMovable.js';

export class Sand extends MatterSolidMovable {

    constructor(x, y, color){
        super(x, y, color);
    }

    update() {
        if (!super.update()) { //false if bounds
            return false;
        }
        if (checkNeighbour(this.x,this.y, globals.S)) {
            if (this.x !== 0 && !checkNeighbour(this.x,this.y, globals.SW)) {
                if (this.x<= 0 ) {
                    this.x = 0;
                    return;
                }
                swapNeighbour(this, globals.SW);
            }else if (this.x < globals.ROWS-1 && !checkNeighbour(this.x,this.y, globals.SE)) {
                if (this.x>= globals.ROWS-1 ) {
                    this.x = globals.ROWS-1;
                    return;
                }
                swapNeighbour(this, globals.SE);
                /*
                globals.mat[globals.ROWS*this.y+this.x] = 0;
                this.x++;
                this.y++;
                globals.mat[globals.ROWS*this.y+this.x] = this;
                */
            } else {
                return;
            }
        } else {
            swapNeighbour(this, globals.S);
            /*
            globals.mat[globals.ROWS*this.y+this.x] = 0;
            this.y++;
            globals.mat[globals.ROWS*this.y+this.x] = this;
            */
        }
        this.moved = true;
        /*

        if (checkNeighbour(this.x,this.y, globals.S)) {
            console.log("Neighbor S");
            //if (!particles[[this.x-1,this.y+1]]) {
            console.log("Check SW",this.x,this.y,globals.mat[globals.ROWS*this.y+this.x]);
            if (this.x !== 0 && !checkNeighbour(this.x,this.y, globals.SW)) {

                if (this.x<= 0 ) {
                    this.x = 0;
                    return;
                }
                mat[ROWS*this.y+this.x] = 0;
                this.x--;
                this.y++;
                mat[ROWS*this.y+this.x] = this;
                console.log(this.x,this.y,mat[ROWS*this.y+this.x]);
                console.log("put SW ^");
                //} else if (!particles[[this.x+1, this.y+1]]) {
            }else if (this.x < ROWS-1 && !checkNeighbour(this.x,this.y, SE)) {
                if (this.x>= ROWS-1 ) {
                    this.x = ROWS-1;
                    return;
                }
                mat[ROWS*this.y+this.x] = 0;
                this.x++;
                this.y++;
                mat[ROWS*this.y+this.x] = this;
                console.log("put SE");
            } else {
                return;
            }
        } else {
            console.log("NO NEIGHBOR");
            mat[ROWS*this.y+this.x] = 0;
            this.y+=DUMBSPEED;
            mat[ROWS*this.y+this.x] = this;
        }
        this.moved = true;*/

    }
}
