var cnv;
let slider;
let rs = [];
let done = false;
function setup() {
  cnv = createCanvas(windowWidth-100, windowHeight-100);
  cnv.position((windowWidth-width)/2, (windowHeight-height)/2);
  slider = createSlider(0, 200, 10, 0.01);
  slider.position(width/2, 10);
}

function draw() {
  background(0);
  rect(0, 0, width, height);
  translate(width/2, height/2);
  strokeWeight(2);
  stroke(255);
  noFill();
  rs = [];
  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.01) {
    let xoff = map(cos(a), -1, 1, 0, slider.value());
    let yoff = map(sin(a), -1, 1, 0, slider.value());
    let r = map(noise(xoff, yoff), 0, 1, width/4, height/4);
    rs.push(r);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
  done = true;
  
  translate(-width/2, 100);
  let xoff = 0;
  // text(rs.length, 0, 0);
  beginShape();
  for (let i = 0; i < rs.length; i++) {
    vertex(xoff, rs[i]);
    xoff += width/rs.length;
  }
  endShape();
}
