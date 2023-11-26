function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);
    background(0);
  }
  
  function draw() {
    // put drawing code here

    stroke(random(255));
    line(width/2, height/2, random(width), random(height));
  }
  
  