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
        case globals.NE:
            if (globals.mat[globals.ROWS*(y-1)+x+1]) {
                return true;
            } else return false;
        case globals.NW:
            if (globals.mat[globals.ROWS*(y-1)+x-1]) {
                return true;
            } else return false;
        case globals.N:
            if (globals.mat[globals.ROWS*(y-1)+x]) {
                return true;
            } else return false;
        default:
            return false;
    }
}

function swapNeighbour(p, which) {
    let t = globals.mat[globals.ROWS*p.y+p.x];
    switch(which){
        case globals.S:
            globals.mat[globals.ROWS*p.y+p.x] = globals.mat[globals.ROWS*(p.y+1)+p.x];
            p.y++;
            break;
        case globals.SE:
            globals.mat[globals.ROWS*p.y+p.x] = globals.mat[globals.ROWS*(p.y+1)+(p.x+1)];
            p.y++;
            p.x++;
            break;
        case globals.SW:
            globals.mat[globals.ROWS*p.y+p.x] = globals.mat[globals.ROWS*(p.y+1)+(p.x-1)];
            p.y++;
            p.x--;
            break;
        case globals.E:
            globals.mat[globals.ROWS*p.y+p.x] = globals.mat[globals.ROWS*(p.y)+(p.x+1)];
            p.x++;
            break;
        case globals.W:
            globals.mat[globals.ROWS*p.y+p.x] = globals.mat[globals.ROWS*(p.y)+(p.x-1)];
            p.x--;
            break;
        case globals.NE:
            globals.mat[globals.ROWS*p.y+p.x] = globals.mat[globals.ROWS*(p.y-1)+(p.x+1)];
            p.y--;
            p.x++;
            break;
        case globals.NW:
            globals.mat[globals.ROWS*p.y+p.x] = globals.mat[globals.ROWS*(p.y-1)+(p.x-1)];
            p.y--;
            p.x--;
            break;
        case globals.N:
            globals.mat[globals.ROWS*p.y+p.x] = globals.mat[globals.ROWS*(p.y-1)+(p.x)];
            p.y--;
            break;
        default:
            return false;
    }
    globals.mat[globals.ROWS*p.y+p.x] = p;
}
