function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);
    noLoop();
  }
  
  function draw() {
    // put drawing code here

    background(random(255), random(255), random(255));
    line(random(windowWidth), random(windowHeight), random(windowWidth), random(windowHeight));
  }
  
  