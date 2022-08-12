//new p5();
export class Particle {

    constructor(x, y, color) {
        this.x = Math.floor(x/globals.PIXELSIZE); //16 int16
        this.y = Math.floor(y/globals.PIXELSIZE); //16 int16 32
        this.r = globals.PIXELSIZE;                 // 8 uint8
        this.physics = 1;        // 8 uint8
        this.updated = false;       // 1 bool
        this.moved = true;          // 1 bool
        this.lifetime = -1;         // 16 int16 66
        this.chunk = Chunk.getChunk(this.x*globals.PIXELSIZE, this.y*globals.PIXELSIZE); //? uint16
        this.chunk.awake();
        this.color = color;
        //console.log("found chunk ",this.chunk);
        //console.log("Should update = " + this.chunk.shouldUpdate);
        //if (type == SMOKE) {
        //    this.lifetime = 60;
        //}
    }

    update() {
        if (!this.chunk.shouldUpdate) {
            return false;
        }
        this.updated = true;
        if (this.lifetime == 0 && !this.destroy) {
            console.log("DESTROYED");
            this.destroy = true;
            this.moved = false;
            delete mat[ROWS*this.y+this.x];
            globals.mat[ROWS*this.y+this.x] = 0;
            delete this;
        }
        if (this.lifetime > 1) {
            this.lifetime--;
        }
        /*
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
        */
        /*
        if (this.physics !== globals.SOLID && !this.destroy) {
            if (this.y>= globals.ROWS-1 ) {
                this.y = globals.ROWS-1;
                return;
            } else if (this.y<=0) {
                this.y = 0;
                return;
            }
            switch(this.physics) {
                case globals.SAND:
                    //if (this.y >= height) break;
                    //if (particles[[this.x,this.y+1]]) {
                    //if (matrix[this.x][this.y+1]) {
                    if (checkNeighbour(this.x,this.y, globals.S)) {
                        console.log("Neighbor S");
                        //if (!particles[[this.x-1,this.y+1]]) {
                        console.log("Check SW",this.x,this.y,globals.mat[globals.ROWS*this.y+this.x]);
                        if (this.x !== 0 && !checkNeighbour(this.x,this.y, globals.SW)) {

                            if (this.x<= 0 ) {
                                this.x = 0;
                                return;
                            }
                            globals.mat[globals.ROWS*this.y+this.x] = 0;
                            this.x--;
                            this.y++;
                            globals.mat[globals.ROWS*this.y+this.x] = this;
                            console.log(this.x,this.y,mat[globals.ROWS*this.y+this.x]);
                            console.log("put SW ^");
                            //} else if (!particles[[this.x+1, this.y+1]]) {
                        }else if (this.x < globals.ROWS-1 && !checkNeighbour(this.x,this.y, globals.SE)) {
                            if (this.x>= globals.ROWS-1 ) {
                                this.x = globals.ROWS-1;
                                return;
                            }
                            globals.mat[globals.ROWS*this.y+this.x] = 0;
                            this.x++;
                            this.y++;
                            globals.mat[globals.ROWS*this.y+this.x] = this;
                            console.log("put SE");
                        } else {
                            return;
                        }
                    } else {
                        globals.mat[globals.ROWS*this.y+this.x] = 0;
                        this.y++;;
                        globals.mat[globals.ROWS*this.y+this.x] = this;
                    }
                    this.moved = true;
                    break;*/
                    /*
                case globals.WATER:
                //if (this.y >= height) break;
                //if (particles[[this.x,this.y+1]]) {
                    if (matrix[this.x][this.y+1]) {
                        //if (!particles[[this.x-1,this.y+1]]) {
                        if (this.x !== 0 && matrix[this.x-1][this.y+1]==0) {
                            if (this.x<= 0 ) {
                                this.x = 0;
                                return;
                            }
                            matrix[this.x][this.y] = 0;
                            this.x--;
                            this.y++;
                            matrix[this.x][this.y] = this;
                            //} else if (!particles[[this.x+1, this.y+1]]) {
                        }else if (this.x < globals.ROWS-1 && matrix[this.x+1][this.y+1]==0) {
                            if (this.x>= globals.ROWS-1 ) {
                                this.x = globals.ROWS-1;
                                return;
                            }
                            matrix[this.x][this.y] = 0;
                            this.x++;
                            this.y++;
                            matrix[this.x][this.y] = this;
                        } else if (this.x !== 0 && matrix[this.x-1][this.y]==0) {
                            matrix[this.x][this.y] = 0;
                            this.x--;
                            matrix[this.x][this.y] = this;
                        } else if (this.x < ROWS-1 && matrix[this.x+1][this.y]==0) {
                            matrix[this.x][this.y] = 0;
                            this.x++;
                            matrix[this.x][this.y] = this;
                        } else {
                            return;
                        }
                    } else {
                        matrix[this.x][this.y] = 0;
                        this.y++;;
                        matrix[this.x][this.y] = this;
                    }
                    break;
                case globals.SMOKE:
                //if (this.y >= height) break;
                //if (particles[[this.x,this.y+1]]) {
                if (matrix[this.x][this.y-1]) {
                    //if (!particles[[this.x-1,this.y+1]]) {
                    if (this.x !== 0 && matrix[this.x-1][this.y-1]==0) {
                        if (this.x<= 0 ) {
                            this.x = 0;
                            return;
                        }
                        matrix[this.x][this.y] = 0;
                        this.x--;
                        this.y--;
                        matrix[this.x][this.y] = this;
                        //} else if (!particles[[this.x+1, this.y+1]]) {
                    }else if (this.x < globals.ROWS-1 && matrix[this.x+1][this.y-1]==0) {
                        if (this.x>= globals.ROWS-1 ) {
                            this.x = globals.ROWS-1;
                            return;
                        }
                        matrix[this.x][this.y] = 0;
                        this.x++;
                        this.y--;
                        matrix[this.x][this.y] = this;
                    }
                } else {
                    matrix[this.x][this.y] = 0;
                    this.y--;
                    matrix[this.x][this.y] = this;
                }
                break;*//*
                case globals.SOLID:
                break;
                default:
                break;
            }
        }*/
        return true;
    }

    draw(p5) {
        if (this.destroy)
        return;
        /*
        switch(this.physics) {
            case SAND:
            stroke(255,230,100);
            fill(255,230,100);
            break;
            case WATER:
            stroke(50,70,230);
            fill(50,70,230);
            break;
            case SMOKE:
            stroke(235,210,226);
            fill(235,210,226);
            break;
            case SOLID:
            stroke(255,255,255);
            fill(255,255,255);
            break;
            default:
            stroke(200,100,100);
            break;
        }*/
        //this.color = p5.color(100,100,50);
        p5.stroke(this.color);
        p5.fill(this.color);
        p5.rectMode(p5.CORNER);
        p5.rect(this.x*globals.PIXELSIZE, this.y*globals.PIXELSIZE, globals.PIXELSIZE,globals.PIXELSIZE);
        p5.strokeWeight(1);
        p5.noFill();
        //text("moved = " + this.moved, this.x*PIXELSIZE+4, this.y*PIXELSIZE);
        if(globals.DRAWCHUNKS && this.moved) {
            this.chunk.draw(p5);
        }
    }
}
/*
function checkNeighbour(x,y,which) {
    switch(which){
        case globals.S:
            if (globals.mat[globals.ROWS*(y+1)+x]!==0) {
                return true;
            } else return false;
        case globals.SE:
            if (globals.mat[globals.ROWS*(y+1)+(x+1)]!==0) {
                return true;
            } else return false;
        case globals.SW:
            if (globals.mat[globals.ROWS*(y+1)+(x-1)]!==0) {
                return true;
            } else return false;
        case globals.SE:
            if (globals.mat[globals.ROWS*y+x+1]!==0) {
                return true;
            } else return false;
        case globals.SW:
            if (globals.mat[globals.ROWS*Y+x-1]!==0) {
                return true;
            } else return false;
        case NE:
            if (matrix[x+1][y-1]) {
                return true;
            } else return false;
        case NW:
            if (matrix[x-1][y-1]) {
                return true;
            } else return false;
        case N:
            if (matrix[x][y-1]) {
                return true;
            } else return false;
        default:
            return false;
    }
}
*/
