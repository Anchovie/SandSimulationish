import {Particle} from './Particle.js';
import {Sand} from './Sand.js';
const s = ( p5 ) => {
console.log("mainjs");


// python -m http.server
/*
var E = 1;
var SE = 2;
var S = 3;
var SW = 4;
var W = 5;
var NW = 6;
var N = 7;
var NE = 8;

//block ids
var SAND = 1;
var WATER = 2;
var SMOKE = 3;
var FIRE = 4;

var SOLID = 0;

var ROWS = 100;
var PIXELSIZE;
var CHUNKSIZE = 32;
var DRAWCHUNKS = true;
*/
var numParticles = 0;

var DUMBSPEED = 1;
var selectedType = 1;
var selectedName = "Sand";

//var matrix = [];
//var chunks = [];
//var particles = {};
//var mat;



p5.preload = function() {
    //sprites = loadImage('assets/spritesheet2.png');
}


p5.setup = function() {
    console.log("SETUP");
    p5.createCanvas(640, 640);
    globals.PIXELSIZE = p5.height/globals.ROWS;
    console.log("Chunksize = "+ globals.CHUNKSIZE);
    console.log("PIXELSIZE = "+ globals.PIXELSIZE);
    createChunks();

    globals.mat = new Array(globals.ROWS*globals.ROWS).fill(0);
    console.log(globals.mat);
    console.log(globals.mat[1]);
    p5.frameRate(60);
    p5.rectMode(p5.CENTER);
    p5.ellipseMode(p5.CENTER);
}

p5.draw = function (){
    p5.background(50);
    p5.drawWorld();
    p5.updateWorld();

}

p5.updateWorld = function() {

    for (let i=0; i<p5.height/globals.CHUNKSIZE; i++) {
        for (let j=0; j<p5.width/globals.CHUNKSIZE; j++) {
            if (globals.chunks[i][j]) {
                globals.chunks[i][j].update();
            }
        }
    }

    for (let i=globals.ROWS*globals.ROWS-1; i>0; i--) {
        if (globals.mat[i] !==0 && globals.mat[i].updated == false) {
            globals.mat[i].draw(p5);
            globals.mat[i].update();
        }
    }
    for (let i=globals.ROWS*globals.ROWS-1; i>0; i--) {
        if (globals.mat[i] !==0 && globals.mat[i].updated == true) {
            globals.mat[i].updated = false;
        }
    }

}

p5.drawWorld = function(){
    p5.strokeWeight(1);
    p5.stroke(255,0,0);
    p5.fill(255,0,0);
    p5.text(selectedType + "= " + selectedName, 10, 15);
    p5.text("FPS: " + p5.floor(p5.frameRate()), 400, 15);
    p5.text("PARTICLES: " + numParticles, 460, 15);

}

function createChunks() {
    let numChunksX = p5.width/globals.CHUNKSIZE;
    let numChunksY = p5.height/globals.CHUNKSIZE;
    globals.chunks = [];
    for (let i=0; i<numChunksY; i++) {
        globals.chunks[i] = [];
        for (let j=0; j<numChunksX; j++) {
            globals.chunks[i][j] = new Chunk(i*globals.CHUNKSIZE, j*globals.CHUNKSIZE);
        }
    }
}


p5.keyPressed = function() {
    if (p5.keyCode === 48) {
        selectedType = 0;
        selectedName = "Solid";
    }
    if (p5.keyCode == 49) {
        selectedType = 1;
        selectedName = "Sand";
    }
    if (p5.keyCode === 50) {
        selectedType = 2;
        selectedName = "Water";
    }
    if (p5.keyCode === 51) {
        selectedType = 3;
        selectedName = "Smoke";
    }
    if (p5.keyCode === 32) {
    }

}

p5.mousePressed = function() {
    let p = new Sand(p5.mouseX,p5.mouseY,p5.color(255,230,100));
    //let p = new Particle(p5.mouseX,p5.mouseY,globals.PIXELSIZE, selectedType);
    //particles[[mouseX,mouseY]] = p;
    //matrix[p.y][p.x] = p;
    globals.mat[globals.ROWS*p.y+p.x] = p;
    numParticles++;
    //console.log(floor(mouseX/20),floor(mouseY/20));
    //console.log(matrix);
}

p5.mouseDragged = function() {
    let p = new Sand(p5.mouseX,p5.mouseY,p5.color(255,230,100));
    //let p = new Particle(p5.mouseX,p5.mouseY,globals.PIXELSIZE, selectedType);
    //particles[[mouseX,mouseY]] = p;
    //matrix[p.y][p.x] = p;
    globals.mat[globals.ROWS*p.y+p.x] = p;
    numParticles++;
}
};

let myp5 = new p5(s);
