function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    // put drawing code here
    background(0);
    var lineY =random(height);

    strokeWeight(random(200));
    stroke(random(0), random(150), random(255));
    line(0, lineY, width, lineY);
  }
  
  