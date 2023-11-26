function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);
    frameRate(12);
  }
  
  function draw() {
    // put drawing code here
    background(0);
    var lineX =random(width);

    for (var i = 0; i < 10; i++) {
      strokeWeight(random(200));
      stroke(random(200), random(50, 100));
      line(lineX, 0, lineX, height);
    }
  }
  
  function mousePressed() {
    noLoop();
  }

function mouseReleased() {
    loop();
  }
  