// lee cyborg 2025
// Creative Commons Share-alike with credit, non commercial 

// A few global variables so you can move around your moire pattern
let angle = 0;
let xPos = 0;
let yPos = 0;

function setup() {
    // Create canvas using SVG save 
    createCanvas(400, 400, SVG);
    background(255, 255, 255);
    angleMode(DEGREES); // Set angles to degrees
}

function draw() {
background(255); // Always draw a background 
// Sample drawing circles 
// params are: number of circles, stroke thickness, space between, location. 
// makeCircles(100, 4, 20, width/4, height/4);
// makeCircles(100, 4, 20, 100, 150);

// Sample drawing lines 
// params are:stroke thickness, space between, rotation angle and location. 
makeLines(4, 10, angle, xPos, yPos);
makeLines(10, 20, 100, 0, height/2);
// makeLines(10, 20, 10, xPos, yPos);

// Sample drawing grids 
// params are:stroke thickness, space between, rotation angle and location. 
// makeGrid(10, 5, 0, 0, 0);
// makeGrid(10, 3, 19, 0, 0);

// Sample drawing dots 
// params are: dot size, space between, rotation angle and location. 
// makeDots(10,4,0, 0, 0);
// makeDots(10,4,14, 0, 0);

}
function makeLines(thickness, padding, degrees, xPos, yPos){
    push();
    rotate(degrees);
    translate(xPos,yPos);
        for (var x = 0; x < width; x += padding) {
            strokeWeight(thickness);
            line(x, 0, x, height);
        }
    pop();
}

function makeDots(size, padding, degrees,xPos,yPos){
    push();
    rotate(degrees);
    translate(xPos, yPos);
    for (var x = 0; x < width; x += size + padding) {
        for (var y = 0; y < height; y += size + padding) {
            fill(0);
            ellipse(x, y, size);
        }
    }
    pop();
}
function makeGrid(size, thickness, degrees, xPos, yPos){
    push();
    rotate(degrees);
    translate(xPos, yPos);
    for (var x = 0; x < width; x += size) {
      for (var y = 0; y < height; y += size) {
          stroke(0);
          strokeWeight(thickness);
          line(x, 0, x, height);
          line(0, y, width, y);
      }
    }
    pop();
}

function makeCircles(circles, thickness, padding, x, y){
    push();
    translate(x, y);
    for (var total = 0; total < circles; total = total+1) {
        var diameter = (circles-total) * padding;
        stroke(1);
        strokeWeight(thickness);
        fill(0,0);
        ellipseMode(CENTER);
        ellipse(x,y, diameter, diameter);
    }
    pop();
}

function keyPressed(){
    // Press wasd to move things or vb to change the angle. 
    // Use the global vars at the top and put them in your 
    // function calls: ex makeLines(10, 20, angle, xPos, yPos);
    // will let you move it around so you can view the effect
    // t to export to svg
    if(key === "v"){
    angle++;
    }
    if(key === "b"){
    angle--;
    }
    if(key === "w"){
    yPos++;
    }
    if(key === "a"){
    xPos++;
    }
    if(key === "s"){
    yPos--;
    }
    if(key === "d"){
    yPos++;
    }
    if(key ==="t"){
        save("mySVG.svg"); // give file name
        print("saved svg");
    }
}  