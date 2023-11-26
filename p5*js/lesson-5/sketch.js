function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);
    background(0);
  }
  
  function draw() {
    // put drawing code here

    stroke(random(255), random(255), random(200, 255));
    line(0, 0, random(width), random(height));

    stroke(random(255), random(200, 255), random(255));
    line(width, 0, random(width), random(height));

    stroke(0);
    textSize(128);
    text("matrix", width/2-200, height/2);
  }
  
  