function setup() {
  createCanvas(400, 400);
  
  NUM_ROWS = 10;
  NUM_COLS = 10;
  D = 400 / NUM_COLS; // diameter
  
  D = 400 / NUM_COLS;
  
  for (var i = 0; i < NUM_ROWS; i++) {
    for (var j = 0; j  < NUM_COLS; j++) {
      let xPos = j*D + (D/2);
      let yPos = i*D + D/2;
      
      fill(0,80, 255);
      
      circle(xPos, yPos, D);
      
    }
  }
}

function draw() {
  
}
