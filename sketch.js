var ship;
var targets = [];
var drops = [];

let kuromi;

function preload() {
 kuromi = loadImage("kuromi.png");
 hellokitty = loadImage("hellokitty.png")
}

function setup() {
  createCanvas(1440,750);
  ship = new Ship();

  for (var i = 0; i < 10; i++) {
   targets[i] = new Target(i * 110 + 100, 80);
  }
}

function draw() {
  background(255);
  ship.show();
  ship.move();

  for (var i = 0; i < drops.length; i++) {
    drops[i].show();
    drops[i].move();
    for (var j = 0; j < targets.length; j++) {
      if (drops[i].hits(targets[j])) {
        targets[j].explode();
        drops[i].evaporate();
      }
    }
  }

  var edge = false;

  for (var i = 0; i < targets.length; i++) {
    targets[i].show();
    targets[i].move();
    if (targets[i].x > width -50 || targets[i].x < 50) {
      edge = true;
    }
  }

  if (edge) {
    for (var i = 0; i < targets.length; i++) {
      targets[i].shiftDown();
    }
  }

  for (var i = drops.length - 1; i >= 0; i--) {
    if (drops[i].toDelete) {
      drops.splice(i, 1);
    }
  }
  
  
  for (var i = targets.length-1; i >=0; i--) {
   if (targets[i].toExplode) {
      targets.splice(i, 1);
   
    }
  }
  
  
}

function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}

function keyPressed() {
  if (key === ' ') {
    var drop = new Drop(ship.x, height-150);
    drops.push(drop);
  }

  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}