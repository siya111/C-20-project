
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
}


function draw(){
r = map(mouseX, 200, 80,60,100);
g = map(mouseX, 250, 10,10,50);
b = map(mouseX, 300, 150,120,180);
background(r,g,b);
fill("purple");
ellipse(mouseX, 200, 30, 30); 
fill("black");
textSize(30);
text("GOOD VIBES ONLY !", 500,100);
text("^___^",600,135);
  
}