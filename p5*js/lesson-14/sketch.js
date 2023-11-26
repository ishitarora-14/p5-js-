function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB);
  smooth();
}

function draw(){
  noFill();
  strokeWeight(.25);
  stroke(255, 100);

  for (i = 0; i < 200; i+=1) {
    // ellipse(100 + i*4, 100 + i*5, 100+i*4, 100-i);
    ellipse(0 + i*4, 0 + i*5, 300+i*4, 1000-i);
    // ellipse(width/2 + i, height/2-i, 100+i*5, 100-i*5);
  }
}

