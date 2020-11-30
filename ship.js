

function Ship() {
  this.x = width / 2;
  this.xdir = 0;

  this.show = function() {
    fill(0,255,0);
    imageMode(CENTER);
    image(hellokitty, this.x, height - 100, 200,200);
  };

  this.setDir = function(dir) {
    this.xdir = dir;
  };

  this.move = function(dir) {
    this.x += this.xdir * 5;
  };
}

