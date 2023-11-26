function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);
    frameRate(12);
  }
  
  function draw() {
    // put drawing code here
    background(0);
    var lineY =random(height);

    for (var i = 0; i < 10; i++) {
      strokeWeight(random(200));
      stroke(random(200), random(50, 100));
      line(0, lineY, width, lineY);
    }
  }
  
  function mousePressed() {
    noLoop();
  }

function mouseReleased() {
    loop();
  }
  